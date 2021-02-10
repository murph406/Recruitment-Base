import React, { useState } from 'react'
import { LockIcon } from '../../assets/icons/svg-paths'


export const LoginPage = () => {
    const isEnabled = false
    const error = false

    return (
        <div className="login-page">
            <form className="form ">
                <div className="flex bg-warning distribute distribute-center">
                    <div className="distribute distribute-center  bg-red">
                        <h1>Login</h1>

                        <div className="icon pl-1 pt-1">
                            <LockIcon color={'black'} />
                        </div>
                    </div>

                    <div className="flex-item">
                        <input type="hidden" placeholder="Email" autoComplete="off" name="email" value="work@work.com" />
                        <input type="password" placeholder="Password" autoComplete="off" name="password" />
                        {(error)
                            ? <span class="error">Incorrect Password</span>
                            : ''
                        }
                        <input disabled={!isEnabled} type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    )
}



const SubmitButton = () => {

}


const Input = () => {

}