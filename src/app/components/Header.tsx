'use client';

import Button from "@/components/button";
import Image from "next/image";
import navigationLinks from "../utils/NavigationLinks";
import Navigation from "./Navigation";
import Burger from "./Burger";
import { SignUpButton, SignInButton, useUser } from '@clerk/nextjs';
import Link from "next/link";

const Header = () => {
  const { user } = useUser();

  return (
    <header
      className="px-[40px] lg:px-[50px] lg:py-[33.5px] py-[40px] bg-primary
        flex justify-between"
    >
      <Image 
        src="/logo.svg"
        alt="logo"
        width={152}
        height={24}
      />
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
      {user 
        ? 
          <Link href={`/user-page/${user.id}`}>
            <Image
              src={user.imageUrl}
              alt={"user-logo"}
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
        :
          <div className="hidden lg:flex gap-[14px]">
            <SignInButton>
              <Button width={138} height={51} text={"Sing In"} />
            </SignInButton>

            <SignUpButton>
              <Button width={138} height={51} text={"Sing Up"} active={true} />
            </SignUpButton>
          </div>
        }
        <Burger />
    </header>
  );
};

export default Header;
