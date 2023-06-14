
import React from 'react';
import '../styles/contact.css'

function Contact() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:lindahaeli@gmail.com';
    };


    return (

        <div>
            <div className="containerContact px-4 py-5" id="custom-cards">
                <h2 className="display-5 fw-bold work" id='contact' >Contact</h2>
                <hr className="featurette-divider"></hr>
                <p className="lead mb-4 text-center">Do not hesitate to contact me if you want to know more</p>
            
            <div className="container px-4 py-5 text-center mobil">
                <button onClick={handleEmailClick} data-text="Awesome" className="button">
                    <span className="actual-text">&nbsp;lindahaeli@gmail.com&nbsp;</span>
                    <span className="hover-text" aria-hidden="true">&nbsp;lindahaeli@gmail.com&nbsp;</span>
                </button>
            </div>
            </div>


        </div>
    );
}

export default Contact;