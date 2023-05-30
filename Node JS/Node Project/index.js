import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 4500;

const API_KEY = "989a3e4e18624839987141158233005";


app.get('/weather/:city' , (req , res)=>{
    try {
        const city = req.params.city;
        if(city !== " "){
            axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`).then(response =>{
                const data = response.data;
                res.send(data);
            })
        }
    } catch (error) {
        res.send("Error has occured ");
    }
});

app.listen(PORT , ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})