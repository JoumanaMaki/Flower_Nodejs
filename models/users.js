import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        //A unique index ensures that the indexed fields do not store duplicate values;
        index: {unique : true}
    },
    phone: {
        type: String, 
        required: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: true

    },
    //role if it's admin or user 1-> for admin 2-> for user
    role: {
        type: Number,
        default: 2
    },
    verified: {
        type: Boolean,
        default: false,
    },
    avatar: {
        type: String,
        default: "default.png"
    },
    googleTokenId: {
        type:String,
    },
    whishlist:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Flower"
        }
    ],
});
const User =  mongoose.model("User", userSchema);
export default User;