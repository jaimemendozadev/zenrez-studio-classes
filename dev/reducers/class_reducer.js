import {FETCH_CLASSES} from '../actions';

export function ClassReducer(state = {}, action){
   switch(action.type){
     case FETCH_CLASSES:
       console.log("the payload is ", action.payload.data);
       let dataToRender = {data: "Hit the reducer"};
       return dataToRender;
   } 
   return state;
}