import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useStatevalue } from "../Contextfiles/StateProvider";
import { Container, Loading } from '@nextui-org/react';
import axios from "axios"
import { useState,useEffect } from 'react';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Mybookings() {
    const [{ user}] = useStatevalue();
    const [getdata,setdata]=useState({})
    const [loading, setloading] = useState(true);


    const Email=user?.email

    console.log(Email)
    const options = { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'Asia/Kolkata' };
 
  const getbooking= async ()=>{
         setloading(true)
    try {
      const response = await axios.get(`http://localhost:2585/bookings/${Email}`)
         console.log(response.data)
         setdata(response.data)
      
    } catch (error) {
      console.log(error)
      
    }finally{
      setloading(false)
    }
  }

useEffect(() => {
  setloading(true)
  getbooking()
}, [])



  return (
    <Container>
    {loading?(
      <Loading size='md' color={'error'} css={{marginLeft:"550px",marginTop:"150px",marginBottom:"150px"}}/>
    ):(
      <>
    {Object.keys(getdata).length > 0 ?<>
   <Typography variant='h6' sx={{marginLeft:"600px",marginTop:"20px"}}>Mybookings</Typography>
    <Paper
      sx={{
        p: 2,
        marginTop:"50px",
        marginBottom:"150px",
        maxWidth: 700,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#f2f2f5',
      }}
    >
      <Grid container spacing={2} sx={{backgroundColor: "#f2f2f5"}}>
        <Grid item>
          <ButtonBase sx={{ width: 228, height: 228 }}>
            <Img sx={{ width: 228, height: 328 }} alt="complex" src={getdata?.property?.mainimage} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                {getdata?.property?.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
               Check-in : {new Date(getdata?.checkIn).toLocaleString('en-US', options)}
              </Typography>
              <Typography variant="body2" gutterBottom>
              Check-out : {new Date(getdata?.checkOut).toLocaleString('en-US', options)}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {getdata?.amountpaid}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {getdata?.orderid}
              </Typography>
            </Grid>
            <Grid item>

            </Grid>
          </Grid>
          <Grid item>
          <Typography sx={{marginRight:"auto",marginLeft:"auto"}} variant='subtitle2'>Thank you for choosing our hotel. We look forward to your stay!</Typography>

          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </>:
    <Typography variant='h4' sx={{marginTop:"100px",height:"60vh",textAlign:"center"}}>NO Bookings </Typography>
    }
    </>)}
    </Container>
  );
}
