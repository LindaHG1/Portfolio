import React from 'react'
import '../styles/footer.css'
import { FaLinkedin } from 'react-icons/fa';



function Footer() {
    return (
        <div>



            <footer className="footer">
                <div className="container-footer">
                    <span className="sp">
                        Linda Haeli © 2023 .
                    </span>
                    
                </div>
                <>
                <a href="https://www.linkedin.com/in/linda-haeli-154223257/" target="_blank" rel="noopener noreferrer" class="link"><FaLinkedin icon={FaLinkedin} /></a>
                </>
            </footer>




        </div>
    )
}

export default Footer
