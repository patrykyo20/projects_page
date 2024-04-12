import Button from "@/components/button";
import Image from "next/image";
import navigationLinks from "../utils/NavigationLinks";
import Navigation from "./Navigation";
import Burger from "./Burger";
import { SignUpButton, SignInButton } from '@clerk/nextjs';

const Header = () => {
  console.log(SignUpButton)
  return (
    <header
      className="px-[40px] lg:px-[50px] lg:py-[33.5px] py-[40px] bg-primary w-screen 
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
            items-center gap-[40px]"
        >
          {navigationLinks.map(nav => (
            <Navigation key={nav.link} link={nav.link} text={nav.text} />
          ))}
        </ul>
      </nav>
      <div className="hidden lg:flex gap-[14px]">
        <SignInButton>
          <Button width={138} height={51} text={"Sing In"} />
        </SignInButton>

        <SignUpButton>
          <Button width={138} height={51} text={"Sing Up"} />
        </SignUpButton>
      </div>
      <Burger />
    </header>
  );
};

export default Header;