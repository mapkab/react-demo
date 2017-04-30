import React,{Component} from 'react';

class App5 extends Component{
	handleClick() {
		this.refs.inputTxt.focus();
	}
	render() {
		return(
			<div>
				<input type='text' ref='inputTxt' />
				<input type='button' value='123' onClick={this.handleClick.bind(this)} />
			</div>
		)
	}
}

export default App5;