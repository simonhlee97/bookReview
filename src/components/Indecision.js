import React, { Component } from "react";
import { Button } from 'semantic-ui-react';


class Indecision extends Component {
	constructor(props) {
		super(props);
		this.deleteOptions = this.deleteOptions.bind(this);
		this.pickOne = this.pickOne.bind(this);
		this.addOption = this.addOption.bind(this);
		this.deleteOneOption = this.deleteOneOption.bind(this);      
		
		this.state = {
			options: props.options
		};
	}
	componentDidMount() {
		console.log('Component Did Mount');
	}

	// will fire when a component goes away
	componentWillUnmount() {
		console.log('componentWillUnmount')
	}


	// will only fire after the Component's state or props value changes
	componentDidUpdate() {
		console.log('Component Did Mount');
	}
	deleteOneOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => {
				return optionToRemove !== option;
			})
		}))
	}


	// deleteOptions (a function that helps pass props from Child to Parent)
	// the button for deleteOptions is in the Options Component (Child). onClick -> invokes
	// a method that lives in the Parent Component (Indecision)
	deleteOptions() {
		this.setState(() => ({ options: [] }));
	}
// to return an object when using an arrow function:
		
	pickOne() {
		// randomly select one
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);     
	}

	// Must put prevState as the argument to keep around pre-existing options
	addOption(option) {
		if (!option) {
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}
		this.setState((prevState) => ({
			options: prevState.options.concat(option)
		}));
		// just another to write, w/o keyword return 
		// this.setState((prevState) => {
		// 	return {
		// 		options: prevState.options.concat(option)
		// 	};
		// });
	}

	render() {
		const subtitle = 'Put your life in my hands';

		return (
			<div className="App container">
				<Header subtitle={subtitle} />
				<Action 
					hasOptions={this.state.options.length > 0}
					pickOne={this.pickOne} />
				<Options 
					options={this.state.options}
					deleteOptions={this.deleteOptions}
					deleteOneOption={this.deleteOneOption} />
				<AddOption 
					addOption={this.addOption} />
				<User name="Jon Doe" />
			</div>
		);
	}
}
Indecision.defaultProps = {
	options: []
}
// example of Stateless Functional Component: (no state management. just presentation)
const User = (props) => {
	return (
		<div>
			<p>name: {props.name}</p>
		</div>
	);
}

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
		);
}
Header.defaultProps = {
	title: 'Indecision'
}

// no longer have access to THIS in a stateless functional component
const Action = (props) => {
	return (
		<div>
			<Button primary 
				onClick={props.pickOne} 
				disabled={!props.hasOptions}>
			What should I do?
			</Button>
		</div>
		);
}
// class Action extends Component {
	
// 	render() {
// 		return (
// 		<div>
// 			<Button primary 
// 				onClick={this.props.pickOne} 
// 				disabled={!this.props.hasOptions}>
// 			What should I do?
// 			</Button>
// 		</div>
// 		);
// 	}
// }

// methods are bound to the Class Instance	
// challenge: add removeAll btn, setup removeAll -> alert msg, setup onClick to fire method

const Options = (props) => {
	return (
		<div>
			<Button onClick={props.deleteOptions}>Remove All</Button>
			{
				props.options.map((option) => (
					<Option 
						key={option} 
						optionText={option}
						deleteOneOption={props.deleteOneOption} 
					/>
				))
			}
		</div>
	);
}
// class Options extends Component {
	
// 	render() {
// 		return (
// 		<div>
// 			<Button onClick={this.props.deleteOptions}>Remove All</Button>
// 			{
// 				this.props.options.map((option) => <Option key={option} optionText={option}/>)
// 			}
// 		</div>
// 		);
// 	}
// }
	

const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<Button basic color='red' 
				onClick={(e) => {
					props.deleteOneOption(props.optionText);
				}}>
				Remove
			</Button>
		</div>
		);
}

	// 1. setup the form w/ textbox and submit btn
	// 2. onSubmit method
	// 3. add method addOption()
	class AddOption extends Component {
		constructor(props) {
			super(props);
			this.addOption = this.addOption.bind(this);
			this.state = {
					error: undefined
			};
		}
	addOption(e) {
		e.preventDefault();
			const option = e.target.elements.option.value.trim();
			const error = this.props.addOption(option);
			
			// this.setState(() => {
			// 		return { error };
			// });
			this.setState(() => ({ error }));			
	}
	render() {
		return (
			<div>
					{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.addOption}>
					<input type='text' name="option" /><br />
					<Button>Add a New Option</Button>
				</form>
			</div>
		);
	}
}

export default Indecision;