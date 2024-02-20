import React, { useState } from 'react'
// import { Box } from '@mui/material'
import { AppBar,Toolbar, styled, Box, Typography, InputBase, Avatar } from "@mui/material";
import { Houseboat, Notifications, Email } from '@mui/icons-material';
import Badge from '@mui/material/Badge';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledToolbar = styled(Toolbar)({

  display: "flex",
  justifyContent:"space-between",


});


const Search = styled("div") (({ theme }) => ({


backgroundColor: "white",
padding:"0 10px",
borderRadius: theme.shape.borderRadius,
width: "40%"

}));

const Icons = styled(Box) (({ theme }) => ({ 
  display:"none" , 
  alignItems: "center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }

  
  // backgroundColor: "white",
  
  }));

const UserBox = styled(Box) (({ theme }) => ({ 
    display:"flex" , 
    alignItems: "center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
      display: "none"
    }
    
    // backgroundColor: "white",
    
}));
const Navbar = () => {
  // create an useState to close this profile
  const [open,setOpen] = useState (false)
  return (
  <AppBar position="sticky">
    <StyledToolbar>
    <Typography color ="white" variant="h6" sx={{display:{xs:"none", sm:"block"} }}>LOGO</Typography>
    {/* this line is for icon */}
    <Houseboat sx={{ display: { xs:"block", sm:"none"} }} />
    <Search>
      <InputBase placeholder= "search...." />
      </Search>
      <Icons color="white">
      <Badge badgeContent={4} color="error">
      <Email />
      </Badge>
      
      <Badge badgeContent={2} color="error">
        <Notifications />
      </Badge>
      <Avatar sx={{width:30,height:30 }} 
      src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg">
        onClick={e=>setOpen(true)}
      </Avatar>
      </Icons>
      {/* mobile version */}
      <UserBox  onClick={e=>setOpen(true)}>
     
      <Avatar sx={{width:30,height:30 }} src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg"></Avatar>
      <Typography>John</Typography>
      </UserBox>
    </StyledToolbar>
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
         <MenuItem>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
       
      </Menu>
    
  </AppBar>

  );
};

export default Navbar
