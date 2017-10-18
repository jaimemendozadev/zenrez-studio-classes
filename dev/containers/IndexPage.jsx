import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchClasses} from '../actions';
import RenderHeader from '../components/RenderHeader.jsx';
import RenderList from '../components/RenderList.jsx';
import RenderSpinner from '../components/RenderSpinner.jsx';

class IndexPage extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchClasses();  
  }

  render(){
    return(
      <div>
        <RenderHeader />
        {!this.props.classes ? <RenderSpinner /> : <RenderList classList={this.props.classes} />}
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