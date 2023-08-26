const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a student name"]
        },
        marks: {
            type: Number,
            default: 0
        } 
    },
    {
        versionKey: false
    },
    // {
    //     ObjectId: false,
    // }
)
const Student = mongoose.model('Student', studentSchema);
module.exports = Student