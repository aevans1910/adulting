import React, { Component } from 'react'

export default class SignupForm extends Component {
    constructor(props){
        super(props)={
            username: "",
            email: "",
            password: "",
            re_password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    };
    handleChange(evt){
        this.setState({[evt.target.name] : evt.target.value})
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.setState({ username: "", email: "",password: "", re_password:""});
    }
    render(){
        return(
            <div className="Sign-Up">
                <form className="Form">
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange= { this.handleChange }
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="email address"
                        value={ this.state.username }
                        onChange={ this.handleChange }
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={ this.state.password }
                        onChange={ this.handleChange }
                        required
                    />
                    <input
                        type="password"
                        name="re_password"
                        placeholder="Re-enter your password"
                        value={ this.state.re_password }
                        onChange = { this.handleChange }
                     />

                     <button>Let's Go!</button>
                </form>
            </div>
        )
    }
}
