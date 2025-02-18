import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: String,
        required: true
    },
    workoutName: {
        type: String,
        unique: true,
        required: true
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    weight: {
        type: Number
    },
    duration: {
        type: Number
    },
    caloriesBunred: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    },

},
{ timestamps: true }

);

export default mongoose.model('Workout', WorkoutSchema);