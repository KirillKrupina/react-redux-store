import React from 'react';

import BookList from '../book-list'
import ShoppingCartTable from '../shoppping-cart-table';

const HomePage = () => {
    return (
        <div>
            <BookList />
            <ShoppingCartTable/>
        </div>
    )
};

export default HomePage;