import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import Library from '../Library/Library'
import { addBook, removeBook, addUser, removeUser } from '../../store/actions'

// uncomment for using connect() version
//const LibraryContainer = ({library, books, users, dispatch}) => {

// comment for using connect() version
const LibraryContainer = () => {
    // comment for using connect() version
    const library = useSelector((state) => state.name)
    const books = useSelector((state) => state.books)
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    //

    const onAddBook = (name, author, year, quantity, rate) => dispatch(addBook({ name, author, year, quantity, rate }))
    const onAddUser = (surname, name) => dispatch(addUser({ surname, name }))
    const onRemoveBook = (id) => dispatch(removeBook({ id }))
    const onRemoveUser = (id) => dispatch(removeUser({ id }))

    return (
        <>
            <h1>{library}</h1>
            <Library books={books} users={users} onAddBook={onAddBook} onAddUser={onAddUser} onRemoveBook={onRemoveBook} onRemoveUser={onRemoveUser}></Library>
        </>
    )
}

// uncomment for using connect() version
// const mapStateToProps = (state) => ({
//     library: state.name,
//     books: state.books,
//     users: state.users
// })

// comment for using connect() version
export default LibraryContainer

// uncomment for using connect() version
// export default connect(mapStateToProps)(LibraryContainer)
