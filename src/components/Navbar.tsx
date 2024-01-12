"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai";

const links = [
  { tag: "Home", href: "/" },
  { tag: "About", href: "/about" },
  { tag: "Projects", href: "/projects" },
  { tag: "Gallery", href: "/gallery" },
  { tag: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 fixed w-full backdrop-blur-md bg-black/30">
        <div>
          <Image src="/images/main.png" width={180} height={180} alt="logo" />
        </div>
        <AiOutlineMenu
          size={30}
          color="white"
          className="md:hidden cursor-pointer"
          onClick={toggle}
        />
        <div className="hidden md:flex gap-4 text-zinc-200">
          {links.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className={`text-zinc-300 hover:text-zinc-500 transition-colors`}
            >
              {link.tag}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex gap-4 text-zinc-200">
          <button className="px-3 py-1 bg-sky-500 rounded-md">Hire Us</button>
          <button className="px-3 py-1 hover:bg-slate-50 rounded-md hover:text-slate-700 transition-colors">
            Pricing
          </button>
        </div>
      </nav>
      <Sidebar open={open} toggle={toggle} />
    </>
  );
}

function Sidebar({ open, toggle }: { open: boolean; toggle: () => void }) {
  return (
    <div
      className={`md:hidden fixed w-full h-screen bg-black ${
        open ? "left-0" : "left-[1000px]"
      } transition-all flex flex-col items-center justify-around`}
    >
      <div className="flex items-center gap-8">
        <Image src="/images/logo.png" width={80} height={80} alt="logo" />
        <Image src="/images/main.png" width={180} height={180} alt="logo" />
      </div>
      <div className="flex flex-col text-zinc-300 text-lg gap-4">
        {links.map((link, i) => (
          <Link href={link.href} key={i}>
            {link.tag}
          </Link>
        ))}
      </div>
      <AiFillCloseCircle
        className="cursor-pointer"
        size={50}
        color="white"
        onClick={toggle}
      />
    </div>
  );
}
