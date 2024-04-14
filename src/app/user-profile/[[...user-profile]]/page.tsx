'use client';

import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const UserPage = () => {
  return (
    <div className="flex justify-center p-10">
      <UserProfile 
        path="/user-profile"
        routing="path"
        appearance={{
          baseTheme: dark
        }}
      >
      </UserProfile>
    </div>
  );
};

export default UserPage;
