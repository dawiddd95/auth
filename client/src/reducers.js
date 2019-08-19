import { combineReducers } from 'redux';
import fetchLoggedUser from './app/users/duck'; 

const rootReducer = combineReducers({
   fetchLoggedUser,
})

export default rootReducer;