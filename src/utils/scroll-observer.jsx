"use client";

import React, { useState, useCallback, useEffect } from 'react';

const ScrollContext = React.createContext({
    scrollY: 0
});

const ScrollObserver = ({ children }) => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY);
    }, []);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, { passive: true });
        return () => document.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <ScrollContext.Provider value={{ scrollY }}>
            {children}
        </ScrollContext.Provider>
    );
}

export { ScrollContext };
export default ScrollObserver;