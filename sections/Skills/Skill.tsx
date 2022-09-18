import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skill = (props: Props) => {
  const { directionLeft } = props;

  return (
    <div className="relative flex cursor-pointer group">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        src="/images/spacejoy_logo.png"
        className="object-cover w-20 h-20 transition duration-300 ease-in-out rounded-full filter group-hover:grayscale"
      />
      <div className="absolute w-20 h-20 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
