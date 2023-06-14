import React, { useState } from 'react';
import {FaGithub } from 'react-icons/fa';
import '../styles/works.css';
import { motion } from "framer-motion";
import Navidad from '../images/appNavidad.png'
import Formulario from '../images/Desktop.png'
import marketplace from '../images/marketPlaceGoogle.png'
import vivero from '../images/viveroApp.jpg'
import tribe from '../images/tribe.jpg'
import entities from '../images/symfo.png'
import princess from '../images/princessapp.png'
import weatherblack from '../images/weatherBlack.png'
import replicaweb from '../images/replicaweb.jpg'

const Works = () => {
    const [data, setData] = useState([]);



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

        <div className="card">
                    <img src={replicaweb} alt="web page" className="card-image" />
                    <div className="card-content">
                        <a href="https://github.com/LindaHG1/Replica-web" className="card-link" target="_blank" rel="noreferrer">
                            <h3>Replica web page</h3>
                            <FaGithub className="card-github-icon" />
                        </a>
                    </div>
                </div>

                <div className="card">
                    <img src={princess} alt="Modern Elsa" className="card-image" />
                    <div className="card-content">
                        <a href="https://github.com/LindaHG1/proyectoBootstrap" className="card-link" target="_blank" rel="noreferrer">
                            <h3>Fisrt project</h3>
                            <FaGithub className="card-github-icon" />
                        </a>
                    </div>
                </div>

                <div className="card">
                    <img src={Navidad} alt="letter to reinas magas" className="card-image" />
                    <div className="card-content">
                        <a href="https://github.com/LindaHG1/navidadGrupo4" className="card-link" target="_blank" rel="noreferrer">
                            <h3>Letter to Reinas Magas</h3>
                            <FaGithub className="card-github-icon" />
                        </a>
                    </div>
                </div>
            
                <div className="card">
                    <img src={weatherblack} alt="wheatherapp" className="card-image" />
                    <div className="card-content">
                        <a href="#" className="card-link" target="_blank" rel="noreferrer">
                            <h3>WeatherApp</h3>
                            <FaGithub className="card-github-icon" />
                        </a>
                    </div>
                </div>

                <div className="card">
                    <img src={Formulario} alt="Form" className="card-image" />
                    <div className="card-content">
                        <a href="https://github.com/LindaHG1/FormularioJs-morado" className="card-link" target="_blank" rel="noreferrer">
                            <h3>Form</h3>
                            <FaGithub className="card-github-icon" />
                        </a>
                    </div>
                </div>

                <div className="card">
                    <img src={vivero} alt="vivero cards" className="card-image" />
                    <div className="card-content">
                        <a href="https://github.com/LindaHG1/vivero-react-main" className="card-link" target="_blank" rel="noreferrer">
                            <h3>Nursery</h3>
                            <FaGithub className="card-github-icon" />
                        </a>
                    </div>
                </div>

                <div className="card">
                    <img src={tribe} alt="trabel page" className="card-image" />
                    <div className="card-content">
                        <a href="https://github.com/LindaHG1/tribe-fly" className="card-link" target="_blank" rel="noreferrer">
                            <h3>TribeFly</h3>
                            <FaGithub className="card-github-icon" />
                        </a>
                    </div>
                </div>

                <div className="card">
                    <img src={entities} alt="form" className="card-image" />
                    <div className="card-content">
                        <a href="https://github.com/LindaHG1/entidadesForm" className="card-link" target="_blank" rel="noreferrer">
                            <h3>Entities with symfony</h3>
                            <FaGithub className="card-github-icon" />
                        </a>
                    </div>
                </div>

                <div className="card">
                    <img src={marketplace} alt="fruit marketplace" className="card-image" />
                    <div className="card-content">
                        <a href="https://github.com/LindaHG1/smartfood-front" className="card-link" target="_blank" rel="noreferrer">
                            <h3>Marketplace SmartFood</h3>
                            <FaGithub className="card-github-icon" />
                        </a>
                    </div>
                </div>

                
                
            
        </div>
        </motion.div>
        </div>
        
    );
};

export default Works;

