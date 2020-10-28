const initialState = {
    books: [{
        id: 1,
        title: 'Harry Potter and the Philosophers Stone',
        author: 'J.K. Rowling'
    }, {
        id: 2,
        title: 'The Lord Of The Rings',
        author: 'J.R.R Tolkien'
    }]
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };

        default:
            return state;
    }
};

export default reducer;