import React, { useState } from "react";
import { Modal, Button, Text, Input, Row,Badge } from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { Checkbox } from "@nextui-org/react";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import {app} from "../firebase.config";






const auth = getAuth(app);







export default function Signup() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmpassword,setConfirmpassword]=useState("")
  const [error,setError]=useState("")
  const [success,setSuccess]=useState("")
  const [errorfield,setErrorfield]=useState(false)
  const [successfield,setSucessfield]=useState(false)


  const handleSignUp = async (e) => {
  if (password !== confirmpassword){
      setError("password do not match")
      setErrorfield(true)
      setTimeout(()=>{
        setError("")
        setErrorfield(false)
      },2000)
    return;
  }
  if (!email || !password) {
    setError('Email and password are required fields.');
    setErrorfield(true)
      setTimeout(()=>{
        setError("")
        setErrorfield(false)
      },2000)
    return;
            
  }

  try {
    
  const  result = await createUserWithEmailAndPassword(auth, email, password)
  console.log(result)
      
  // Send email verification link to the user
  const user = result.user;
  await sendEmailVerification(user)  

      setSuccess("Please verify your email address before logging in. ")
      setSucessfield(true)

      setTimeout(() => {
        setSucessfield(false)
        setSuccess("")
        setVisible(false)
        
      }, 5000);

  } catch (error) {
    console.log(error.message)
    setError("invalid email")
    setErrorfield(true)
    setTimeout(()=>{
      setError("")
      setErrorfield(false)
    },2000)
    
  }


};




  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Button auto  onPress={handler} bordered css={{color:"#5c60f5"}}>
        Sign up
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
            Sign
            <Text b size={18} style={{fontFamily:"monospace",marginLeft:"5px"}} >
              up
            </Text>
          </Text> 
        </Modal.Header>
        <Modal.Body>
        {errorfield?
          <Row justify="center">
             <Badge isSquared color="error">{error}</Badge>
          </Row>: ""}
        {successfield?
          <Row justify="center">
             <Badge isSquared css={{margin:"10px"}} color="success">{success}</Badge>
          </Row>: ""}
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
          onChange={(e)=>setPassword(e.target.value)}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" style={{color:"#5c60f5"}} />}
          />
          <Input.Password
          value={confirmpassword} 
          onChange={(e)=>setConfirmpassword((e.target.value))}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder=" Confirm Password"
            contentLeft={<Password fill="currentColor" style={{color:"#5c60f5"}} />}
          />
          <Row justify="space-between">
            <Checkbox >
              <Text size={14}>Remember me</Text>
            </Checkbox>
            {/* <Text size={14}>Forgot password?</Text> */}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat css={{backgroundColor:"#5c60f5",color:"white"}} onPress={closeHandler}>
            Close
          </Button>
          <Button onClick={handleSignUp} auto  style={{backgroundColor:"black", color:"white"}}>
            Sign up
          </Button>
        </Modal.Footer>
        {/* <Divider variant="middle" />
          <Text size={14} style={{textAlign:"center"}}>OR</Text>
      
          <img className="googlesign" src={googlesign} alt="google sign"></img> */}

      </Modal>
      {/* <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss={false}
draggable={false}
pauseOnHover={false}
theme="colored"
/> */}

    </div>
  );
}