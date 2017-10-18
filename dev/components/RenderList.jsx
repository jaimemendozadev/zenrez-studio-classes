import React from 'react';
import { List, Image, Label } from 'semantic-ui-react';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {styles, handleClick} from '../utils.js';



const RenderList = (props) => {
  return(
    <List style={styles.listContainer}>
      {_.map(props.classList, (value) => {
        return (
          
          <List.Item key={value.id} style={styles.listItem}>
            <Link to={`/show/${value.id}`}>  
            <Image 
              src={value.img_url} 
              size='tiny' 
              shape='rounded' 
              verticalAlign='middle'
              floated='left'
              bordered 
            />
            
            <List.Content>
              <List.Description>
                <p>{value.title} with {value.instructor}<br />
                {value.start_time} - {value.end_time}</p>
              </List.Description>
            </List.Content>

            <Label style={styles.price} floated='right' color='red' size='huge'>${value.price}</Label>
            </Link>
          </List.Item>
          
        )
      })}
    </List> 
  )
}

export default RenderList;