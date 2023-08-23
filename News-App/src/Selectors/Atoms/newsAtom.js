import { atom } from "recoil";

export const newsState = atom({
    key: 'newsAtom',
    status: null,
    totalResults: 0,
    articles: [
        {
            source: {
                id: null,
                name: "",
            },
            author: "",
            title: "",
            description: "",
            url: "",
            urlToImage: "",
            publishedAt: "",
            content: "",
        }]
})