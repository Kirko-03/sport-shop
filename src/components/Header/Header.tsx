import {AppBar,Avatar,Paper,MenuList,Typography,Box, IconButton, LinearProgress,MenuItem, Toolbar, Button} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import  { useContext, useState } from 'react';
import logo from '../../assets/logo192.png'
import '@firebase/firestore'
import * as firebase from 'firebase/auth'
import {signInWithPopup } from 'firebase/auth';
import h from './Header.module.css'
import {Main} from './Main'
import { Link } from 'react-router-dom';
import { Context } from '../..';
import {useAuthState} from 'react-firebase-hooks/auth'


export  const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const auth = useContext(Context)
  const [user,loading] = useAuthState(auth)
  const login = async() =>{
    const provider = new firebase.GoogleAuthProvider()
    const user = await signInWithPopup(auth,provider)
  }
  const handleClick = () => {
    setOpen(!open);
  };

  return <div>
 <Box sx={{ flexGrow: 1 }}>
   <AppBar position="static">
     <Toolbar variant="dense">
     <IconButton  aria-label="upload picture" component="span">
        {open?<div>
          <Menu className={h.Burger} onBlur={()=>handleClick()} />
        <Paper className={h.PaperStyle}>   
        <MenuList  onClick={()=>handleClick()}>
          <Main/>
          <MenuItem component={Link} to='/BCA'>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Paper></div>:<div><Menu  onClick={()=>handleClick()} /></div> 
          }
          
       </IconButton>
       <div  className={h.typographies}>
       <Typography>
        <img className={h.logo} alt='logo' src={logo}/>         
       </Typography>
       {!loading?<Typography>
          {user?<div className={h.userProfile}><Avatar src={user.photoURL?user.photoURL:''}  /><Button onClick={()=>auth.signOut()}>Выйти</Button></div>:<Button onClick={()=>login()}>Войти</Button>}
       </Typography>:<span>...Loading</span>}
       </div>

     </Toolbar>
  
   </AppBar>
   {/* <LinearProgress variant="query"/> */}
 </Box>    
    </div>
}
