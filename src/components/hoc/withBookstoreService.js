import React from 'react';
import {BookstoreServiceConsumer} from "../bookstore-service-context";

const withBookstoreService = (Component) => {
	return (props) => {
		return (
			<BookstoreServiceConsumer>
				{
					(bookstoreServices) => {
						return <Component {...props} bookstoreServices={bookstoreServices}/>
					}
				}
			</BookstoreServiceConsumer>
		)
	}
}

export default withBookstoreService;