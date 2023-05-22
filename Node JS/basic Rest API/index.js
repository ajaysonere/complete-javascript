// Basic RestFull API
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
const PORT = 3200;

// mimic the db
let blogList = [];

app.get('/blogs', (req ,res)=>{
    return res.status(200).json({
        data : blogList,
        success : true,
    });
});

app.post('/blogs' , (req ,res) => {
    const num = Math.floor(Math.random()*100);
    blogList.push({title : req.body.title , content: req.body.content , id: num});
    return res.status(201).json({
        success : true,
    })
});

// 

app.delete("/blogs/:id" , (req , res)=>{
    const num = req.params.id;
    console.log(num);
    blogList.filter(function(data){
        console.log(typeof data.id);
        return data.id == num;
    });
    return res.status(200).json({
       data : "deleted ",
    });
})



app.listen(PORT , ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});