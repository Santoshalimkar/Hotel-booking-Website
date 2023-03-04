import React, {useEffect, useState } from 'react'
import { Card, Col, Row, Button,Text,Badge} from "@nextui-org/react";
import {Link} from "react-router-dom"
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/material';
import Crousel from "../Crouselcomp/Crousel"
import { useParams } from 'react-router-dom';
import { Loading} from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';





const Cartview = () => {
  const dates = localStorage.getItem("date")!=="undefined"
  ?JSON.parse(localStorage.getItem('date'))
  :localStorage.clear()

  const [hoteltwo,setHotel]=useState({});
  const [loading, setLoading] = useState(true);


  const {id}=useParams();

  
  useEffect(() => {
    const loadhotel = async () => {
      setLoading(true);
      setHotel({}); 
      const response = await retrieveOneHotel(id);
      setHotel(response.data.hotel[0]);
      setLoading(false);
    };
    
    loadhotel();
  }, [id]);
  
  const retrieveOneHotel = async () => {

    try {
      return await axios.get(`http://localhost:2585/Retriveone/${id}`);
    } catch (error) {
      console.log('this is error', error);
    }
  };
    
  
const datescheck=()=>{
    if(!dates){
      toast.info('Please select date before Booking!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }

   }

  


  
  console.log(hoteltwo)

  return (
    <>
      {loading ? (
        <Stack spacing={1} sx={{marginTop:"100px"}}>
        <Skeleton variant="rect" width="60%" height="360px" sx={{marginLeft:"auto",marginRight:"auto"}} />
        {/* <Skeleton variant="rounded" width="60%" height="60px" sx={{marginLeft:"auto",marginRight:"auto"}} /> */}

        </Stack>
      ) : (


    <Card css={{ w: "65%", h: "400px",marginLeft:"auto",marginRight:"auto",marginTop:"100px"}}>
    {/* {hoteltwo.map((hoteltwo)=>( */}
      {/* <> */}
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          Your day your way
        </Text>
        <Text h3 color="white">
          {hoteltwo.name}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={hoteltwo.mainimage}
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
            <Badge isSquared  css={{border:"1px solid #141729 ",backgroundColor:"#141729"}}>
          50% off
        </Badge>
            </Col>
            <Col>
            <div className="cartview-price">
            <span className='Viewpre-price'>{hoteltwo.prevPrice}</span>
            <span className='ViewNow-price'>{hoteltwo.currentPrice}</span>
          </div>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
          {dates?
          <Link to={`/Booknow/${hoteltwo._id}`}>
          <Button  auto css={{marginTop:"10px",marginLeft:"18px",backgroundColor:"#141729"}}>
          Book Now
        </Button></Link>
        :
          <Button onClick={datescheck} color="error" auto css={{marginTop:"10px",marginLeft:"18px"}}>
          Book Now
        </Button>
        
        }
          </Row>
        </Col>
      </Row>
    </Card.Footer>
    {/* </> */}
    {/* ))} */}
  </Card>)}
  {Object.keys(hoteltwo).length > 0 ? (  <Crousel/>
):(      <Loading type="gradient"  size='lg' css={{marginLeft:"600px",marginTop:"100px",marginBottom:"100px",color:"#141729"}} />
)}
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>

  </>
  )
}

export default Cartview