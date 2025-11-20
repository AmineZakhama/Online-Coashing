import { Link } from "react-router-dom";
import Copyright from "../../components/Copyright";
import Form from "../../components/ProSignupForm"

const SignupPro = () =>{
    const content = (
        <>
            <div id="wrapper" >
                <header id="header">
					<a href="index.html" className="logo"><img src="images/logo.png" alt="logo" width="290px" className="logoimg" /></a>
				</header>

				<nav id="nav">
						
                    <Link to="/Public" className="active">Home</Link>
					<Link to="/generic">Plans</Link>
					<Link to="/elements">About</Link>
					<div className="SignLog">
					<Link className="login" to="/Login">Login</Link>
					<Link className="signup" to="/signUp">Sign Up</Link>
					</div>	
				</nav>
                <div id="main">
                <br/>
							<h1 align="center">become a coach</h1>
							<Form/>
							<br/><br/>
                </div>
                <Copyright/>
            </div>

        </>
    )
    return content
}
export default SignupPro
