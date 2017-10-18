import React from 'react';
import { List, Image } from 'semantic-ui-react';
import _ from 'lodash';
import {styles} from '../utils.js';


const RenderList = (props) => {
  return(
    <List style={styles.listContainer}>
      {_.map(props.classList, (value) => {
        return (
          <List.Item style={styles.listItem}>
            <Image src={value.img_url} size='tiny' verticalAlign='middle' />
            <List.Content>
              <List.Header>{value.title}</List.Header>
              <List.Header>{value.instructor}</List.Header>
              <List.Description>
                Start Time: {value.start_time}
                End Time: {value.end_time}
                Price: {value.price}
              </List.Description>
            </List.Content> 
          </List.Item>
        )
      })}
    </List> 
  )
}

export default RenderList;