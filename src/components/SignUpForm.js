import React from 'react'

export default function SignUpForm() {
    return (
        <div className="sign-up-in">
            <div>
                <button>Sign Up</button>
            </div>
            <div className="form">
                <p name="email">Email</p>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <p name="password">Password</p>
                <input type="password" name="password" id="password" placeholder="Password"/>
                <p name="re-password">Re-enter password</p>
                <input type="password" name="re-password" id="re-password" placeholder="Password"/>
                <button type="submit">SIGN UP</button>
            </div>
        </div>
    )
}