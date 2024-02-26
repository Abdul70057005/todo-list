import React, { Component } from 'react'

export default class Timer extends Component {
  state = {
    minutes: this.props.minutes,
    seconds: this.props.seconds,
    isPause: false,
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      if (!this.state.isPause && !this.props.done) {
        if (this.state.seconds > 0) {
          this.setState(({ seconds }) => {
            return {
              seconds: seconds - 1,
            }
          })
        } else if (this.state.minutes > 0) {
          this.setState(({ minutes }) => {
            return {
              minutes: minutes - 1,
              seconds: 59,
            }
          })
        }
      }
    }, 1000)
  }
  componentWillUnmount() {
    return clearInterval(this.interval)
  }

  startTimer = () => {
    this.setState(() => {
      return {
        isPause: false,
      }
    })
  }

  pauseTimer = () => {
    this.setState(() => {
      return {
        isPause: true,
      }
    })
  }

  render() {
    return (
      <div>
        <button className="icon icon-play" onClick={this.startTimer}></button>
        <button className="icon icon-pause" onClick={this.pauseTimer}></button>
        {`${this.state.minutes.toString().padStart(2, '0')}:${this.state.seconds.toString().padStart(2, '0')}`}
      </div>
    )
  }
}
