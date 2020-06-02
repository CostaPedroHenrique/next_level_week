import express from 'express';

const app = express();

app.get("/", (request, response)=>{
    response.json({"Ola": "mundo!"});
    console.log("Hello world!");
});


app.listen(3333);