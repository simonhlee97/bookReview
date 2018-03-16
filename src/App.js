import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";


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
                <Header />
                <Routes />
                <Footer />
			</div>
        );
    }
}


export default App;
