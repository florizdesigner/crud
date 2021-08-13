import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import UserTable from './components/UserTable';

function App() {
    const instance = axios.create({
        baseURL: 'http://178.128.196.163:3000/api/',
    })

    const [users, setUsers] = useState([])
    const [editing, setEditing] = useState(false)
    const initialFormState = {id: null, data: {name: '', surname: ''}}
    const [currentUser, setCurrentUser] = useState(initialFormState)


    React.useEffect(() => {
        instance.get('records')
            .then(response => setUsers(response.data))
    }, [])

    const deleteUser = (id) => {
        setEditing(false)
        instance.delete(`records/${id}`)
        setUsers(users.filter(user => user._id !== id))
    }
    const addUser = (userName, userSurname) => {
        if (userName && userSurname) {
            const newUser = {
                '_id': Math.random().toString(30).slice(2, 5),
                'data': {
                    'name': userName,
                    'surname': userSurname,
                }
            }
            instance.put('records', {'data': {'name': userName, 'surname': userSurname}})
                .then(() => alert('Пользователь добавлен'))
            setUsers([...users, newUser])

        } else {
            alert('Введите данные!')
        }
    }
    const editRow = (user) => {
        setEditing(true)
        const currentValue = {'id': user._id, 'data': {'name': user.data.name, 'surname': user.data.surname}}
        setCurrentUser(currentValue)
    }
    const updateUser = (id, updatedUser) => {
        // const updatedUser = {"id": id,"data": {"name": name, "surname": surname}}
        setEditing(false)
        setUsers(users.map(user => user._id === id ? updatedUser : user))
        instance.post(`records/${id}`, {'data': {'name': updatedUser.data.name, 'surname': updatedUser.data.surname}})
            .then(() => alert('Данные пользователя обновлены'))
    }

    return (
        <div className='App'>
            <UserTable setUsers={setUsers} users={users} deleteUser={deleteUser}
                       addUser={addUser} updateUser={updateUser} editing={editing} setEditing={setEditing}
                       editRow={editRow} currentUser={currentUser}/>
        </div>
    )
}

export default App;
