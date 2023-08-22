import {newsAtom} from "../Atoms/newsAtom.js";
import {selector} from "recoil";

export const authorDetails = selector({
    key: 'authorDetails',
    get: ({get})=> {
        const state = get(newsAtom);
        return state.author;
    }
})