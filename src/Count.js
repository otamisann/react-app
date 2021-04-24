import React, { Component } from 'react'

class Count extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count: 0,
            message: ""
        }
    }
    
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log("Callback value", this.state.count) })
        // console.log(this.state.count)

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div>
                <div style={{ display: "grid", justifyContent: "center", fontFamily: "Arial" }}>
                    <h1>Counter - {this.state.count}</h1>
                    <button onClick={() => this.increment()} style={{ backgroundColor: "lightcoral", border: "none", padding: "5px", color: "white",marginTop: "6px" }}>Increment</button>
                    {/* <h1 onChange = {() => this.tenClicks()}>{this.state.message}</h1> */}
                </div>
            </div>
        )
    }
}

export default Count
