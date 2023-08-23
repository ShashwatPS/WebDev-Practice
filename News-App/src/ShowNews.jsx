import axios from "axios";
import {newsState} from "./Selectors/Atoms/newsAtom.js";
import { useEffect } from "react";
import {useRecoilState} from "recoil";

function ShowNews() {
    const [news, setNews] = useRecoilState(newsState);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=6076b9ab9df84c51af655666324aaa42")
            .then((res) => {
                setNews(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            Hello World
        </div>
    );
}

export default ShowNews;