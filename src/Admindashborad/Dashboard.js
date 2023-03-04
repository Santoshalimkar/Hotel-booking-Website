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
import Addhotel from './Addhotel';
import Updatehotel from './Upadtehotel';
import Deletehotel from './Deletehotel';
import Recentbooking from './Recentbooking';
import { Link } from 'react-router-dom';




function Dashboard() {
    const [{user}]=useStatevalue();
    const [tab,setTab]=useState(1)

    const addhotel=()=>{
        setTab(1)

    }

    
    const updatehotel=()=>{
        setTab(2)
    }
    const Deletehotelinfo=()=>{
        setTab(3)
    }
    const recentbooking=()=>{
        setTab(4)
    }


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      
  

  return (
    <>
    <AppBar position="static" color='transparent'>
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
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ADMIN DASHBOARD
          </Typography>
          <Box sx={{marginLeft:"auto"}}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                {user?<Avatar  src={user.photoURL}/>:<Avatar  src="/static/images/avatar/2.jpg" />}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
                <MenuItem>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
         
         
          
        </Toolbar>
      </Container>
    </AppBar>
    <Container maxWidth="sm" sx={{marginLeft:"auto",marginRight:"auto"}}>
      <Stack
        sx={{marginTop:"10px",width:"100%"}}
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item sx={{cursor:"pointer","&:hover":{backgroundColor: "#f2f2f2"}}} onClick={addhotel}>Add Hotel Information</Item>
        <Item sx={{cursor:"pointer","&:hover":{backgroundColor: "#f2f2f2"}}} onClick={updatehotel}>Update Hotel Information</Item>
        <Item sx={{cursor:"pointer","&:hover":{backgroundColor: "#f2f2f2"}}} onClick={Deletehotelinfo}>Delete Hotel Information </Item>
        <Item sx={{cursor:"pointer","&:hover":{backgroundColor: "#f2f2f2"}}} onClick={recentbooking}>Recent Booking</Item>
      </Stack>
      </Container>
       {tab===1?
       <Addhotel/>
       :""}
       {tab===2?
        <Updatehotel/>
       :""}
       {tab===3?
        <Deletehotel/>
       :""}
       {tab===4?
        <Recentbooking/>
       :""}
</>
  );
}
export default Dashboard;