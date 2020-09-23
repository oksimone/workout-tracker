const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TrackerSchema = new Schema({
    day:{
    type:Date,
    default: () => new Date()
    },

    exercise:
        [
        {
            type: {
                type:String,
                trim:true,

            },
            name: {
                type:String,
                trim:true,
                required:"First name required"
            },
            duration:{
                type:Number,
                required:"Must enter duration"
            },
            weight:{
                type:Number,
                required:"Must enter weight"
            },
            reps:{
                type:Number,
                required:"Must enter reps"
            },
            sets:{
                type:Number,
                required:"Must enter sets"
            },
            distance:{
                type:Number,
                required:"Must enter your distance"
            }

        }
        ]

    

})

const WorkoutTracker = mongoose.model("workoutTracker", TrackerSchema);

module.exports = WorkoutTracker;