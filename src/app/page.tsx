import { currentUser } from '@clerk/nextjs';

export default async function Home() {
  const user = await currentUser();
  console.log(user?.id)

  if (!user) return <h1>no user</h1>

  return (
    <h1 className="text-8xl">Hello</h1>
  );
}
