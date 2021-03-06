const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');


const items=require('./routes/api/items');
const app=express();

//bosy-parser middleware
app.use(express.json());

//db config

const db=require('./config/keys').mongoURI;

// connect to mongodb

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('mongodb connected'))
.catch(err=>console.log(err));

//use routes
app.use('/api/items',items);

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`serer started at ${port}`));


