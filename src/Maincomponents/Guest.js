import { Popover, Button, Text, Row, Card } from "@nextui-org/react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ManIcon from '@mui/icons-material/Man';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import {Box  } from "@mui/material";
import { useStatevalue } from "../Contextfiles/StateProvider"




export default function Guest() {
  const [{ user }, dispatch] = useStatevalue();


  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);


  const gusetdata=()=>{
    dispatch({
      type: "SET_GUESTTWO",
      guset:[adult,children]
    })
    localStorage.setItem('guest', JSON.stringify({adult:adult,children:children}))

  }



  const incrementAdult = () => setAdult(adult + 1);
  const decrementAdult = () => setAdult(adult - 1 >= 1 ? adult - 1 : 1);
  const incrementChildren = () => setChildren(children + 1);
  const decrementChildren = () =>
    setChildren(children - 1 >= 0 ? children - 1 : 0);

  return (
    <>
  <Box sx={{display:"flex",alignItems:"center"}}>

       <PeopleAltIcon/>

    <Popover isBordered disableShadow>
      <Popover.Trigger>
        <Button
          css={{ marginLeft: "auto", marginRight: "auto",borderRadius:"5px",color:"grey",backgroundColor:"white" }}
          auto
          flat
        >
          {adult} Adult. {children} Children
        </Button>
      </Popover.Trigger>
      <Popover.Content >
      <Card css={{padding:"20px"}}>
        <Row
          css={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Text><ManIcon/></Text>
          <Row
            css={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <RemoveOutlinedIcon onClick={decrementAdult} />
            <Input required value={adult}  width="80px" type="text" />
            <AddOutlinedIcon onClick={incrementAdult} />
          </Row>
        </Row>
        <Row
          css={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Text><EscalatorWarningIcon/></Text>
          <Row
            css={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <RemoveOutlinedIcon onClick={decrementChildren} />
            <Input   css={{ textAlign: "center" }} value={children}  width="80px" type="text" />
            <AddOutlinedIcon onClick={incrementChildren} />
          </Row>
        </Row>
          <Row>
          <Button onPress={gusetdata} css={{marginLeft:"auto",marginRight:"auto",marginTop:"15px",backgroundColor:"#5c60f5",color:"white"}} size="xs">Done</Button>
          </Row>
       </Card> 
      </Popover.Content>
    </Popover>
  </Box>  
    </>
  );
}
