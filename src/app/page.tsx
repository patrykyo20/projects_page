import { SignInButton, SignedIn, SignedOut, UserButton, currentUser } from '@clerk/nextjs';

export default async function Home() {
  const user = await currentUser();
  console.log(user?.id)

  return (
    <>
      <h1 className="text-8xl">Hello</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
}
