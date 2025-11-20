import { Link } from "react-router-dom"
import Styles from "../../css/profile.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"


const Proprofile = () =>{
    const content = (
        <>      
                <div id="main" className={Styles.mainContainer}>
                <div className={Styles.profileContainer}>
								<div className={Styles.card}>
                                    <div className={Styles.profileInfo}>
									
										<img src="/images/weirdface.jpg" className={Styles.picture} alt="porfile-pic" height="200px"/>
									
										<div className={Styles.nameSpecialite}>
										<h6  className={Styles.drCoach} id="dr/coach">dr/coach</h6>
										<h3  className={Styles.name} id="name">John Doe</h3>
										<h5  className={Styles.spec} id="specialite" >specialite</h5>
										</div>
                                        </div>
                                        <Link to="/dash/ProUser/editProfilePro" className={Styles.editProfileButton}>
                                            <FontAwesomeIcon icon={faPen} /> Edit Profile
                                         </Link>									
								</div>
								<br/>
								<div >
									<div className={Styles.bio}>
										<h2 className={Styles.bioTitle} align="center">BIO</h2>
										<ul className={Styles.points}>
											<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.  a repellendus dignissimos, vel suscipit quia nam saepe unde ratione!</li>
											<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.  a repellendus dignissimos, vel suscipit quia nam saepe unde ratione!</li>	
										</ul>
									</div>
									<div className={Styles.mainProfile}>
                                        <div className={Styles.stats}>
                                            <h2 className={Styles.statsTitle} align="center">stats</h2>
                                            <span className={Styles.statsNumbers}>
                                                <h3 >sessions: <b className="sessionNumber">#####</b></h3>
                                                <h3>rating: <b className="ratingNumber">##</b>/10</h3>
                                            </span>
                                        </div>
                                        <div className={Styles.ProfileContent}>
                                            <div className={Styles.content}>
                                                <span className={Styles.contentUser}>
                                                <Link to="/pro"><img  src="/images/weirdface.jpg" alt="porfile-pic" className={Styles.contentPic} height="50px"/></Link>
                                                <Link to="/pro" className={Styles.contentName}><b>John Doe</b></Link>
                                                </span>
                                                <div className={Styles.contentIn}>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  a repellendus dignissimos, vel suscipit quia nam saepe unde ratione!</p>
                                                    <img  src="/images/pic09.jpg" alt="content_picture" />
                                                </div>
                                            </div>
                                        </div>
									</div>
                                   
								</div>
							</div>
                            
                </div>
             
        </>
    )
    return content
}
export default Proprofile
