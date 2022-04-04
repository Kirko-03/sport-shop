import {AppBar,Button,Paper,MenuList,Typography,Box, IconButton, LinearProgress,MenuItem, Toolbar} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import  { useState } from 'react';

import '@firebase/firestore'
import 'firebase/auth'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxzsI4wEjdQ_DGIe239-AQVmtjKDKxW4U",
  authDomain: "sport-shop-fd1bd.firebaseapp.com",
  projectId: "sport-shop-fd1bd",
  storageBucket: "sport-shop-fd1bd.appspot.com",
  messagingSenderId: "688170118195",
  appId: "1:688170118195:web:d4ccba5bdd36ee67f4c746"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app)
console.log(auth)

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
       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100em'}}>
       <Typography>
        News         
       </Typography>
       <Typography>
     <button onClick={()=>signInWithPopup(auth,new GoogleAuthProvider())}>Войти</button>
       </Typography>
       </div>

     </Toolbar>
  
   </AppBar>
   {/* <LinearProgress variant="query"/> */}
 </Box>    
    </div>
}
