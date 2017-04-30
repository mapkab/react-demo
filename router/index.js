import React from 'react';
import {Route,IndexRoute,Redirect,IndexRedirect} from 'react-router';
import App from '../views/App.jsx';
import App0 from '../views/App0.jsx';
import App1 from '../views/App1.jsx';
import App2 from '../views/App2.jsx';
import App3 from '../views/App3.jsx';
import App4 from '../views/App4.jsx';
import App5 from '../views/App5.jsx';
import App6 from '../views/App6.jsx';
import App7 from '../views/App7.jsx';
import App8 from '../views/App8.jsx';

const routes=<Route path='/' component={App}>
			// <IndexRedirect to='/app6'/>
		    <IndexRoute component={App0}/>
			<Route path='/app1' component={App1}/>
			<Route path='/app2' component={App2}/>
			<Route path='/app3' component={App3}/>
			<Route path='/app4' component={App4}/>
			<Route path='/app5' component={App5}/>
			<Route path='/app6' component={App6}/>
			<Route path='/app7' component={App7}/>
			<Redirect from='/app8' to='/app4'/>
		</Route>;

export default routes;


