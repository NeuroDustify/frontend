import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

function Footer() {
  return (
    <Segment attached='bottom' textAlign='center' style={{ marginTop: '20px' }}>
      <Container>
        <p>&copy; 2023 Smart Dustbin Management. All rights reserved.</p>
      </Container>
    </Segment>
  );
}

export default Footer;
