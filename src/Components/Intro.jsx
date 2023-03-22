import React, { useState, useEffect } from 'react';
import '../styles/intro.css';

const Typewriter = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentIndex = index % text.length;
            const currentText = text.substring(0, currentIndex);
            const nextChar = text[currentIndex];

            if (isDeleting) {
                setDisplayText(currentText.slice(0, -1));
            } else {
                setDisplayText(currentText + nextChar);
            }

            if (!isDeleting && index === text.length - 1) {
                setSpeed(1000);
                setIsDeleting(true);
            } else if (isDeleting && displayText === '') {
                setSpeed(100);
                setIsDeleting(false);
                setIndex(index + 1);
            }

            setSpeed(isDeleting ? 50 : 100);
        }, speed);

        return () => clearTimeout(timeout);
    }, [displayText, index, isDeleting, speed, text]);

    return <h1 className="typewriter">{displayText}|</h1>;
};

export default Typewriter;




