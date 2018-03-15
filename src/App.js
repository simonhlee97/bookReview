import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";

// import { Button } from 'semantic-ui-react';
// const ButtonExampleButton = () => (
// 	<Button>Click Here</Button>
// )
// export default ButtonExampleButton;
class App extends Component {
    render() {
        return (
			<div>
				<Routes />
			</div>
        );
    }
}


export default App;
