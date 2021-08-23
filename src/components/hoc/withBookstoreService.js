import React from 'react';
import {BookstoreServiceConsumer} from "../bookstoreServiceContext";

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