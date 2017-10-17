import combineReducers from 'redux';
import ClassReducer from './class_reducer.js';


const rootReducer = combineReducers({
  classes: ClassReducer      
});


export default rootReducer;
