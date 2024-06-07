import { useRef } from "react"
import "./Portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "Sneaker Website",
        img: "./3.jpeg",
        desc: "Empower Your Stride: Crafting the Ultimate Nike Experience with HTML, CSS, and JavaScript!",
        url: "https://ayushpanwar2014.github.io/Sneaker-Website/",
    },
    {
        id: 2,
        title: "IChat App",
        img: "./2.jpeg",
        desc: "Empowering real-time connections with React and Firebase: Building a cutting-edge chat application to enhance communication and collaboration.",
        url: "https://ayushpanwar2014.github.io/Ichat/",
    },
    {
        id: 3,
        title: "Movie App",
        img: "./4.jpeg",
        desc: "🎬 Lights, Camera, Action! 🍿 Excited to announce the launch of our new movie website! Dive into a world of cinematic wonders with exclusive content, trailers, and more. Join us as we redefine the movie experience, one click at a time. Discover the magic today!",
        url: "https://moviemingle-com.github.io/moviemingle/",
    },
    {
        id: 4,
        title: "Word Tools",
        img: "./1.jpeg",
        desc: "Crafting Clarity: Your Words, Polished. Introducing Words Tool App, where React meets precision in language refinement.",
        url: "https://ayushpanwar2014.github.io/WordsTool/",
    },
]

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref} >
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a target="_blank" href={item.url}>
                        <button>See Demo</button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="portfolio" ref={ref} >
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio
