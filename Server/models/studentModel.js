const mongoose = require('mongoose');
const validator = require('mongoose-validator')

const studentSchema = new mongoose.Schema({ 
    rollNo: {
        type : String,
        required : true,
    },

    name : {
        type : String,
        required : true, 
    },

    address : {
        type : String,
        required : true, 
    },

    phoneNo :{
        type : Number,
        required : true,
        minlength: 10,
        maxlength: 10
    },

    email : { 
        type : String,
        required : true
    },

    user_id :{
        type: String,
        required : true
    },

    username : { 
        type : String,
        required : true
    }
} , {
    timestamps: true
})

module.exports = mongoose.model("student",studentSchema)