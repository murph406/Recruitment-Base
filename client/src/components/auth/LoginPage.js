import React, { useState } from 'react'
import { LockIcon } from '../../assets/icons/svg-paths'


export const LoginPage = () => {
    const [error, toggleError] = useState(false)
    const [password, onChangePassword] = useState('')


    const onLogin = () => {

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
                    <SubmitButton isEnabled={(password.length > 0) ? true : false} />

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



const SubmitButton = ({ isEnabled, }) => {
    return (
        <div className="submit-button">
            <input disabled={!isEnabled} type="submit" value="Submit" />
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