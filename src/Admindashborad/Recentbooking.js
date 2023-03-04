import React from 'react'
import { Box, Typography,Container } from '@mui/material'
import Recentbookinglist from './Recentbooklist'


const Recentbooking = () => {
  return (
    <>
    <Container fluid css={{ width: "700px", marginTop: "40px" }}>
      <Typography variant="h5" align="center" sx={{margin:"20px"}}>
      RECENT BOOKING
      </Typography>
    </Container>
       <Recentbookinglist/>
    {/* </Container> */}

    {/* </Container> */}

  </>)
}

export default Recentbooking