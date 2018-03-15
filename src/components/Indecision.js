import React, { Component } from "react";
import { Button } from 'semantic-ui-react';



class Indecision extends Component {
    constructor(props) {
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.pickOne = this.pickOne.bind(this);
        this.addOption = this.addOption.bind(this);        
        this.state = {
            options: []
        };
    }
    // deleteOptions (a function that helps pass props from Child to Parent)
    // the button for deleteOptions is in the Options Component (Child). onClick -> invokes
    // a method that lives in the Parent Component (Indecision)
    deleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

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
    
        this.setState((prevState) => {
          return {
            options: prevState.options.concat(option)
          };
        });
    }

	render() {
		const hptitle = "Indecision 2020";
		const subtitle = 'Put your life in my hands';

		return (
			<div className="App container">
				<Header title={hptitle} sub={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    pickOne={this.pickOne} />
                <Options
                 options={this.state.options}
                 deleteOptions={this.deleteOptions} />
                <AddOption 
                    addOption={this.addOption} />
			</div>
		);
	}
}



class Header extends Component {
	render() {
	  return (
		<div>
		  <h1>{this.props.title}</h1>
		  <h2>{this.props.sub}</h2>
		</div>
	  );
	}
}


class Action extends Component {
	
	render() {
	  return (
		<div>
          <Button primary 
            onClick={this.props.pickOne} 
            disabled={!this.props.hasOptions}>
          What should I do?
          </Button>
		</div>
	  );
	}
}
// methods are bound to the Class Instance
  

  // challenge: add removeAll btn, setup removeAll -> alert msg, setup onClick to fire method
  class Options extends Component {
	
	render() {
	  return (
		<div>
			<Button onClick={this.props.deleteOptions}>Remove All</Button>
			{
				this.props.options.map((option) => <Option key={option} optionText={option}/>)
			}
		</div>
	  );
	}
  }
  
  class Option extends Component {
	render() {
	  return (
		<div>
			{this.props.optionText}
		</div>
	  );
	}
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
        
        this.setState(() => {
            return { error };
        });
        
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