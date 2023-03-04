import  React, { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button } from "@nextui-org/react";
import Typography from '@mui/material/Typography';
import Confirm from "./Confirm"
import Letusk from "./Letusk"
import Payment from "./Payment"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useStatevalue } from "../Contextfiles/StateProvider"
import { useParams } from 'react-router-dom';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const steps = ['Confirm your Booking', 'Let us know who are you', 'Checkout'];

export default function Stepforpay() {
  const [{guestdetails}] = useStatevalue();
  const [{user}] = useStatevalue();
  const [guest,setguest]=useState([])
  const [finalhotel,setHotel]=useState({});
  // const[getorder,setOrder]=useState({})

console.log(guestdetails.fullName)

const priceString = finalhotel.currentPrice;
let priceNumber = 0;
if (priceString) {
  priceNumber = parseInt(priceString.replace(/[^\d]/g, ""));
}


  const {id}=useParams();

  
  useEffect(() => {
    const loadhotel = async () => {
      setHotel({}); 
      const response = await retrieveOneHotel(id);
      setHotel(response.data.hotel[0]);
    };
    
    loadhotel();
  }, [id]);
  
  const retrieveOneHotel = async () => {

    try {
      return await axios.get(`http://localhost:2585/Retriveone/${id}`);
    } catch (error) {
      console.log('this is error', error);
    }
  };

  const dates = localStorage.getItem("date")!=="undefined"
  ?JSON.parse(localStorage.getItem('date'))
  :localStorage.clear()
  console.log(dates)
 if(dates){
const checkInDate = new Date(dates[0]);
const checkOutDate = new Date(dates[1]);

const millisecondsPerDay = 86400000; // 24 * 60 * 60 * 1000

const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
var daysDifference = Math.floor(timeDifference / millisecondsPerDay);
}   

  const matches = useMediaQuery('(max-width:480px)');

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setguest(guestdetails)  

    if (activeStep === 1 && guest.length==0) { 
      toast.info('Please confirm your details', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;
        return;
    }


    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const totalpay=(priceNumber)*(daysDifference)

const data={
     amount:totalpay,
     name:guestdetails.fullName,
     email:user.email,
     mob:guestdetails.mobileNo,
     propertyId:id,
     checkIn:dates[0],
     checkOut:dates[1]
     


}

 const Checkouthandle= async ()=>{
  const {data:{key}}= await axios.get("http://localhost:2585/getkey")
  


  const res = await fetch("http://localhost:2585/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if(res){
        var {order} = await res.json();
        console.log(order.id)
      }
      var options = {
        key:key, 
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Lonavala Stay", //your business name
        description: "Test description",
        image: "https://example.com/your_logo",
        order_id:order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: `http://localhost:2585/paymentverification?propertyid=${data.propertyId}&checkIN=${data.checkIn}&checkOUT=${data.checkOut}&name=${data.name}&mob=${data.mob}&email=${data.email}&tot=${data.amount}`,
        prefill: {
            name:guestdetails.fullName, //your customer's name
            email:user.email,
            contact:guestdetails.mobileNo
        },
        notes: {
            name:guestdetails.fullName,
            email:data.email,
            mob:guestdetails.mobileNo,
            propertyId:id,
             
        },
        theme: {
            color: "#5c60f5"
        }
    };
    
    const razorpay= new window.Razorpay(options)
    razorpay.open()
       
      }


 








  return (
    <>
    <Box sx={{ width: '100%',marginLeft:"auto",marginRight:"auto",margin:"20px" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption"></Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          
        </React.Fragment>
      ) : (
        <React.Fragment>
        <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }}>
      {activeStep === 0 && <Confirm />}
      {activeStep === 1 && <Letusk />}
      {activeStep === 2 && <Payment />}
    </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 ,width:"100%" }}>
            <Button
              css={{backgroundColor:"#141729",color:"white"}}
              disabled={activeStep === 0}
              onClick={handleBack}
              size={matches?"xs":"md"}
              sx={{ mr: 1, }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto', }} />
            {/* {isStepOptional(activeStep) && (
              <Button disabled color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
              </Button>
            )} */}

            <Button size={matches?"xs":"md"} onClick={handleNext} css={{backgroundColor:"#5c60f5",color:"white"}}>
              {activeStep === steps.length - 1 ? <><Button onPress={Checkouthandle} size={'md'}css={{backgroundColor:"#5c60f5",color:"white"}} >₹{totalpay}/Paynow</Button></> : 'Procced'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
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
  </>);
}