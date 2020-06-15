import React from 'react'

export default function SignInForm() {
    return (
        <div className="sign-up-in">
            <div className="form">
                <p name="email">Email</p>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <p name="password">Password</p>
                <input type="password" name="password" id="password" placeholder="Password"/>
                <button type="submit">SIGN IN</button>
            </div>
        </div>
    )
}