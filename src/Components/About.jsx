import React from "react";
import "../styles/about.css";
import cat from "../images/linda1.jpg";
import { motion } from "framer-motion";

export default function About() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                className="about__container"
                id="about"
            >
                <div className="about__title">
                    <h2></h2>
                    <h4 className="about-t4">A small summary of who I am</h4>
                </div>
                <div className="about__box">
                    <div className="about__left">
                        <img src={cat} />
                    </div>
                    <div className="about__right">
                        <p className="about__text">
                        I'm excited to start my career as a Full Stack developer. There are many moments of frustration and challenge, but it's worth it when you achieve what you wanted so badly. I am willing to work hard and dedicate my time and effort to improve my skills.
                        Despite my little experience in the field, I want to keep learning every day and improve my skills.
                        </p>
                        <p className="about__text">Other facts about me I love animals, nature and chocolate</p>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

