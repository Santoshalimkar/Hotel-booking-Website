import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Overviewtwo from './Overviewtwo';
import Photostwo from './Photostwo';
import Reviewstwo from './Reviewstwo';
import Locationtwo from './Locationtwo';
import Topamentwo from '../Maincomponents/Topamentwo';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import  axios from "axios"
import { Loading} from "@nextui-org/react";



function TabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Crousel() {
  const [value, setValue] = React.useState(0);
  const [crouselhotel,setCrouselhotel]=useState({})

  const {id}=useParams()
  console.log(id)

    useEffect(() => {
      const loadCrousel = async () => {
        const response = await retrieveCrousel(id);
        setCrouselhotel(response.data.hotel[0]);
      };
      
      loadCrousel();
    }, [id]);
    
    const retrieveCrousel = async () => {
  
      try {
        return await axios.get(`http://localhost:2585/Retriveone/${id}`);
      } catch (error) {
        console.log('this is error', error);
      }
    };

  





  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',width:"100%" }}>
        <Tabs  value={value} onChange={handleChange} textColor="primary"   indicatorColor="primary" centered>
          {/* <Tab label="Overview" {...a11yProps(0)} /> */}
          <Tab label="Photos" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
          <Tab label="Location" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>  
      <Overviewtwo />    
      </TabPanel> */}

      <TabPanel value={value} index={0}>
      {Object.keys(crouselhotel).length > 0 ? (<Photostwo crouselhotel={crouselhotel}/>):(<Loading type='gradient'  css={{marginLeft:"580px",color:"#141729"}} />)}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {Object.keys(crouselhotel).length > 0 ? (<Reviewstwo crouselhotel={crouselhotel}/>):(<Loading type='gradient' />)}
      </TabPanel>
      <TabPanel value={value} index={2}>
      {Object.keys(crouselhotel).length > 0 ? (<Locationtwo crouselhotel={crouselhotel}/>):(<Loading type='gradient' />)}

      </TabPanel>
    </Box>
    {Object.keys(crouselhotel).length > 0 ? (<Topamentwo crouselhotel={crouselhotel}/>):(<Loading type="gradient"  size='lg' css={{marginLeft:"600px",marginTop:"100px",marginBottom:"100px",color:"#141729"}}/>)}

    </>
  );
}
