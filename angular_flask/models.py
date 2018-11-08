from datetime import datetime

from angular_flask.core import db
from angular_flask import app

class Dog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    breed = db.Column(db.String(80))
    desc = db.Column(db.String(500))
    birthdate = db.Column(db.String(25))

    def __init__(self, name, breed, desc=None, birthdate=None):
        self.name = name
        self.breed = breed
        self.desc = desc
        if desc is None:
            desc = ''
        self.desc = desc
        if birthdate is None:
            birthdate = datetime.utcnow()
        self.birthdate = birthdate

    def __repr__(self):
        return '<Dog %r>' % self.name

# models for which we want to create API endpoints
app.config['API_MODELS'] = {'dog': Dog}

# models for which we want to create CRUD-style URL endpoints,
# and pass the routing onto our AngularJS application
app.config['CRUD_URL_MODELS'] = {'dog': Dog}
