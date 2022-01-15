// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {counter: 0}

  onIncrement = () => {
    this.setState(preState => {
      console.log(`previous state value ${preState.counter}`)
      return {counter: preState.counter + 1}
    })
  }

  render() {
    const {counter} = this.state

    return (
      <div className="counter-container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="counterValue"> {counter}</span> times
        </h1>
        <p className="description">Click the button to increase the count</p>
        <div className="btn-container">
          <button className="btn" onClick={this.onIncrement} type="button">
            click me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
