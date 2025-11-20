import { Link } from "react-router-dom";
import Copyright from "../../components/Copyright";
import styles from "../../css/SignUp.module.css"
import {useState, useEffect} from "react"
import { useAddNewUserMutation } from "../users/usersApiSlice";
import { useNavigate } from "react-router-dom";

const USER_REGEX = /^[A-z]{3,20}$/
const EMAIL_REGEX = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/



const Signup = () =>{

	const [addNewUser, {
		isLoading,
		isSuccess,
		isError,
		error
	}] = useAddNewUserMutation()

	const navigate = useNavigate()

	const [clientname, setClientName] = useState('')
	const [validName, setValidName] = useState(false)
	const [email, setEmail] = useState('')
	const [validEmail, setValidEmail] = useState(false)
	const [password, setPassword] = useState('')
	const [validPassword, setValidPassword] = useState(false)
	const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordsMatch, setPasswordsMatch] = useState(true)

	useEffect(() =>{
		setValidName(USER_REGEX.test(clientname))
	},[clientname])
	useEffect(() =>{
		setValidEmail(EMAIL_REGEX.test(email))
	},[email])
	useEffect(() =>{
		setValidPassword(PWD_REGEX.test(password))
		setPasswordsMatch(password === confirmPassword)
	},[password, confirmPassword])

	useEffect(() => {
		if(isSuccess) {
			setClientName('')
			setEmail('')
			setPassword('')
			setConfirmPassword('')
			alert("Registration complete !")
			navigate('/login')
			
		}
	},[isSuccess, navigate])

	const onNameChanged = e => setClientName(e.target.value)
	const onEmailChanged = e => setEmail(e.target.value)
	const onPasswordChanged = e => setPassword(e.target.value)
	const onConfirmPasswordChanged = e => setConfirmPassword(e.target.value)

	const canSave = [ validName, validEmail, validPassword, passwordsMatch].every(Boolean) && !isLoading

	const onSaveUserClicked = async (e) => {
		e.preventDefault()
		if(canSave) {
			await addNewUser({ clientname, email, password })
		}
	}

	const errClass = isError ? "errmsg" : "offscreen"
	const validNameClass = !validName  ? 'form_input--incomplete' : ''
	const validEmailClass = !validEmail ? 'form_input--incomplete' : ''
	const validPwdClass = !validPassword ? 'form_input--incomplete' : ''
	const validConfirmPwdClass = !passwordsMatch ? 'form_input--incomplete' : ''

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
							
							

							<h1 align="center">Sign up</h1>

							<div className={styles.signupForm} >
								<form  className={styles.form} align="center" onSubmit={onSaveUserClicked} >
								<p className={errClass}>{error?.data?.message}</p>
									<div className="fields">

										{/* clientname input */}
										<div className={`field ${styles.clientname} `}>
											<label htmlFor="clientname">Full name</label>
											<input
													className={validNameClass}
													type="text" 
													clientname="clientname" 
													id="clientname"
													autoComplete="off"
													value={clientname}
													onChange={onNameChanged} 
												/>
												{!validName && <p className={styles.errorMsg}>Name must be 3-20 letters.</p>}
										</div>

										{/*email input*/}
										<div className="field Email">
											<label htmlFor="Email">Email</label>
											<input 
													className={validEmailClass}
													type="email" 
													clientname="Email" 
													id="Email" 
													autoComplete="off"
													value={email}
													onChange={onEmailChanged}
												/>
												{!validEmail && <p className={styles.errorMsg}>Enter a valid email.</p>}
										</div>

										{/*password input*/}
										<div className="field password">
											<label htmlFor="password">password</label>
											<input 
													className={validPwdClass}
													type="password" 
													clientname="password" 
													id="password" 
													autoComplete="off"
													value={password}
													onChange={onPasswordChanged}
												/>
												{!validPassword && <p className={styles.errorMsg}>Password must be 4-12 characters long.</p>}
										</div>

										{/* Confirm password input */}
										<div className="field Cpassword">
											<label htmlFor="Cpassword">confirm password</label>
											<input
												className={validConfirmPwdClass}
												type="password"
												clientname="Cpassword"
												id="Cpassword"
												autoComplete="off"
												value={confirmPassword}
												onChange={onConfirmPasswordChanged}
											/>
											{!passwordsMatch && <p className={styles.errorMsg}>Passwords do not match.</p>}
										</div>
									</div>
									
										<button className={styles.signupButton} title="signUp" onClick={onSaveUserClicked} disabled={!canSave} >Sign Up</button>	
									<h6 className={styles.noAcc}>already have an account? 	<Link to="/login" className={styles.signupLink}>login</Link></h6><br/>
									<h6  className={styles.noAcc}>or<Link to="/signupPro" className={styles.signupLink}> signup as a profesional</Link></h6>
								
								</form>
							</div>
							<br/><br/>
                </div>
                <Copyright/>
            </div>

        </>
    )
    return content
}
export default Signup
