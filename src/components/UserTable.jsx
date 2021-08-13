import React from 'react'
import UpdateUser from './UpdateUser';
import AddNewUser from './AddNewUser';

const UserTable = (props) => {
    const handleDeleteUser = (id) => {
        let answer = window.confirm('Вы точно хотите удалить пользователя?')
        if (answer) {
            props.deleteUser(id)
        }
    }


    return <div>
        <h1>Список пользователей: {props.users.length}</h1>

        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user._id}>
                        <td>{!user.data ? 'нет данных' : user.data.name }</td>
                        <td>{!user.data ?  'нет данных' : user.data.surname}</td>
                        <td>
                            <button type='button' className='editBtn' onClick={() => props.editRow(user)}>Edit</button>
                            <button type='button' className='button muted-button' onClick={() => handleDeleteUser(user._id)}>Delete
                            </button>
                        </td>

                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
            </tbody>
        </table>
        {props.editing ? <UpdateUser currentUser={props.currentUser}
                                        updateUser={props.updateUser}
                                        setEditing={props.setEditing}/>  :  <AddNewUser addUser={props.addUser}/>}
    </div>
}

export default UserTable