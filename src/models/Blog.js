const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema({
    title: {
        type :String,
        required :true
    },
    body:{
        type:String,
        required:true
    },
    authorId:{
        type:ObjectId,
        ref : "AuthorModel",
    },
    tags:[{type:String}],
    category:{
        type:String,
        required: true,
        examples:[{type:String}]
    },
    subcategory:
        [{type:String}],
        publishedAt:Date,

        isPublished:{type:Boolean,
            default:false
    
        },
        Deletedat:Date,
        isDeleted:{
            type:Boolean,
            default:false
       
        },
       
    

    },{timestamps: true},
)

module.exports= mongoose.model("blog",blogSchema)

