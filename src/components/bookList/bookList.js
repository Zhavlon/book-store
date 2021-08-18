import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import withBookstoreService from '../hoc/withBookstoreService'
import booksLoaded from "../../actions";
import BookListItem from "../bookListItem";

const BookList = ({bookstoreServices, books, booksLoaded}) => {

	useEffect(() => {
		booksLoaded(bookstoreServices.getBooks())
	}, []);
	return (
		<div>
			<p>Books List</p>
			{
				books.map(item => <BookListItem key={item.id} books={item}/>)
			}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		books: state.books
	}
}

const mapDispatchToProps = {
	booksLoaded: booksLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(withBookstoreService(BookList));