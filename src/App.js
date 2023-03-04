import React, { useState,useEffect } from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import "./Navbarcomponents/Style.css"
import Navbar2 from "./Navbarcomponents/Navbar2";
import Herocomp from "../src/Maincomponents/Herocomp"
import Sericon from "../src/Maincomponents/Sericon"
import Datescetion from "../src/Maincomponents/Datescetion"
import Footer from "./Maincomponents/Footer";
import Cartview from "./Maincomponents/Cartview"
import Stepforpay from "./Maincomponents/Stepforpay";
import Dashboard from "./Admindashborad/Dashboard";
import Carttwo from "./Maincomponents/Carttwo";
import Paymentsuccesspage from "./Maincomponents/Paymentsuccesspage";
import Mybookings from "./Maincomponents/Mybookings";
import Notadmin from "./Notadmin";





function App() {


  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem('user') !== "undefined" 
      ? JSON.parse(localStorage.getItem('user'))
      : localStorage.clear();

    if (userInfo && userInfo.email === process.env.REACT_APP_ADMIN_EMAIL) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  // const { currentUser } = useAuth();

   console.log(isAdmin)

  // const isAdmin = currentUser && currentUser.email === 'admin@example.com';






  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Navbar2/>,<Herocomp/>,<Sericon/>,<Datescetion/>,<Footer/>]}/>
      <Route path="/Cartview/:id" element={[<Navbar2/>,<Cartview/>,<Footer/>]}/>
    <Route path="/Booknow/:id" element={[<Navbar2/>,<Stepforpay/>,<Footer/>]}/>
    {isAdmin?<Route path="/Dashboard" element={[<Dashboard/>]}/>:<Route path="/Dashboard" element={[<Notadmin/>]}/>}
    <Route path="/mybookings" element={[<Navbar2/>,<Mybookings/>,<Footer/>]}/>
    
    <Route path="/paymentsuccessful" element={[<Paymentsuccesspage/>]}>


        </Route>
      </Routes>
    </BrowserRouter>





    </>


  )
    
}

export default App;
