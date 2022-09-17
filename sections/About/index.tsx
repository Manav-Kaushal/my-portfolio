import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="https://images.pexels.com/photos/12545836/pexels-photo-12545836.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="flex-shrink-0 object-cover w-56 h-56 -mb-20 rounded-full md:mb-0 md:rounded-lg md:w-64 md:h-96 xl:w-[350px] xl:h-[400px]"
      />
      <div className="px-0 space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-primary/50">little</span> bg
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          nesciunt cupiditate ad odit cumque debitis at iure, magni dolores
          voluptas ratione perferendis fugiat natus odio. Cupiditate, obcaecati
          laudantium sequi quasi voluptatum distinctio asperiores quod
          veritatis? Est non ad nostrum repellendus earum nisi repudiandae
          inventore facere perspiciatis. Ullam explicabo eos sequi dolore itaque
          repellendus voluptate ab similique laudantium quo, provident officiis
          quia nisi tempore inventore dolor dolores error a consectetur eius
          aliquam reiciendis facilis. Quaerat veniam quia incidunt.
          Reprehenderit, ut autem?
        </p>
      </div>
    </motion.div>
  );
};

export default About;
