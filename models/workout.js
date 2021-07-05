const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
day: {
    type: Date,
},
exercises: [ 
    {
        type:{
            type: String,
            trim: true,
            required: 'Enter type of exercise'
        },
        name: {
            type: Number,
            required: 'Enter name of exercise'
        },
        duration: {
            type: Number,
            required: 'Enter duration of exercise'
        },
        weight: {
            type: Number,
            required: 'Enter used weight'
        },
        reps: {
            type: Number,
            required: 'Enter number of reps'
        },
        sets: {
            type: Number,
            required: 'Enter number of sets'
        }
        
    }

],
})