import React from 'react'
import { Dropdown, Avatar, Text, Grid, Button,Row,Modal } from "@nextui-org/react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useStatevalue } from "../Contextfiles/StateProvider";
import { getAuth, signOut } from "firebase/auth";
import {app} from "../firebase.config";
import { Link,  useNavigation } from 'react-router-dom';






const Avatarcomp = () => {

  const navigate=useNavigation
    const [{user},dispatch]=useStatevalue()
   
 
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
        <Dropdown placement="bottom-left">
          <Dropdown.Trigger>
            <Avatar
              zoomed
              bordered
              size="lg"
              as="button"
              referrerPolicy='no-referrer'
              src={user.photoURL}
              icon={<AccountCircleIcon sx={{fontSize:"55px",color:"#141729"}}/>}
            />
          </Dropdown.Trigger>
          {user.email===process.env.REACT_APP_ADMIN_EMAIL?
          <Dropdown.Menu color='primary' aria-label="Avatar Actions">
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b css={{ d: "flex",color:"#15182d" }}>
                Welcome to Lonavala Camping
              </Text>
              <Text b  css={{ d: "flex" }}>
                {user.displayName?`${user.displayName}`:`${user.email}`}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings"  css={{color:"#707c95"}} withDivider>
              <Link style={{color:"#707c95"}} to="/Dashboard">ADMIN DASHBOARD</Link>
            </Dropdown.Item>
            <Dropdown.Item  key="logout"  withDivider >
              <Button  css={{marginLeft:"auto",marginRight:"auto",backgroundColor:"#5c60f5",color:"white"}}  size="sm" onClick={handler}>Log Out</Button>
            </Dropdown.Item>
          </Dropdown.Menu>
          :
          <Dropdown.Menu color='primary' aria-label="Avatar Actions">
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b  css={{ d: "flex" }}>
                Welcome to Lonavala Camping
              </Text>
              <Text b  css={{ d: "flex" }}>
                {user.displayName?`${user.displayName}`:`${user.email}`}
              </Text>
            </Dropdown.Item>
              <Dropdown.Item  key="analytics" withDivider>
              <Link to="/mybookings">My bookings</Link>
            </Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item  key="logout"  withDivider >
              <Button  css={{marginLeft:"auto",marginRight:"auto",backgroundColor:"#5c60f5",color:"white"}}  size="sm" onClick={handler}>Log Out</Button>
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
          <Button auto flat css={{backgroundColor:"#5c60f5",color:"white"}} onPress={closeHandler}>
            Close
          </Button>
          <Button css={{backgroundColor:"#141729"}} auto onPress={logout}>
            Log Out
          </Button>
         </Row> 
        </Modal.Footer>
      </Modal>
    </>    
  )
  

}

export default Avatarcomp;