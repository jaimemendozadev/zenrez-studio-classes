import React, {Component} from 'react';
import RenderHeader from '../components/RenderHeader.jsx';
import RenderSpinner from '../components/RenderSpinner.jsx';
import SingleClass from '../components/SingleClass.jsx';
import {fetchClass} from '../actions';
import {connect} from 'react-redux'

class Show extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const postID = this.props.match.params.id;
    this.props.fetchClass(postID);
  }

  render(){
    return(
      <div>
        <RenderHeader />
        {!this.props.singleClass ? <RenderSpinner /> : <SingleClass singleClass={this.props.singleClass} /> }
      </div>
    )
  }
}

function mapStateToProps({classes}, ownProps) {
  return {
    singleClass: classes[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchClass})(Show);