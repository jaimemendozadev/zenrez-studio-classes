import React from 'react';
import { List, Image } from 'semantic-ui-react';
import _ from 'lodash';

const style = {
  listContainer: {width: '70%', margin: '2em auto', padding: '1em', border: '1px solid black'},
  listItem: {fontSize: '1.5em'}
}

const RenderList = (props) => {
  return(
    <List style={style.listContainer}>
      {_.map(props.classList, (value) => {
        return (
          <List.Item style={style.listItem}>
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