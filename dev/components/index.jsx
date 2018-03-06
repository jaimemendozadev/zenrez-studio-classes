import React from 'react';
import { Container, Header, List, Image, Label } from 'semantic-ui-react';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {styles, handleClick} from '../utils.js';


export const RenderHeader = () => {
  return(
    <Container style={styles.header} fluid>
      <Header
        as='h1'
        content='Welcome to the Zenrez Studio Class Schedule!'
        style={styles.header_h1}
      />
      <Header
        as='h2'
        content='Choose from one of our awesome classes!'
        style={styles.header_h2}
      />    
    </Container>
  )
}



export const RenderList = (props) => {
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



export const RenderSpinner = () => {
  return(
    <div style={styles.spinner}>
      <h2>Please wait while we fetch the data...</h2>
      <img src="/imgs/spiffygif_46x46.gif" /> 
    </div>    
  )
}
