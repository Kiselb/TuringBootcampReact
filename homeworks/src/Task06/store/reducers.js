import { ADD_BOOK, REMOVE_BOOK, ADD_USER, REMOVE_USER } from './actions'

// "Начальное" состояние
const initialState = {
    // Состояние будет описывать некоторую библиотеку с книгами
    // books - это сами книги
    books: [
      {
        // Идентификатор книги в списке
        // Нужен для обращения к этому объекту, например
        // для того, чтобы удалить или изменить данные
        id: 1,
        // Название книги
        name: "Сборник рассказов В. Зайцева",
        // Автор книги
        author: "К. Степанян",
        // Год издания
        year: 2004,
        // Количество
        quantity: 30,
        // Средний рейтинг
        rate: 4.1
      }
    ],
   
    // Наименование библиотеки
    // Придумайте для нее название и вставьте вместо пустой строки
    name: "Library of the Ministry of Culture of St. Petersburg",
   
    // Массив читателей
    users: [
      {
        // Идентификатор читателя в списке
        // Нужен для обращения к этому объекту, например
        // для того, чтобы удалить или изменить данные
        id: 1,
        // Фамилия
        surname: "Васильев",
        // Имя
        name: "Кирилл"
      }
    ],
}

const reducer = (state = initialState, action) => {
    // Выбираем, что делать со состоянием
    switch (action.type) {
        case ADD_BOOK:
            // Редьюсер должен возвращать новое состояние 
            // Модифицировать state запрещено - это чистая функция
            // Поэтому для создания состояния нужно создавать новый объект
            // на основе старого
            const maxBookId = state.books.reduce((id, book) => (book.id > id)?(book.id):(id), 0)
            return({
                ...state, books: [...state.books, { ...action.payload, id: (maxBookId + 1) }]
            })
        case REMOVE_BOOK:
            return({
                ...state, books: state.books.filter(book => book.id !== action.payload.id)
            })
        case ADD_USER:
            const maxUserId = state.users.reduce((id, user) => (user.id > id)?(user.id):(id), 0)
            return({
                ...state, users: [...state.users, { ...action.payload, id: (maxUserId + 1) }]
            })
        case REMOVE_USER:
            return({
                ...state, users: state.users.filter(user => user.id !== action.payload.id)
            })
        default:
            return state
    }
}

export default reducer
   