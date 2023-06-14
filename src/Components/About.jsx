import React from "react";
import "../styles/about.css";
import me from "../images/linda1.jpg";
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
                        <img src={me} />
                    </div>
                    <div className="about__right">
                        <p className="about__text">
                        A while ago, I decided to reinvent myself. I started exploring web development and realized that I enjoy learning and experimenting with new technologies. Despite my little experience in the field, I want to keep learning every day and improve my skills. I am always in search of challenges that allow me to improve my skills and knowledge. 

                        </p>
                        <p className="about__text">My love for nature and animals drives me to want to work towards a sustainable and inclusive future.</p>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

