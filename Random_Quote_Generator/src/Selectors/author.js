import {quoteState} from "../atoms/quotegen.js";
import {selector} from "recoil";

export const authorDetails = selector({
    key: 'authorDetails',
    get: ({get}) => {
        const state = get(quoteState);
        return state.author;
    }
})