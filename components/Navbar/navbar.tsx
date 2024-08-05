"use client";
import { RefsContext } from "@/app/layout";
import { Box, Drawer } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSliceActions } from "@/redux/user/index"; // Adjust the path as needed
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { usePathname } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/config/firebase";

type Props = {};

const Navbar = (props: Props) => {
  const pathname=usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const { global_pre, who_are_we, get_involved, apply } = useContext(RefsContext);
  const dispatch = useDispatch();
  
  const [isLoggedIn, setLogin] = useState(false);
  
  
  
  const userData = useSelector((state: any) => state.user.userData);
  useEffect(()=>{
    if(userData.email!=="") router.push("/");
  },[router,userData])
  useEffect(() => {
    // Update isLoggedIn based on userData.email
    setLogin(userData.email !== "");
    
  }, [userData]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Update Redux store with user data
        dispatch(userSliceActions.setUserData({
          displayName:"",
email:"",
isMember:false,
photoUrl:"",
uid:"",
        }));
      } else {
        // Clear user data in Redux store if no user is logged in
        dispatch(userSliceActions.clearUserData());
        router.push("/login"); // Redirect to login if no user is authenticated
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch, router]);


  const handleLogout = () => {
    dispatch(userSliceActions.clearUserData());
    signOut(auth);
    router.push("/login");
  };

  const links = [
    {
      title: "Global",
      pushTo: () => {
        window.scrollTo({
          top: global_pre.current.offsetTop,
          behavior: "smooth",
        });
      },
    },
    {
      title: "Who We Are",
      pushTo: () => {
        window.scrollTo({
          top: who_are_we.current.offsetTop,
          behavior: "smooth",
        });
      },
    },
    {
      title: "Get Involved",
      pushTo: () =>
        window.scrollTo({
          top: get_involved.current.offsetTop,
          behavior: "smooth",
        }),
    },
    {
      title: "Team",
      pushTo: () => {
        router.push("/team");
      },
    },
  ];

  return (
    <div>
      <ToastContainer/>
      <div className="w-full items-center p-4 z-10 h-[4rem] flex justify-between flex-row text-black">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="w-[10%] hover:cursor-pointer"
        >
          <Image
            priority={true}
            src="/logo.svg"
            alt="brand"
            height={60}
            width={60}
            className="h-8 w-8"
          />
        </div>
        <div className="md:w-[60%] py-3 h-[3rem] hidden md:flex items-center justify-center bg-white rounded-full">
          <div className="w-full py-4 flex flex-row justify-evenly p-2 text-[#203a63]">
            <div
              onClick={() => router.push("/grant-program")}
              className="cursor-pointer"
            >
              UF-Grant
            </div>
            <div className="cursor-pointer">
              <Link href={"/home"}>UN-Fransico Club</Link>
            </div>
            <div
              onClick={() => router.push("/donation")}
              className="cursor-pointer"
            >
              Membership
            </div>
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                router.push("/");
                window.scrollTo({
                  top: apply.current.offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              Join Us
            </div>
            <div
              onClick={() => router.push("/plantation")}
              className="cursor-pointer"
            >
              Career Resources
            </div>
          </div>
        </div>
        <div className="md:w-[30%]">
          <div className="w-full flex justify-evenly items-center">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div
                  onClick={() => router.push("/unifordProfile")}
                  className="cursor-pointer"
                >
                  <Image
                    src="/user-icon.svg"
                    alt="User Icon"
                    height={40}
                    width={40}
                  />
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-[#203a63] text-white p-2 rounded-lg"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/signup" className="bg-[#203a63] text-white p-2 rounded-lg">
                  Sign Up
                </Link>
              </div>
            )}
            <div className="flex md:hidden">
              <div
                onClick={() => {
                  setDrawerOpen(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 6l16 0" />
                  <path d="M4 12l16 0" />
                  <path d="M4 18l16 0" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        onClose={() => setDrawerOpen(false)}
        anchor="right"
        open={drawerOpen}
      >
        <Box sx={{ width: 250 }}>
          {links.map((link, index) => (
            <div
              key={index}
              onClick={() => {
                link.pushTo();
                setDrawerOpen(false);
              }}
              className="w-full flex px-4 py-2 hover:bg-[#B9E390] hover:text-black items-center justify-start gap-3"
            >
              <div className="text-sm font-semibold">{link.title}</div>
            </div>
          ))}
        </Box>
      </Drawer>
    </div>
  );
};

export default Navbar;
