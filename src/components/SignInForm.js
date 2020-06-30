import React from 'react'

export default class SignInForm {
    constructor(props){
        this.state = {
            email: "",
            password: "",
        }
    }
    submit(){
        fetch("https://localhost:3050/log-in", {
            method:"POST",
            mode:"cors",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify(this.state)
        })
        .then(res => res.json()).then(data => {
            console.log(data)
            // TODO: save the token to local storage
            // TODO: redirect to home page
            // TODO: use react router dom
        })
    }
    render(){
        const {email, password} = this.state
        return (
            <div className="sign-up-in">
                <div className="form">
                    <p name="email">Email</p>
                    <input value={email} onChange={(e) => this.setState({email:e.target.value})} type="email" name="email" id="email" placeholder="Email"/>

                    <p name="password">Password</p>
                    <input value={password} onChange={(e) => this.setState({password:e.target.value})} type="password" name="password" id="password" placeholder="Password"/>
                    <button onClick={()=>this.submit()} type="submit">SIGN IN</button>
                </div>
            </div>
        )
    }
}