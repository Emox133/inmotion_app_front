import React, {useContext} from 'react'
import Posts from '../pages/posts'
import {myContext} from '../context/context'

const Home = () => {  
  let context = useContext(myContext)
  const {authenticated} = context
    return (
        <div>
          {/* <h1>Hello from Home</h1>  */}
         {authenticated ? <Posts/> : null}
        </div>
    ) 
}

export default Home
