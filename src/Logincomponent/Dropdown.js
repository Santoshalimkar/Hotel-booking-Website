import React, { useState } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Dropdown,Text, Grid, Button,Row,Modal } from "@nextui-org/react";
import { useStatevalue } from "../Contextfiles/StateProvider";
import { getAuth, signOut } from "firebase/auth";
import {app} from "../firebase.config";
import { Link } from 'react-router-dom';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';




const Dropdownmenu = () => {
    const [{user},dispatch]=useStatevalue()
    const [menu,setMenu]=useState(true)


    const closed=()=>{
        setMenu(false)
    }

    const openMenu=()=>{
        setMenu(true)
    }
   

    //modal 

    const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };


    const auth = getAuth(app);

    const logout=()=>{
      signOut(auth).then(() => {
      
        dispatch({
          type:'SET_USER',
          user:null
    
        })

        

        localStorage.removeItem('user')


      }).catch((error) => {
        console.log(error)
      });




    }





  return (
    <>
    <Grid.Container justify="flex-start" gap={2}>
    <Grid>
      <Dropdown  preventClose
 placement="bottom-left">
        <Dropdown.Trigger>

        {menu?<MenuOutlinedIcon onClick={closed}/>:<CloseOutlinedIcon onClick={openMenu}/>}

        </Dropdown.Trigger>
        {user.email==="santosh.sa4d@gmail.com"?
        <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
          <Dropdown.Item key="profile" css={{ height: "$18" }}>
            <Text b color="error" css={{ d: "flex" }}>
              Welcome to Lonavala Camping
            </Text>
            <Text b color="error" css={{ d: "flex" }}>
              {user.displayName?`${user.displayName}`:`${user.email}`}
            </Text>
          </Dropdown.Item>
          <Dropdown.Item key="settings" withDivider>
            <Link to="/Dashboard">ADMIN DASHBOARD</Link>
          </Dropdown.Item>
          <Dropdown.Item  key="logout" color="error" withDivider >
            <Button  css={{marginLeft:"auto",marginRight:"auto"}} color="error" size="sm" onClick={handler}>Log Out</Button>
          </Dropdown.Item>
        </Dropdown.Menu>
        :
        <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
          <Dropdown.Item key="profile" css={{ height: "$18" }}>
            <Text b color="error" css={{ d: "flex" }}>
              Welcome to Lonavala Camping
            </Text>
            <Text b color="error" css={{ d: "flex" }}>
              {user.displayName?`${user.displayName}`:`${user.email}`}
            </Text>
          </Dropdown.Item>
          <Dropdown.Item key="settings" withDivider>
            My Favorites
          </Dropdown.Item>
          <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
          <Dropdown.Item key="analytics" withDivider>
            My bookings
          </Dropdown.Item>
          <Dropdown.Item key="system">System</Dropdown.Item>
          <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
          <Dropdown.Item key="help_and_feedback" withDivider>
            Help & Feedback
          </Dropdown.Item>
          <Dropdown.Item  key="logout" color="error" withDivider >
            <Button  css={{marginLeft:"auto",marginRight:"auto"}} color="error" size="sm" onClick={handler}>Log Out</Button>
          </Dropdown.Item>
        </Dropdown.Menu>}
      </Dropdown>
    </Grid>
  </Grid.Container>
  <Modal
      closeButton
      preventClose
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
       
      <Modal.Body>
        
        
        <Row justify="center">
            <Text size={14}>Do You want to Logout!!</Text>
        </Row>
      </Modal.Body>
      <Modal.Footer>
      <Row justify="space-evenly">
        <Button auto flat color="error" onPress={closeHandler}>
          Close
        </Button>
        <Button css={{backgroundColor:"Black"}} auto onPress={logout}>
          Log Out
        </Button>
       </Row> 
      </Modal.Footer>
    </Modal>
  </>    
  )
}

export default Dropdownmenu