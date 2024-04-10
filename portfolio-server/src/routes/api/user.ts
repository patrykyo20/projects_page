import { Router } from "express";
import { createUser } from "../../controllers/user";

const route = Router();

route.get('/', (req, res) => {
  res.send({
    "user": {
      "email": "patryk@gmail.com",
      "token": "jwt.token",
      "username": "jake",
      "bio": "I work at stateform",
      "image": null,
    }
  })
})

route.post('/', async (req, res) => {
  const createdUser = await createUser({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });

  res.send(createdUser);
})

export default route;