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

    const author = localStorage.getItem('author')
    const title = localStorage.getItem('title')
    const description = localStorage.getItem('description')
    const url = localStorage.getItem('url')
    const urlToImage = localStorage.getItem('urlToImage')
    const content = localStorage.getItem('content')

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}

export default NewsIndi;