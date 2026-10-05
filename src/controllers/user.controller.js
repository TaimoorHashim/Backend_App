import asyncHandler from "../utils/aynchandler.js";
import { User } from "../models/user.model.js";
import {ApiError} from "../utils/apiErrors.js";


const registerUser = asyncHandler(async (req, res) => {
    // get user data from request body
    const { username, email, fullname, password } = req.body;
    console.log("Email:", email);

    if (!username || !email || !fullname || !password) {
        throw new ApiError(400, "Please provide all required fields");
    }
    // validate user data
    //Check if user already exists: Username or Email

    //Check for images and avatar

    //Upload the image to cloudinary, and avatar

    //Create the user object 

    //Create the user in the database

    //Remove password and refreshToken from the user object before sending the response

    //Check for user creation and return response
})



export { registerUser };