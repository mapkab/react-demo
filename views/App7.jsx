import React,{Component} from 'react';

class App7 extends Component{
	constructor(props) {
		super(props);
		this.state={opacity:1}
	}
	componentDidMount() {
		this.timer = setInterval(function(){
			var opacity=this.state.opacity;
			opacity-=0.1;
			if(opacity<0.1){
				opacity=1;
			}
			this.setState({opacity: opacity});
		}.bind(this),1000);
	}
	render() {
		return(
			<div style={{opacity:this.state.opacity}}>
				Mapk {this.props.name}
			</div>
		)
	}
}

App7.defaultProps ={name:'Volkov'};

export default App7;