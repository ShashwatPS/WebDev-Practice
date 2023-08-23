import axios from "axios";
import { newsAtom } from "./Selectors/Atoms/newsAtom.js";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

function ShowNews() {
    const [NewData, setData] = useRecoilState(newsAtom);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=6076b9ab9df84c51af655666324aaa42")
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
        {/*    {NewData.map(articles=>{*/}
        {/*    console.log("Title",articles.title);*/}
        {/*})}*/}
            Hello How do you do ?
        </div>
    );
}

export default ShowNews;