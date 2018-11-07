import os
import json
import argparse
import requests
from angular_flask.core import db
from angular_flask.models import Post

def insert_entry(api_endpoint, payload):
    url = 'http://localhost:5000/' + api_endpoint
    print url
    r = requests.post(
        url, data=json.dumps(payload),
        headers={'Content-Type': 'application/vnd.api+json',
                 'Accept' : 'application/vnd.api+json'})


def main():
    parser = argparse.ArgumentParser(
        description='Manage this Flask application.')
    parser.add_argument(
        'command', help='the name of the command you want to run')
    args = parser.parse_args()

    print args

    if args.command == 'insert':
        data = json.loads('{"post":[{"data":{"type":"post","attributes":{"body":"Inserted Blog body","title":"Inserted Blog"}}}]}')
        for item_class in data:
            items = data[item_class]
            for item in items:
                insert_entry('api/' + item_class, item)
    else:
        raise Exception('Invalid command')

if __name__ == '__main__':
    main()
