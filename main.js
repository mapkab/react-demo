import React from 'react';
import {render} from 'react-dom';
import router from './router';

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
	router
	// </Provider>
	,App);