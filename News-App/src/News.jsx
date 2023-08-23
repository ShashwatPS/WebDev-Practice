import axios from "axios";
import { newsAtom } from "./Selectors/Atoms/newsAtom.js";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

function ShowNews() {
    const [data, setData] = useRecoilState(newsAtom);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY")
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleCreateQuote = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY")
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    return (
        <div>
            <button onClick={handleCreateQuote}>Fetch News</button>
            {data && data.articles && (
                <ul>
                    {data.articles.map((article, index) => (
                        <li key={index}>{article.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ShowNews;