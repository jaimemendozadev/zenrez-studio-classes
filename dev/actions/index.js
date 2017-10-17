import axios from 'axios';

const BASE_URL = `https://zenrez-interview.herokuapp.com/classes`;

export const FETCH_CLASSES = 'fetch_classes';

export function fetchClasses(){
  let request = axios.get(BASE_URL, (data) => {
      console.log("data inside axios is ", data);

    }).catch(error => {
      console.log("There was an error fetching the API Data ", error);
    });
    
  return {
    type: FETCH_CLASSES,
    payload: request
  }
}