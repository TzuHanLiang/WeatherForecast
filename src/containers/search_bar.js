import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = { term: '' };
		//this line right here says this which is our instance of search bar has a function called onInputChange bind that function to this which is SearchBar and then replace onInputChange with this new bound instance of this function.
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event){
		event.preventDefault();
		//we need to go and fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render(){
		return(
		//when you press enter on your keyboard while a form element child, like input and button in here, is focused the browser automatically thinks that you're trying to submit the contents of this form. and the browser thinks i need to make a POST request to the server which is happening and our server re-render our entire application 
			<form onSubmit={this.onFormSubmit} className='input-group'>
				<input 
					placeholder='Get a five-day forecast in your current city'
					className='form-control'
					value={this.state.term}
					onChange={this.onInputChange}
					//last time we use event handler like this we wrapped the event handler inside of a fat arrow function () => {}
					//The problem is that when we pass off any event handler like this and then call ot the value of this is not going to be our searchbar here  
					/>
				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Search</button>
				</span>
			</form>
		);
	}

}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);



//it's going to be responsinle for calling an action Creator in redux
//whenever a user enter a city name and then click on search and try to submit that search 
//it needs to have the ability to tell dedux like 'hey, something just happen you need to go fetch some data'

// we are going to turn <input /> into a controlled field.
//controlled field is a form element where the value of the input is set by the state of our component
//So to create a controlled component we need to set our state whenever the input is changeed
//the state in here is referring to component state