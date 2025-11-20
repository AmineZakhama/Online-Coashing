
import { useState,  useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'

import Copyright from "../../components/Copyright";
import styles from '../../css/login.module.css'; 

import usePersist from '../../hooks/usePersist'


const Login = () =>{
	
	const emailRef = useRef(null)
    const errRef = useRef(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [persist, setPersist] = usePersist()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()

    useEffect(() => {
		if(emailRef.current)
        emailRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { accessToken } = await login({ email, password }).unwrap()
            dispatch(setCredentials({ accessToken }))
            setEmail('')
            setPassword('')
            navigate('/offers')
        } catch (err) {
            if (!err.status) {
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg(err.data?.message);
            }
			if (errRef.current) {
            errRef.current.focus();
			}
        }
    }

    const handleEmailInput = (e) => setEmail(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleToggle = () => setPersist(prev => !prev)

    const errClass = errMsg ? "errmsg" : "offscreen"

    if (isLoading) return <p>Loading...</p>

    const content = (
		<>
			<div id="wrapper" className={styles.wrapper}>
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
								
								<h1  align="center">Login</h1>
								<div className={styles.loginForm} >
									<br/>
									<p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>

									<form className={styles.form} align="center" onSubmit={handleSubmit} >
										<div className="fields">

											{/* Email input */ }
											<div className="field">
											<label htmlFor="Email">Email</label>
											<input
												type="email"
												name="Email"
												id="Email"
												ref={emailRef}
												autoComplete="off"
												value={email}
												onChange={handleEmailInput}
												required
											/>
											</div>

											{/* password input */ }
											<div className="field">
											<label htmlFor="password">Password</label>
											<input
												type="password"
												name="password"
												id="password"
												autoComplete="off"
												onChange={handlePwdInput}
												value={password}
												required
											/>
											</div>
											
											
										</div>
										<div className={`col-6 col-12-small ${styles.rememberCheck}`}>
											<input type="checkbox" id="demo-copy" name="demo-copy" onChange={handleToggle} checked={persist} />
											<label htmlFor="demo-copy">remember me </label>
										</div>
										
										
											<button value="Login" > Login</button>
										
										<h6 className={styles.noAccount}>Don't have an account? <Link to="/signup" className={styles.signupLink}>Sign Up </Link></h6>
									
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
export default Login
