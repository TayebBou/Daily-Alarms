import { FC } from 'react'
import { IAlarm } from '../../types/alarm.model'
import styles from '../../App.module.css'
import clockIcon from '../../assets/images/alarm-clock.png'

const Alarm: FC<{ alarm: IAlarm }> = ({ alarm }) => {
  return (
    <div className={styles.alarm}>
      <img src={clockIcon} alt="clock icon" className={styles['clock-icon']} />
      <div>
        <h1>{new Date(parseInt(alarm.alarm_time)*1000).toISOString().slice(0, 19).replace('T', ' ')}</h1>
        <h1>{alarm.name}</h1>
        <p style={{width: '50vw'}}>{alarm.description}</p>
      </div>
    </div>
  )
}

export default Alarm
