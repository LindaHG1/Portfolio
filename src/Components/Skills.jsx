import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaNodeJs, FaSass, FaWordpress, FaNpm, FaBootstrap } from 'react-icons/fa';
import { SiSymfony, SiMysql, SiPhp, SiFigma, SiTrello, SiVisualstudiocode } from 'react-icons/si';
import '../styles/skills.css'
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                className="skills__container"
                id="skills"
            >
        <div className="skills-container">
            <h2>Skills</h2>
            <ul className="skills-list">
                <li className="skill-item">
                    <FaHtml5 className="skill-icon" />
                    <span>HTML</span>
                </li>
                <li className="skill-item">
                    <FaCss3Alt className="skill-icon" />
                    <span>CSS</span>
                </li>
                <li className="skill-item">
                    <FaSass className="skill-icon" />
                    <span>Sass</span>
                </li>
                <li className="skill-item">
                    <FaJs className="skill-icon" />
                    <span>JavaScript</span>
                </li>
                <li className="skill-item">
                    <FaBootstrap className="skill-icon" />
                    <span>Bootstrap</span>
                </li>
                <li className="skill-item">
                    <FaReact className="skill-icon" />
                    <span>React</span>
                </li>
                <li className="skill-item">
                    <FaWordpress className="skill-icon" />
                    <span>Wordpress</span>
                </li>
                <li className="skill-item">
                    <SiFigma className="skill-icon" />
                    <span>Figma</span>
                </li>
                <li className="skill-item">
                    <SiTrello className="skill-icon" />
                    <span>Trello</span>
                </li>
                <li className="skill-item">
                    <SiSymfony className="skill-icon" />
                    <span>Symfony</span>
                </li>
                <li className="skill-item">
                    <SiMysql className="skill-icon" />
                    <span>MySQL</span>
                </li>
                <li className="skill-item">
                    <SiPhp className="skill-icon" />
                    <span>PHP</span>
                </li>
                <li className="skill-item">
                    <FaNodeJs className="skill-icon" />
                    <span>Node.js</span>
                </li>
                <li className="skill-item">
                    <FaNpm className="skill-icon" />
                    <span>npm</span>
                </li>
                <li className="skill-item">
                    <FaGitAlt className="skill-icon" />
                    <span>Git</span>
                </li>
                <li className="skill-item">
                    <FaGithub className="skill-icon" />
                    <span>GitHub</span>
                </li>
                <li className="skill-item">
                    <SiVisualstudiocode className="skill-icon" />
                    <span>VSC</span>
                </li>
            </ul>
        </div>
        </motion.div>
        </>
    );
};

export default Skills
