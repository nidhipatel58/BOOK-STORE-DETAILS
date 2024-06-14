let mongoose=require("mongoose");


function dbconnect(){

    mongoose
    .connect(process.env.DB_URL)
    .then(()=>{
         console.log("Database connected successfully:)");
    })
    .catch((err)=>{
            console.log(err,"error");
    });
};

module.exports=dbconnect;


