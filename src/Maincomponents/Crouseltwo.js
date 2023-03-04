import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Photos from '../Crouselcomp/Photos';
import Location from '../Crouselcomp/Location';
import Topamen from './Topamen';
import Reviews from '../Crouselcomp/Reviews';


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

export default function Crouseltwo({hotel}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',width:"100%" }}>
        <Tabs  value={value} onChange={handleChange} textColor="primary"   indicatorColor="primary" centered>
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Photos" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
          <Tab label="Location" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Topamen hotel={hotel}/>
      </TabPanel>

      <TabPanel value={value} index={1}>
      <Photos hotel={hotel}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Reviews hotel={hotel}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Location hotel={hotel} />
      </TabPanel>
    </Box>
  );
}
