import { atom } from "recoil";

export const newsAtom = atom({
    key: 'newsAtom',
    status: "",
    totalResults: 0,
    articles: [
        {
            source: {
                id: null,
                name: "",
            },  author: "",
            title: "",
            description: "",
            url: "",
            urlToImage: "",
            publishedAt: "",
            content: "",
        }]
})