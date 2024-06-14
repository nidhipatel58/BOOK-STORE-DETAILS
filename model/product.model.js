let mongoose=require("mongoose");


let productSchema=new mongoose.Schema({

    title:{
        type:String,
    },
    author:{
        type:String,
    },
    pages:{
        type:Number,
    },
    published_date:{
        type:Date,
        default:Date.now
    },
    availability: {
        type: String,
        enum: ['Available', 'Checked Out', 'Reserved'],
        default: 'Available'
    },
    language:{
        type:String,
        require:false
    }
});

let product=mongoose.model("product",productSchema);
module.exports=product;