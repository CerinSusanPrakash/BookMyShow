import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:'left'}}>
            MovieAPP
          </Typography>
          <Button color="inherit" ><Link to={'/add'} style={{textDecoration:"none" ,color:"white"}}>AddMovies</Link></Button>
          <Button color="inherit"><Link to={'/'} style={{textDecoration:"none" ,color:"white"}}>ViewMovies</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar