import React from "react";
import { Button,Row } from "@nextui-org/react";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from "@mui/icons-material/Copyright";









import { Typography } from "@mui/material";


const Footer = () => {
  const matches = useMediaQuery('(max-width:480px)');


  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));



  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f2f2f5",
          position: "relative",
          width: "100%",
          height:matches?120:140,
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
   <Typography variant={matches?'subtitle2':'subtitle2'} textAlign={'center'}>Thank you for visiting Lonavala Stay</Typography>

        <Box
      sx={{
        Padding:"20px",
        display: 'flex',
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width:matches?90: 230,
          height:matches?75: 100,
          // backgroundColor: "#3c3d41",

        },
      }}
    >
      <Paper elevation={3} sx={{borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
      <EmailIcon sx={{ fontSize:matches ?"25px":"35px", color: "##141729" }} />
      <Typography variant="subtitle2" sx={{fontSize:matches ?"0.37rem":"0.66rem",color:"#141729"}} >Lonavlastay@gmail.com</Typography>
      <Typography variant="subtitle2"  sx={{fontSize:matches ?"0.37rem":"0.66rem",color:"#141729"}} >teamlonavlastay@gmail.com</Typography>

      </Paper>
      <Paper elevation={3} sx={{borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
      <CallIcon sx={{ fontSize:matches ?"25px":"35px", color: "##141729" }}  />
      <Typography variant="subtitle2"  sx={{fontSize:matches ?"0.48rem":"0.66rem",color:"#141729"}} >91-8669186483</Typography>
      <Typography variant="subtitle2"  sx={{fontSize:matches ?"0.48rem":"0.66rem",color:"#141729"}}>91-8669186483</Typography>

      </Paper>
      <Paper elevation={3} sx={{borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
      <LocationOnIcon sx={{ fontSize:matches ?"25px":"35px", color: "##141729" }}  />
      <Typography variant="subtitle2"  sx={{fontSize:matches ?"0.48rem":"0.66rem",color:"#141729"}} >Lonavla,</Typography>
      <Typography variant="subtitle2"  sx={{fontSize:matches ?"0.48rem":"0.66rem",color:"#141729"}} >Pune MH-410401</Typography>

      </Paper>
      <Paper elevation={3} sx={{borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
      <Button  
              size={matches?'xs':"md"}
              style={{
                backgroundColor: "#5c60f5",
                color: "white",
                

              }}
            >
              Contact us
            </Button> 
            <Row justify="center" css={{top:"10px",cursor:"pointer"}}>
            <InstagramIcon sx={{ color:"#141729",fontSize:matches?"15px":""}} />
            <FacebookIcon sx={{ color:"#141729",fontSize:matches?"15px":""}}/>
            <TwitterIcon sx={{ color:"#141729",fontSize:matches?"15px":""}}/>
            <LinkedInIcon sx={{ color:"#141729",fontSize:matches?"15px":""}}/>
            <YouTubeIcon sx={{ color:"#141729",fontSize:matches?"15px":""}}/>
            </Row>
      </Paper>
      
    </Box>
       
      </Box>
      <Box
      sx={{
    backgroundColor: "#141729",
    width: "100%",
    height: "60px",
    textalign: "center",
    fontWeight: 400,
    alignItems: "center",
    color: "white",
    display: "flex",
    justifyContent: "center"}}
      >
      <CopyrightIcon sx={{ color: "#5c60f5" }} />
      2023 copyright|All rights reserved. <strong>LONAVLA STAY</strong>

      </Box>
      </>
  );
};

export default Footer;
