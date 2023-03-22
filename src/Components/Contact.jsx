import { useState } from 'react';
import '../styles/contact.css'
import { motion } from "framer-motion";

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        //agregar la lógica para enviar el formulario a través de una API o correo electrónico
    };

    return (
        <>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact__container"
            id="contact"
        >
        <div className='form-container'>
            <h2 className='form-h2'>Contact</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />

            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
            ></textarea>

            <button type="submit">Send</button>
        </form>
        </div>
        </motion.div>
        </>
    );
}

export default ContactForm
