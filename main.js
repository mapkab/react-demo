import React from 'react';
import {render} from 'react-dom';
import {Router,Route,browserHistory,hashHistory} from 'react-router';
import routes from './router';

// import configureStore from '../redux/store';

// let initialState={
// 	todos:[{
// 		id:0,
// 		completed:false,
// 		text:'initial todo for this'
// 	}]
// };
// let store=configureStore(initialState);

const App=document.getElementById('app');

render(
	// <Provider store={store}>
		<Router history={browserHistory} routes={routes}/>
	// </Provider>
	,App);