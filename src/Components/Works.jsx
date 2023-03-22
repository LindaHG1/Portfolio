import React, { useState, useEffect } from 'react';
import {FaGithub } from 'react-icons/fa';
import '../styles/works.css';
import { motion } from "framer-motion";

const Works = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/apiproject/list')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);

    return (

        <div>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="works__container"
            id="works"
        >
            <h2 className="title-works">Some projects</h2>
        <div className="card-container">
        
            {data.map(item => (
                <div className="card" key={item.id}>
                    <img src={item.image} alt="imagen" className="card-image" />
                    <div className="card-content">
                        <a href={item.link} className="card-link" target="_blank" rel="noreferrer">
                            <h3>{item.name}</h3>
                            <FaGithub className="card-github-icon" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
        </motion.div>
        </div>
        
    );
};

export default Works;

