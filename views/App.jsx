import React,{Component} from 'react';
import Nav from '../components/nav'
import {IndexLink} from 'react-router';


class App extends Component{
	constructor(props) {
		super(props)
		this.state={
			'navText':'This is the navBar'
		}
	}
	render() {
		return (
			<div>
				<h1><IndexLink  to='/'>Hello Wolrd!</IndexLink></h1>
				<Nav navText={this.state.navText}/>
				<div className='container'>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default App;