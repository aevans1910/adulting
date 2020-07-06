import React, { Component } from 'react'

export default class SignUpForm extends Component {
    constructor(props){
        super(props) 
        this.state = {
            email: "",
            password: "",
            rePassword:"",
            username: "",
        }
    }
    submit(){
        console.log("fetch is working!!")
        fetch("http://localhost:3050/sign-up", {
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
        .catch(err => console.log(err))
    }
    render() {
        const {email, password, username, rePassword} = this.state
        return(
        <div className="sign-up-in">
            <div className="form">
            <p name="username">username</p>
                <input value={username} onChange={(e) => this.setState({username:e.target.value})} type="username" name="username" id="username" placeholder="Username"/>
                <p name="email">Email</p>
                <input value={email} onChange={(e) => this.setState({email:e.target.value})} type="email" name="email" id="email" placeholder="Email"/>
                <p name="password">Password</p>
                <input value={password} onChange={(e) => this.setState({password:e.target.value})} type="password" name="password" id="password" placeholder="Password"/>
                <p name="re-password">Re-enter password</p>
                <input value={rePassword} onChange={(e) => this.setState({password:e.target.value})} type="password" name="password" id="password" placeholder="Password"/>
                <button onClick={()=>this.submit()} type="submit">SIGN UP</button>
            </div>
        </div>
        )
    }
}