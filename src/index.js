import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app'
import {BookstoreServiceProvider} from "./components/bookstoreServiceContext";
import ErrorBoundary from "./components/errorBoundary";
import BookstoreServices from "./services";
import store from "./store";

const bookstoreServices = new BookstoreServices()

const app = (
	<Provider store={store}>
		<ErrorBoundary>
			<BookstoreServiceProvider value={bookstoreServices}>
				<Router>
					<App/>
				</Router>
			</BookstoreServiceProvider>
		</ErrorBoundary>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))