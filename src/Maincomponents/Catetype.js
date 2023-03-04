import { SelectPicker } from 'rsuite';
import React, { useState } from 'react';
import { useStatevalue } from "../Contextfiles/StateProvider"
import ListIcon from '@mui/icons-material/List';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';



const data = ['Villa', "Bunglow", "Tent", 'Cottage'].map(
  item => ({ label: item, value: item })
);

const Catetype = () => {
  const matches = useMediaQuery('(max-width:480px)');

  const [{user},dispatch] = useStatevalue();

  const [value, setValue] = useState(null);

  const setValuehandle = (value) => {
    setValue(value);
    dispatch({
      type: 'SET_CATE',
      Category: value
    });
  }

  return (
    <>
    <Box sx={{display:"flex",alignItems:"center"}}>
    <ListIcon sx={{fontSize:matches?"20px":"25px",marginRight:"10px"}}/>
    <SelectPicker
      placeholder='Select category'
      size='lg'
      value={value}
      onChange={(value) => setValuehandle(value)}
      data={data}
      style={{ width: 200, position: "relative" }}
    />
    </Box>
  </>
  );
};

export default Catetype;
