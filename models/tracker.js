const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TrackerSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },

  exercise: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type required"
      },
      name: {
        type: String,
        trim: true,
        required: "First name required",
      },
      duration: {
        type: Number,
        required: "Must enter duration",
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      },
    },
  ]
},
{
    toJSON: {
        virtuals: true
    }
});

TrackerSchema.virtual("totalDuration").get(function() {
    return this.exercise.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0)
})


const WorkoutTracker = mongoose.model("workoutTracker", TrackerSchema);

module.exports = WorkoutTracker;
