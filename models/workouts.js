const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutsSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now,
        },

        exercise: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter the type of the exercise",
                },

                name: {
                    type: String,
                    trim: true,
                    required: "Enter the name of the exercise",
                },

                duration: {
                    type: Number,
                    required: "Enter the duration of the exercise",
                },

                weight: {
                    type: Number,
                    required: "Enter the weight used",
                    default: 0,
                },

                reps: {
                    type: Number,
                    required: "Enter the number of reps completed,",
                    default: 0,
                },

                sets: {
                    type: Number,
                    required: "Enter the number of sets completed",
                    default: 0,
                },

                distance: {
                    type: Number,
                    required: "Enter the distance completed",
                    default: 0,
                },
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

workoutsSchema.virtual("totalDuration").get(function () {
    return this.exercise.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const workouts = mongoose.model("workouts", workoutsSchema);

module.exports = workouts;