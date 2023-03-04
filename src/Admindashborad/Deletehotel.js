import React, { useState,useEffect } from 'react'
import { Box, Typography,Container,IconButton,Paper,InputBase,Divider} from '@mui/material'
import axios from "axios"
import BungalowIcon from '@mui/icons-material/Bungalow';
import SearchIcon from '@mui/icons-material/Search';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import img1 from "../asset/camping.jpg";
import { Link } from "react-router-dom";
import { useStatevalue } from "../Contextfiles/StateProvider";
import { Loading} from "@nextui-org/react";





const Deletehotel = () => {
  const [{user}]=useStatevalue();
  const [status, setStatus] = useState([]);
  const [fetchone, setfetchone] = useState({})
  const [hotelname, sethotelname] = useState("")
  const [error,setError]=useState("")
  const [loading,setLoading]=useState(false)



 
 
 const getone= async ()=>{
  setLoading(true)
  try {
    const response = await fetch("http://localhost:2585/Findone", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hotelname
      }),
    });
    const data = await response.json();
    console.log(data.hotel)
      setfetchone(data.hotel)
  } catch (error) {
       setError(error)
  }finally{
    setLoading(false)
  }
}

const deletehotel = async () => {
  const id=(fetchone._id)

  try {
    await axios
      .delete(`http://localhost:2585/Deleteone/${id}`)
      .then((res) => setStatus(res.data));
  } catch (error) {
    console.log(error);
  }
};
 
// console.log(fetchone)
 console.log(status)
if (status.hotel == "Hotel successfully deleted") {
      alert("deleted successfully ")
      window.location.reload();

}




// useEffect(() => {
//   if (fetchone.length===0){
//     alert("Details not found")
  
//   }
// }, [getone])







  return (
    <Container fluid css={{ width: "700px", marginTop: "40px" }}>
    <Typography variant="h5" align="center" sx={{margin:"20px"}}>
    DELETE INFORMATION
    </Typography>

    <Container >
       <Box>
       <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 ,marginLeft:"auto",marginRight:"auto"}}
    >
    
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Hotel name"
        inputProps={{ 'aria-label': 'search' }}
        value={hotelname}
        onChange={(e)=>(sethotelname(e.target.value))}

      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon onClick={getone} />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <BungalowIcon sx={{ color: "#fe019a", fontSize: "30px" }}
 />
      </IconButton>
    </Paper>
      </Box>
      <Container sx={{ marginLeft:"230px", marginTop:"20px"}}>
        {loading?<Loading type="gradient" css={{color:"#141729"}} marginLeft='auto' marginRight='auto' />:null}

          <Card
        sx={{
          width: 580,
          backgroundColor: "#f2f2f5",
          margin: "10px",

          borderRadius: "5px",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
          "&:hover": {
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          },
        }}
      >
          <div className="cart-container">
            <div className="card-media">
              <Link to={`/Cartview/${fetchone._id}`}>
                <CardMedia
                  sx={{ height: 300, margin: "5px", borderRadius: "5px" }}
                  image={fetchone.mainimage}
                  title="green iguana"
                />
              </Link>
            </div>
            <div className="cart-content">
              <CardContent>
                <div className="cart-header">
                  <div className="cart-titile">
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontFamily:
                          "Proxima Vara,Arial,Helvetica,Sans,Sans-Serif",
                        fontSize: "1.6rem",
                        lineHeight: "1.25",
                      }}
                    >
                      {fetchone.name}
                    </Typography>
                  </div>
                  <div className="fav-icon">
                    
                  </div>
                </div>
                <Divider variant="middle" />
                <div className="cart-list">
                  {/* <List sx={{ width: "100%" }}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <Rating
                          name="read-only"
                          value={fetchone.rating}
                          readOnly
                          size="small"
                        />
                        <ListItemText>{hotel.category}</ListItemText>
                      </ListItemButton>
                      <ListItemIcon>
                        <NavigateNextIcon sx={{ color: "#fe019a" }} />
                      </ListItemIcon>
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <DirectionsIcon />
                      </ListItemIcon>
                      <ListItemButton>
                        <ListItemText style={{ fontFamily: "monospace" }}>
                          {hotel.distance} Km away from the location
                        </ListItemText>
                      </ListItemButton>
                      <ListItemIcon>
                        <NavigateNextIcon sx={{ color: "#fe019a" }} />
                      </ListItemIcon>
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <Badge
                          sx={{ paddingLeft: "10px" }}
                          badgeContent={hotel.reviews}
                          color="success"
                        ></Badge>
                      </ListItemIcon>
                      <ListItemButton>
                        <ListItemText primary="Excellent reviews" />
                      </ListItemButton>
                      <ListItemIcon>
                        <NavigateNextIcon sx={{ color: "#fe019a" }} />
                      </ListItemIcon>
                    </ListItem>
                  </List> */}
                </div>
              </CardContent>
            </div>
            <div className="cart-action">
            </div>
          </div>
        
      </Card>
      {user ? (
      user.email === process.env.REACT_APP_ADMIN_EMAIL ? (
        Object.keys(fetchone).length>0?(
      <Button sx={{marginLeft:"265px"}} onClick={deletehotel}  color='error' variant='contained'>delete</Button>):(
      <Button sx={{marginLeft:"265px"}} disabled color='error' variant='contained'>delete</Button>)
     ) :null 
                      
    ) : null}
        
      </Container>


    </Container>







  </Container>

)
}

  

export default Deletehotel