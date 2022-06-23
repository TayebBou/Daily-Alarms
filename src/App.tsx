import { FC } from 'react'
import styles from './App.module.css'
import data from './server/alarms.json'
import { IAlarm } from './types/alarm.model'
import clock from './assets/images/clock.png'
import Alarm from './components/statelessComponents/Alarm'

const App: FC = () => {
  const alarms: IAlarm[] = data

  return (
    <>
      <div className={styles.wallpaper}></div>
      <h1 className={styles.h1}>Daily Alarms</h1>
      <img className={styles.clock} src={clock} alt="clock" />
      {alarms.map((alarm: IAlarm) => (
        <Alarm alarm={alarm} />
      ))}
    </>
  )
}

export default App
