import React, {useState} from 'react'
import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'

export default function SignUpIn() {
    const [selectedForm, updateSelectedForm] = useState(true)
    return (
        <div className="container">
            <div>
                <button onClick={() => updateSelectedForm(true)}>Sign Up</button>
                <button onClick={() => updateSelectedForm(false)}>Sign In</button>
            </div>
            {
            selectedForm?(
            <SignUpForm />
            ) : (
            <SignInForm />
            )
            }
        </div>
    )
}