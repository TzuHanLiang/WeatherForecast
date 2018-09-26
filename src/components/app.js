import React, { Component } from 'react';
import SearchBar from '../containers/search-bar'
import ForecastList from './forecast-list';

export default class App extends Component {
  render() {
    return (
      <div>
	      <SearchBar />
      </div>
    );
  }
}
