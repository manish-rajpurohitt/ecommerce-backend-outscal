require('dotenv').config({path: ".env"});
const express = require("express");
const connectDb = require("./config/db");
const errorHandler = require('./middleware/error')

//connect to db
connectDb();

const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/address', require('./routes/addressRoute'));
// TODO - app.use('/api/product', require('./routes/productsRoute'));
app.use('/api/cart', require('./routes/cartRoute'));
app.use('/api/order', require('./routes/orderRoute'));
app.use('/api/product', require('./routes/productsRoute'));

app.use(errorHandler);
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, ()=>console.log(`Server started running on PORT : ${PORT}`));

process.on("unhandledRejection", (error, promise)=>{
    console.log("Logged error :" + error);
    server.close(()=>process.exit(1));
})