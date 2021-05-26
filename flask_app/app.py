from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Anioah123@localhost/tarea1'
db = SQLAlchemy(app)
ma = Marshmallow(app)

############################################################


class Example(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True)
    flask = db.Column(db.String(80))

    def __init__(self, username, email, flask):
        self.username = username
        self.email = email
        self.flask = flask

    def __repr__(self):
        return '<Example %r>' % self.username

###########################################################


class laravel_tables(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    descripcion = db.Column(db.String(80))
    numero = db.Column(db.Float())

    def __init__(self, descripcion, numero):
        self.descripcion = descripcion
        self.numero = numero

############################################################


class laravelSchema(ma.Schema):
    class Meta:
        fields = ('descripcion', 'numero')


laravel_schema = laravelSchema()
laravels_schema = laravelSchema(many=True)

############################################################


@app.route('/insertionFlask', methods=['Post'])
def create_example():

    descripcion = request.json['descripcion']
    numero = request.json['numero']

    newLaravel = laravel_tables(descripcion, numero)

    db.session.add(newLaravel)
    db.session.commit()

    return laravel_schema.jsonify(newLaravel)

############################################################


if __name__ == "__main__":

    app.run(debug=True)


############################################################

@app.route('/')
def index():
    return "Hola mundo"
