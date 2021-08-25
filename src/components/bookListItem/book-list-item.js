import React from 'react';
import './book-list-item.css';

const BookListItem = () => {
	return (
		<div className="book-list-item">
			<div className="book-cover">
				<img src='' alt="cover"/>
			</div>
			<div className="book-details">
				<span className="book-title">a</span>
				<div className="book-author">b</div>
				<div className="book-price">c</div>
				<button className="btn btn-info add-to-cart">Add to cart</button>
			</div>
		</div>
	);
};

export default BookListItem;
