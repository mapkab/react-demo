import React,{Component} from 'react';
import {Link} from 'react-router';

class Nav extends Component {
	constructor(props,context) {
		super(props,context);
		this.state={
			navText: props.navText
		}
	}
	render() {
		return(
			<nav className='nav_index'>
				<h2>{this.state.navText}</h2>
				<ul role='nav'>
					<li><Link to='/app1'>App1</Link></li>
					<li><Link to='/app2'>App2</Link></li>
					<li><Link to='/app3'>App3</Link></li>
					<li><Link to='/app4'>App4</Link></li>
					<li><Link to='/app5'>App5</Link></li>
					<li><Link to='/app6'>App6</Link></li>
					<li><Link to='/app7'>App7</Link></li>
					<li><Link to='/app8'>App8</Link></li>
				</ul>			
			</nav>
		)
	}
}

export default Nav;