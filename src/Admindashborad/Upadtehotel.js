import {  Container} from "@nextui-org/react";
import { Typography,TextField,Button,IconButton,Paper,Box,InputBase,Divider } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search"
import BungalowIcon from "@mui/icons-material/Bungalow"

const Updatehotel = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [distance, setDistance] = useState("");
  const [reviews, setReviews] = useState("");
  const [offer, setOffer] = useState("");
  const [highlights, setHighlights] = useState([]);
  var [prevPrice, setPrevPrice] = useState("");
  var [currentPrice, setCurrentPrice] = useState("");
  const [reviewLink, setReviewLink] = useState("");
  const [location, setLocation] = useState("");
  const [topAmenities, setTopAmenities] = useState([]);
  const [allAmenities, setAllAmenities] = useState([]);
  const [status, setStatus] = useState("");
  const [images, setImages] = useState([]);



  const handlepreprice=(e)=>{
    setPrevPrice(e.target.value)
  }
  const handlecurrentprice=(e)=>{
    setCurrentPrice(e.target.value)
  }
  
  let prevPriceFormat = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(prevPrice);
let currentPriceFormat = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(currentPrice);

let prevPriceString = `₹${prevPriceFormat}`;
let currentPriceString = `₹${currentPriceFormat}`;






  const handleImageChange = (event) => {
    setImages(Array.from(event.target.files[0]));
  };

  const formData = new FormData();
    images.forEach((image, index) => {
      formData.append(`image-${index}`, image);
    });



    

  

  
    const data = {
      name:name,
      rating:rating,
      category:category,
      distance:distance,
      reviews:reviews,
      offer:offer,
      highlights:highlights,
      prevPrice:prevPriceString,
      currentPrice:currentPriceString,
      reviewLink:reviewLink,
      location:location,
      topAmenities:topAmenities,
      allAmenities:allAmenities,
      status:status,
      images:formData,
      
    };

    const requiredFields = ["name", "rating", "category", "distance", "currentPrice", "location", "status"];

    const isValid = requiredFields.every(field => data[field] !== "");

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(isValid){

      const res = await fetch("http://localhost:2585/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        console.log("error: ", error.message);
      } else {
        const hotel = await res.json();
         if (hotel){
          alert("added successfully")
         }
      }
    }
    else{
      alert("All fields are required")
    }
     
  }; 


  return (
    <Container fluid css={{ width: "700px", marginTop: "20px" }}>
      <Typography variant="h5" align="center">
        UPDTAE HOTEL INFORMATION
      </Typography>
      <Container
        fluid
        css={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "20px",
        }}>
         <Box sx={{marginLeft:"auto",marginRight:"auto"}}>
       <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 ,marginLeft:"auto",marginRight:"auto"}}
    >
    
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search and Upadte"
        inputProps={{ 'aria-label': 'search' }}

      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <BungalowIcon sx={{ color: "#fe019a", fontSize: "30px" }}
 />
      </IconButton>
    </Paper>
      </Box>
          
         <form id="addform">
         <TextField id="outlined-basic" label="Hotel name" variant="filled"
         value={name}
           onChange={(e) => setName(e.target.value)} />
         <TextField type="number" id="filled-basic" label="Rating" variant="filled"
         value={rating}
           onChange={(e) => setRating(e.target.value)} />
         <TextField id="filled-basic" label="Category" variant="filled"
         value={category}
           onChange={(e) => setCategory(e.target.value)} />
         <TextField type="number" id="filled-basic" label="Distance" variant="filled"
         value={distance}
           onChange={(e) => setDistance(e.target.value)} />
         <TextField id="filled-basic" label="reviews" variant="filled"
         value={reviews}
           onChange={(e) => setReviews(e.target.value)} /> 
         <TextField id="filled-basic" label="offer" variant="filled"
         value={offer}
           onChange={(e) => setOffer(e.target.value)} /> 
         <TextField id="filled-basic" label="highlights" variant="filled"
         value={highlights}
           onChange={(e) => setHighlights(e.target.value)} />
         <TextField type="number" id="filled-basic" label="prev price" variant="filled"
         value={prevPrice}
           onChange={handlepreprice} />
         <TextField type="number" id=" filled-basic" label="current price" variant="filled"
         value={currentPrice}
           onChange={handlecurrentprice} />
         <TextField id="filled-basic" label="Review link" variant="filled"
          value={reviewLink}
           onChange={(e) => setReviewLink(e.target.value)} />
         <TextField id="filled-basic" label="location" variant="filled"
          value={location}
           onChange={(e) => setLocation(e.target.value)} />
         <TextField id="filled-basic" label="Top amentities" variant="filled"
          value={topAmenities}
           onChange={(e) => setTopAmenities(e.target.value)} />
         <TextField id="filled-basic" label="All amentities" variant="filled"
          value={allAmenities}
           onChange={(e) => setAllAmenities(e.target.value)} />
         <TextField id="filled-basic" label="status" variant="filled"
          value={status}
           onChange={(e) => setStatus(e.target.value)} />
         <input type="file" multiple onChange={handleImageChange} />

          

         <Button  onClick={handleSubmit} variant="contained"> ADD HOTEL</Button>


















         </form>








        </Container>

    </Container>
  );
};
export default Updatehotel;
