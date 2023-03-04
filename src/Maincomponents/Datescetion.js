import React, { useState,useEffect } from 'react'
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import Catetype from "./Catetype"
import Date from './Date';
import { useStatevalue } from "../Contextfiles/StateProvider";
import Carttwo from './Carttwo';
import Filltercard from './Filltercard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListIcon from '@mui/icons-material/List';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Guest from "../Maincomponents/Guest"



// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


const Datescetion = () => {
  const [{date,Category},dispatch] = useStatevalue();
  const [fillterdata,setFillterdata]=useState([])


  console.log(fillterdata)

  // console.log(Category)

 const  handlesearch=()=>{
      
     if(date && Category) {

      const fetchHotels = async () => {
        const res = await fetch(`http://localhost:2585/Fillterproperties?category=${Category}&checkIn=2023-02-23&checkOut=2023-02-24`);
        const data = await res.json();
        setFillterdata(data.properties);
        dispatch({
          type:"SET_FILLTER",
          fillter:data,
        })

        
    };
   fetchHotels();


     }


  }






  const matches = useMediaQuery('(max-width:480px)');

  const [isFixed, setIsFixed] = useState(false);


 










   
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 640) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<>

    <div className={`date-box ${matches ? '' : (isFixed ? 'fixed' : '')}`}> 
<Box
        sx={{
          zIndex:"0",
          position: "relative",
          margin:matches?"10px":"",
          // width:"98%",
          height:matches?110:55,
          marginRight: "auto",
          marginLeft: "auto",
          backgroundColor: "#f2f2f5"
        }}
      >
        <Box
      sx={{
        marginTop:"2px",
        marginRight: "auto",
          marginLeft: "auto",
        width:matches?"98%":"99%",
        borderRadius:matches?"15px":"15px",
        zIndex:"0",
        border:"2px solid #141729",
        backgroundColor:"#141729",
        display: 'flex',
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width:matches?180: 228,
          height:matches?38: 38,
          
        },
      }}
    >
      {/* <Button size={'sm'} color={'error'} >Search</Button> */}
      <Date/>
      <Catetype/>
      <Guest/>
      <Button  endIcon={<SearchIcon />} sx={{borderRadius:"10px",backgroundColor:"#5c60f5",color:"white",'&:hover':{backgroundColor:"#5c60f5",color:"white"}}} onClick={handlesearch} >Search</Button>
    </Box>
      </Box>
</div>

{fillterdata.length>0?<Filltercard hotels={fillterdata}/>:
<Carttwo/>}




</>
  )
}

export default Datescetion
