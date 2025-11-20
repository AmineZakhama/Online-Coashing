
import { Link, useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectCoachById } from './coachesApiSlice'

import Styles from "../../css/doctorsList.module.css"
import defaultimage from "../../images/defaultUserImage.jpg"

const Doctor = ({ coachId }) => {
    const coach = useSelector(state => selectCoachById(state, coachId))

    const navigate = useNavigate()

    if (coach) {
        const handleClick = () => navigate(`/offers/coaches/${coachId}`);

       

        return (
            <>
            
            <Link 
                className={`${Styles.notificationList} ${Styles.notificationListUnread}`} 
                onClick={handleClick} 
                href="#"
            >
                <div className={Styles.notificationList_content}>
                    <div className={Styles.notificationList_img}>
                        <img src={defaultimage} alt="user"/>
                    </div>
                    <div className={Styles.notificationList_detail}>
                        <p className={Styles.notifTitle}><b>{coach.employeename}</b></p>
                        <p className={Styles.textMuted}>{coach.job}</p>
                        <p className={Styles.textMuted}><small>10 mins ago</small></p>
                    </div>
                </div>
            </Link>
        
        
        </>
    
        )

    } else return null
}
export default Doctor