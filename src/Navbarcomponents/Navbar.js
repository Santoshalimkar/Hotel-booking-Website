import { Navbar, Text,useTheme} from "@nextui-org/react";
import { useStatevalue } from "../Contextfiles/StateProvider";
import Login from "../Logincomponent/Login";
import Homeicon from "./Homeicon";
import Avatarcomp from "../Logincomponent/Avatarcomp";
// import Dropdownmenu from "../Logincomponent/Dropdown";



export default function App() {
  const [{user}]=useStatevalue()


  console.log(user)

    const { isDark } = useTheme();

  return (
      <Navbar 
      css={{backgroundColor:"#f5f5f5"}}
      className="navbarcolor"
      isBordered={isDark}
       variant="sticky">
        <Navbar.Brand>
        <Homeicon/>
        <Text b color="text" hideIn="xs" style={{ color: "#141729",marginLeft:"10px",fontFamily:"monospace" }}
 >
          Lonavala Stay
        </Text>
      </Navbar.Brand>

        <Navbar.Content>
          <Navbar.Item>
          {user? (<>
  <Avatarcomp/>
  {/* <Dropdownmenu/> */}
</>
) : (
  <Login/>
)}
          </Navbar.Item>
        </Navbar.Content>
        
      </Navbar>
  )
}
