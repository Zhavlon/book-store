import React from 'react';
import BookList from "../bookList";
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";

const MainPage = () => {
	return (
		<div>
			<BookList/>
			<ShoppingCartTable/>
		</div>
	);
};

export default MainPage;