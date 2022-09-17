import { motion } from "framer-motion";
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col items-center flex-shrink-0 rounded-lg space-y-7 max-h-[500px] snap-center bg-[#292929] p-12 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-300 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/images/spacejoy_logo.png"
        alt=""
        className="object-cover object-center w-24 h-24 rounded-full"
      />
      <div className="px-0 md:px-6">
        <p className="text-xs text-gray-300 uppercase">
          Started work... - Ended...
        </p>
        <h4 className="text-3xl font-light">Frontend Developer</h4>
        <p className="mt-1 text-lg font-bold">SPACEJOY</p>
        <div className="flex my-2 space-x-2">
          <img
            src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <img
            src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <img
            src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>
        <ul className="ml-5 space-y-4 text-lg list-disc">
          <li>Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
