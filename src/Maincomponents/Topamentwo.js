import React from "react";
import { Card, Text,Row } from "@nextui-org/react";
import PoolIcon from '@mui/icons-material/Pool';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import KitchenIcon from '@mui/icons-material/Kitchen';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CelebrationIcon from '@mui/icons-material/Celebration';
import useMediaQuery from '@mui/material/useMediaQuery';

const Topamentwo = ({crouselhotel}) => {
  console.log(crouselhotel)
  const matches = useMediaQuery('(max-width:480px)');




  return (
    <Card css={{ mw:matches?"100%": "90%",marginLeft:"auto",marginRight:"auto" }}>
      <Card.Header>
        <Text b css={{marginLeft:"auto",marginRight:"auto"}}> Top amenities </Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",backgroundColor:"#f5f5f5"}}>
      <Row css={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}><PoolIcon sx={{color:"#141729",marginRight:"8px",fontSize:matches?"15px":"30px"}}/> <Text css={{fontSize:matches?"0.55rem":"15px"}}>{crouselhotel.topAmenities[0]}</Text> </Row>
      <Row css={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}><AcUnitIcon sx={{color:"#141729",marginRight:"8px",fontSize:matches?"15px":"30px"}}/> <Text css={{fontSize:matches?"0.55rem":"15px"}}>{crouselhotel.topAmenities[1]}</Text> </Row>
      <Row css={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}><CelebrationIcon sx={{color:"#141729",marginRight:"8px",fontSize:matches?"15px":"30px"}}/> <Text css={{fontSize:matches?"0.55rem":"15px"}}>{crouselhotel.topAmenities[2]}</Text> </Row>
      <Row css={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}><KitchenIcon sx={{color:"#141729",marginRight:"8px",fontSize:matches?"15px":"30px"}}/> <Text css={{fontSize:matches?"0.55rem":"15px"}}>{crouselhotel.topAmenities[3]}</Text> </Row>
      <Row css={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}><SportsCricketIcon sx={{color:"#141729",marginRight:"8px",fontSize:matches?"15px":"30px"}}/> <Text css={{fontSize:matches?"0.55rem":"15px"}}>{crouselhotel.topAmenities[4]}</Text> </Row>
      </Card.Body>
              
                <Card.Header>
                    <Text b  css={{marginLeft:"auto",marginRight:"auto"}}>All amenities</Text>
                </Card.Header>
                <Card.Divider/>
                <Card.Body>
                  <Card.Footer  css={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignContent:"center",color:"#141729"}}>
                    <Row justify="space-evenly" css={{display:"flex",flexDirection:"column"}}>
                    <Text  css={{fontSize:matches?"0.55rem":"14px"}} >{crouselhotel.allAmenities[0]}</Text>
                    <Text  css={{fontSize:matches?"0.55rem":"14px"}} >{crouselhotel.allAmenities[1]}</Text>
                    <Text  css={{fontSize:matches?"0.55rem":"14px"}} >{crouselhotel.allAmenities[2]}</Text>
                    <Text  css={{fontSize:matches?"0.55rem":"14px"}} >{crouselhotel.allAmenities[3]}</Text>
                    <Text  css={{fontSize:matches?"0.55rem":"14px"}} >{crouselhotel.allAmenities[4]}</Text>
                    
                    </Row>
                    <Row justify="space-evenly" css={{display:"flex",flexDirection:"column",justifyContent:"center"}}>

                  <Text css={{fontSize:matches?"0.55rem":"14px"}} >{crouselhotel.allAmenities[5]}</Text>
                  <Text css={{fontSize:matches?"0.55rem":"14px"}} >{crouselhotel.allAmenities[6]}</Text>
                  <Text css={{fontSize:matches?"0.55rem":"14px"}} >{crouselhotel.allAmenities[7]}</Text>
                  <Text css={{fontSize:matches?"0.55rem":"14px"}} >{crouselhotel.allAmenities[8]}</Text>
                  <Text css={{fontSize:matches?"0.55rem":"14px"}} >{crouselhotel.allAmenities[9]}</Text>
                 
                    </Row>
                    <Row justify="space-evenly" css={{display:"flex",flexDirection:"column"}}>

                    <Text css={{fontSize:matches?"0.55rem":"14px"}} >{crouselhotel.allAmenities[10]}</Text>
                    <Text css={{fontSize:matches?"0.55rem":"14px"}} >{crouselhotel.allAmenities[11]}</Text>
                    <Text css={{fontSize:matches?"0.55rem":"14px"}} >{crouselhotel.allAmenities[12]}</Text>
                    <Text css={{fontSize:matches?"0.55rem":"14px"}} >{crouselhotel.allAmenities[13]}</Text>
                    <Text css={{fontSize:matches?"0.55rem":"14px"}} >{crouselhotel.allAmenities[14]}</Text>
                    </Row>


                  </Card.Footer>

                </Card.Body>

                
                    
    </Card>
  );
};

export default Topamentwo;
