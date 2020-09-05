import React from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

const PanelUsers = (props) => {
    let {firstName, lastName, age, email, role, created_at, updated_at} = props.user

    const handleDelete = () => {
        let id = props.user.id

        axios.delete(`/users/${id}`).then(res => {
            console.log(res)
            props.history.go(0)
            // props.refreshUsers()
        }).catch(err => {
            console.log(err.response)
        })
    }

    let content = props.logedInUser ? 
        props.logedInUser[0].id !== props.user.id ? (
            <div className="panel-users__card">
            <h2>name and age: <br/><strong>{firstName} {lastName} {age} y.o</strong></h2>
            <p>email: {email}</p>
            <p>role: {role}</p>
            <p>created at: {created_at}</p>
            <p>updated at: {updated_at}</p>
            <button className="btn btn--delete" onClick={handleDelete}>Delete User</button>
        </div>
    ) : null
    : null

    return content
}

export default withRouter(PanelUsers)
