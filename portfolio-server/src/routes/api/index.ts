import { Router } from "express";
import users from "./user";
import posts from "./posts";

const route = Router();

route.use('/users', users)
route.use('/posts', posts)

export default route;