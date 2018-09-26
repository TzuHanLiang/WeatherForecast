import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
	switch (action.type){
		case FETCH_WEATHER:
			// return state.concat([action.payload.data]);
			return [ action.payload.data, ...state ]; 
			//So instead of state.push() we need to return a new array entirely that includes all of the old weather data and the new piece of weather data
	}

	return state;
}


//we only updata state by calling setState() that is completely true of redux as well.
//we don't ever manipulate state directly, we return a completely new instance of statż