import { useRef } from "react";
import "./Services.scss"
import { motion, useInView } from "framer-motion"


const variants  = {
  initial : {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}

const Services = () => {

  const ref = useRef();

  const isInView = useInView(ref, {margin: "-100px"})

  return (
    <motion.div ref={ref} animate={ "animate"} variants={variants} initial="initial" className="services">
      <motion.div className="textContainer">
        <p>I focus on helping your brand grow <br/> and move forward</p><hr/>
      </motion.div>
      <motion.div variants={variants} className="titleContainer">
        <div className="title">
            <img src="./people.webp" alt="" />
            <h1><motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas</h1>
        </div>
        <div className="title">
            <h1><motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business.</h1>
            <button>What We DO?</button>
        </div>
      </motion.div>
      <motion.div variants={variants} className="listContainer">
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Custom Web Application Development:</h2>
            <p>Offer custom web application development services using React for frontend development and JavaScript or Python for backend development, leveraging your expertise in building interactive and scalable web applications tailored to clients' specific requirements.</p>
        <button>Go </button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Cross-Platform Mobile App Development:</h2>
            <p>Provide cross-platform mobile app development services using React Native, allowing clients to reach a wider audience across multiple devices and platforms with a single codebase, while also utilizing backend technologies such as JavaScript or Python for server-side logic.</p>
        <button>Go </button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Algorithm Design and Optimization Services:</h2>
            <p>Offer algorithm design and optimization services using C++ and data structures, helping clients optimize performance, scalability, and efficiency of their software systems and applications.</p>
        <button>Go </button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Custom API Development:</h2>
            <p>Develop custom APIs (Application Programming Interfaces) using JavaScript or Python for backend logic, integrate with database systems for data storage and retrieval, and provide clients with robust and scalable APIs for integrating their applications with external systems and services.</p>
        <button>Go </button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
