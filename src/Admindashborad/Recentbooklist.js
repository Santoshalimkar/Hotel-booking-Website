import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button, Divider } from '@mui/material';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Loading, Row ,Text} from '@nextui-org/react';

const Img = styled('img')({
  margin: '0',
  padding:"0",
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Recentbookinglist() {
  const [data,setdata]=useState([]);
  const [loading,setLoading]=useState(false)

  const options = { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'Asia/Kolkata' };


  const getbooking= async()=>{
       setLoading(true)
    try {
      const response= await axios.get("http://localhost:2585/Getallbookings")
       setdata(response.data)
     
      
    } catch (error) {
      console.log(error)
      
    }finally{
      setLoading(false)
    }
    

  }
  
 useEffect(() => {
   getbooking()
 }, [])
  
console.log(data)

  return (
  <>
  {loading?
  (<Loading css={{marginLeft:"600px"}} color='primary'/>):(
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: "70%",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      {data.map((item,index)=>(
        <>
      <Grid container spacing={2}>
        <Grid  item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={item.property.mainimage} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              {item.property.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Guest: {item.guestName}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Mob:{item.guestPhone}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Email:{item.guestEmail}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ORDER ID:{item.orderid}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(item.checkIn).toLocaleString('en-US', options)}/{new Date(item.checkOut).toLocaleString('en-US', options)}
              </Typography>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
          <Grid item>
            <Typography  variant="subtitle1" component="div">
               paid:₹{item.amountpaid}
            </Typography>
            
            {item.status==="booked"?
            <Button variant='contained'color='error'>
              Booked
            </Button>:
            <Button variant='contained' color='success'>
              Active
            </Button>}
          </Grid>
        </Grid>
      </Grid>
      <Divider></Divider>
        </>
        ))}
    </Paper>
    )}
</>    
  );
}
