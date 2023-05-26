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
    const num = parseInt(req.params.id);
    blogList.filter(data => data.id !== num);
    console.log(blogList);
    res.send("blog deleted");
})



app.listen(PORT , ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});