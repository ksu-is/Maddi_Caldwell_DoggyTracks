from datetime import datetime

from angular_flask.core import db
from angular_flask import app


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    body = db.Column(db.Text)
    pub_date = db.Column(db.DateTime)

    def __init__(self, title, body, pub_date=None):
        self.title = title
        self.body = body
        if pub_date is None:
            pub_date = datetime.utcnow()
        self.pub_date = pub_date

    def __repr__(self):
        return '<Post %r>' % self.title

class Puppy(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    breed = db.Column(db.String(80))
    birthday = db.Column(db.DateTime)

    def __init__(self, name, breed, birthday=None):
        self.name = name
        self.breed = breed
        self.birthday = birthday

    def __repr__(self):
        return '<Puppy %r>' % self.name

# models for which we want to create API endpoints
app.config['API_MODELS'] = {'post': Post, 'puppy': Puppy}

# models for which we want to create CRUD-style URL endpoints,
# and pass the routing onto our AngularJS application
app.config['CRUD_URL_MODELS'] = {'post': Post, 'puppy': Puppy}
