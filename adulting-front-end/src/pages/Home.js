import React, { Component } from 'react';
// import { Button } from 'semantic-ui-react';
// import { BrowserRouter as Router, Route, Link } from "reactrouterdom";

export default class Home extends Component{
    constructor(props) {
        super(props)
        console.log("working Constructor")
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        console.log("working Constructor")
        fetch("http://localhost:3050/")
        .then(res => res.json())
        .then(data => this.setState({data}, () => console.log(this.state.data)))
    } 
    render() {
        return (
            <div className="container">
                <div className="categories">
                {/* <Link to="/dashboard"> */}
                    <button>Health</button>
                {/* </Link> */}
                    <button>Fitness</button>
                    <button>Finances</button>
                    <button>Home</button>
                    <button>Food</button>
                    <button>Repairs</button>
                </div>
                <div className="trending-post">
            {/* post component that will take the entire post object as a prop
            change 31 to post => <Post post={post}/>
            same for comments and replies */}
        {this.state.data.map(post => <p><li><a href='/posts/{post.id}'>{post.title}</a></li></p>)}
                </div>
            </div>
        )
    }
    }