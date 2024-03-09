import React, { useState, useEffect } from 'react'

const Timer = ({ minutes, seconds, done }) => {
  const [min, setMinutes] = useState(minutes)
  const [sec, setSeconds] = useState(seconds)
  const [isPause, setIsPause] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPause && !done) {
        if (sec > 0) {
          setSeconds((s) => (s >= 1 ? s - 1 : 0))
        } else if (min > 0) {
          setMinutes((m) => (m >= 1 ? m - 1 : 0))
          setSeconds(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [min, sec, isPause, done])

  const startTimer = () => {
    setIsPause(false)
  }

  const pauseTimer = () => {
    setIsPause(true)
  }

  return (
    <div>
      <button className="icon icon-play" onClick={startTimer}></button>
      <button className="icon icon-pause" onClick={pauseTimer}></button>
      {`${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`}
    </div>
  )
}

export default Timer
