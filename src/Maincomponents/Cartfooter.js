import React,{useState} from  'react'
import { Card,Badge,Button,Text,Divider,Row,Modal,Checkbox,Input} from "@nextui-org/react";
import {Link} from "react-router-dom"
import { useStatevalue } from "../Contextfiles/StateProvider";
import googlesign from "../asset/btn_google_signin_light_normal_web@2x.png"
import Signup from '../Logincomponent/Signup';
import { Password } from "../Logincomponent/Password";
import {Mail} from "../Logincomponent/Mail"
import Fade from '@mui/material/Fade';
import { getAuth } from "firebase/auth";
import {signInWithEmailAndPassword ,signInWithPopup,GoogleAuthProvider,signOut} from "firebase/auth";
import {app} from "../firebase.config";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';




const auth = getAuth(app);
const provider = new GoogleAuthProvider();



const Cartfooter = ({hotel}) => {
  const [{ user},dispatch] = useStatevalue();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState("")
  const [errorfield,setErrorfield]=useState(false)

  const dates = localStorage.getItem("date")!=="undefined"
  ?JSON.parse(localStorage.getItem('date'))
  :localStorage.clear()

   const datescheck=()=>{
    if(!dates){
      toast.info('Please select date before Booking!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }

   }



  const highlightItems =(hotel.highlights).map((highlight) => <li>{highlight}</li>);




  const prevPriceString = hotel.prevPrice;
  const currentPriceString =hotel.currentPrice;
  
  // Remove currency symbol and commas from the strings
  const prevPrice = parseFloat(prevPriceString.replace(/[^\d.-]/g, ''));
  const currentPrice = parseFloat(currentPriceString.replace(/[^\d.-]/g, ''));
  
  // Calculate the discount percentage

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

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




  return (
    <>
    <Card variant="bordered" css={{ mw: "560px", backgroundColor: "#5c60f526",marginLeft:"auto",marginRight:"auto",
    '&:hover':{border:"1px solid #141729"} }}>
      <Card.Body>
        <div className="card-footer">
          <div className="card-offer">
          <Badge isSquared  css={{border:"1px solid #141729",backgroundColor:"#141729"}}>Offer</Badge>
          <span className='offer-section'>{hotel.offer}</span>
          <div className="category-type">
            <span className='prop-type'>{hotel.category}</span>
             <ul>
             {highlightItems}
             </ul>
          </div>
          </div>



          <div className="card-paynow">
          <Badge isSquared css={{border:"1px solid #141729 ",marginLeft:"68px",backgroundColor:"#141729"}}>
          {Math.round((((parseInt(prevPrice)-parseInt(currentPrice))/parseInt(prevPrice))*100).toFixed(2))}%off
        </Badge>
          <div className="cart-price">
            <span className='pre-price'>{hotel.prevPrice}</span>
            <span className='Now-price'>{hotel.currentPrice}</span>
          </div>
          <span className='taxes-tag'>(including taxes and charges)</span>
          <div className="pay-button">
          {
  user ? (
    dates ? (
      <Link to={`/Booknow/${hotel._id}`}>
        <Button auto css={{marginTop:"10px",marginLeft:"18px",backgroundColor:"#141729"}}>
          Book Now
        </Button>
      </Link>
    ) : (
      <Button onClick={datescheck} color="error" auto css={{marginTop:"10px",marginLeft:"18px",backgroundColor:"#141729"}}>
        Book Now
      </Button>
    )
  ) : (
    <Button onClick={handler} color="error" auto css={{marginTop:"10px",marginLeft:"18px",backgroundColor:"#141729"}}>
      Book Now
    </Button>
  )
}

          </div>
          </div>
        </div>
      </Card.Body>

    </Card>



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
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>

  </>)
}

export default Cartfooter