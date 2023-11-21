import { User } from "./models";
import { connectDB } from "./utils";

export const fetchUsers = async () => {
    try {
        connectDB()
        const user = await User.find()
        return user
    } catch (error) {
        console.log(error);
    }
}