import {FETCH_CLASSES} from '../actions'; 
import {FETCH_CLASS} from '../actions';
import _ from 'lodash';

export function ClassReducer(state = {}, action){
   switch(action.type){
     case FETCH_CLASSES:
       return _.mapKeys(action.payload.data.classes, 'id');

     case FETCH_CLASS:
       let id = action.payload.id;
       let newObj = {};
       newObj[id] = action.payload;

       return Object.assign({}, state, newObj);
       
   } 
   return state;
}