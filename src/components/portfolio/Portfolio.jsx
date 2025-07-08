import { useRef } from "react"
import React from "react";
import "./Portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [

    {
        id: 1,
        title: "Prescripto – Healthcare Appointment Booking System",
        img: "./Prescripto.png",
        desc: "Prescripto is a full-stack role-based healthcare appointment system designed for patients, doctors, and administrators. Patients can book appointments, pay via Razorpay or cash, and manage their profiles. Doctors can approve, cancel, and complete appointments, while Admins handle doctor onboarding and monitor analytics.",
        LinkedinUrl: "https://www.linkedin.com/posts/ayush-panwar-a21712189_mernstack-reactjs-nodejs-activity-7348232978621218816-KxwM?utm_source=share&utm_medium=member_desktop&rcm=ACoAACxsCDkBo819QNyXD8_icp4HCIHrdv56tck",
        GithubUrl: "https://github.com/ayushpanwar2014/Prescripto"
    },
    {
        id: 2,
        title: "FoodoMart – Online Food Ordering Platform",
        img: "./Foodomart.png",
        desc: "FoodoMart is a dynamic food ordering platform where users can browse restaurants, add items to cart, and track their orders in real-time. Admins can manage menus, control restaurant listings, and view user order data.",
        GithubUrl: "https://github.com/ayushpanwar2014/FoodoMart",
        LinkedinUrl: "https://www.linkedin.com/posts/ayush-panwar-a21712189_mern-webdevelopment-fullstack-activity-7320412981182230530-6sqh?utm_source=share&utm_medium=member_desktop&rcm=ACoAACxsCDkBo819QNyXD8_icp4HCIHrdv56tck"
    },
    {
        id: 3,
        title: "Blog App – Full-Stack Blogging Platform",
        img: "./BlogAPP.png",
        desc: "A full-stack blog application built with Next.js and MongoDB that allows users to register, log in, and manage blog posts with SEO-optimized routing and dynamic content handling.",
        GithubUrl: "https://github.com/ayushpanwar2014/Blog-App",
        LinkedinUrl: "https://www.linkedin.com/posts/ayush-panwar-a21712189_nextjs-mongodb-fullstack-activity-7308786494284931072-SW-t?utm_source=share&utm_medium=member_desktop&rcm=ACoAACxsCDkBo819QNyXD8_icp4HCIHrdv56tck"
    },
    {
        id: 4,
        title: "Shopper – E-commerce Web App",
        img: "./Shopper.png",
        desc: "Shopper is a full-featured e-commerce platform allowing users to browse products, manage their cart, and place orders. Admins can manage products and monitor order analytics.",
        GithubUrl: "https://github.com/ayushpanwar2014/Shopper",
        LinkedinUrl: "https://www.linkedin.com/posts/ayush-panwar-a21712189_mern-fullstackdevelopment-ecommerce-activity-7298918138258067456-Shqw?utm_source=share&utm_medium=member_desktop&rcm=ACoAACxsCDkBo819QNyXD8_icp4HCIHrdv56tck"
    },
    {
        id: 5,
        title: "Sneaker Website",
        img: "./3.jpeg",
        desc: "Empower Your Stride: Crafting the Ultimate Nike Experience with HTML, CSS, and JavaScript!",
        GithubUrl: "https://ayushpanwar2014.github.io/Sneaker-Website/",
        LinkedinUrl: "https://www.linkedin.com/posts/ayush-panwar-a21712189_webdevelopment-html-css-activity-7161366083818463233-ghno?utm_source=share&utm_medium=member_desktop&rcm=ACoAACxsCDkBo819QNyXD8_icp4HCIHrdv56tck"
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
                    <motion.div className="textContainer" style={{ y }}>
                        <h1>{item.title}</h1>
                        <p >{item.desc}</p>
                        <a target="_blank" href={item.LinkedinUrl} rel="noreferrer">
                            <button>In Linkedin</button>
                        </a>
                        <a target="_blank" href={item.GithubUrl} rel="noreferrer">
                            <button>Gituhub</button>
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
            <div id="work" className="progress">
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
