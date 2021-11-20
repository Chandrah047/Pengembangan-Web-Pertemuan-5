import React, { Component } from 'react';
import './App.css';

//Latihan 4.1, Penggunana function pada Reactjs
function sayHello() {
	return "Hello World";
}

class App extends Component {
	bilangHalo() {
		return "Halo Dunia";
	}
	
	render() {
		return (
		<div>
				<p>sayHello : <b>{sayHello()}</b></p>
				<p>bilangHalo : <b>{this.bilangHalo()}</b>
			</div>
		)
	}
}

export default App;