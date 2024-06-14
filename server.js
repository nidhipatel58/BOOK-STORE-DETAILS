require("dotenv").config();
let http=require("http");
let express=require("express");
const dbconnect = require("./db/db.connect");
let app=express();
let cors=require("cors");
let routes=require("./routes");
const {isLogin}=require("./middleware/auth");
const cookieParser = require("cookie-parser");


// cookies
app.use(cookieParser());

//cors
app.use(
    cors({  
        origin:"*",
    })
);

app.set("view engine", "ejs");

//body
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//routes
app.use("/v1",routes);

app.get("/",(req,res)=>{
    res.render("index")
})

//Database connection
dbconnect();


// Server setup:-
http.createServer(app).listen(process.env.PORT,()=>{
    console.log(`Server get Started:) ${process.env.PORT}`);
});





