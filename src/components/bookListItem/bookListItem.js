import React from 'react';
import './bookListItem.css'

const BookListItem = ({books}) => {
	return (
		<div>
			<span>1) name: {books.name}</span>
			<span> 2) author: {books.author}</span>
		</div>
	);
};

export default BookListItem;