import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import {useNavigate} from 'react-router-dom'


// import { Box } from '@mui/material/Box';


const Viewmovies = () => {
  const [data,setdata]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get('https://book-my-show-bkend.vercel.app/movie').then((res)=>{
      //console.log(res)
      setdata(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
function del_Value(e){
axios.delete('https://book-my-show-bkend.vercel.app/deletemovie/'+e).then((res)=>{
  alert('Movie Deleted')
  window.location.reload();
}).catch((err)=>{
  console.log(err)
})
}
function update_Value(val){
navigate('/add',{state:{val}})
}

    // const data=[{movieName:'96',movieDirector:'GVM',movieDescription:'Nice'},{movieName:'Remo',movieDirector:'Bakkiyaraj Kannan',movieDescription:'Good'}]
    // const [card,setcard]=useState([])
    // useEffect(()=>{
    //   axios.get('https://dummyapi.online/api/movies').then((res)=>{
    //     setcard(res.data)
    //   }).catch((error)=>{
    //     console.log(error)
    //   })
    // },[])
  return (
    <>
    
      <Box sx={{ flexGrow: 1,margin:'5%' }} id='box1'>
        <Grid container spacing={2}>
        {data.map((item)=>(
          
           <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} style={{marginTop:'5%'}} >
    {/* <Card sx={{ minWidth: 275}} style={{marginTop:'5%', width: '40%'}} > */}
      <CardContent>
        {/* <Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
          
        </Typography> */}
        <Typography variant="h5" component="div">
        {item.movieName}
        </Typography>
        <Typography variant="body1">
        {item.movieDirector}
        </Typography>
        <br />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {item.movieDescription}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <img src={item.movieURL} alt="No image" width="100%"/>
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small" onClick={()=>{
          update_Value(item)
        }}>Update</Button>
        <Button variant='contained' size="small" onClick={()=>{
          del_Value(item._id)
        }}>Delete</Button>
      </CardActions>
    </Card>
    </Grid>
    ))}
    </Grid>
   </Box>
    </>
  )
}

export default Viewmovies

