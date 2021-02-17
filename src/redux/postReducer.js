import { ADD_BASKET } from "./types";

const initState = {
    viewBooks: [
        {id: 1, title: 'Гарри Потер', price: 1300},
        {id: 2, title: 'Зеленая миля', price: 2700},
        {id: 3, title: 'Война и мир', price: 3100},
        {id: 4, title: 'Мастер и маргарита', price: 4500},
        {id: 5, title: 'Преступление и наказание', price: 3600},
        {id: 6, title: 'Убрать пересмешника', price: 1500},
        {id: 7, title: 'Сто лет одиночества', price: 2300},
        {id: 8, title: 'Алхимик', price: 6700},
    ], 
    addedBooks: []
}
export const postReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_BASKET:
            return {...state, addedBooks: [...state.addedBooks, action.payload]}
        default: return state;
    }
    return state;
}