import React from 'react';

//Latihan 4.4
export default class Home extends React.Component{ 
	render() {
		return (
	<div>
			<h2> Title Home Component </h2>
		<p> Hello my name is {this.props.name} </p>
	</div>
		)
	}
}

//Latihan 4.3
//export default class Home extends React.Component{ 
//	render() {
//		return (
//		<div>
//			<h2> Title Home Component </h2>
//			<p> Content Home component </p>
//		</div>
//		)
//	}
//}

export default App;