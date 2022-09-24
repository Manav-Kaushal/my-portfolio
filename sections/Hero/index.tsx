import BackgroundCircles from "@components/BackgroundCircles";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, My name's Manav", "<ILoveToCode />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <img
        src="https://images.pexels.com/photos/12545836/pexels-photo-12545836.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="profile photo"
        className="relative w-32 h-32 mx-auto rounded-full"
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm tracking-[15px] text-gray-500 uppercase">
          Frontend Developer
        </h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
