import React, { useEffect, useState } from 'react';

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`sticky top-0 w-full h-16 flex items-center justify-between px-[100px] transition-colors duration-300 z-100 ${scrolled ? 'bg-gray-900 text-white shadow-lg' : 'bg-transparent'}`}>
            <div className='text-lg font-bold'>My Portfolio</div>
            <div>
                <a href='#' className='px-4'>Home</a>
                <a href='#' className='px-4'>About</a>
                <a href='#' className='px-4'>Projects</a>
                <a href='#' className='px-4'>Contact</a>
            </div>
        </div>
    );
}

export default Nav;
