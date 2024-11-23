import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Addmovies = () => {
  const [form,setForm]=useState({
    movieName:'',
    movieDirector:'',
    movieDescription:'',
    movieURL:''
  })
  const location=useLocation();
  function capValue(e){
    setForm({...form,[e.target.name]:e.target.value})
  }
  function valueAdd(){
    if (location.state!=null) {
      axios.put('https://book-my-show-bkend.vercel.app/editmovie/'+location.state.val._id,form).then((res)=>{
        alert('Movie Details Updated Sucessfully')
      }).catch((err)=>{
        console.log(err)
      })
    } else {
        console.log("Form data being sent:", form);

      axios.post('https://book-my-show-bkend.vercel.app/addmovies/',form).then((res)=>{
        alert('Data added')
      }).catch((err)=>{
        console.log(err)
      })
    }
    
  }
  useEffect(()=>{
    if (location.state!=null) {
      setForm({...form,movieName:location.state.val.movieName,
        movieDirector:location.state.val.movieDirector,
        movieDescription:location.state.val.movieDescription,
        movieURL:location.state.val.movieURL})
    } else {
      setForm({...form, movieName:'',
        movieDirector:'',
        movieDescription:'',
        movieURL:''})
    }
  },[])
  return (
   
    <Box
      style={{marginTop:'5%'}}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField id="outlined-basic" name='movieName' label="MovieName" variant="filled" onChange={capValue} value={form.movieName}/>
      </div>
      <div>
      <TextField id="filled-basic" name='movieDirector' label="MovieDirector" variant="filled" onChange={capValue} value={form.movieDirector}/>
      </div>
      <div>
      <TextField id="standard-basic" name='movieDescription' label="MovieDescription" variant="filled" onChange={capValue} value={form.movieDescription}/>
      </div>
      <div>
      <TextField id="movimage" name='movieURL' label="MovieImageURL" variant='filled' onChange={capValue} value={form.movieURL}/>
      </div>
      <div>
      <Button variant='contained' onClick={valueAdd}>Submit</Button>
      </div>
    </Box> 
  )
}

export default Addmovies
