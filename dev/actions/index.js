import axios from 'axios';
import _ from 'lodash';

const BASE_URL = `https://zenrez-interview.herokuapp.com/classes`;

export const FETCH_CLASSES = 'fetch_classes';
export const FETCH_CLASS = 'fetch_class';

export function fetchClasses(){
  let request = axios.get(BASE_URL, (data) => {
      console.log("data inside axios is ", data);

    }).catch(error => {
      console.log("There was an error fetching the API Data from fetchClasses", error);
    });
    
  return {
    type: FETCH_CLASSES,
    payload: request
  }
}



export function fetchClass(id){
  let request = axios.get(BASE_URL)
    .then(data => {
      console.log("data inside axios fetchClass is ", data);
      
      let fetched = data.data.classes;
      
      let singleClass = _.find(fetched, (c) => {
        return c.id == id;
      });
    
      return singleClass;

    })
    .catch(error => {
      console.log("There was an error fetching the API Data from fetchClass", error);
    });
    
  return {
    type: FETCH_CLASS,
    payload: request
  }
}