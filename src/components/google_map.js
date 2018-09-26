import React, { Component } from 'react';

class GoogleMap extends Component{
	componentDidMount(){
		new google.maps.Map(this.refs.map, {
			zoom:12,
			center:{
				lat:this.props.lat,
				lng:this.props.lon
			}
		});
	}

	render(){
		return <div ref='map' />
	}

}

export default GoogleMap;


//componentDidMount is one of our lifecycle methods that gets called
//automatically after this component has been render to the screen.
//Then inside of it we called new google.maps.Map, this is how we create
//an embedded Google Map inside of our document
//google.maps.Map will take a reference to HTML node or HTML element 
//where we want to render this map to
//So google map is going to say Aha you're passing me this nice little 
//HTML element I'm going to find this element on the screen and render
//an embedded map into it.
//So this.refs.map is where on the screen the map will get rendered too.
//this.refs.map => <div ref='map'/> 