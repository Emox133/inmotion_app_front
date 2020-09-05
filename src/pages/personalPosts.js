import React from 'react'

const PersonalPosts = props => {
    let {heading, content, created_at} = props.post
    return (
        <div className="post-personal">
            <h1><strong>{heading}</strong></h1>
            <p>{content}</p>
            <p><strong>{created_at}</strong></p>
        </div>
    )
}

export default PersonalPosts
