import { client, account, ID } from "../config/appwrite.js";

// register user
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    try {
        const user = await account.create(
            ID.unique(),
            email,
            password,
            name
        );
        return res.status(200).json({
            message: "User registered successfully",
            user: user,
            status: true
        });
    } catch (error) {
        console.log("Error registering user:", error);
        return res.status(500).json({
            message: error.message,
            status: false
        });
    }
}
// signin user
export const signinUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const session = await account.createEmailPasswordSession(
            email,
            password
        );
        return res.status(200).json({
            message: "User logged in successfully",
            session: session,
            status: true
        });
    } catch (error) {
        console.log("Error logging in user:", error);
        return res.status(500).json({
            message: error.message,
            status: false
        });
    }
}