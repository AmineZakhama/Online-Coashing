import Styles from "../../css/notifications.module.css"
const Userprofile = () =>{

	
    const content = (
        <>
            <div id="wrapper" >
            
                <div id="main">
						
							<br/>
							<section className={Styles.section50}>
								<div className="container">
									<h3 className={`${Styles.mB50} ${Styles.headingLine}`}>Notifications <i className="fa fa-bell text-muted"></i></h3>
									<div className={Styles.notificationUi_ddContent}>
										<div className={`${Styles.notificationList} ${Styles.notificationListUnread}`}>
											<div className={Styles.notificationList_content}>
												<div className={Styles.notificationList_img}>
													<img src="/images/weirdface.jpg" alt="user"/>
												</div>
												<div className={Styles.notificationList_detail}>
													<p className={Styles.notifTitle}><b>John Doe</b> reacted to your post</p>
													<p className={Styles.textMuted}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
													<p className={Styles.textMuted}><small>10 mins ago</small></p>
												</div>
											</div>
										</div>
										<div className={`${Styles.notificationList} ${Styles.notificationListUnread}`}>
											<div className={Styles.notificationList_content}>
												<div className={Styles.notificationList_img}>
													<img src="/images/weirdface.jpg" alt="user"/>
												</div>
												<div className={Styles.notificationList_detail}>
													<p className={Styles.notifTitle}><b>Richard Miles</b> liked your post</p>
													<p className={Styles.textMuted}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
													<p className={Styles.textMuted}><small>10 mins ago</small></p>
												</div>
											</div>
										</div>
										<div className={Styles.notificationList}>
											<div className={Styles.notificationList_content}>
												<div className={Styles.notificationList_img}>
													<img src="/images/weirdface.jpg" alt="user"/>
												</div>
												<div className={Styles.notificationList_detail}>
													<p className={Styles.notifTitle}><b>Brian Cumin</b> reacted to your post</p>
													<p className={Styles.textMuted}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
													<p className={Styles.textMuted}><small>10 mins ago</small></p>
												</div>
											</div>
										</div>
										<div className={Styles.notificationList}>
											<div className={Styles.notificationList_content}>
												<div className={Styles.notificationList_img}>
													<img src="/images/weirdface.jpg" alt="user"/>
												</div>
												<div className={Styles.notificationList_detail}>
													<p className={Styles.notifTitle}><b>Lance Bogrol</b> reacted to your post</p>
													<p className={Styles.textMuted}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
													<p className={Styles.textMuted}><small>10 mins ago</small></p>
												</div>
											</div>
										</div>
										<div className={Styles.notificationList}>
											<div className={Styles.notificationList_content}>
												<div className={Styles.notificationList_img}>
													<img src="/images/weirdface.jpg" alt="user"/>
												</div>
												<div className={Styles.notificationList_detail}>
													<p className={Styles.notifTitle}><b>Parsley Montana</b> reacted to your post</p>
													<p className={Styles.textMuted}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
													<p className={Styles.textMuted}><small>10 mins ago</small></p>
												</div>
											</div>
										</div>
									</div>
							
									<div className="text-center">
										<a href="#!" className="dark-link button large">Load more activity</a>
									</div>
							
								</div>
							</section>
                            	
			</div>
            </div>
        </>
        )
        return content
}
export default Userprofile