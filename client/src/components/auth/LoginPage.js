import React, { useState } from 'react'
import { LockIcon } from '../../assets/icons/svg-paths'
import { useHistory } from 'react-router-dom'


export function LoginPage({ login }) {
    const [error, toggleError] = useState(false)
    const [password, onChangePassword] = useState('')
    const history = useHistory();


    async function onLogin() {
        // if resolved on routes then push Client POrtal 
        try {
            const res =  login(password)
            // debugger


        } catch (e) {
            console.log("Err", e)
        }
    }

    const onChangeText = (text) => {
        console.log("TEXT", text)

        onChangePassword(text)
    }

    return (
        <div className="login-page">
            <div className="distribute distribute-center full-height">
                <div className="distribute distribute-vertical distribute-even" style={{ height: '800px' }}>

                    <div className="distribute distribute-center">
                        <h1>Login</h1>

                        <div className="icon pl-1 pt-1">
                            <LockIcon color={'black'} />
                        </div>
                    </div>
                    <Input
                        type={"email"}
                        placeholder={"Password"}
                        error={error}
                        errorMessage={"Incorrect Password"}
                        onChangeText={(text) => onChangeText(text)}
                        value={password}
                    />
                    <SubmitButton
                        onClick={() => onLogin()}
                        isEnabled={(password.length > 0) ? true : false} />

                    <div className="distribute distribute-center" style={{ width: '60vw' }}>
                        <p>
                            Login is only available to the owner of this website. If just visiting please stay far away from login and enjoy the content. If you, { },  forgot your password please contact the developer at ryanmurphy125@gmail.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}



const SubmitButton = ({ isEnabled, onClick }) => {
    return (
        <div className="submit-button" >
            <input disabled={!isEnabled} type="submit" value="Submit" onClick={onClick} />
        </div>
    )
}


const Input = ({ type, placeholder, error, errorMessage, onChangeText, value }) => {
    return (
        <div className="input-container">
            <input type={type} placeholder={placeholder} autoComplete="off" name="password" onInput={(e) => onChangeText(e.target.value)} value={value} />
            {(error)
                ? <span class="error">{errorMessage}</span>
                : ''
            }
        </div>
    )
}