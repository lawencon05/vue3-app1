import User from "./index";
import UserAdd from "./UserAdd";
import UserDetail from "./UserDetail";

const userRoutes = [
    {
        path : "/user",
        component : User
    },
    {
        path : "/user/:id",
        component : UserDetail
    },
    {
        path : "/user-add",
        component : UserAdd
    }
]

export default userRoutes;