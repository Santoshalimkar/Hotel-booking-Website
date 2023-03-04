import React from 'react'
import { Container, Card, Row, Text, Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';


const Reviews = () => {
  return (
<Container fluid>
      <Card>
        <Card.Body>
          <Row justify="center" align="center">
            <Text h6 size={15}  css={{ m: 0 }}>
               <Link to="">
                <Button css={{backgroundColor:"#5c60f5"}}>
                  See all Reviews
                </Button>

               </Link>
             
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>  )
}

export default Reviews