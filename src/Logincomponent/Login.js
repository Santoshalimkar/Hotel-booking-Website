import React, { useState } from "react";
import { Modal, Button, Text, Input, Row,Badge } from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import Divider from '@mui/material/Divider';
import googlesign from "../asset/btn_google_signin_light_normal_web@2x.png"
import { Checkbox } from "@nextui-org/react";
import Signup from "./Signup";
import { getAuth } from "firebase/auth";
import {signInWithEmailAndPassword ,signInWithPopup,GoogleAuthProvider,signOut} from "firebase/auth";
import {app} from "../firebase.config";
import {useStatevalue} from "../Contextfiles/StateProvider"
import Fade from '@mui/material/Fade';
import axios from "axios"








const auth = getAuth(app);
const provider = new GoogleAuthProvider();










export default function Login() {
  const [{user},dispatch]=useStatevalue()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState("")
  const [errorfield,setErrorfield]=useState(false)

  
  const handlerSignin= async ()=>{
    if (!email || !password) {
      setError('Email and password are required fields.');
      setErrorfield(true)
      setTimeout(() => {
        setErrorfield(false)
        setError("")
        
      }, 2000);

      return;
    }
    try {
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      console.log(user.providerData[0]);
      if (!user.emailVerified) {
        setError("Please verify your email address")
        setErrorfield(true)
        setTimeout(() => {
          setErrorfield(false)
          setError("")
          
        }, 5000);
        await signOut(auth); 
        return;
      }

      
      setVisible(false);
      dispatch({
        type:'SET_USER',
        user:user.providerData[0]

      })
      
      localStorage.setItem('user',JSON.stringify(user.providerData[0]))
      
      const token = await user.getIdToken();
      console.log(token)
      

      axios.get('http://localhost:2585/checkauthenticate',{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    
    } catch (error) {
      console.log(error)        
        setError("login failed please try again ")
        setErrorfield(true)
        setTimeout(() => {
          setErrorfield(false)
          setError("")
          
        }, 2000);

    }

  }


  const signIPopup= async()=>{


    try {
     const {user:{providerData}}= await signInWithPopup(auth, provider)

     dispatch({
      type:'SET_USER',
      user:providerData[0]

    })

    localStorage.setItem('user',JSON.stringify(providerData[0]))
     setVisible(false);
      
    } catch (error) {
      console.log(error)
      
    }




  
  

  }








  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button auto  onPress={handler} style={{backgroundColor:"#5c60f5", color:"white"}}>
        Login
      </Button>
      <Modal
        closeButton
        preventClose
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
        {/* <img  style={{width: "112px"}} src={brandimg} alt="brandimg" ></img>
        </Modal.Header> */}
          <Text id="modal-title" size={18} style={{color:"#141729",fontFamily:"monospace",marginRight:"5px"}}> 
            Welcome to
            <Text b size={18} style={{fontFamily:"monospace",marginLeft:"5px"}} >
              Lonavala Camping
            </Text>
          </Text> 
        </Modal.Header>
        {errorfield?
          <Row justify="center">
             <Fade in={errorfield}><Badge isSquared color="error">{error}</Badge></Fade>
          </Row>:""}
        <Modal.Body>
          <Input
          value={email}
          onChange={(e)=>setEmail((e.target.value))}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" style={{color:"#5c60f5"}}/>}
          />
          <Input.Password 
          value={password}
          onChange={(e)=>setPassword((e.target.value))}

            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" style={{color:"#5c60f5"}} />}
          />
          <Row justify="space-between">
            <Checkbox color="error">
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat css={{backgroundColor:"#5c60f5",color:"white"}} onPress={closeHandler}>
            Close
          </Button>
          <Button onClick={handlerSignin} auto  style={{backgroundColor:"black", color:"white"}}>
            Sign in
          </Button>
        </Modal.Footer>
        
        <Divider variant="middle"/>
           <Row justify="space-evenly" css={{display:"flex", flexDirection:"row",alignItems:"center"}}>
              <Text size={14}>New User ?</Text>
            <Text><Signup/></Text>
          </Row>
        <Divider variant="middle" />
          <Text size={14} style={{textAlign:"center"}}>OR</Text>
      
          <img onClick={signIPopup} className="googlesign" src={googlesign} alt="google sign"></img>

      </Modal>
      

    </div>
  );
}