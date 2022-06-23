import { FC, useState } from 'react'
import { IAlarm, Status } from '../../types/alarm.model'
import styles from '../../App.module.css'
import clockIcon from '../../assets/images/alarm-clock.png'
import { Button } from 'primereact/button'

const Alarm: FC<{ alarm: IAlarm }> = ({ alarm }) => {
  const [status, setStatus] = useState<string>(alarm.status)

  return (
    <div
      aria-disabled={status === Status.SKIP}
      className={`${styles.alarm} ${
        status === Status.CONFIRM ? styles.confirm : null
      } ${status === Status.SKIP ? styles.skip : null}`}
    >
      <img src={clockIcon} alt="clock icon" className={styles['clock-icon']} />
      <div className={styles["alarm-infos"]}>
        <h1>
          {new Date(parseInt(alarm.alarm_time) * 1000)
            .toISOString()
            .slice(0, 19)
            .replace('T', ' ')}
        </h1>
        <h1>{alarm.name}</h1>
        <p style={{ width: '50vw' }}>{alarm.description}</p>
      </div>
      <div>
        <Button
          disabled={status !== Status.ACTIVE}
          style={
            status !== Status.ACTIVE ? { display: 'none' } : { margin: '1em 1em 1em 2em' }
          }
          label="Confirm"
          icon="pi pi-check"
          iconPos="right"
          onClick={() => setStatus(Status.CONFIRM)}
        />
        <Button
          disabled={status !== Status.ACTIVE}
          style={
            status !== Status.ACTIVE ? { display: 'none' } : { margin: '1em' }
          }
          label="Skip"
          className="p-button-secondary"
          onClick={() => setStatus(Status.SKIP)}
        />
      </div>
    </div>
  )
}

export default Alarm
