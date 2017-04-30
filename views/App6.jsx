import React,{Component} from 'react';

class App6 extends Component{
	constructor(props) {
		super(props);
		this.state={value:'0000'}
	}
	handleChange(e) {
		this.setState({value: e.target.value})
	}
	render() {
		var value=this.state.value;
		return(
			<div>
				<input type='text' value={value} onChange={this.handleChange.bind(this)} />
				<p>{value}</p>
			</div>
		)
	}
}

export default App6;