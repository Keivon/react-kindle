from audioop import cross
from crypt import methods
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://matt:password@localhost/books'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)


class Book(db.Model):
    __tablename__ = 'books'
    id = db.Column(db.Integer, primary_key=True)
    book_title = db.Column(db.String(100), nullable=False)
    book_genre = db.Column(db.String(100), nullable=False)
    book_description = db.Column(db.String(100), nullable=False)

    def __init__(self, book_title, book_genre, book_description):
        self.book_title = book_title
        self.book_genre = book_genre
        self.book_description = book_description

    def __repr__(self):
        return "<Book %r>" % self.book_title


db.create_all()


@cross_origin()
@app.route('/books', methods=['POST'])
def add_book():
    book_data = request.get_json()

    db.session.add(Book(
        book_data['book_title'], book_data['book_genre'], book_data['book_description']))
    db.session.commit()

    return "Book added"


@cross_origin()
@app.route('/books', methods=['GET'])
def get_all_books():
    books = []
    for book in db.session.query(Book).all():
        del book.__dict__['_sa_instance_state']
        books.append(book.__dict__)

    return jsonify(books)


@cross_origin
@app.route('/books/<id>', methods=['GET'])
def get_book(id):
    book = Book.query.get(id)
    del book.__dict__['_sa_instance_state']
    return jsonify(book.__dict__)


@cross_origin
@app.route('/books/<id>', methods=['PUT'])
def update_book(id):
    book_data = request.get_json()
    db.session.query(Book).filter_by(id=id).update(dict(book_title=book_data['book_title'], book_genre=book_data[
        'book_genre'], book_description=book_data['book_description']))
    db.session.commit()

    return "Book updated"


@cross_origin
@app.route('/books/<id>', methods=['DELETE'])
def delete_book(id):
    db.session.query(Book).filter_by(id=id).delete()
    db.session.commit()

    return "Book deleted"


if __name__ == '__main__':
    app.run()
