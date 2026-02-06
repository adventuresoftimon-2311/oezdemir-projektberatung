import React, { useEffect } from 'react';
import Hero from '../sections/Hero';
import Intro from '../sections/Intro';
import Services from '../sections/Services';
import ValueProposition from '../sections/ValueProposition';
import AboutMe from '../sections/AboutMe';
import Trust from '../sections/Trust';
import Contact from '../sections/Contact';

const Home = () => {
    // Optional: Reset scroll when navigating home
    useEffect(() => {
        // If there's a hash, we might want to respect it, otherwise scroll top
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <main>
            <Hero />
            <Intro />
            <Services />
            <ValueProposition />
            <AboutMe />
            <Trust />
            <Contact />
        </main>
    );
};

export default Home;
