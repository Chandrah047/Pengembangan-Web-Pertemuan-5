import React, { Component } from 'react';
import logo from '.logo.svg';
import './App.css';
import Home from './views/Home/Home';


//Latihan 5.3, Class Component
function Message() { 
	return "Pesan didalam Component";
}

class App extends Component {
	
	render() {
		return (
			<div>
				<Message />
				<Home />
			</div>
		);
	}
}

//Latihan 5.2, penggunaan function javascript sebagai komponen
// function Message() {
// 	return <p>Hello from message component</p>
// }

// class App extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<Message />
// 			</div>
// 		)
// 	}
// }


//Latihan 5.1, Penggunana function pada Reactjs
// function sayHello() {
// 	return "Hello World";
// }

// class App extends Component {
// 	bilangHalo() {
// 		return "Halo Dunia";
// 	}
	
// 	render() {
// 		return (
// 		<div>
// 				<p>sayHello : <b>{sayHello()}</b></p>
// 				<p>bilangHalo : <b>{this.bilangHalo()}</b>
// 			</div>
// 		)
// 	}
// }

export default App;