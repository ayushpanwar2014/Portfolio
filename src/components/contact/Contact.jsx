import "./Contact.scss"
import React from "react";
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

const variants = {

    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {

    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_jco7nnb', 'template_gkhzy8g', formRef.current, {
            publicKey: 'RkMn4H2SiP5bgRdu_',
          })
          .then(
            () => {
                setSuccess(true);
                console.log('SUCCESS!');
                },
                (error) => {
                setError(true);
              console.log('FAILED...', error.text);
            },
          );
      };


    return (
        <motion.div ref={ref} className='contact' variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div variants={variants} className="item">
                    <h2>Mail</h2>
                    <span>ayush.panwar2014@gmail.com</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Address</h2>
                    <span>Dehradun, Uttarakhand</span>
                </motion.div>
            </motion.div>

            <div  className="formContainer">
                <form ref={formRef} onSubmit={sendEmail}>
                    <input type="text" required placeholder="Name" name="from_name" />
                    <input type="email" required placeholder="Email" name="email" />
                    <textarea row={8} placeholder="Message" name="message" />
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </form>
            </div>

        </motion.div>
    )
}

export default Contact
