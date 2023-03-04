import React from 'react'
import { Button, Typography,Box } from '@mui/material'
import mainimg from "../asset/banner2.png";
import useMediaQuery from '@mui/material/useMediaQuery';




const Herocomp = () => {
  const matches = useMediaQuery('(max-width:480px)');

  return (
    <div className="main-img">
        <img src={mainimg} alt="main img"/>
        {/* <p className="main-text"> */}
        <Box
        sx={{
          position:"relative",
          color: "white",
          fontFamily:"Courier New, Courier, monospace",
          fontSize:"small",
           top:matches?"300px":"200px",
           padding: "80px",
         marginLeft:matches?"45px":"490px"

        }}
        
        
        >
          <Typography variant='subtitle2'>You Don't Just Stay Here,</Typography>
         <Typography variant='subtitle2'>You Enjoy Your Stay</Typography>
        </Box>
        {/* <img  style={{width: "112px"}} src={brandimg} alt="brandimg" ></img> */}
        <Button
         variant='contained'
          auto
          sx={{
            color: "white",
            marginLeft:matches?"160px":"600px",
            top:matches?"220px":"150px",
            backgroundColor:"#5c60f5"
          }}
        >
          Book Now
        </Button>
      </div>
  )
}

export default Herocomp