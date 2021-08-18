import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {MainPage} from "../pages";
import './app.css'

const App = () => {
	return (
		<Switch>
			<Route path='/' exact component={MainPage}/>
			<Route path='/card/' render={() => <h1>Card</h1>}/>
		</Switch>
	);
};

export default App;