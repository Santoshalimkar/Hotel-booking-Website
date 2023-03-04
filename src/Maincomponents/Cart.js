import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img1 from "../asset/camping.jpg";
import { Link } from "react-router-dom";
import { useStatevalue } from "../Contextfiles/StateProvider";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Rating from "@mui/material/Rating";
import DirectionsIcon from "@mui/icons-material/Directions";
import Badge from "@mui/material/Badge";
import Cartfooter from "./Cartfooter";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function Cart({fetchone}) {
  console.log(fetchone)
  const [status, setStatus] = useState([]);
  const [{user}]=useStatevalue();

  

 

  const deletehotel = async (id) => {
    try {
      await axios
        .delete(`http://localhost:2585/Deleteone/${id}`)
        .then((res) => setStatus(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  if (status.message == "Hotel successfully deleted") {
  }

  return (
    <Grid  sx={{display:"inline-block"}}>
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
        {fetchone.map((hotel) => (
          <div className="cart-container">
            <div className="card-media">
              <Link to={`/Cartview/${hotel._id}`}>
                <CardMedia
                  sx={{ height: 300, margin: "5px", borderRadius: "5px" }}
                  image={img1}
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
                      {hotel.name}
                    </Typography>
                  </div>
                  <div className="fav-icon">
                    {user ? (
                      user.email === "santosh.sa4d@gmail.com" ? (
                        <Button>
                          <DeleteIcon
                            onClick={() => deletehotel(hotel._id)}
                            sx={{ color: "#fe019a", fontSize: "30px" }}
                          />
                        </Button>
                      ) :null 
                      
                    ) : null}
                  </div>
                </div>
                <Divider variant="middle" />
                <div className="cart-list">
                  <List sx={{ width: "100%" }}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <Rating
                          name="read-only"
                          value={hotel.rating}
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
                  </List>
                </div>
              </CardContent>
            </div>
            <div className="cart-action">
              <Cartfooter hotel={hotel} />
            </div>
          </div>
        ))}
      </Card>
    </Grid>
  );
}
