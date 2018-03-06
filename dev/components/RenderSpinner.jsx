import React from 'react';
import {styles} from '../utils.js';

const RenderSpinner = () => {
  return(
    <div style={styles.spinner}>
      <h2>Please wait while we fetch the data...</h2>
      <img src="/imgs/spiffygif_46x46.gif" /> 
    </div>    
  )
}

export default RenderSpinner;