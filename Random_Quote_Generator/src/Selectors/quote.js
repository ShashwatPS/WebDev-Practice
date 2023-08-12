import {quoteState} from "../atoms/quotegen.js";
import {selector} from "recoil";

export const quoteDetails = selector({
    key: 'quoteDetails',
    get : ({get})=>{
        const state = get(quoteState);
        return state.content;
    }
})