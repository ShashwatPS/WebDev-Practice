import React, { useEffect } from 'react';

function NewsIndi() {
    useEffect(() => {
        const unloadHandler = () => {
            localStorage.removeItem('newsData');
        };

        window.addEventListener('beforeunload', unloadHandler);
        return () => {
            // window.removeEventListener('beforeunload', unloadHandler);
        };
    }, []);

    return (
        <div>
            Hello, my name is Shashwat Pratap Singh.
        </div>
    );
}

export default NewsIndi;