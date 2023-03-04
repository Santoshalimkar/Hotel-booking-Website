import { Card,Row,Text } from '@nextui-org/react'
import React,{useEffect,useState} from 'react'
import Cartfootertwo from './Cartfootertwo'
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Loading} from "@nextui-org/react";
import CardMedia from "@mui/material/CardMedia";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { useStatevalue } from "../Contextfiles/StateProvider"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';








const Payment = () => {
  const [{ user }] = useStatevalue();

  const guestdetails=localStorage.getItem('guestdetails')!=="undefined"
     ?JSON.parse(localStorage.getItem('guestdetails'))
     :localStorage.clear()

  const guest=localStorage.getItem('guest')!=="undefined"
     ?JSON.parse(localStorage.getItem('guest'))
     :localStorage.clear()

     const dates = localStorage.getItem("date");
     const datesArray = JSON.parse(dates);
     
const checkInDate = new Date(datesArray[0]);
const checkOutDate = new Date(datesArray[1]);

const millisecondsPerDay = 86400000; // 24 * 60 * 60 * 1000

const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
const daysDifference = Math.floor(timeDifference / millisecondsPerDay);

const options = { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'Asia/Kolkata' };

const checkInDateString = checkInDate.toLocaleString('en-US', options);
const checkOutDateString = checkOutDate.toLocaleString('en-US', options);



  const matches = useMediaQuery('(max-width:480px)');
  const [confirmcard,setConfirmcard]=useState({});


  const {id}=useParams();

  const loadone = async () => {
    const response = await Confirmone(id);
    setConfirmcard(response.data.hotel[0]);
  };
  
  useEffect(() => {
    loadone();
  }, [id]);
  
  const priceString = confirmcard.currentPrice;
let priceNumber = 0;
if (priceString) {
  priceNumber = parseInt(priceString.replace(/[^\d]/g, ""));
}



  const Confirmone= async (id)=>{

    try {
      return await axios.get(`http://localhost:2585/Retriveone/${id}`);
    } catch (error) {
      console.log("this is error", error);
    }


  }




  return (
    <Row justify="flex-end" css={{display:"flex",flexDirection:matches?"column":"row",marginTop:"30px"}}>
    {Object.keys(confirmcard).length > 0 ? (
      <>
        <Card css={{width:matches?"100%":"40%",marginLeft:"auto",marginRight:"auto"}}>
              <CardMedia
                sx={{ padding: "0px" }}
                component="img"
                height="200"
                image={confirmcard.mainimage}
                alt="Paella dish"
                referrerPolicy='no-referrer'
              />
          <Card.Body>
            <Card.Header><Text b css={{marginLeft:"auto",marginRight:"auto",fontSize:"20px"}}>{confirmcard.name}</Text></Card.Header>
            <Cartfootertwo confirmcard={confirmcard}/>
          </Card.Body>
        </Card>

    <Card css={{width:matches?"100%":"40%",marginLeft:"auto",marginRight:"auto"}}>
      <Card.Header><Text css={{marginLeft:"auto",marginRight:"auto"}} b>Your Booking Details</Text></Card.Header>
      <Card.Divider/>
      <Card.Body css={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
       <div className="check-in">
        <span>Check in</span>
        <span><strong>{dates?checkInDateString:"Date Not selected"}</strong></span>
        <span>from</span>
       </div>
       <div className="check-out">
       <span>Check out</span>
       <span><strong>{dates?checkOutDateString:"Date Not selected"}</strong></span>
       <span>unitl</span>
       </div>

      </Card.Body>
      <Card.Header>
        <Text css={{marginLeft:"auto",marginRight:"auto"}} b>Guest Information</Text>
      </Card.Header>
      <Card.Divider/>
      <Card.Body>
      <Row css={{display:"flex",flexDirection:"column"}}>
        <Text css={{paddingLeft:"20px",display:"flex",justifyContent:"space-between",justifyItems:"center"}} ><AccountCircleIcon sx={{color:"#5c60f5"}}/>{guestdetails.fullName}</Text>
        <Text css={{paddingLeft:"20px",display:"flex",justifyContent:"space-between",justifyItems:"center"}}><CallIcon sx={{color:"#5c60f5"}}/>{guestdetails.mobileNo}</Text>
      <Text css={{paddingLeft:"20px",display:"flex",justifyContent:"space-between",justifyItems:"center"}}><EmailIcon sx={{color:"#5c60f5"}}/>{user.email}</Text>
      <Text css={{paddingLeft:"20px",display:"flex",justifyContent:"space-between",justifyItems:"center"}}><PeopleAltIcon sx={{color:"#5c60f5"}}/>Adult: {guest.adult} Children:{guest.children}</Text>
      </Row>
      <Card.Divider css={{padding:"10px"}}/>
      <Card.Footer css={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
      <Row wrap="wrap" justify="space-between" align="center">
                <Text b>Sub total</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {confirmcard.currentPrice}
                </Text>
      </Row>          
      <Row wrap="wrap" justify="space-between" align="center">
                <Text >Days</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  x{daysDifference}
                </Text>
      </Row> 
      <Card.Divider css={{padding:"5pxpx"}}/>
      <Row wrap="wrap" justify="space-between" align="center">
                <Text b>Total</Text>
                <Text b>
                ₹{(priceNumber)*(daysDifference)}
                </Text>       
      </Row>
      </Card.Footer>
      </Card.Body>
       
     </Card>
     </>
    ) : (
      <Loading type="gradient"  size='lg' css={{marginLeft:"auto",marginRight:"auto",marginTop:"100px",marginBottom:"100px",color:"#141729"}} />
    )}

 </Row>
  )
}

export default Payment