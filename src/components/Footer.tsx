import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 w-full border-t-[1px] border-gray-500">
      <div className="mx-auto gap-4 flex max-w-7xl flex-col justify-between items-center px-4 py-8 text-gray-500 lg:flex-row">
        <span className="w-56 text-center">©Learnhub Academy</span>
        <div className="flex gap-6 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaYoutube />
          <FaTwitter />
        </div>
        <div className="flex w-56 gap-4 justify-around">
          <span>Terms of Use</span>
          <span>Privacy Police</span>
        </div>
      </div>
    </footer>
  );
}
