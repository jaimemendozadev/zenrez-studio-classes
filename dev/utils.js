export const styles = {
  header: { height: 500, padding: '1em 0em', backgroundColor: '#354A62' },
  header_h1: { textAlign: 'center', fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em', color: 'white' },
  header_h2: { textAlign: 'center', fontSize: '1.7em', fontWeight: 'normal', color: 'white' },

  listContainer: {width: '50%', margin: '2em auto', padding: '1em'},
  classImg: { width: '100px', height: '100px', float:'left', margin: '0 1em', borderRadius: '3px'},
  
  listItem: {fontSize: '1.2em', width: 'auto', clear: 'both'},
  
  spinner: {textAlign: 'center', margin: '2em auto'},
  
  description: {textAlign: 'center', verticalAlign: 'middle'},

  price: {
    
    backgroundColor: '#db2828', 
    borderColor: '#db2828',
    borderRadius: '10px', 
    color: '#fff', 
    width: '68px', 
    height: '44px', 
    textAlign: 'center',
    verticalAlign: 'middle', 
    lineHeight: '44px',
    
    float: 'right'
  }
  
}

export function handleClick(id){
  console.log("the id passed into handleClick is ", id);
}


