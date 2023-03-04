import React,{useState}from 'react'
import { Container,Text,Button} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Card } from '@nextui-org/react';
import { useStatevalue } from "../Contextfiles/StateProvider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Letusk = () => {
  const [{ user }, dispatch] = useStatevalue();

  const [userDetails, setUserDetails] = useState({
    fullName: "",
    mobileNo: "",
    });
    
    const handleChange = (event) => {
    setUserDetails({
    ...userDetails,
    [event.target.name]: event.target.value,
    });
    };


    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch({
        type: "SET_GUEST",
        guest: userDetails
      })
      localStorage.setItem('guestdetails',JSON.stringify(userDetails))
      toast.success('Saved', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      };
      
      





  return (
    <>
    <Container>
    <Card>
    <Card.Header>
    <Text b css={{ color: "#141729", fontSize: "20px",marginLeft:"auto",marginRight:"auto" }}>Let us know</Text>
    </Card.Header>
    <Card.Divider />
    <Card.Body>
    <Card >
    <form onSubmit={handleSubmit}>
    <Card.Header>
    <Text b>Enter your Details</Text>
    </Card.Header>
    <Card.Divider />
    <Card.Body css={{ width: "50%", marginLeft: "auto", marginRight: "auto", marginTop: "10px", marginBottom: "10px" }}>
    <Input type={'text'} css={{ margin: "20px" }} required labelPlaceholder="Full name" name="fullName" value={userDetails.fullName} onChange={handleChange}  />
    <Input type={'tel'} css={{ margin: "20px" }} required labelPlaceholder="Mobile no" name="mobileNo" value={userDetails.mobileNo} onChange={handleChange}  />
    <Input  value={user.email} type={'email'} css={{ margin: "20px" }} required labelPlaceholder="Email address" name="emailAddress"  />
    <Button size='sm' css={{backgroundColor:"#5c60f5",color:"white"}} type="submit">Save</Button>
    </Card.Body>
    </form>
    </Card>
    </Card.Body>
    </Card>
    </Container>
    <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
    )
    }
    
    export default Letusk;
    
    
    
    