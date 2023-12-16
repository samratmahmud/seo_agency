"use client";
import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";
import Navitem from "./Navitem";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const navLinks = [
  {
    title: "Demo",
    path: "/",
    list: [
      {title: "Design Agency", path: "/"},
      {title: "Startup Agency", path: "/"},
      {title: "SEO Agency", path: "/"},
      {title: "Business Consultation", path: "/"},
      {title: "Digital Marketing", path: "/"},
    ],
  },
  {title: "About Us", path: "/about_us"},
  {
    title: "Pages",
    path: "/",
    list: [
      {title: "About Us", path: "/about_us"},
      {title: "Pricing", path: "/"},
      {title: "blog ", path: "/"},
      {title: "Service", path: "/"},
      {title: "Team", path: "/"},
      {title: "Portfolio", path: "/"},
      {title: "Utility", path: "/"},
      {title: "Account", path: "/"},
    ],
  },
  {
    title: "Blog",
    path: "/",
    list: [
      {title: "blog", path: "/"},
      {title: "Blog grid", path: "/"},
      {title: "blog Details", path: "/"},
    ],
  },
  {title: "Contact Us", path: "/contact_us"},
];
const socialLinks = [
  {icon: "/images/icons8-twitter-30.png", path: "https://twitter.com/"},
  {icon: "/images/icons8-fb-30.png", path: "https://www.facebook.com/"},
  {icon: "/images/icons8-instagram-30.png", path: "https://www.instagram.com/"},
  {icon: "/images/icons8-linkedin-32.png", path: "https://bd.linkedin.com/"},
];

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen((prev) => !prev);
  return (
    <nav className="bg-white fixed left-0 right-0 z-10">
      <div className="container">
        <div className="flex justify-between items-center gap-9 py-3.5">
          <div className="flex items-center gap-9">
            <Link href="/">
              <img src="/images/logo-dark.svg" alt="" />
            </Link>
            <div className="hidden lg:inline">
              <div className="flex gap-1">
                {navLinks.map(({title, path, list}, index) => (
                  <Navitem title={title} path={path} list={list} key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex gap-2">
              {socialLinks.map(({icon, path}, index) => (
                <Link
                  href={path}
                  target="_blank"
                  key={index}
                  className="hover:bg-yellow-300 duration-300 p-1.5 w-9 h-9 rounded-full flex items-center justify-center border border-black hover:border-yellow-300"
                >
                  <img src={icon} alt="" />
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-10">
              <Link href="" className="hidden sm:inline py-1.5">
                <Buttons name1="Talk to an expert" name2="Talk to an expert" />
              </Link>
              <span onClick={toggle} className="lg:hidden">
                <img src="/images/icons8-menu-30.png" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <Drawer
            onClose={toggle}
            open={open}
            direction="left"
            style={{width: 320}}
          >
            <div className="flex flex-col justify-between h-full pb-4 px-4">
              <div>
                <div
                  role="button"
                  onClick={toggle}
                  className="text-base leading-[50px] flex justify-end"
                >
                  ×
                </div>
                <hr className="lg:hidden border border-gray-300" />
                <div className="flex flex-col gap-1">
                  {navLinks.map(({title, path, list}, index) => (
                    <Navitem
                      title={title}
                      path={path}
                      list={list}
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="text-5xl text-center">
                © Copyright 2023, All Rights Reserved by Mthemeus
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
