import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavLink from "../Shared/NavLink";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const WebNavbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/home" className="flex items-center font-semibold">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/service" className="flex items-center font-semibold">
          Service
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/course" className="flex items-center font-semibold">
          Course
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/package" className="flex items-center font-semibold">
          Package
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/contact" className="flex items-center font-semibold">
          Contact
        </NavLink>
      </Typography>
    </ul>
  );
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 absolute w-full xl:ml-8 lg:ml-8 md:ml-8 ml-0 backdrop-blur-xl bg-[#A8CBD1]/80 border">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span className="font-bold text-2xl text-white">Edutech</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex">
          <div>
            {user ? (
              <div className="flex">
                <p className="pt-4 text-xs">{user.displayName}</p>
                <div className="pl-3 pt-1">
                  <div className="w-10 rounded-full mr-5">
                    {user.photoURL ? (
                      <img src={user?.photoURL} alt="" />
                    ) : (
                      <img src="https://i.ibb.co/YpkkPT6/2202112.png" alt="" />
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <p>{""}</p>
            )}
          </div>
          {user ? (
            <Button
              onClick={handleSignOut}
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block bg-slate-500"
            >
              <span>Logout</span>
            </Button>
          ) : (
            <Link to="login">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block bg-slate-500"
              >
                <span>Log in</span>
              </Button>
            </Link>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div className="flex">
          <div>
            {user ? (
              <div className="flex">
                <p className="pt-4 text-xs">{user.displayName}</p>
                <div className="pl-3 pt-1">
                  <div className="w-10 rounded-full mr-5">
                    {user.photoURL ? (
                      <img src={user?.photoURL} alt="" />
                    ) : (
                      <img src="https://i.ibb.co/YpkkPT6/2202112.png" alt="" />
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <p>{""}</p>
            )}
          </div>
          {user ? (
            <Button
              onClick={handleSignOut}
              variant="gradient"
              size="sm"
              className="bg-slate-500"
            >
              <span>Logout</span>
            </Button>
          ) : (
            <Link to="login">
              <Button
                variant="gradient"
                size="sm"
                className="bg-slate-500"
              >
                <span>Log in</span>
              </Button>
            </Link>
          )}
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default WebNavbar;
