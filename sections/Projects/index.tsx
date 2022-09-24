import { motion } from "framer-motion";

type Props = {};

const projects = [1, 2, 3, 4, 5];

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left justify-evenly"
    >
      <h3 className="relative top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory customScrollBar">
        {projects.map((project, index) => (
          <div
            key={project}
            className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-10 space-y-5 snap-center"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src="https://images.pexels.com/photos/2606402/pexels-photo-2606402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-64 md:w-80"
            />
            <div className="max-w-2xl px-0 space-y-10 md:px-10">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-primary/50">
                  Case Study {index + 1} of {projects.length}:
                </span>{" "}
                UPS CLONE
              </h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                sint, quasi ab placeat error incidunt quaerat esse suscipit
                explicabo, voluptatum vitae aspernatur nam veritatis ratione
                quia similique delectus provident, assumenda praesentium vel
                odit. Dolorem necessitatibus quod id laudantium excepturi fugit
                soluta.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute w-full top-[30%] bg-primary/10 left-0 h-[350px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
