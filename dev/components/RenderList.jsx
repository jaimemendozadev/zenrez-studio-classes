import React from 'react';
import { List, Image, Label } from 'semantic-ui-react';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {styles, handleClick} from '../utils.js';

const RenderList = (props) => {
  return(
    <div style={styles.listContainer}>
      {_.map(props.classList, (value) => {
        return (
          <Link to={`/show/${value.id}`} key={value.id}> 
          <div style={styles.listItem}>
          
            <img 
              src={value.img_url}
              style={styles.classImg} 
            />
            
            <span style={styles.description}>{value.title} with {value.instructor}<br />
                {value.start_time} - {value.end_time}</span>
            
            <span style={styles.price}>${value.price}</span>
            
          </div>

          {/*can't directly add styling to <Link>. Must add extra markup for spacing bet. 2 <Link>*/}
          <div style={{margin: '2.5em 0'}}>
            <br />
          </div>
          </Link>
          
        )
      })}
    </div> 
  )
}

export default RenderList;