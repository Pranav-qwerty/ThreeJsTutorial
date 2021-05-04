import React, { Component } from "react";
import mainLoop from "./Tutorial/Lights/Tutorial12";

class App extends Component {
	componentDidMount() {
		mainLoop();
	}
	render() {
		return <div />;
	}
}

export default App;
