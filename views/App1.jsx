import React,{Component} from 'react';
const names=['One','Two','Kate'];
class App1 extends Component{
	render() {
		return(
			<div>
				{
					names.map(function(name){
						return <div>Yes,{name}!</div>
					})
				}
			</div>
			)
	}
}

export default App1;