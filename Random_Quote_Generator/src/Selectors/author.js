import {quoteState} from "../atoms/quotegen.js";

export const setauthorState = selector({
    key: 'setauthorState',
    get: ({get}) => {
        const state = get(quoteState);
        return state.author;
    }
})