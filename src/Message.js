import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: "Welcome visitor",
            coloring: "lightcoral",
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank you for subscribing",
            coloring: "lightblue",
        })
    }

    render() {
        return (
            <div style={{ display: "grid", justifyContent: "center", fontFamily: "Arial" }}>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()} style={{ backgroundColor: this.state.coloring, border: "none", padding: "5px", color: "white" }}>Subscribe</button>
            </div>
        )
    }
}

export default Message