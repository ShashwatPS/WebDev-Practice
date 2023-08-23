import {useRecoilState} from "recoil";
import {newsIn} from "./Selectors/Atoms/newsIn.js";

function IndiNews(){
    const [ShowNewsIn,SetNewsIn] = useRecoilState(newsIn);

    return(
        <div>

        </div>
    )
}

export default IndiNews;