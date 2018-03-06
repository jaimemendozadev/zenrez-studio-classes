import React from 'react';
import moment from 'moment';
import { Container, Image, Header, List } from 'semantic-ui-react';
import {styles} from '../utils.js';



const SingleClass = (props) => {
  const singleClass = props.singleClass;
  const classDate = moment(singleClass.class_date).format("dddd, MMMM Do, YYYY");

  console.log("the classDate is ", classDate)
  
  return (
    <Container style={styles.showSingleClass}>

      <Container style={{width: '70%'}}>
        <Image style={{margin: '0 auto', maxWidth: '100%', maxHeight: 'auto'}} src={singleClass.img_url} />
      </Container>
      
      <Header textAlign='center' size='huge'>{singleClass.title}</Header>
      <Container text>{singleClass.description}</Container>
      <Container style={styles.singleClassDescription} text>

      <List style={{marginTop: '2em'}} divided relaxed>
        <List.Item><strong>Instructor</strong>: {singleClass.instructor}</List.Item>
        <List.Item><strong>Price</strong>: ${singleClass.price}</List.Item>
        <List.Item><strong>Available Seats</strong>: {singleClass.available_seats}</List.Item>
        <List.Item><strong>Class Date</strong>: {classDate}</List.Item>
        <List.Item><strong>Start Time</strong>: {singleClass.start_time}</List.Item>
        <List.Item><strong>End Time</strong>: {singleClass.end_time}</List.Item>
      </List>
      
      </Container>

    </Container>
  )
}

export default SingleClass;