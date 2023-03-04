import React from 'react'
import { Container, Card } from "@nextui-org/react";


const Locationtwo = () => {
  const locationname="hotel lonavla"
  const location=`https://maps.google.com/maps?q=${locationname}&t=k&z=10&ie=UTF8&iwloc=&output=embed`
  return (
<Container fluid>
      <Card>
        <Card.Body>
        <div className="mapouter">
  <div className="gmap_canvas">
    <iframe
      width="100%"
      height="320px"
      id="gmap_canvas"
    src={location}
      frameBorder={0}
      scrolling="no"
      marginHeight={0}
      marginWidth={0}
    />
    <br />
    
  </div>
</div>

        </Card.Body>
      </Card>
    </Container>  )
}

export default Locationtwo