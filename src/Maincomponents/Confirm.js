import React from 'react'
import { Container, Card, Text } from "@nextui-org/react";
import Confirmcard from './Confirmcard';


const Confirm = () => {

  return (
    <Container>
        <Card>
            <Card.Header>
                <Text b css={{color:"#141729",fontSize:"20px",marginLeft:"auto",marginRight:"auto"}} >Confirm your Booking </Text>
            </Card.Header>
            <Card.Divider/>
            <Card.Body>
              <Confirmcard/>
            </Card.Body>

        </Card>
    </Container>
    
  )
}

export default Confirm