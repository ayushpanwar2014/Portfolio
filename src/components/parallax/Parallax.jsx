import { useRef } from "react"
import "./Parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion"
import React from "react";

const Parallax = ({type}) => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0,1], ["0","400%"])
  const yBg = useTransform(scrollYProgress, [0,1], ["0","100%"])

  return (
    <div ref={ref} className="parallax" style={{background: "linear-gradient(180deg, #111132, #0c0c1d)"}}>
        <motion.h1 style={{y : yText}}>What We Did?</motion.h1>
        <motion.div  className="mountains"></motion.div>
        <motion.div style={{y : yBg , backgroundImage: "url(/planets.png)"}}  className="planets"></motion.div>
        <motion.div style={{x : yBg}}  className="stars"></motion.div>
    </div>
  )
}

export default Parallax
