import React, { useState } from 'react';
import { DateRangePicker, Calendar } from 'rsuite';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useStatevalue } from "../Contextfiles/StateProvider"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {Box  } from "@mui/material";


const Date = () => {
  const [{ user }, dispatch] = useStatevalue();

  const matches = useMediaQuery('(max-width:480px)');

  const [dateRange, setDateRange] = useState([]);

  const handleDateChange = (value) => {
    setDateRange(value);
    dispatch({
      type: "SET_DATE",
      date: value
    })
    localStorage.setItem('date', JSON.stringify(value))
  }

  const disabledDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const disabled = date < today;
    console.log('disabledDate called:', date, today, disabled);
    return disabled;
  }
  
  

  return (
    <>
    <Box sx={{display:"flex",alignItems:"center"}}>

    <CalendarMonthIcon sx={{fontSize:matches?"20px":"25px",marginRight:"10px"}}/>
    
    <DateRangePicker
      size="lg"
      character='-'
      format='dd-MM-yyyy'
      showOneCalendar
      color='red'
      placeholder="Check-in-Check-out"
      onChange={handleDateChange}
      value={dateRange}
      renderCalendar={(props, calendarDate) => {
        return <Calendar {...props} disabledDate={disabledDate} />
      }}
    />
    </Box>
 </>   
  )
}

export default Date;
