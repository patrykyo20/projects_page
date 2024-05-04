'use client';

import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import Button from "@/components/button";
import Link from "next/link";

const UserPage = () => {
  const { user } = useUser();

  return (
    <main className="grid place-items-center min-h-screen relative">
      {!user 
        ? 
          'loading' 
        : 
  
        <>
          <section
            className="w-[90%] lg:w-[68%] px-[22px] lg:px-[144px] pt-[150px] lg:pt-[138px] pb-[64px] border-t-2 border-l-2 border-r-2 border-headline
            border-b-4 rounded-t-20 rounded-r-20 rounded-l-20 rounded-xl shadow-customShadow relative"
          >
            <Image
              src={user?.imageUrl}
              alt={"userImage"}
              width={250}
              height={250}
              className="absolute left-1/2 transform -translate-x-1/2 w-[125px] h-[125px] lg:w-[200px] lg:h-[200px] rounded-full top-[-10%] lg:top-[-20%]"
              style={{
                left: 'calc(50%)',
              }}
            />
              <div
                className="absolute right-[20px] lg:right-[40px] top-[60px] lg:top-[60px]"
              >
                <Button px={4} py={2} text={"Edit profile"} active={true} />
              </div>

              <h1 className="text-center text-textSecondary text-[34px] font-bold">
                {user?.fullName}
              </h1>

              <h3 className="text-textSecondary text-[34px] font-bold mt-[25px] lg:mt-[50px]">
                About
              </h3>
              <p className="text-[20px] text-textPrimary mt-[20px]">
                I&aposm Yagna Kusumanchi, an aspiring Full Stack Developer with a passion for bringing ideas to life. Proficient in C, C++, Python, JavaScript,
                and experienced in Node, Express, MongoDB, and React, I`&apos;`m dedicated to crafting innovative and impactful digital solutions. Let`&apos;`s connect and
                create something amazing! 👨‍💻
              </p>
              <div className="flex gap-5 mt-[50px] items-center">
                <h3 className="text-textSecondary text-[34px] font-bold">
                  My Portfolios
                </h3>
                <Link href={"/create-project"}>
                  <Button px={4} py={2} text={"Create portfolios"} active={true} />
                </Link>
              </div>

          </section>
        </>
      }
    </main>
  );
};

export default UserPage;