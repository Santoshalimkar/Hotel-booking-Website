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
import Skeleton from "@mui/material/Skeleton";

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

export default function CardSkeleton() {
  return (
    <Card width="100%">
      <CardHeader
        title={<Skeleton animation="wave" width="100%" />}
        subheader={<Skeleton animation="wave" width="10%" />}
      />
      <CardMedia>
        <Skeleton animation="wave" height={300} variant='rectangular' width="100%" />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Skeleton animation="wave" width="100%" />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Skeleton animation="wave" width="100%" />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Skeleton animation="wave" width="100%" />
      </CardActions>
      <CardContent>
        <Typography>
          <Skeleton animation="wave" variant="rectangular" height={100} width="100%" />
        </Typography>

      </CardContent>
      <CardContent>
        
      <Typography sx={{marginLeft:"500px"}}>
          <Skeleton animation="wave" variant="text" width="15%" />
        </Typography>
    </CardContent>
      
    </Card>
  );
}
