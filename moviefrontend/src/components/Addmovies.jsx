// import React, { useEffect, useState } from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Button } from '@mui/material';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const Addmovies = () => {
//   const [form,setForm]=useState({
//     movieName:'',
//     movieDirector:'',
//     movieDescription:'',
//     movieURL:''
//   })
//   const location=useLocation();
//   function capValue(e){
//     setForm({...form,[e.target.name]:e.target.value})
//   }
//   // function valueAdd(){
//   //   if (location.state!=null) {
//   //     // axios.put('https://book-my-show-bkend.vercel.app/editmovie/'+location.state.val._id,form).then((res)=>{
//   //     axios.put('https://book-my-show-bkend.vercel.app/?vercelToolbarCode=QBgC1bz4y7XcKb-/editmovie/'+location.state.val._id,form).then((res)=>{
//   //       alert('Movie Details Updated Sucessfully')
//   //     }).catch((err)=>{
//   //       console.log(err)
//   //     })
//   //   } else {
//   //     // axios.post('https://book-my-show-bkend.vercel.app/addmovies',form).then((res)=>{
//   //             // axios.post('https://book-my-show-bkend.vercel.app/addmovies',form).then((res)=>{
//   //     axios.post('https://book-my-show-bkend.vercel.app/?vercelToolbarCode=QBgC1bz4y7XcKb-/addmovies',form).then((res)=>{
//   //       alert('Data added')
//   //     }).catch((err)=>{
//   //       console.log(err)
//   //     })
//   //   }
    
//   // }

// const valueAdd = () => {
//   if (location.state && location.state.val) {
//     // PUT request for editing
//     axios
//       .put(`https://book-my-show-bkend.vercel.app/editmovie/${location.state.val._id}`, form)
//       .then((res) => {
//         alert('Movie details updated successfully');
//       })
//       .catch((err) => {
//         console.error('Error updating movie:', err.response?.data || err.message);
//       });
//   } else {
//     // POST request for adding
//     axios
//       .post('https://book-my-show-bkend.vercel.app/addmovies', form)
//       .then((res) => {
//         alert('Data added successfully');
//       })
//       .catch((err) => {
//         console.error('Error adding movie:', err.response?.data || err.message);
//       });
//   }
// };

  
//   useEffect(()=>{
//     if (location.state!=null) {
//       setForm({...form,movieName:location.state.val.movieName,
//         movieDirector:location.state.val.movieDirector,
//         movieDescription:location.state.val.movieDescription,
//         movieURL:location.state.val.movieURL})
//     } else {
//       setForm({...form, movieName:'',
//         movieDirector:'',
//         movieDescription:'',
//         movieURL:''})
//     }
//   },[])
//   return (
   
//     <Box
//       style={{marginTop:'5%'}}
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//       <TextField id="outlined-basic" name='movieName' label="MovieName" variant="filled" onChange={capValue} value={form.movieName}/>
//       </div>
//       <div>
//       <TextField id="filled-basic" name='movieDirector' label="MovieDirector" variant="filled" onChange={capValue} value={form.movieDirector}/>
//       </div>
//       <div>
//       <TextField id="standard-basic" name='movieDescription' label="MovieDescription" variant="filled" onChange={capValue} value={form.movieDescription}/>
//       </div>
//       <div>
//       <TextField id="movimage" name='movieURL' label="MovieImageURL" variant='filled' onChange={capValue} value={form.movieURL}/>
//       </div>
//       <div>
//       <Button variant='contained' onClick={valueAdd}>Submit</Button>
//       </div>
//     </Box> 
//   )
// }

// export default Addmovies

// import React, { useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Button } from '@mui/material';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const Addmovies = () => {
//   const [form, setForm] = useState({
//     movieName: '',
//     movieDirector: '',
//     movieDescription: '',
//     movieURL: '',
//   });

//   const location = useLocation();

//   // Function to handle form input changes
//   const handleInputChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Function to handle adding or updating movie data
//   const handleSubmit = () => {
//     console.log('Form data before submission:', form); // Debugging

//     if (location.state?.val) {
//       // Edit movie details
//       axios
//         .put(`https://book-my-show-bkend.vercel.app/editmovie/${location.state.val._id}`, form)
//         .then(() => {
//           alert('Movie details updated successfully');
//         })
//         .catch((err) => {
//           console.error('Error updating movie:', err.response?.data || err.message);
//           alert('Failed to update movie details. Check the console for more information.');
//         });
//     } else {
//       // Add new movie
//       axios
//         .post('https://book-my-show-bkend.vercel.app/addmovies', form)
//         .then(() => {
//           alert('Movie added successfully');
//         })
//         .catch((err) => {
//           console.error('Error adding movie:', err.response?.data || err.message);
//           alert('Failed to add movie. Check the console for more information.');
//         });
//     }
//   };

//   // Populate form if editing an existing movie
//   useEffect(() => {
//     if (location.state?.val) {
//       setForm({
//         movieName: location.state.val.movieName || '',
//         movieDirector: location.state.val.movieDirector || '',
//         movieDescription: location.state.val.movieDescription || '',
//         movieURL: location.state.val.movieURL || '',
//       });
//     } else {
//       setForm({
//         movieName: '',
//         movieDirector: '',
//         movieDescription: '',
//         movieURL: '',
//       });
//     }
//   }, [location.state]);

//   return (
//     <Box
//       style={{ marginTop: '5%' }}
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           id="movieName"
//           name="movieName"
//           label="Movie Name"
//           variant="filled"
//           onChange={handleInputChange}
//           value={form.movieName}
//         />
//       </div>
//       <div>
//         <TextField
//           id="movieDirector"
//           name="movieDirector"
//           label="Movie Director"
//           variant="filled"
//           onChange={handleInputChange}
//           value={form.movieDirector}
//         />
//       </div>
//       <div>
//         <TextField
//           id="movieDescription"
//           name="movieDescription"
//           label="Movie Description"
//           variant="filled"
//           onChange={handleInputChange}
//           value={form.movieDescription}
//         />
//       </div>
//       <div>
//         <TextField
//           id="movieURL"
//           name="movieURL"
//           label="Movie Image URL"
//           variant="filled"
//           onChange={handleInputChange}
//           value={form.movieURL}
//         />
//       </div>
//       <div>
//         <Button variant="contained" onClick={handleSubmit}>
//           Submit
//         </Button>
//       </div>
//     </Box>
//   );
// };

// export default Addmovies;




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
      axios.post('https://book-my-show-bkend.vercel.app/addmovies',form).then((res)=>{
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
