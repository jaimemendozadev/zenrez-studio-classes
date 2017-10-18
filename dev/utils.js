import {Link} from 'react-router-dom';

export const styles = {
  header: { height: 500, padding: '1em 0em', backgroundColor: '#354A62' },
  header_h1: { textAlign: 'center', fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em', color: 'white' },
  header_h2: { textAlign: 'center', fontSize: '1.7em', fontWeight: 'normal', color: 'white' },
  listContainer: {width: '50%', margin: '2em auto', padding: '1em'},
  listItem: {fontSize: '1.2em', margin: '1.3em 0'},
  spinner: {textAlign: 'center', margin: '2em auto'},
  price: {marginLeft: '1.3em'}
}

export function handleClick(id){
  console.log("the id passed into handleClick is ", id);

}