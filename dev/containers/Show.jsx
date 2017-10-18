import React, {Component} from 'react';

import RenderHeader from '../components/RenderHeader.jsx';
import RenderList from '../components/RenderList.jsx';
import RenderSpinner from '../components/RenderSpinner.jsx';

class Show extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <RenderHeader />
        <RenderSpinner />

        {console.log("the props inside Show are ", this.props)}
        {/*!this.props.classes ? <RenderSpinner /> : <RenderList classList={this.props.classes} /> */}
      </div>
    )
  }
}

export default Show;