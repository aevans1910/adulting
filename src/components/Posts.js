import React, {Component} from 'react';

export default class Posts extends Component {
    constructor(props){
        super(props) 
        this.state = {
            posts: {}
        }
    }
    submit(){
        console.log("fetch is working!!")
        console.log("STATE ",this.state)
        fetch("http://localhost:3000/", {
            method:"GET",
            mode:"cors",
            headers:{"Content-Type" : "application/json"}
        })
        .then(res => res.json()).then(data => {
            console.log(data.posts)
        })
        .catch(err => console.log(err))
    }
    
    render(){
        return(
            <div>
                <div>

                </div>
            </div>
        )
    }
}