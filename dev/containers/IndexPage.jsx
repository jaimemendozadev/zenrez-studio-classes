import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchClasses} from '../actions';
import RenderHeader from '../components/RenderHeader.jsx';
import RenderList from '../components/RenderList.jsx';

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
        <RenderHeader />
        <RenderList classList={this.props.classes} />
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