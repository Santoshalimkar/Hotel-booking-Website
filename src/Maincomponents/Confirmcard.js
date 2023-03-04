import { Card,Row,Text } from '@nextui-org/react'
import React,{useEffect,useState} from 'react'
import Cartfootertwo from './Cartfootertwo'
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeskIcon from '@mui/icons-material/Desk';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Loading} from "@nextui-org/react";
import CardMedia from "@mui/material/CardMedia";






const Confirmcard = () => {
  const dates = localStorage.getItem("date")!=="undefined"
  ?JSON.parse(localStorage.getItem('date'))
  :localStorage.clear()

  const guest = localStorage.getItem("guest")!=="undefined"
  ?JSON.parse(localStorage.getItem('guest'))
  :localStorage.clear()
     
const checkInDate = new Date(dates[0]);
const checkOutDate = new Date(dates[1]);

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
  
    
  


  const Confirmone= async (id)=>{

    try {
      return await axios.get(`http://localhost:2585/Retriveone/${id}`);
    } catch (error) {
      console.log("this is error", error);
    }


  }




  return (
    <Row justify="flex-end" css={{display:"flex",flexDirection:matches?"column":"row"}}>
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

    <Card css={{width:matches?"100%":"40%",marginLeft:"auto",marginRight:"auto",marginTop:"40px"}}>
      <Card.Header><Text b>Your Booking Details</Text></Card.Header>
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
       <div className="total-guest">
        <span><PeopleAltIcon sx={{color:"#5c60f5"}}/> <strong>Total Guest :Adult: {guest.adult} children:{guest.children}</strong></span>
        <span><strong>Your arrival time</strong></span>
        <span><CheckCircleOutlineIcon style={{color:"Green"}}/> Your room will be ready for check-in time</span>
        <span><DeskIcon style={{color:"Green"}}/>24-hour front desk – Help whenever you need it!</span>
        <span><AccessTimeIcon style={{color:"#5c60f5"}}/><strong>Timing</strong></span>
        <span>Check in as per you</span>
        <span>Check-out next day up to @11:00 AM</span>
       </div>
     </Card>
     </>
    ) : (
      <Loading type="gradient"  size='lg' css={{marginLeft:"auto",marginRight:"auto",marginTop:"100px",marginBottom:"100px",color:"#141729"}} />
    )}

 </Row>
  )
}

export default Confirmcard