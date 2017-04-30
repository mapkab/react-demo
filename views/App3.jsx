import React,{Component} from 'react';
class App3 extends Component{
	render() {
		return(
			<div>
				<h1><a href={this.props.href} title={this.props.title}>{this.props.name}</a></h1>
				<ol>
					{
						React.Children.map(this.props.children,function(child){
							return <li>{child}</li>
						})
					}
				</ol>
			</div>
			)
	}
}
App3.propTypes = {
		title:React.PropTypes.string.isRequired,
		name:React.PropTypes.string.isRequired,
		href:React.PropTypes.string.isRequired
};
App3.defaultProps = {
	title: '888',
	name:'666',
	href:'www.baidu.com'
};

export default App3;