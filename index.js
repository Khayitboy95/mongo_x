const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Mongodb ga ulanish xosil qilindi');
})
.catch((err) => {
    console.error('Mongodb ga ulanishda xatolik yuz berdi', err);
});


const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
});

const Book = mongoose.model('Book', bookSchema);



const createBook = async () => {
    const book = new Book({
        name: 'Node js asoslari',
        author: 'Khayitboy Ergashev',
        tags: [ 'js', 'react' ],
        isPublished: true
    });
    const savedBook = await book.save();
    console.log(savedBook);
}

const getBooks = async () => {
    const books = await Book.find();
    console.log(books);
}
getBooks();