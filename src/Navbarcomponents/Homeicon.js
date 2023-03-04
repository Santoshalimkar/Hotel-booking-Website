import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

const Homeicon = () => {
  return (
    <Link to="/" style={{color:"black"}} ><HomeIcon sx={{fontSize:"35px"}}/></Link>

  )
}

export default Homeicon