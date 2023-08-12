import {atom} from "recoil";

export const quoteState = atom({
    key: 'quoteState',
    default: {
        _id: null,
        content: null,
        author: null,
        authorSlug: null,
        length: 0,
        tags: [],
    },
});