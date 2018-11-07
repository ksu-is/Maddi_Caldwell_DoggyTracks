import os
import json
import argparse
import requests
from angular_flask.core import db
from angular_flask.models import Post

def create_sample_db_entry(api_endpoint, payload):
    url = 'http://localhost:5000/' + api_endpoint
    print url
    r = requests.post(
        url, data=json.dumps(payload),
        headers={'Content-Type': 'application/vnd.api+json',
                 'Accept' : 'application/vnd.api+json'})
    print r.text

def create_db():
    db.create_all()


def drop_db():
    db.drop_all()


def test_db():
    url = 'http://localhost:5000/api/post'
    r = requests.get(url,
        headers={'Content-Type': 'application/vnd.api+json',
                 'Accept' : 'application/vnd.api+json'})
    print r.text
    return


def main():
    parser = argparse.ArgumentParser(
        description='Manage this Flask application.')
    parser.add_argument(
        'command', help='the name of the command you want to run')
    parser.add_argument(
        '--seedfile', help='the file with data for seeding the database')
    args = parser.parse_args()

    if args.command == 'create_db':
        create_db()

        print "DB created!"
    elif args.command == 'delete_db':
        drop_db()

        print "DB deleted!"
    elif args.command == 'seed_db' and args.seedfile:
        with open(args.seedfile, 'r') as f:
            seed_data = json.loads(f.read())

        for item_class in seed_data:
            items = seed_data[item_class]
            for item in items:
                create_sample_db_entry('api/' + item_class, item)

        print "\nSample data added to database!"
    elif args.command == 'test':
        test_db()
    else:
        raise Exception('Invalid command')

if __name__ == '__main__':
    main()
