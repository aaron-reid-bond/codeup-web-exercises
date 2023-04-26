(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: 'Aaron',
        lastName: 'Bond'
    };

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    function sayHello(){
        return `Hello from ${this.firstName} ${this.lastName}`;
    }

    person.sayHello = sayHello
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (x){
        if(x.amount >= 200){
            console.log(`${x.name} gets a %12 discount on their amount of ${x.amount} making their total $${x.amount- (x.amount * .12)}`)
        } else {
            console.log(`${x.name} dose not get a %12 discount on their amount of ${x.amount}`)
        }
    })



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            book_number: '1',
            title: 'Anne of Green Gables',
            author: {
                firstName: 'Lucy Maud',
                lastName: 'Montgomery'
            }
        }, {
            book_number: '2',
            title: 'The Hunger Games',
            author: {
                firstName: 'Suzanne',
                lastName: 'Collins'
            }
        }, {
            book_number: '3',
            title: '30-Second Quantum Theory',
            author: {
                firstName: 'Brian',
                lastName: 'Clegg'
            }
        }, {
            book_number: '4',
            title: 'Saucer',
            author: {
                firstName: 'Stephen',
                lastName: 'Coonts'
            }
        }, {
            book_number: '5',
            title: 'Crime and Punishment',
            author: {
                firstName: 'Fyodor',
                lastName: 'Dostoevsky'
            }
        }
    ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function  (x){
        console.log(`Book: ${x.book_number}`);
        console.log(`Title: ${x.title}`);
        console.log(`Author: ${(x.author.firstName)} ${(x.author.lastName)}`);
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, author) {
        let book = {};
        book.title = title
        book.author = author
        return book
    }

    console.log(createBook("I like big butts", "Sir Mix-a-lot"));

    function createBook2(bookNumber, title, firstName, lastName) {
        let book = {}
        book.book_number = bookNumber
        book.title = title
        let author ={}
        author.firstName = firstName
        author.lastName = lastName
        book.author = author
        books.push(book)
        return books[books.length -1]
    }

    console.log(createBook2('6', "Alaska", 'James A.', 'Michener'));

    function showBookInfo (x){
        console.log(`Book: ${x.book_number}`);
        console.log(`Title: ${x.title}`);
        console.log(`Author: ${(x.author.firstName)} ${(x.author.lastName)}`);
    }

    console.log(showBookInfo(books[3]));

    books.forEach(showBookInfo)

})();