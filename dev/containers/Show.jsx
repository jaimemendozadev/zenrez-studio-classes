import React, {Component} from 'react';
import RenderHeader from '../components/RenderHeader.jsx';
import RenderSpinner from '../components/RenderSpinner.jsx';
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
        <RenderSpinner />

        {console.log("the props inside Show are ", this.props)}
        {!this.props.singleClass ? <RenderSpinner /> : "" }
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