import { User } from "./models";
import { connectDB } from "./utils";

export const fetchUsers = async (q) => {
    const regex = new RegExp(q, "i")
    try {
        connectDB()
        const user = await User.find({username:{$regex: regex}})
        return user
    } catch (error) {
        console.log(error);
    }
}