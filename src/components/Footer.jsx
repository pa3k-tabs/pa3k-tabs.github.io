import { FaSeedling } from "react-icons/fa";
import { GiHighGrass } from "react-icons/gi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 p-4">
      <hr
        className="mb-6"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.2))",
          height: "1px",
          border: "none",
        }}
      />{" "}
      <div className="container mx-auto flex flex-row flex-wrap justify-between items-center">
        <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
          <h2 className="text-green-400 text-2xl font-bold">GreenFlow</h2>
          <p className="text-sm">
            GreenFlow is a decentralized application that aims to revolutionize
            the way we think about fertilizers and sustainable farming
            practices.
          </p>
          <div className="flex flex-wrap mt-4">
            <FaSeedling size={24} className="mr-2" />
            <GiHighGrass size={24} className="mr-2" />
          </div>
        </div>
        <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
          <h2 className="text-green-400 text-2xl font-bold">
            Join Our Community
          </h2>
          <ul className="list-none mb-0 flex flex-wrap">
            <li className="mr-4 mb-2">
              <a
                href="https://twitter.com/greenflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition duration-300"
              >
                <AiOutlineTwitter size={24} />
              </a>
            </li>
            <li className="mr-4 mb-2">
              <a
                href="https://facebook.com/greenflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition duration-300"
              >
                <AiOutlineFacebook size={24} />
              </a>
            </li>
            <li className="mr-4 mb-2">
              <a
                href="https://instagram.com/greenflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition duration-300"
              >
                <AiOutlineInstagram size={24} />
              </a>
            </li>
            <li className="mr-4 mb-2">
              <a
                href="https://discord.com/greenflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition duration-300"
              >
                <FaDiscord size={24} />
              </a>
            </li>
            <li className="mr-4 mb-2">
              <a
                href="https://t.me/greenflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition duration-300"
              >
                <FaTelegram size={24} />
              </a>
            </li>
            <li className="mr-4 mb-2">
              <a
                href="https://reddit.com/r/greenflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition duration-300"
              >
                <FaReddit size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
