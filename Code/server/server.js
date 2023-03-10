require('dotenv').config();
const colors = require('colors');
const router = require('./Routes/AuthRoute');
const clientRoute = require('./Routes/ClientRoute')
const appartementRoute =require('./Routes/AppartementRoute')
const paymentRoute = require('./Routes/PaymentRouters')
const cookieParser = require('cookie-parser');
const cors = require('cors')


const express = require('express');
const {errorHandler} = require('./Middlewares/errorMiddleware');
const connectDB = require('./Config/Db');
const app = express();

connectDB();
app.use(cookieParser());
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/auth', router); 
app.use('/api/client',clientRoute);
app.use('/api/apartement',appartementRoute);
app.use('/api/payment',paymentRoute)




app.use(errorHandler)
const port = process.env.PORT || 8081;
app.listen(port, (err) => {
    if (!err) {
        console.log(`Listening on port ${port} is connected`)
    } else {
        console.log(err)
    }
});

module.exports = app ;

