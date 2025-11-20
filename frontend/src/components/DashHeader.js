import { Link } from "react-router-dom"
import '../index.css'
import FadeInOnScroll from "./fadeInOnScroll.js";

const DashHeader = ()=>{
  const content = (
    <>
    <div id="wrapper">

						

						<FadeInOnScroll/>

						<nav id="nav">
							
								<Link to="/Public" className="active">Home</Link>
								<Link to="/generic">Plans</Link>
								<Link to="/elements">About</Link>
								<div className="SignLog">
								<Link className="login" to="/Login">Sessions</Link>
								<Link className="signup" to="/dash/user">Profile</Link>
								</div>
							
							</nav>
    </div>
    </>
  )
  return content
}
export default DashHeader