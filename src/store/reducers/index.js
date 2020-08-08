import { combineReducers } from 'redux'; // importing COMBINE REDUCERS for comnining reducers.

// importing reducers
import ProfileReducer from './profile/profile.reducer';
import RepositoryReducer from './repositories/repository.reducer';

// creating a combined reducer.
const Reducer = combineReducers({
	ProfileReducer,
	RepositoryReducer,
});

export default Reducer; //exporting the REDUCER.
