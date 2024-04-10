import { User } from "../models";

interface User {
  username: string;
  email: string;
  password: string;
}

export async function createUser(userOpts: any) {
  if (!userOpts.username) {
    throw new Error('Did not supply username');
  };
  if (!userOpts.email) {
    throw new Error('Did not supply email');
  };
  if (!userOpts.password) {
    throw new Error('Did not supply password');
  };
  
  const user = await User.create({
    ...userOpts,
  });

  if (!user) throw new Error('Could not create user')

  return user;
};