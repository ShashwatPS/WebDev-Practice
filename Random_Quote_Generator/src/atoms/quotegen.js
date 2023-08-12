import {atom} from "recoil";

export const quoteState = atom({
    key: 'quoteState',
    default: {
        _id: null,
        content: "My name is written in the author section",
        author: "Shashwat Singh",
        authorSlug: null,
        length: 0,
        tags: [],
    },
});