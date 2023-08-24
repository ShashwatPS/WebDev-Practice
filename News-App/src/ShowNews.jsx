import axios from "axios";
import {newsState} from "./Selectors/Atoms/newsAtom.js";
import { useEffect } from "react";
import {useRecoilState} from "recoil";
import {ImageList, ImageListItem} from "@mui/material";

function ShowNews() {
    const [news, setNews] = useRecoilState(newsState);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=6076b9ab9df84c51af655666324aaa42")
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
                        localStorage.setItem('newsData', JSON.stringify(item));
                        window.location = "/newsIn";
                    }}>
                        <img src={item.urlToImage} alt={item.title} />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

export default ShowNews;