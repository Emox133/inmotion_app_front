import React, {useContext} from 'react'
import {myContext} from '../context/context'
import CurrentUser from './CurrentUser'
import PersonalPosts from './personalPosts'

const Profile = () => {
    let context = useContext(myContext)
    let {logedInUser, posts} = context
    
    let myPosts = posts.filter(el => el.postOwner === logedInUser[0].id)

    let content = logedInUser ? (
        logedInUser.map(user => {
            return <CurrentUser key={user.id} user={user}/>
        })
    ) : null

    let personalPosts = myPosts ? (
        myPosts.map(post => {
            return <PersonalPosts key={post.id} post={post}/>
        }) 
    ) : null

    return (
        <>
            {content}
            <h1>My Posts...</h1>
            {personalPosts}
        </>
    )
}

export default Profile
