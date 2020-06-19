import React, { Component } from 'react'

export default class SignInForm() extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    };
    handleChange(evt){
        this.setState({[evt.target.name] : evt.target.value})
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.setState({ username: "", email: "", password: ""})
    }
    return (
        <div className="Sign-In">
            <div className="Form">
                <input
                    type="text"
                    name="username"
                    id="id"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={ this.handleChange }
                 />
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email Address"
                    value={this.state.email} 
                    onChange={this.handleChange}
                />
                <input
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                <button type="submit">SIGN IN</button>
            </div>
        </div>
    )
}