const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

//connecting DB
const ConnectToDB = require('./db/ConnectToDB');
ConnectToDB();

// Adding Routes
app.use('/api/',require('./Routes/T_Equipment_Master_Route'));

app.listen(PORT,()=>{
    console.log(`Listening to http://localhost:${PORT}`);
})