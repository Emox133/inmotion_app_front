import React from 'react'

const CurrentUser = props => {
    let {firstName, lastName, email, age} = props.user
    return (
        <div>
            <h1><strong>{firstName} {lastName} {age} y.o</strong></h1>
            <span>{email}</span>
        </div>
    )
}

export default CurrentUser
