var mongoose=require('mongoose');

// mongoose.set('useNewUrlParser',true);
// mongoose.set('useFindAndModify',false);
// mongoose.set('useCreateIndex',true);

mongoose.connect("mongodb+srv://vanshikadixit04:vanshikadixit1141@cluster1.khftfwj.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Connection Succesful");
}).catch(()=>{
    console.log("Connection Failed");
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
    console.log("Db Connection successfull!")
})
