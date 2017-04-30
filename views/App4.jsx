import React,{Component} from 'react';

class App4 extends Component{
	constructor(props) {
		super(props);
		this.state={like:true}
	}
	handleClick() {
		this.setState({like:!this.state.like})
	}
	render() {
		var txt=this.state.like?'like':'dont like';
		return(
			<div onClick={this.handleClick.bind(this)}>
				I {txt} it.
			</div>
		)
	}
}



export default App4;