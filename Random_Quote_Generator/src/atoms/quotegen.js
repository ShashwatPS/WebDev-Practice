import {atom} from "recoil";

export const quoteState = atom({
    key: 'quoteState',
    default:{
        _id: "",
        content: "",
        author: "",
        authorSlug: "",
        length: 0,
        tags: [],
    },
});