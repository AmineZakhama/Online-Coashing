import { Link } from "react-router-dom"
import styles from '../../css/welcome.module.css'

const Welcome = ()=>{
   const date= new Date()
   const today = new Intl.DateTimeFormat('en-GB', {dateStyle:'full'}).format(date)

   const content = (
    <section className={styles.welcomeSec}>
        <p className={styles.date}>{today}</p>
        <h1 className={styles.welcText}>Welcome !</h1>
        <div className={styles.links}>
        <p className={styles.viewNotifs}><Link to="/dash/notifications">View Notifications</Link></p>
        <p className={styles.viewSettings}><Link to="/uProfile">View Profile</Link></p>
        </div>
    </section>
   )
   return content
}
export default Welcome