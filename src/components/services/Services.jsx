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
            <img src="/people.webp" alt="" />
            <h1><motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas</h1>
        </div>
        <div className="title">
            <h1><motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business.</h1>
            <button>What We DO?</button>
        </div>
      </motion.div>
      <motion.div variants={variants} className="listContainer">
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, natus praesentium velit soluta dolor, exercitationem quaerat doloremque consequatur fugiat dolores perspiciatis! A eveniet esse sunt autem ratione incidunt, unde vero.</p>
        <button>Go </button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, natus praesentium velit soluta dolor, exercitationem quaerat doloremque consequatur fugiat dolores perspiciatis! A eveniet esse sunt autem ratione incidunt, unde vero.</p>
        <button>Go </button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, natus praesentium velit soluta dolor, exercitationem quaerat doloremque consequatur fugiat dolores perspiciatis! A eveniet esse sunt autem ratione incidunt, unde vero.</p>
        <button>Go </button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, natus praesentium velit soluta dolor, exercitationem quaerat doloremque consequatur fugiat dolores perspiciatis! A eveniet esse sunt autem ratione incidunt, unde vero.</p>
        <button>Go </button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
