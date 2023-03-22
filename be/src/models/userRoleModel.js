import mongoose from "mongoose";

export const UserRole ={
    name:{
        type: String,
        required: true,
    },
};

export const userSchema = new mongoose.Schema(User, {timestamps: true});
