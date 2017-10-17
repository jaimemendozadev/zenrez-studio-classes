import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchClasses} from '../actions';
import { Container, Header } from 'semantic-ui-react';

const styles = {
  header: { height: 500, padding: '1em 0em', backgroundColor: '#354A62' },
  header_h1: { textAlign: 'center', fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em', color: 'white' },
  header_h2: { textAlign: 'center', fontSize: '1.7em', fontWeight: 'normal', color: 'white' }
}



class IndexPage extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchClasses();  
  }

  render(){
    if (!this.props.classes){
      return <h2>Loading data...</h2>
    }
    return(
      <div>
        <Container style={styles.header} fluid>
          <Header
            as='h1'
            content='Welcome to the Zenrez Studio Class Schedule!'
            style={styles.header_h1}
          />
          <Header
            as='h2'
            content='Choose from one of our awesome classes!'
            style={styles.header_h2}
          />    
        </Container>
      </div>
    )
  }
}

function mapStateToProps({classes}){
  return {
    classes  
  }
}

export default connect(mapStateToProps, {fetchClasses})(IndexPage);