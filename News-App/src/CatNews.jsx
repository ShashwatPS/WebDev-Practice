import {useRecoilState} from "recoil";
import {newsState} from "./Selectors/Atoms/newsAtom.js";
import {useEffect} from "react";
import axios from "axios";
import {ImageList, ImageListItem} from "@mui/material";

function CatNews(){
    const [news, setNews] = useRecoilState(newsState);
    const val = localStorage.getItem("category");

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${val}&apiKey=6076b9ab9df84c51af655666324aaa42`)
            .then((res) => {
                setNews(res.data.articles);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <ImageList cols={3}>
                {news.map((item) => (
                    <ImageListItem key={item.url} onClick={() => {
                        localStorage.setItem('author', JSON.stringify(item.author));
                        localStorage.setItem('title', JSON.stringify(item.title));
                        localStorage.setItem('description', JSON.stringify(item.description));
                        localStorage.setItem('url', JSON.stringify(item.url));
                        localStorage.setItem('urlToImage', JSON.stringify(item.urlToImage));
                        localStorage.setItem('content', JSON.stringify(item.content));
                        window.location = "/newsIn";
                    }}>
                        <img src={item.urlToImage} alt={item.title} />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

export default CatNews;