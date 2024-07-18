import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full Name is required"],
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "This username is already taken"],
        lowercase: [true, "Username must be in lowercase"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "This email is already in use by another user"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
    }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema);