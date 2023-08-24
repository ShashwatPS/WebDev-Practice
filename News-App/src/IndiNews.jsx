import {useRecoilState} from "recoil";
import {articleState} from "./Selectors/Atoms/articleState.js";

function NewsIndi(){
    const [ShowNewsIn] = useRecoilState(articleState);
    return(
        <div>
            {ShowNewsIn.title}
            {ShowNewsIn.author}
        </div>
    )
}

export default NewsIndi;