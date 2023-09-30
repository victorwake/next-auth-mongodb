import {Schema, model, models} from "mongoose";

const userSchema = new Schema({
    email: {
        type: "string",
        unique: [true, "existing email"],
        required: [true, "Email is required"],
        match: [/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        " Email is not valid"]
    },
    password: {
        type: "string",
        required: [true,"Password is required"],
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_])\S{8,}$/,
        "must contain, uppercase, number and - or _"],
        select: false
    },
    firstName: {
        type: "string",
        // required: [true, "Name is required"],
        minLength: [3, "Name be at least 3 characters"],
        maxLength: [15, "Name be at most 15 characters"]
    },
    lastName: {
        type: "string",
        // required: [true, "Last name is required"],
        minLength: [3, "last name be at least 3 characters"],
        maxLength: [15, "last name be at most 3 characters"]
    }
});
// models verifica si la tabla user ya existe
const User = models.User || model('User', userSchema)
export default User;

