import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {CardPage, MainPage} from "../pages";
import './app.css'
import ShopHeader from "../shop-header";

const App = () => {
	return (
		<main role='main' className='container'>
			<ShopHeader/>
			<Switch>
				<Route path='/' exact component={MainPage}/>
				<Route path='/card/' component={CardPage}/>
			</Switch>
		</main>
	);
};


export default App;