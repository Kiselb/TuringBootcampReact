import React, { useState } from 'react'

import styles from './Library.module.css'

const Library = ({ books, users, onAddBook, onAddUser, onRemoveBook , onRemoveUser }) => {

    // Описываем переменные состояния для формы добавления книги
    const [bookName, setBookName] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookYear, setBookYear] = useState(2000);
    const [bookQuantity, setBookQuantity] = useState(1);
    const [bookRate, setBookRate] = useState(0);
   
    // Описываем переменные состояния для формы добавления пользователя
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
   
    // Затем описываем обработчики событий для формы книги
    const onChangeBookName = (e) => {
      setBookName(e.target.value)
    }
   
    const onChangeBookAuthor = (e) => {
      setBookAuthor(e.target.value)
    }
   
    const onChangeBookYear = (e) => {
      setBookYear(e.target.value)
    }
   
    const onChangeBookQuantity = (e) => {
      setBookQuantity(parseInt(e.target.value))
    }
    const onChangeBookRate = (e) => {
      setBookRate(parseFloat(e.target.value))
    }
   
    // И обработчики событий для формы пользователей
    const onChangeUserName = (e) => {
      setUserName(e.target.value)
    }
   
    const onChangeUserSurname = (e) => {
      setUserSurname(e.target.value)
    }

    const onSubmitBook = () => (!!bookName && !!bookAuthor && !!bookYear && (bookQuantity >= 0) && (bookRate >= 0)) && onAddBook(bookName, bookAuthor, bookYear, bookQuantity, bookRate)
    const onSubmitUser = () => (!!userName && !!userSurname) && onAddUser(userName, userSurname)

    const onDeleteBook = (id) => () => onRemoveBook(id)
    const onDeleteUser = (id) => () => onRemoveUser(id)

    return (
        <div>
            <h2>Books</h2>
            {/* Внутри этого дива нужно вывести список книг*/}
            <div className={styles.books}>
                { books.map(book => <div key={book.id}>
                    <div><h3>{book.name}&nbsp;{book.author}</h3><button className={styles.button} onClick={onDeleteBook(book.id)}>Delete</button></div>
                    <div>Published:&nbsp;{book.year}</div>
                    <div>Rate:&nbsp;{book.rate}</div>
                    <div>Quantity:&nbsp;{book.quantity}</div>
                </div>)}
            </div>
   
            <h2>Users</h2>
            {/* Внутри этого дива нужно вывести список пользователей*/}
            <div className={styles.users}>
                { users.map(user => <div key={user.id}>
                    <div><h3>{user.surname}&nbsp;{user.name}</h3><button className={styles.button} onClick={onDeleteUser(user.id)}>Delete</button></div>
                </div>)}
            </div>
       
            {/* Форма для добавления книг*/}
            <div className={styles.addBook}>
                <label className={styles.label}><span>Book Name:</span><input className={styles.input} type='text' value={bookName} onChange={onChangeBookName}/></label>
                <label className={styles.label}><span>Author:</span><input className={styles.input} type='text' value={bookAuthor} onChange={onChangeBookAuthor}/></label>
                <label className={styles.label}><span>Published:</span><input className={styles.input} type='number' value={bookYear} onChange={onChangeBookYear}/></label>
                <label className={styles.label}><span>Quantity:</span><input className={styles.input} type='number' value={bookQuantity} onChange={onChangeBookQuantity}/></label>
                <label className={styles.label}><span>Rate:</span><input className={styles.input} type='number' value={bookRate} onChange={onChangeBookRate}/></label>
                <button className={styles.button} onClick={onSubmitBook}>Add Book</button>
            </div>
                    
            {/* Здесь будет небольшая форма для добавления книг*/}
            <div className={styles.addUser}>
                <label className={styles.label}><span>Name:</span><input className={styles.input} type='text' value={userName} onChange={onChangeUserName} /></label>
                <label className={styles.label}><span>Surname:</span><input className={styles.input} type='text' value={userSurname} onChange={onChangeUserSurname} /></label>
                <button className={styles.button} onClick={onSubmitUser}>Add User</button>
            </div>
        </div>
    )
}

export default Library
