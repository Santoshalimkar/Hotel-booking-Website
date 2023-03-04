import React,{useState,useEffect} from 'react'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container,Card,Text } from '@nextui-org/react'
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import {Link, useParams } from 'react-router-dom';
import axios from "axios"
import { Button } from 'rsuite';




const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });


const Paymentsuccesspage = () => {
    const [confirmcard,setConfirmcard]=useState({});
    const {id}=useParams()
    console.log(id)

    const [propertyId, setPropertyId] = useState("");
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [amount, setAmount] = useState(null);
    const [orderid, setOrderid] = useState(null);
  
    useEffect(() => {
      const searchParams = new URLSearchParams(window.location.search);
      setPropertyId(searchParams.get('proid'));
      setCheckIn(searchParams.get('checkin'));
      setCheckOut(searchParams.get('checkout'));
      setAmount(searchParams.get('amount'));
      setOrderid(searchParams.get('orderid'));
    }, []);

// console.log(propertyId)
console.log(confirmcard)

const checkInDate = new Date(checkIn);
const checkOutDate = new Date(checkOut);

const options = { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'Asia/Kolkata' };

const checkInDateString = checkInDate.toLocaleString('en-US', options);
const checkOutDateString = checkOutDate.toLocaleString('en-US', options);

const loadone = async (propertyId) => {
    console.log(propertyId)
    const response = await Successone(propertyId);
    setConfirmcard(response.data.hotel[0]);
  };

  useEffect(() => {

    loadone(propertyId);
    
  }, [propertyId]);
  
    
  


  const Successone= async (propertyId)=>{

    try {
      return await axios.get(`http://localhost:2585/Retriveone/${propertyId}`);
    } catch (error) {
      console.log("this is error", error);
    }


  }







  return (
    <Container>
      <Card css={{marginTop:"100px"}}>
      <Card.Header css={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
      <Typography variant='h2'  >Booking Successful!</Typography>
      <Text>Your booking details:</Text>

      </Card.Header>
      <Card.Body>
      <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth:"60%",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={confirmcard.mainimage} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {confirmcard.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Check in :{checkInDateString}   CheckOut:{checkOutDateString}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Order ID:{orderid}
              </Typography>
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            ₹{amount}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
</Card.Body>
 <Card.Footer css={{display:"flex",flexDirection:"column"}}>
    <Typography sx={{marginRight:"auto",marginLeft:"auto"}} variant='h6'>Thank you for choosing our hotel. We look forward to your stay!</Typography>
     <Link to='/'><Button>Back to home page</Button></Link>
 
 </Card.Footer>


      



      </Card>



    </Container>
  )
}

export default Paymentsuccesspage