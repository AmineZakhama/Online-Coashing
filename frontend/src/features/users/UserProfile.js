import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import Styles from "../../css/uProfile.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile, selectCurrentUser, selectAuthError, selectAuthStatus, selectCurrentToken } from "../auth/authSlice"; 
import { useEffect } from "react";
import { useGetUserQuery } from "./usersApiSlice";
import { useSendLogoutMutation } from '../auth/authApiSlice'
import { useNavigate } from "react-router-dom";

const UserProfile = () => {

    const navigate = useNavigate()

        
        const [sendLogout, {
            isLoading,
            isSuccess,
            isError,
            error
        }] = useSendLogoutMutation()

        useEffect(() => {
            if (isSuccess) navigate('/')
        }, [isSuccess, navigate])

    const content = (
    
        <>      
                <div className={Styles.profileContainer}>
								<div className={Styles.card}>
                                    <div className={Styles.profileInfo}>
										<img src="/images/weirdface.jpg" className={Styles.picture} alt="porfile-pic" height="200px"/>
										<h2  className={`${Styles.name} ${Styles.nameSpecialite}`} id="name">
                                            name 
                                        </h2>
                                        </div>

        

                                        <button to="/dash/user/editProfileUser" className={Styles.editProfileButton}>
                                            <FontAwesomeIcon icon={faPen} /> Edit Profile
                                         </button>
                                         <button to="/dash/user/editProfileUser" className={Styles.logoutButton} onClick={sendLogout}>
                                             LogOut
                                         </button>
                                         
                                         
									
								</div>
								<br/>
								<div className={Styles.mainProfile}>
									<div className={`${Styles.nbConst} ${Styles.stats}`}>
                                        <h2 className={`${Styles.title} ${Styles.nbsessTitle}`}>number of sessions</h2>
                                        <h1 className={Styles.number}>00</h1>
                                    </div>
                                    <div className={`${Styles.typePlan} ${Styles.stats}`}>
                                        <h2 className={`${Styles.title} ${Styles.planTitle}`}>type of plan</h2>
                                        <h1 className={Styles.plan}>premium</h1>
                                    </div>
                                    <div className={`${Styles.expDate} ${Styles.stats}`}>
                                        <h2 className={`${Styles.title} ${Styles.dateTitle}`}>expiration date</h2>
                                        <h1 className={Styles.date}>dd/mm/yy</h1>
                                    </div>
								</div>
							</div>   
        </>
    )
    return content
}
export default UserProfile