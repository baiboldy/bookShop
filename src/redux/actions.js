import { ADD_BASKET, CHANGE_CONTENT } from "./types"
export function addBook(post) {
    return {
        type: ADD_BASKET,
        payload: post
    }
};

export function changeContent(page){
    return {
        type: CHANGE_CONTENT,
        payload: page
    }
}