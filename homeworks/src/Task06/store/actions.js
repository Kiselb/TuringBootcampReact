const ADD_BOOK = 'library/ADD_BOOK'
const REMOVE_BOOK = 'library/REMOVE_BOOK'

const ADD_USER = 'library/ADD_USER'
const REMOVE_USER = 'library/REMOVE_USER'

// Если мы создаем книгу, нужно указать те же поля, что и в начальном состоянии
const addBook = ({ name, author, year, quantity, rate }) => ({
    // Указываем, что тип соответствует действию создания книги
    type: ADD_BOOK,
    // И в действии передаем те данные, которые указаны в параметрах action creator
    payload: {
        name,
        author,
        year,
        quantity,
        rate
    }
})
const removeBook = ({ id }) => ({
    type: REMOVE_BOOK,
    payload: {
        id
    }
})
const addUser = ({ id, surname, name}) => ({
    type: ADD_USER,
    payload: {
        surname,
        name,
    }
})
const removeUser = ({ id }) => ({
    type: REMOVE_USER,
    payload: {
        id
    }
})

export { ADD_BOOK, REMOVE_BOOK, ADD_USER, REMOVE_USER, addBook, removeBook, addUser, removeUser }
