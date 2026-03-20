'use strict'



const books = {

    fantasy: [

        {
            id: 1,
            title: 'Harry Potter',
            author: 'Joanne Rowling',
            year: 1991,
        },

        {
            id: 2,
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            year: 1954,
        },

        {
            id: 3,
            title: 'Game of Thrones',
            author: 'George R.R. Martin',
            year: 1996,
        },

        {
            id: 4,
            title: 'The Witcher',
            author: 'Andrzej Sapkowski',
            year: 1986,
        },

        {
            id: 5,
            title: 'Stormlight',
            author: 'Brandon Sanderson',
            year: 2010,
        },

    ],

    scienceFiction: [

        {
            id: 1,
            title: 'Dune',
            author: 'Frank Herbert',
            year: 1965,
        },

        {
            id: 2,
            title: 'Foundation',
            author: 'Isaac Asimov',
            year: 1951,
        },

        {
            id: 3,
            title: '2001: A Space Odyssey',
            author: 'Arthur C. Clarke',
            year: 1968,
        },

        {
            id: 4,
            title: 'Stranger in a Strange Land',
            author: 'Robert Heinlein',
            year: 1961,
        },

        {
            id: 5,
            title: 'Solaris',
            author: 'Stanislav Lem',
            year: 1961,
        },

    ],

}

const {fantasy: [, , thirdBook], scienceFiction: [, , , {author: writer}]} = books;

console.log(thirdBook);
console.log(writer);
