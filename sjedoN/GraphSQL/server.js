const express=require('express');
const graphqlHTTP=require('express-graphql').graphqlHTTP;
const schema=require('./modules/schema')
const mongoose=require('mongoose');

const app=express();

app.use('/graphql',graphqlHTTP({
schema,
graphiql:true
}));

// ------------>
mongoose.connect("mongodb://localhost:27017/prac");
mongoose.connection.once('open',()=>{
    console.log("Connected to database!")
})
app.listen(3000,()=>{
    console.log("http://localhost://3000")
})