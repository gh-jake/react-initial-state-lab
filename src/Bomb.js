// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    handleText = () => {
        if(this.state.secondsLeft !== 0) {
            return <div>
            {`${this.state.secondsLeft} seconds left before I go boom!`}
        </div>
        }
        else {
            return <div>{"Boom!"}</div>
        }
    }
    render() {
        console.log("Bomb props ", this.props)
        console.log("Bomb state ", this.state)

        return (
            <div>
                {this.handleText()}
            </div>
        )
    }
}



export default Bomb;