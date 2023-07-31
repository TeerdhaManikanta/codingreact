// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = () => {
    this.setState(prevState => {
      if (prevState.speed < 200) {
        console.log(prevState.speed + 10)

        return {speed: prevState.speed + 10}
      }
    })
  }

  decreaseSpeed = () => {
    this.setState(prevState => ({speed: prevState.speed - 10}))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="main-bg">
        <h1 className="main-heading">SPEEDOMETER</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img-edit"
        />
        <h1 className="main-heading">
          Speed is <span>{speed}</span>mph
        </h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="acc-button"
            onClick={this.increaseSpeed}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="trans-button"
            onClick={this.decreaseSpeed}
          >
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
