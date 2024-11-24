import "./Navbar.scss"
import Sidebar from "../sidebar/Sidebar"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>

      <div className="wrapper">
        <motion.span 
        initial={{opacity: 0, scale: 0.5}} 
        animate={{opacity: 1, scale: 1}} 
        transition={{duration: 0.5 }}
        >Ayush Panwar</motion.span>
        <div className="social">
            <a href="https://www.linkedin.com/in/ayush-panwar-a21712189" target="_blank" ><img src="/linkedin.png" alt="" /></a>
            <a href="https://www.instagram.com/aaayuuussh?igsh=NGU4YTZzbWg4ZnF3" target="_blank" ><img src="/instagram.png" alt="" /></a>
            <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" ><img src="/naukri.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
