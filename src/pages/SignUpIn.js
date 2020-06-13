import React from 'react'
import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'

export default function SignUpIn() {
    return (
        <div className="container">
            <SignUpForm />
            <SignInForm />
        </div>
    )
}