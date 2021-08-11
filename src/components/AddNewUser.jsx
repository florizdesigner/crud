import React from 'react'

const AddNewUser = (props) => {

    const [userName, setUserName] = React.useState('')
    const [userSurname, setUserSurname] = React.useState('')

    const handleSubmitAdd = (e) => {
        e.preventDefault(e)
        props.addUser(userName, userSurname)
    }
    const handleChangeName = (e) => {
        setUserName(e.currentTarget.value)
    }
    const handleChangeSurname = (e) => {
        setUserSurname(e.currentTarget.value)
    }

    return <div>
        <form className="form-horizontal" onSubmit={handleSubmitAdd}>
                <div className="form-group">
                        <input id="inputName" name="name" type="text" placeholder="Enter name" value={userName} onChange={handleChangeName}/>
                        <input id="inputSurname" name="surname" type="text" placeholder="Enter surname" value={userSurname} onChange={handleChangeSurname}/>
                </div>

                <div className="buttonsAdd">
                        <button id="button1id" name="button1id" className="btn btn-success">Add user</button>
                </div>
        </form>

        {/*<button type='button' className='editBtn' onClick={() => editRow(user)}>Edit</button>*/}
    </div>
}

export default AddNewUser