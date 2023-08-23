import {atom} from "recoil";

export const newsIn = atom({
    key: 'newsIn',
    author: '',
    title: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    content: '',
})