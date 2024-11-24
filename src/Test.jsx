import { delay, motion, stagger } from "framer-motion"
import { useState } from "react"

const Test = () => {

  // const [open, setOpen] = useState(false);

  // const variants = {
  //   visible : {
  //     opacity: 1, x: 800, 
  //     transition : {type : "spring", stiffness: 100, damping: 100}
  //   },
  //   hidden : {opacity: 0},
  // }

  const variants = {
    visible : (i) => ({
      opacity: 1, 
      x: 100, 
      transition : {delay : i * 0.3}
    }),
    hidden : {opacity: 0},
  }

  const items = [
    "Item1","Item2","Item3","Item4","Item5"
  ]

  return (
    <div className='course'>
      <motion.div className="box" 
        // initial={{opacity:0.5, scale:0.5}}
        // animate={{opacity: 1, scale: 1, x: 200, y: 200}} 
        // transition={{duration: 2}}
        // whileTap={{opacity: 1, scale: 2}} 
        // whileDrag={{opacity: 1, scale: 2}} 
        // whileHover={{opacity: 1, scale: 2}} 
        // whileInView={{opacity: 1, scale: 2}} 
        // drag
        variants={variants}
        // initial="hidden"
        animate={open ? "visible" : "hidden" }
        // transition = {{duration: 2}}
        // transition = {{type : "tween"}}
        ></motion.div>

        <button onClick={() => setOpen(prev=>!prev)}>Click</button>

        <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item,i) => (
          <motion.li variants={variants} custom={i} key={item}
          >{item}</motion.li>
        ))}
        </motion.ul>
    </div>
  )
}

export default Test
