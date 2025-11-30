import React from "react";
import '../assets/styles/ReadingJourney.scss';

function ReadingJourney() {
    return (
        <div className="reading-journey-container">
            <h2 style={{fontSize: '1.8rem', marginBottom: '1rem'}}>📚 My Reading Journey</h2>
            <p style={{fontSize: '1.2rem', lineHeight: '1.6'}}>
                Beyond building software and exploring new technologies, 
                I'm passionate about reading. I enjoy diving into biographies, philosophy, mythology, 
                and other impactful genres. Books continually shape my thinking, influence my creativity, 
                and inspire how I approach my work.
                Explore my complete reading list and reviews here:{' '}
                <a 
                    href="https://www.goodreads.com/user/show/195633318-shripad-khandare" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{color: '#5000ca', textDecoration: 'underline', fontWeight: 'bold'}}
                >
                    Goodreads
                </a>.
            </p>
        </div>
    );
}

export default ReadingJourney;
