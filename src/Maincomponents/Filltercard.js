import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import DirectionsIcon from "@mui/icons-material/Directions";
import Badge from "@mui/material/Badge";
import Cartfooter from "./Cartfooter";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useStatevalue } from "../Contextfiles/StateProvider";
import { useState, useEffect } from "react";
import { Grid,Box } from "@mui/material";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Crouseltwo from "./Crouseltwo";
import CardSkeleton from "./Cardskeleton";
import useMediaQuery from '@mui/material/useMediaQuery';




const ExpandMore = styled((props) => {


  const { expand, ...other } = props;
  return (
    <IconButton {...other} sx={{ "&:hover": { backgroundColor: "initial" } }} />
  );
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Filltercard({hotels}) {
  const matches = useMediaQuery('(max-width:480px)');

  const [{ user}] = useStatevalue();
  const [status, setStatus] = useState([]);
  const [expandedArray, setExpandedArray] = useState(
    Array(hotels.length).fill(false)
  );




  const handleExpandClick = (index) => {
    setExpandedArray((prev) => {
      const newArray = [...prev];
      newArray[index] = !newArray[index];
      return newArray;
    });
  };

  

  

  return (
    <>
    <Grid container spacing={1} rowSpacing={3} padding={2} zIndex={0}>
      {hotels.map((hotel, index) => (
        <>
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ maxWidth: 600,zIndex:"0",backgroundColor:"#f5f5f5" }}>
              <CardHeader title={hotel.name} subheader={hotel.category} />
              <CardMedia
                sx={{ padding: "10px" }}
                component="img"
                height="300"
                image={hotel.mainimage}
                referrerPolicy='no-referrer'
                alt="Paella dish"
              />
              <CardContent>
                <List sx={{ width: "100%" }}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Rating
                        name="read-only"
                        value={hotel.rating}
                        readOnly
                        size="small"
                      />
                    </ListItemButton>
                    <ListItemIcon>
                      <Link to={`/Cartview/${hotel._id}`}><Button flat  size="xs" style={{marginRight:"20px",marginBottom:"5px",zIndex:"0",backgroundColor:"#5c60f5",color:"white"}}>
                        View
                      </Button></Link>
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
                  </ListItem>
                  <Divider variant="middle" />
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <Badge
                        sx={{ paddingLeft: "15px" }}
                        badgeContent={hotel.reviews}
                      ></Badge>
                    </ListItemIcon>
                    <ListItemButton>
                      <ListItemText primary="Excellent reviews" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </CardContent>
              <CardActions disableSpacing>
                <Cartfooter hotel={hotel} />
              </CardActions>

              <CardContent
                sx={{
                  display: "flex",
                  flexFlow: "wrap-reverse",
                  margin: "0px",
                  justifyContent: "flex-end",
                  padding: "0px",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                }}
              >
                <ExpandMore
                  expand={expandedArray[index]}
                  onClick={() => handleExpandClick(index)}
                  aria-expanded={expandedArray[index]}
                  aria-label="show more"
                  sx={{ padding: "10px" }}
                >
                  {expandedArray[index] ? (
                    <>
                      <Typography>Hide details</Typography>
                      <ExpandLessIcon />
                    </>
                  ) : (
                    <>
                      <Typography>More details</Typography>
                      <ExpandMoreIcon />
                    </>
                  )}
                </ExpandMore>
              </CardContent>
              <Collapse in={expandedArray[index]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Crouseltwo hotel={hotel} />
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </>
      ))}
    </Grid>
      </>)
}
