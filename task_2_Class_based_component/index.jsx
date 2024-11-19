/**
 * Even though we don't write code in class components, 
 * there is a lot of legacy code in the project that we have to work with. 
 * We want to make sure that you are familiar with class components.
 * 
 * Rewrite this functional component as a class-based component.
 * This component contains multiple useEffect hooks with different dependencies 
 * and an additional state that influences rendering.
 * 
 * Make sure the class-based component mirrors the behavior of the provided functional component.
 * 
 * Task:
 * - Rewrite this functional component as a class-based component.
 * - Implement component lifecycle methods in place of useEffect hooks.
 * - Ensure that initial values of `count` and `clicks` are logged upon mounting.
 * - Maintain correct behavior when props or state change.
 */

import React, { Component } from 'react';

class ClassCounter extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		name: props.initialName || "Anonymous",
		clicks: 0,
	  };
	}
  
	componentDidMount() {
	  console.log("Setting up observers");
	}
  
	componentDidUpdate(prevProps, prevState) {
	  if (prevProps.count !== this.props.count) {
		console.log(`Count has changed to: ${this.props.count}`);
	  }
	  if (prevState.clicks !== this.state.clicks) {
		console.log(`Clicks have been updated: ${this.state.clicks}`);
	  }
	}
  
	componentWillUnmount() {
	  console.log("Clear observers");
	}
  
	handleClick = () => {
	  this.setState((prevState) => ({
		clicks: prevState.clicks + 1,
	  }));
	};
  
	render() {
	  return (
		<div>
		  <div>Name: {this.state.name}</div>
		  <div>Count: {this.props.count}</div>
		  <div>Clicks: {this.state.clicks}</div>
		  <button onClick={this.handleClick}>Increment Clicks</button>
		</div>
	  );
	}
  }
  