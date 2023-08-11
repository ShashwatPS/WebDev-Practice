import {quoteState} from "../atoms/quotegen.js";

export const setquote = ({
    key: 'set-quote',
    get: ({get}) => {
        const state = get(quoteState);
        return state.content;
    }
})