import React, {useContext} from 'react'
import {myContext} from '../context/context'
import Post from './post'

const Posts = () => {
    let context = useContext(myContext)
    let {posts} = context 
    let content = posts ? (posts.map(post => {
        return <Post key={post.id} post={post}/>
    })) : null
    return (
        <div className="all-posts__container">
            <h1>All posts</h1>
            {content}
        </div>
    )
}

export default Posts
