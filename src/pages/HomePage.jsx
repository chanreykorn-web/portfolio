import React from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';

const HomePage = () => {
    return (
        <div className="relative w-full h-[100vh]">
            <Nav className="sticky top-0 z-0" />
            <Banner />
        </div>
    );
}

export default HomePage;
