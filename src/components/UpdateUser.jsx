import React from 'react';

const UpdateUser = (props) => {
    const [user, setUser] = React.useState(props.currentUser)

    React.useEffect(
        () => {setUser(props.currentUser)}, [props]
    )

    const handleInputChange = event => {
        debugger
        const {name = 'name', value} = event.currentTarget
        console.log(name)
        setUser({ ...user.data, [user.data.name]: value })
        console.log(user)
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!user.data.name || !user.data.surname) return
        props.updateUser(user.id, user)
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input name="name" type="text" onChange={handleInputChange} value={user.data.name}/>
                <input name="surname" type="text" onChange={handleInputChange} value={user.data.surname}/>
            </div>

            <div className="buttonsAdd">
                <button>Edit user</button>
                <button onClick={() => props.setEditing(false)}
                        className="button muted-button">Cancel</button>
            </div>
        </form>
    </div>
}

export default UpdateUser