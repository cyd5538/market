const express = require('express');
const color = require('colors');
const dotenv = require('dotenv').config()
const cors = require('cors');
const { errorHandler } = require('./middlewear/errorMiddlewear');
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

const app = express();
connectDB()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended : false}))


app.use('/api/users', require('./routes/userRoutes.js'))
app.use('/api/goods', require('./routes/goodsRoutes.js'));
app.use('/api/favor', require('./routes/favorRoutes.js'));


app.use(errorHandler);


app.listen(port, () => {
    console.log(`server ${port}`)
})