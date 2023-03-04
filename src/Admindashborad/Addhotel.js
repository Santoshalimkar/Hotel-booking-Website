import {  Container} from "@nextui-org/react";
import { Typography,TextField,Button } from "@mui/material";
import React, { useState } from "react";
import FileBase from "react-filebase64"
 
const Addhotel = () => {
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
  const [amenities, setAmenities] = useState([]);
  const [status, setStatus] = useState("");
  const [mainimage,setMainimage]=useState([])
  const [images, setImages] = useState([]);

console.log(images)
console.log(amenities)
console.log(topAmenities)



  const Highlightlist=['3BHK fully furnished','4 bathrooms with gyser','Parking Area','Entire Villa','Party Hall','4BHK Fully Furnished ']
  const TopamenitiesList=['Pool','A/C','Party Hall','Kitchen','Indor games']
  const amenitiesList = [
    'Fully equipped kitchen',
    'Television',
    'Fridge',
    'Music System',
    'Geyser in all bath',
    'Inverter For Power Backup',
    'Aquaguard',
    'BBQ',
    'Parking Area',
    'Caretaker',
    'Private swimming pool',
    'Capacity up to 12 pax',
    'AC in bedrooms',
    'Hookah'

  ];


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


const handleTopAmenityChange = (e) => {
  const value = e.target.value;
  if (e.target.checked) {
    setTopAmenities([...topAmenities, value]);
  } else {
    setTopAmenities(topAmenities.filter(item => item !== value));
  }
};
const handleAmenityChange = (e) => {
  const value = e.target.value;
  if (e.target.checked) {
    setAmenities([...amenities, value]);
  } else {
    setAmenities(amenities.filter(item => item !== value));
  }
};
const handleTopHighlightChange = (e) => {
  const value = e.target.value;
  if (e.target.checked) {
    setHighlights([...highlights, value]);
  } else {
    setHighlights(highlights.filter(item => item !== value));
  }
};

const handleFileInputChange = (event) => {
  const files = Array.from(event.target.files);
  const promises = files.map((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  });
  Promise.all(promises)
    .then((base64Images) => {
      setImages(base64Images);
    })
    .catch((error) => console.error(error));
};


  



    

  

  
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
      allAmenities:amenities,
      status:status,
      mainimage:mainimage.image,
      images:images
      
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

      if (res) {
        const hotel = await res.json();
         if (hotel){
          alert("added successfully")
      } else {
        const error = await res.json();
        console.log("error: ", error.message);
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
        ADD HOTEL INFORMATION
      </Typography>
      <Container
        fluid
        css={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "20px",
        }}>
          
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
         <TextField id="filled-basic" label="status" variant="filled"
          value={status}
           onChange={(e) => setStatus(e.target.value)} />

          <h2>Main images</h2>

           <div>
           <FileBase
        multiple={false}
        onDone={({base64})=> setMainimage({...mainimage,image:base64})}/>

            </div>
            <h2>images</h2>

           <div>
           <input type="file" multiple onChange={handleFileInputChange} />
         </div>
         <h2>Amenities</h2>
        {amenitiesList.map((Topamenity, index) => (
        <label key={index}>
          <input type="checkbox" value={Topamenity} onChange={handleAmenityChange} />
          {Topamenity}
        </label>
      ))}
         <h2>TopAmenities</h2>
        {TopamenitiesList.map((amenity, index) => (
        <label key={index}>
          <input type="checkbox" value={amenity} onChange={handleTopAmenityChange} />
          {amenity}
        </label>
      ))}
         <h2>highlights</h2>
        {Highlightlist.map((high, index) => (
        <label key={index}>
          <input type="checkbox" value={high} onChange={handleTopHighlightChange} />
          {high}
        </label>
      ))}

          

         <Button  onClick={handleSubmit} variant="contained"> ADD HOTEL</Button>


















         </form>








        </Container>

    </Container>
  );
};
export default Addhotel;
