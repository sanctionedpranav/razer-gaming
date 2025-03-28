import React from "react";
import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";

const links = [
  { icon: <FaDiscord />, href: "https://discord.com" },
  { icon: <FaTwitter />, href: "https://twitter.com" },
  { icon: <FaGithub />, href: "https://github.com" },
  { icon: <FaTwitch />, href: "https://twitch.com" },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-normal md:text-left">
          &copy; 2021 Tailwind CSS
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {links?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link?.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
