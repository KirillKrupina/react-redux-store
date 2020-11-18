export default class BookstoreService {

    data = [{
        id: 1,
        title: 'Harry Potter and the Philosophers Stone',
        author: 'J.K. Rowling',
        price: 7.99,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg'
    }, {
        id: 2,
        title: 'The Lord Of The Rings',
        author: 'J.R.R Tolkien',
        price: 9.99,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/8134AkhQJgL.jpg'
    }];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
            }, 500)
        });
    }

}