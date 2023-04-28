import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence, Variants } from "framer-motion";

type Props = {};

import Container from "@/layout/Container";
import { Navbar_Context } from "@/context/Navbar_Context";

import Logo from "@/assets/logo.jpg";
import { FiChevronDown } from "react-icons/fi";
import DropDown_List from "./DropDown_List";
import { LINKS } from "@/contents/Links";
import { User_Context } from "@/context/User_Context";

import { VscVerifiedFilled } from "react-icons/vsc";
// import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

//import { signInWithGithub, signInWithGoogle } from "@/utils/Firebase";

const ButtonVariants: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.5, opacity: 0 },
};

export default function Navbar({}: Props) {
  const { isButton } = useContext(Navbar_Context);
  const { currentUser } = useContext(User_Context);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isSignIn, setIsSignIn] = useState<boolean>(false);

  const router = useRouter();

  const signIn = async () => {
//    const res = await signInWithGithub();
  };

  return (
    <nav
      className={`${
        router.pathname.includes("blog") || router.pathname.includes("chat")
          ? "absolute"
          : "fixed"
      } top-0 left-0 z-50 w-full h-20 bg-light-blue/50 backdrop-blur-md`}
    >
      <div className="absolute bottom-0 left-0 w-full h-1 opacity-50 bg-gradient-to-l from-primary to-secondary"></div>
      <Container className="flex items-center justify-between h-full">
        <Link href={"/"}>
          <Image
            src={Logo}
            width={100}
            height={100}
            alt="Logo Image"
            className="w-12 rounded-full"
          />
        </Link>
        <div className="flex items-center gap-4">
          <motion.p layoutId="chat">
            <Link
              href="/chat-community"
              className="hidden font-medium md:block"
            >
              Chat Community
            </Link>
          </motion.p>
          {router.pathname.includes("chat-community") &&
            (currentUser ? (
              <VscVerifiedFilled className="text-2xl text-blue-600" />
            ) : (
              <div className="relative">
                <button onClick={() => setIsSignIn(!isSignIn)}>Sign In</button>
                {isSignIn && (
                  <ul className="absolute right-0 overflow-hidden translate-y-8 bg-white rounded-md w-52">
                    <li
                      className="flex items-center gap-2 p-2 text-sm font-medium cursor-pointer hover:bg-gray-300/10"
//                       onClick={signInWithGithub}
                    >

                    </li>
                    <li
                      className="flex items-center gap-2 p-2 text-sm font-medium cursor-pointer hover:bg-gray-300/10"
//                       onClick={signInWithGoogle}
                    >

                    </li>
                  </ul>
                )}
              </div>
            ))}
          <AnimatePresence>
            {isButton && (
              <div className="relative">
                <motion.div
                  variants={ButtonVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex items-center gap-4 px-4 py-2 font-medium duration-150 bg-white border-2 rounded-lg active:!scale-95 cursor-pointer"
                  onClick={() => setIsMenu(!isMenu)}
                >
                  <span>Menu</span>
                  <span className={`${isMenu && "rotate-180"} duration-200`}>
                    <FiChevronDown />
                  </span>
                </motion.div>

                <AnimatePresence>
                  {isMenu && (
                    <DropDown_List
                      className="absolute right-0 w-56 translate-y-3"
                      data={LINKS}
                    />
                  )}
                </AnimatePresence>
              </div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </nav>
  );
}