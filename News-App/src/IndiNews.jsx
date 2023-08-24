import React, { useEffect } from 'react';

function NewsIndi() {
    useEffect(() => {
        const unloadHandler = () => {
            localStorage.removeItem('newsData');
        };
        window.addEventListener('beforeunload', unloadHandler);
        return () => {
            window.removeEventListener('beforeunload', unloadHandler);
        };
    }, []);

    const data = localStorage.getItem('newsData')
    const data = localStorage.getItem('newsData')
    const data = localStorage.getItem('newsData')
    const data = localStorage.getItem('newsData')
    const data = localStorage.getItem('newsData')
    const data = localStorage.getItem('newsData')

    return (
        <div>
            {console.log(data)}
        </div>
    );
}

export default NewsIndi;