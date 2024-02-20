import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemText,ListItemIcon, Switch} from '@mui/material'
import { Home, ModeNight } from '@mui/icons-material';

const Sidebar = ({mode,setMode}) => {
   return (
 
   <Box 
   bgcolor="whte"
   flex={1} 
   p={2} 
   sx={{ display:{xs:"none", sm:"block"}}}> 
     <Box position="fixed">
  {/* list#1 */}
   <List>
   <ListItem disablePadding>
     <ListItemButton component="a" href="#">
       <ListItemIcon>
         {/* <InboxIcon /> */}
         <Home /> 
       </ListItemIcon>
       <ListItemText primary="Homepage" />
     </ListItemButton>
     </ListItem>
 </List>

 {/* list#2 */}
 <List>
   <ListItem disablePadding>
     <ListItemButton component="a" href="#">
       <ListItemIcon>
         {/* <InboxIcon /> */}
         <Home /> 
       </ListItemIcon>
       <ListItemText primary="Homepage" />
     </ListItemButton>
     </ListItem>
 </List>
{/* list#3 */}
<List>
   <ListItem disablePadding>
     <ListItemButton component="a" href="#">
       <ListItemIcon>
         {/* <InboxIcon /> */}
         <Home /> 
       </ListItemIcon>
       <ListItemText primary="Homepage" />
     </ListItemButton>
     </ListItem>
 </List>
 {/* list#4 */}
 <List>
   <ListItem disablePadding>
     <ListItemButton component="a" href="#">
       <ListItemIcon>
         {/* <InboxIcon /> */}
         <Home /> 
       </ListItemIcon>
       <ListItemText primary="Homepage" />
     </ListItemButton>
     </ListItem>
 </List>
 {/* list#5 */}
 <List>
   <ListItem disablePadding>
     <ListItemButton component="a" href="#">
       <ListItemIcon>
         {/* <InboxIcon /> */}
         <Home /> 
       </ListItemIcon>
       <ListItemText primary="Homepage" />
     </ListItemButton>
     </ListItem>

     {/* switch */}
 <List>
   <ListItem disablePadding>
     <ListItemButton component="a" href="#">
       <ListItemIcon>
         {/* <InboxIcon /> */}
         <ModeNight /> 
         
       </ListItemIcon>
       <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
     </ListItemButton>

     </ListItem>
 </List>
 </List>
 </Box>
 </Box>
  );
};

export default Sidebar
