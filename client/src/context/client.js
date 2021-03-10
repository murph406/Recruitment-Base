import React, { Component } from 'react'
import { getClient, login } from '../api/client'

export const Context = React.createContext()

export default class Provider extends Component {
    constructor() {
        super()

        this.state = {
            isAppReady: false,
            isAuthenticated: false,
            client: null
        }
    }

    async componentDidMount() {
        await this.init()
    }

    init = async () => {
        // SET CLIENT 

        try {
            let client = await getClient()
            client = client.data[0]
            console.log("CONTEXT", client)

            this.setState({ client: client, isAppReady: true })

        } catch (e) {
            console.log("Error Setting Client", e)
        }
    }

    async onAuth(password) {
        // Authenticates Client 

        try {
            const res = await login(password)
            debugger
            this.setState({ isAuthenticated: true })

        } catch (e) {
            console.log("Err Login Context ", e)
        }

        //   onAuthenticated = async (bool) => {
        //     // When a user is authenticated from login the root state is updated  
        //   }
    }

    render() {
        const { client, isAuthenticated, isAppReady } = this.state

        const value = {
            client: client,
            isAuthenticated: isAuthenticated,
            isAppReady: isAppReady,


            onAuth: (password) => this.onAuth(password),
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
    return function clientManager(props) {
        return (
            <Context.Consumer >
                {context => <Component {...props} userContext={context} />}
            </Context.Consumer>
        )
    }
}