import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 w-full border-t-[1px] border-gray-500">
      <div className="mx-auto flex max-w-7xl justify-between px-4 py-8 text-gray-500">
        <span className="w-56">©Learnhub Academy</span>
        <div className="flex gap-6 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaYoutube />
          <FaTwitter />
        </div>
        <div className="flex w-56 gap-4">
          <span>Terms of Use</span>
          <span>Privacy Police</span>
        </div>
      </div>
    </footer>
  );
}
