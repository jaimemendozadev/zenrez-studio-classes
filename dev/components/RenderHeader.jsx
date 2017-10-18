import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import {styles} from '../utils.js';

const RenderHeader = () => {
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

export default RenderHeader;