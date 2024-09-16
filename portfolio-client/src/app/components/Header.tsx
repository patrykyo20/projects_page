'use client';

import Button from "@/components/button";
import Image from "next/image";
import navigationLinks from "../utils/NavigationLinks";
import Navigation from "./Navigation";
import Burger from "./Burger";
import { SignUpButton, SignInButton, useUser } from '@clerk/nextjs';
import Link from "next/link";
import Skeleton from "@/components/skeleton";

const Header = () => {
  const { user, isLoaded } = useUser();

  return (
    <header
      className="px-[40px] lg:px-[50px] lg:py-[33.5px] py-[40px] bg-primary
        flex justify-between"
    >
      <h1 className="text-textSecondary text-2xl font-bold">Show your <span className="text-[#7241FF]">project</span></h1>
      <nav className="hidden lg:flex">
        <ul
          className="flex text-textPrimary text-xl font-semibold
            items-center gap-[40px] mr-[80px]"
        >
          {navigationLinks.map(nav => (
            <Navigation key={nav.link} link={nav.link} text={nav.text} />
          ))}
        </ul>
      </nav>
      {isLoaded ? (
        user ? (
          <Link href={`/user-page/${user.id}`}>
            <Image
              src={user.imageUrl}
              alt="user-logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
        ) : (
          <div className="hidden lg:flex gap-[14px]">
            <SignInButton>
              <Button px={4} py={2} text={"Sign In"} />
            </SignInButton>

            <SignUpButton>
              <Button px={4} py={2} text={"Sign Up"} active={true} />
            </SignUpButton>
          </div>
        )
      ) : (
        <Skeleton width={50} height={50} />
      )}
      <Burger />
    </header>
  );
};

export default Header;
