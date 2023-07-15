const mongoose = require("mongoose");

mongoose.connect("mongodb: //localhost:3000/booking",{
    useNewUrlParser:true,
    useUnifiedTopology :true,
    useCreateIndex:true
}).then(()=>{
    console.log(`connection successfull`);
}).catch((e)=>{
    console.log(`no connection`);
})