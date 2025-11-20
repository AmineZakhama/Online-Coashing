import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from "react-router-dom"
import styles from '../css/dashFooter.module.css'
import '../index.css'

const DashFooter = ()=>{
    
    const navigate = useNavigate()
    const {pathname}=useLocation()

    const onGoHomeClicked= () =>navigate('/Public')

    let GoHomeButton = null
    if(pathname !== '/Public'){
        GoHomeButton= (
            <button
                className={styles.dashFooterButton}
                title="Home"
                onClick={onGoHomeClicked}
            >
                <FontAwesomeIcon icon={faHouse}/> Go Home
            </button>
        )
    }

    const content =(
        <footer className={styles.dashFooter}>
            <p className={styles.cUser}>Current User: </p>
            <p className={styles.uStatus}>Status: </p>
            {GoHomeButton}
        </footer>
    )
    return content

    
}
export default DashFooter