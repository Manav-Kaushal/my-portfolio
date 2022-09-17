import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center">
      <motion.div
        initial={{
          y: -200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/manav-kaushal"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/manav.kaushal.2605"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/manavkaushal26"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/ManavKaushal13"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      {/* Contact */}
      <motion.div
        initial={{
          y: -200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex items-center cursor-pointer"
      >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p className="hidden text-sm text-gray-400 capitalize md:inline-flex">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
