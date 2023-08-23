import { atom } from "recoil";

export const newsState = atom({
    key: 'newsAtom',
    default: [],
})