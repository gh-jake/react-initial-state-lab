// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    increment = () => {
        this.setState({
            secondsLeft: this.state.secondsLeft - 1
        })
    }

    handleText = () => {
        if(this.state.secondsLeft !== 0) {
            return <div>
            {`${this.state.secondsLeft} seconds left before I go boom!`}
        </div>
        }
        else {
            clearInterval(this.interval);
            return <div>{"Boom!"}</div>
        }
    }
    componentDidMount() {
        this.interval = setInterval(this.increment, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
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

// let interval = setInterval(Bomb.increment, 1)


export default Bomb;