import React, { Component } from 'react'

export const Context = React.createContext()

export default class Provider extends Component {
    constructor() {
        super()

        this.state = {
            isAuthenticated: null,
            user: {}
        }
    }

    async componentDidMount() {
        await this.init()
    }

    init = async() => {
        // SET CLIENT 

    }

    setUser(user) {
        // Authenticates Client 
    }

    render() {
        const { user, isAuthenticated } = this.state

        const value = {
            user: user,
            isAuthenticated: isAuthenticated,

            setUser: (user) => this.setUser(user),
        }
        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;



export function withContext(Component) {
    return function UserManager(props) {
        return (
            <Context.Consumer >
                {context => <Component {...props} userContext={context} />}
            </Context.Consumer>
        )
    }
}