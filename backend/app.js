const express=require('express')
const app=new express();
require('./connection');
const cors=require('cors')
// app.use(cors());
app.use(cors(
  {
    origin: [""],
    methods: ["POST","GET","PUT","DELETE"],
    credentials: true
  }
));

const movieModel=require('./models/MovieData')
app.use(express.json());

app.post('/addmovies',async(req,res)=>{
    try {
        var item=req.body;
        const data_add=new movieModel(item);
        const data=await data_add.save();
        res.send('Post sucessful')
    } catch (error) {
        console.log(error)
    }
})
app.get('/movie',async(req,res)=>{
    try {
        const data=await movieModel.find();
        res.send(data);
    } catch (error) {
        console.log(error)
    }
})
app.put('/editmovie/:id',async(req,res)=>{
    try {
        const data=await movieModel.findByIdAndUpdate(req.params.id,req.body)
        res.send('Updated Sucessfully')
    } catch (error) {
        console.log(error)
    }
})
app.delete('/deletemovie/:id',async(req,res)=>{
    try {
        const data=await movieModel.findByIdAndDelete(req.params.id)
        res.send('Deleted sucessfully')
    } catch (error) {
        console.log(error)
    }
})


app.listen(5000,()=>{
    console.log('Server is running on PORT 5000')
})
