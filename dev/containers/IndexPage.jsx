import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchClasses} from '../actions';


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
        <h1>Welcome to the Zenrez Studio Class Schedule!</h1>
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