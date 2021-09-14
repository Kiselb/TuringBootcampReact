import { useState, useEffect } from 'react'

const User = ({ userId }) => {
    // Выделяем стэйт для данных о пользователе
    const [user, setUser] = useState({})
    const [error, setError] = useState(true)

    // Создааем функцию для загрузки данных
    const loadUser = async (id) => {
        // Напишите функцию, которая по id загружает данные о пользователе
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if (response.ok) {
            setUser(await response.json())
            setError(false)
        }
        else {
            setError(true)
        }
    }

    // Загрузка - это побочный эффект. Выполняем ее в момент
    // внедрения на страницу
    useEffect(() => {
        // Для проверки работы загрузим пользователя с id=3
        loadUser(userId)
    }, [userId])

    return (
        // Напишите, как должны отображаться эти данные
        <section>
            {(error)
                ?<h3>User not found or Data read error</h3>
                :<section>
                    <h3>{user.username}</h3>
                    <h4>{user.name}</h4>
                    <div>phone: {user.phone}</div>
                    <div>e-mail: {user.email}</div>
                    <div>Location: {user.address.zipcode} {user.address.city}, {user.address.street}, {user.address.suite}</div>
                    <div>Company: {user.company.name}</div>
                </section>
            }
        </section>
    )
}

export default User
