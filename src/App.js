import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './App.css';
import Home from './views/Home/Home';

//Latihan 4.4, Props
function Message(props) {
	return <p>Hello {props.name},</p>;
}

class App extends Component {
	
	render() {
		return (
			<div>
				<Message name="Ulrich" />
				<Home name="Eden Hazard" />
			</div>
		);
	}
}

export default App;

//Latihan 4.3, Class Component
//function Message() { 
//	return "Pesan didalam Component";
//}

//class App extends Component {
	
//	render() {
//		return (
//			<div>
//				<Message />
//				<Home />
//			<div>
//		}
//	}
//}



//Latihan 4.2, penggunaan function javascript sebagai komponen
//function Message() {
//	return <p>Hello from message component</p>
//}

//class App extends Component {
//	render() {
//		return (
//			<div>
//				<Message />
//			<div>
//		}
//	}
//}

//Latihan 4.1, Penggunana function pada Reactjs
//function sayHello() {
//	return "Hello World";
//}

//class App extends Component {
//	bilangHalo() {
//		return "Halo Dunia";
//	}
	
//	render() {
//		return {
//			<>
//				<p>sayHello : <b>{sayHello()}</b></p>
//				<p>bilangHalo : <b>{this.bilangHalo()}</b>
//			</>
//		}
//	}
//}
	