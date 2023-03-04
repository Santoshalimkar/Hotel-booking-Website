import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Image } from "@nextui-org/react";


export default function Photostwo({crouselhotel}) {
  const ImageData=crouselhotel.images

  


  






  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:"center",
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        '& > :not(style)': {
          m: 1,
          width: 228,
          height: 228,
          transition: 'box-shadow 0.2s ease-in-out',
    '&:hover': {
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
    }
        },
      }}
    >
    {ImageData.map((item)=>(
      <Paper elevation={3}>
        <Image
           src={item}
          objectFit="fill"
          alt="Default Image"
          width={228}
          height={228}
        />
      </Paper>))}
    </Box>
  );
}
