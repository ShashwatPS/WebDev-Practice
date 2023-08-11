import {quoteState} from "../atoms/quotegen.js";

export const setquoteState = ({
    key: 'setquoteState',
    get: ({get}) => {
        const state = get(quoteState);
        return state.content;
    }
})