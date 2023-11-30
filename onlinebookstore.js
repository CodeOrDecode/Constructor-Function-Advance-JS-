
function Book(title, author, genre, price) {
    this.title = title;
    this.author = author.name;
    this.genre = genre;
    this.price = price;
    this.getBookInfo = function(){
        console.log(`Title is ${this.title}`);
        console.log(`Author is ${this.author}`);
        console.log(`Genre is ${this.genre}`);
        console.log(`Price is ${this.price}`);
    }
}

function Author(name, birthyear, nationality) {
    this.name = name;
    this.birthyear = birthyear;
    this.nationality = nationality;
}



let firstAuthor = new Author("R K Jones", "10.6.1992", "Spanish");
let firstBook = new Book("Inside Out",firstAuthor,"Adventure",3500)
firstBook.getBookInfo();

let secondAuthor = new Author("J K Rowling", "20.3.1994", "American");
let secondBook = new Book("Harry Potter",secondAuthor,"Magic & Mistry",5500)
secondBook.getBookInfo();