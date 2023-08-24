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
            {console.log(author)}
            {/*{console.log(title)}*/}
            {/*{console.log(description)}*/}
            {/*{console.log(url)}*/}
            {/*{console.log(urlToImage)}*/}
            {/*{console.log(content)}*/}
        </div>
    );
}

export default NewsIndi;