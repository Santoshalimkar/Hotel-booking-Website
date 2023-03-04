import * as React  from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/system';
import { useStatevalue } from '../Contextfiles/StateProvider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Login from "../Logincomponent/Login";
import Avatarcomp from "../Logincomponent/Avatarcomp";
import useMediaQuery from '@mui/material/useMediaQuery';








function Navbar2() {
    const [{user}]=useStatevalue();

    const matches = useMediaQuery('(max-width:480px)');

    
    


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      
  

  return (
    <>
    <AppBar position="fixed" sx={{backgroundColor:"#141729"}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <IconButton>
          <Link to="/"><HomeIcon/></Link>
        </IconButton>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Lonavala Stay
          </Typography>
          <Box sx={{marginLeft:"auto"}}>
              <IconButton sx={{ p: 0 }}>

 {user? (<>
  <Avatarcomp/>
  {/* <Dropdownmenu/> */}
</>
) : (
  <Login/>
)}              </IconButton>
            
          </Box>
         
         
          
        </Toolbar>
      </Container>
    </AppBar>
    
</>
  );
}
export default Navbar2;