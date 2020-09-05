import React from 'react'
import axios from 'axios'

const myContext = React.createContext()

class AppContext extends React.Component {
    state = {
        authenticated: false, 
        posts: [],
        logedInUser: [],
        allUsers: [],
        notifications: []
    }

    setAuthenticated = () => {
        this.setState({
            authenticated: true
        })
    }

    logout = (props) => {
        this.setState({
            authenticated: false
        })
        localStorage.removeItem('Bearer')
        props.history.push('/login')
        props.history.go(0)
    }

    getLogedInUser = () => {
        axios.get('/users/me').then(res => {
            // console.log(res)
            let copyUser = [...this.state.logedInUser]
            let newArr = copyUser.concat(res.data.currentUser)
            this.setState({
                logedInUser: newArr
            })
        }).catch(err => {
            console.log(err.response)
        })
    }

    getAllUsers = () => {
        axios.get('/users').then(res => {
            console.log(res)
            let copyUsers = [...this.state.allUsers]
            let newArr = copyUsers.concat(res.data.results)
            this.setState({
                allUsers: newArr
            })
        }).catch(err => {
            console.log(err.response)
        })
    }

    
    
    getAllPosts = () => {
        axios.get('/posts').then(res => {
            // console.log(res)
            let copyPosts = [...this.state.posts]
            let newArr = copyPosts.concat(...copyPosts, res.data.results)
            this.setState({
                posts: newArr
            })
        }).catch(err => {
            console.log(err.response)
        })
    }

    getNotifications = () => {
        axios.get('/users/notifications').then(res => {
            console.log(res)
            let copyNotifications = [...this.state.notifications]
            let newArr = copyNotifications.concat(res.data.results)
            this.setState({
                notifications: newArr
            })
        }).catch(err => {
            console.log(err.response)
        })
    }
    
    render() {
        return(
            <myContext.Provider value={{
                ...this.state,
                setAuthenticated: this.setAuthenticated,
                logout: this.logout,
                getLogedInUser: this.getLogedInUser,
                getAllPosts: this.getAllPosts,
                getAllUsers: this.getAllUsers,
                getNotifications: this.getNotifications
            }}>
                {this.props.children}
            </myContext.Provider>
        )
    }
}

export {AppContext, myContext}
