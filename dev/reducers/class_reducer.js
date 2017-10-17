import {FETCH_CLASSES} from '../actions';
import _ from 'lodash';

export function ClassReducer(state = {}, action){
   switch(action.type){
     case FETCH_CLASSES:
       return _.mapKeys(action.payload.data.classes, 'id');
   } 
   return state;
}