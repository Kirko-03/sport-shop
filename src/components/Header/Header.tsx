import {AppBar,Button,Paper,MenuList,Typography,Box, IconButton, LinearProgress,MenuItem, Toolbar} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import  { useState } from 'react';

export  const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return <div>
 <Box sx={{ flexGrow: 1 }}>
   <AppBar position="static">
     <Toolbar variant="dense">
     <IconButton style={{color:'cyan'}} aria-label="upload picture" component="span">
         
        {open?<div onBlur={()=>handleClick()}>
          <Menu onClick={()=>handleClick()} />
        <Paper style={{position:'absolute'}} >
          
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Paper></div>:<Menu onClick={()=>handleClick()} /> 
          }
          
       </IconButton>
       <Typography>
        News         
       </Typography>
     </Toolbar>
   </AppBar>
   {/* <LinearProgress variant="query"/> */}
 </Box>    
    </div>
}
