const express=require('express')
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const authRouter=require('./routes/auth/auth-routes')
const adminProductsRouter=require('./routes/admin/products-routes')

const shopProductsRouter=require('./routes/shop/products-routes')
const shopCartRouter=require('./routes/shop/cart-routes')
const shopAddressRouter=require('./routes/shop/address-routes')




//create a database connection -> u can also create a seperate file for this and then import/use that file here
mongoose
.connect('mongodb+srv://harithrar11:harithrapraisy@cluster0.xbbmcvb.mongodb.net/')
.then(()=>console.log('MongoDB connected'))
.catch(error=>console.log(error));
const app=express()
const PORT=process.env.PORT||5000;
app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','DELETE','PUT'],
    allowedHeaders:[
        'Content-Type',
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma'
    ],
    credentials:true
}));
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth',authRouter)
app.use('/api/admin/products',adminProductsRouter)
app.use('/api/shop/products',shopProductsRouter)
app.use('/api/shop/cart',shopCartRouter)
app.use('/api/shop/address',shopAddressRouter)


app.listen(PORT,()=>console.log(`server is running on ${PORT}`))