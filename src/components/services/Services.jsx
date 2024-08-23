import { useRef } from "react";
import "./services.scss";
import { inView, motion, stagger, useInView } from "framer-motion";
import Box from "./box/Box";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const boxVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3, duration: 0.5 },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const boxData = [
    { id: 1, data: "test" },
    { id: 2, data: "test" },
    { id: 3, data: "test" },
    { id: 4, data: "test" },
  ];

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <motion.h1
            initial={{ x: 500 }}
            animate={isInView && { x: 0, transition: { duration: 1 } }}
          >
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </motion.h1>
        </div>
        <div className="title">
          <motion.h1
            initial={{ x: -500 }}
            animate={isInView && { x: 0, transition: { duration: 1 } }}
          >
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </motion.h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={boxVariants}
        initial="hidden"
        animate={isInView && "visible"}
      >
        {boxData.map(({ id }) => (
          <motion.div
            key={id}
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
            variants={boxVariants}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              libero enim nisi aliquam consectetur expedita magni eius ex
              corrupti animi! Ad nam pariatur assumenda quae mollitia libero
              repellat explicabo maiores?
            </p>
            <button>Go</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
