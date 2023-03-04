import React from 'react'
import { Container, Card, Row, Text, Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';


const Reviewstwo = () => {
  return (
<Container fluid>
      <Card>
        <Card.Body>
          <Row justify="center" align="center">
            <Text h6 size={15}  css={{ m: 0 }}>
               <Link to="https://www.google.com/travel/hotels/Plot%20no-6%20ramgude%20society%20penthouse%20villa%20near%20malavli%20railway%20station%20-410405/entity/CgsIk7uJwNaDqeSqARAB/reviews?q=Plot%20no-6%20ramgude%20society%20penthouse%20villa%20near%20malavli%20railway%20station%20-410405&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4429192%2C4515404%2C4597339%2C4723331%2C4731329%2C4757164%2C4778035%2C4814050%2C4821091%2C4861688%2C4864715%2C4874190%2C4886082%2C4886480%2C4893075%2C4899568%2C4899569%2C4902277%2C4905600%2C4906019%2C4926165%2C4926489%2C4931360%2C4936396%2C4937897%2C4940607&hl=en-IN&gl=in&cs=1&ssta=1&rp=OAJAAEgBwAEC&ictx=1&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwjIgZXGsPT8AhUAAAAAHQAAAAAQAw&ts=CAESABoECgIaACoECgAaAA">
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

export default Reviewstwo