import { Link } from "react-router-dom";
import React, { useEffect,useState } from 'react';
import styles from '../css/main.module.css'; // Import CSS module 
import ScrollButton from "./ScrollButton.js";
import FadeInOnScroll from "./fadeInOnScroll.js";
import FadeInOnScrollstep from "./fadeInOnScrollstep.js";
import Copyright from "./Copyright.js";




const Public = () => {

		//script to load bg image 
		const [loaded, setLoaded] = useState(false);
		useEffect(() => {
		  // Simulating loading time with setTimeout
		  setTimeout(() => {
			setLoaded(true);
		  }, 500); // Adjust the delay as needed
		}, []);





    const content =  (

		<div className={`public ${loaded ? 'loaded' : ''}`}>
			<div id="wrapper" className="bg fade-in">

						<div id={styles.welcome}>
							<h1>Welcome to<br />
							MindConnect</h1>
							<p>providing the best coaching and mental help</p>
							<ul className="actions">
								<li><ScrollButton /></li>
							</ul>
						</div>

						<FadeInOnScroll/>

						<nav id="nav">
							
								<Link to="/Public" className="active">Home</Link>
								<Link to="/generic">Plans</Link>
								<Link to="/elements">About</Link>
								<div className="SignLog">
								<Link className="login" to="/Login">Login</Link>
								<Link className="signup" to="/SignUp">Sign Up</Link>
								</div>
							
							</nav>

						<div id="main">

								<div className={`${styles.post} ${styles.featured}`}>
									<header className="major">
										<h2><Link to="#">what is <br />
										MindConnect ?</Link></h2>
										<p>Welcome to MindConnect, your trusted partner in online therapy and coaching. At MindConnect, we believe that everyone deserves access to professional mental health and personal development services, no matter where they are. .</p>
										<Link to="/signup" className="button large">get started</Link>
									</header>
								</div>

							
								<section className={styles.posts} id={styles.postsContainer}>
									<div className={styles.stepTitle}><h1 className="how-it-works">how it works</h1></div>
									
									<FadeInOnScrollstep/>
									<img src="/images/arrowdown.png" alt="arrowDown" className={styles.arrowDown}  width="140px" />

									<FadeInOnScrollstep/>
									<img src="/images/arrowdown.png" alt="arrowDown" className={styles.arrowDown}  width="140px" />

									<FadeInOnScrollstep/>
									<img src="/images/arrowdown.png" alt="arrowDown" className={styles.arrowDown}width="140px" />
									
									<FadeInOnScrollstep/>
									<img src="/images/arrowdown.png" alt="arrowDown" className={styles.arrowDown}  width="140px" />
									
									<FadeInOnScrollstep/>
									<img src="/images/arrowdown.png" alt="arrowDown" className={styles.arrowDown}  width="140px" />
									
									<FadeInOnScrollstep/>
									
									<Link to="/signup"  className={`${styles.getStartedButton} button large`}>get started</Link>
									<br /><br />
								</section>
								<br />
								
								
				
					
				</div>
				<Copyright/>
				

		

	</div>
</div>

    );
    return content

}
export default Public