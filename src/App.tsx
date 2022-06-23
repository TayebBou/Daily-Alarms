import { FC, useEffect, useState } from 'react'
import styles from './App.module.css'
import data from './server/alarms.json'
import { IAlarm } from './types/alarm.model'
import clock from './assets/images/clock.png'
import Alarm from './components/statelessComponents/Alarm'
import { Calendar } from 'primereact/calendar';


const App: FC = () => {
  const [date, setDate] = useState<Date | Date[] | undefined>(undefined);
  const [alarms, setAlarms] = useState<IAlarm[]>(data);

  useEffect(() => {
    const dateChoosed = date?.toLocaleString().split(',')[0];
    if(date) {
      setAlarms(data.filter((a: IAlarm) => dateChoosed === new Date(parseInt(a.alarm_time)*1000).toLocaleDateString()))
    } else {
      setAlarms(data.filter((a: IAlarm) => new Date().toLocaleDateString() === new Date(parseInt(a.alarm_time)*1000).toLocaleDateString()))
    }
  },[date])

  return (
    <>
      <div className={styles.wallpaper}></div>
      <h1 className={styles.h1}>Daily Alarms</h1>
      <img className={styles.clock} src={clock} alt="clock" />
      <Calendar className={styles.calendar} value={date} onChange={(e) => setDate(e.value)} inline showWeek />
      {alarms.map((alarm: IAlarm) => <Alarm alarm={alarm} key={alarm._id} />)}
    </>
  )
}

export default App
