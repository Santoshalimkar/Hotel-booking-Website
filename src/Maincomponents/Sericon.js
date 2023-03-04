import React from "react";
import BungalowIcon from "@mui/icons-material/Bungalow";
import VillaIcon from "@mui/icons-material/Villa";
import PoolIcon from "@mui/icons-material/Pool";
import CottageIcon from "@mui/icons-material/Cottage";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';


import { Typography } from "@mui/material";


const Sericon = () => {
  const matches = useMediaQuery('(max-width:480px)');


  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));



  return (
      <Box
        sx={{
          position: "relative",
          width: "95%",
          marginTop: "240px",
          height:matches?180:220,
          borderRadius: "33px",
          marginRight: "auto",
          marginLeft: "auto",
          backgroundColor: "#f2f2f5",
        }}
      >
         <Typography sx={{color:"#141729"}} variant={matches?'subtitle1':'h4'} textAlign={'center'} margin={3}>our services</Typography>
        <Box
      sx={{
        display: 'flex',
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width:matches?75: 128,
          height:matches?75: 128,
        },
      }}
    >
      <Paper elevation={3} sx={{borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
      <BungalowIcon sx={{ fontSize:matches ?"25px":"35px", color: "#15182d" }} />
      <Typography variant="subtitle2" sx={{color:"#15182d",fontSize:matches ?"0.48rem":"0.66rem"}} >  3Bhk Bunglow</Typography>
      <Typography variant="subtitle2"  sx={{color:"#15182d",fontSize:matches ?"0.48rem":"0.66rem"}} >  4Bhk Bunglow</Typography>

      </Paper>
      <Paper elevation={3} sx={{borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
      <VillaIcon sx={{ fontSize:matches ?"25px":"35px", color: "#15182d" }}  />
      <Typography variant="subtitle2"  sx={{fontSize:matches ?"0.48rem":"0.66rem"}} >  Without Pool</Typography>
      <Typography variant="subtitle2"  sx={{fontSize:matches ?"0.48rem":"0.66rem"}}>Villa</Typography>

      </Paper>
      <Paper elevation={3} sx={{borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
      <PoolIcon sx={{ fontSize:matches ?"25px":"35px", color: "#15182d" }}  />
      <Typography variant="subtitle2"  sx={{fontSize:matches ?"0.48rem":"0.66rem"}} >  Villa with Pool</Typography>
      <Typography variant="subtitle2"  sx={{fontSize:matches ?"0.48rem":"0.66rem"}} >  3/4 BHK Villa</Typography>

      </Paper>
      <Paper elevation={3} sx={{borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
      <CottageIcon sx={{ fontSize:matches ?"25px":"35px", color: "#15182d" }}  />
      <Typography variant="subtitle2"  sx={{fontSize:matches ?"0.48rem":"0.66rem"}} >  Private Cottage</Typography>
      <Typography variant="subtitle2"  sx={{fontSize:matches ?"0.48rem":"0.66rem"}} >  Private Tent</Typography>
      </Paper>
    </Box>
       
      </Box>
  );
};

export default Sericon;
