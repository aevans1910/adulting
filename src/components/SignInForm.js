import React from 'react'

export default function SignInForm() {
    return (
        <div className="sign-in">
            <h1>Sign in</h1>
            <div className="form">
                <p name="email">Email</p>
                <input type="email" name="email" id="email"/>
                <p name="password">Password</p>
                <input type="password" name="password" id="password"/>
            </div>
        </div>
    )
}