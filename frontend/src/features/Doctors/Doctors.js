
import { Link, useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectDoctorById } from './doctorsApiSlice'

import Styles from "../../css/doctorsList.module.css"
import defaultimage from "../../images/defaultUserImage.jpg"

const Doctor = ({ doctorId }) => {
    const doctor = useSelector(state => selectDoctorById(state, doctorId))

    const navigate = useNavigate()

    if (doctor) {
        const handleClick = () => {
            localStorage.setItem('selectedDoctorId', doctorId)
            navigate(`/subscriptions`);
    }

       
        return (
            <>
            
            <Link 
                className={`${Styles.notificationList} ${Styles.notificationListUnread}`} 
                onClick={handleClick()} 
            >
                <div className={Styles.notificationList_content}>
                    <div className={Styles.notificationList_img}>
                        <img src={defaultimage} alt="user"/>
                    </div>
                    <div className={Styles.notificationList_detail}>
                        <p className={Styles.notifTitle}><b>{doctor.employeename}</b></p>
                        <p className={Styles.textMuted}>{doctor.job}</p>
                        <p className={Styles.textMuted}><small>10 mins ago</small></p>
                    </div>
                </div>
            </Link>
        
        
        </>
    
        )

    } else return null
}
export default Doctor