import React, { useState,useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "../css/SignUpPro.module.css"
import { useAddNewUserMutation } from '../features/users/usersApiSlice';
import { useNavigate } from "react-router-dom";
import { ROLES } from '../config/roles';

const USER_REGEX = /^[A-z]{3,20}$/
const EMAIL_REGEX = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/


function ProSignupForm() {

  // State to store the selected file
  const [selectedFile, setSelectedFile] = useState(null);
  // Reference to the file input element
  const fileInputRef = useRef(null);
 
    const [addNewUser, {
      isLoading,
      isSuccess,
      isError,
      error
    }] = useAddNewUserMutation()
  
    const navigate = useNavigate()
  
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [validName, setValidName] = useState(false)
    const [validLastname, setValidLastname] = useState(false)
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [roles, setRoles] = useState(["Therapist"])
  
    useEffect(() =>{
      setValidName(USER_REGEX.test(name))
    },[name])
    useEffect(() =>{
      setValidLastname(USER_REGEX.test(email))
    },[email])
    useEffect(() =>{
      setValidEmail(EMAIL_REGEX.test(lastname))
    },[lastname])
    useEffect(() =>{
      setValidPassword(PWD_REGEX.test(password))
    },[password])
  
    useEffect(() => {
      if(isSuccess) {
        setName('')
        setLastname('')
        setEmail('')
        setPassword('')
        setRoles([])
        navigate('/dash/user')
      }
    },[isSuccess, navigate])
  
    const onNameChanged = e => setName(e.target.value)
    const onLastnameChanged = e => setLastname(e.target.value)
    const onEmailChanged = e => setEmail(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)

    const onRolesChanged = e => {
      const values = Array.from(
        e.target.selectedOptions, //HTMLCollection
        (option) => option.value
      )
      setRoles(values)
    }
  
    const canSave = [roles.length, validName, validLastname,validEmail, validPassword].every(Boolean) && !isLoading
  
    const onSaveUserClicked = async (e) => {
      e.preventDefault()
      if(canSave) {
        const formData = new FormData();
            formData.append('name', name);
            formData.append('lastname', lastname);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('roles', JSON.stringify(roles));
            if (selectedFile) {
                formData.append('file', selectedFile);
            }

            await addNewUser(formData);
      }
    };
  
    const handleButtonClick = () => {
      fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
  };

    const options = Object.values(ROLES).map(role =>{
      return(
        <option
          key={role}
          value={role}
        >{role}</option>
      )
    })
  
    const errClass = isError ? "errmsg" : "offscreen"
    const validUserClass = !validName && !validLastname ? 'form_input--incomplete' : ''
    const validEmailClass = !validEmail ? 'form_input--incomplete' : ''
    const validPwdClass = !validPassword ? 'form_input--incomplete' : ''
    const validRolesClass = !Boolean(roles.length) ? 'form_input--incomplete' : ''

    const content = (
    <div className={styles.signupForm} >
        <br/>
        <p className={errClass}>{error?.data?.message}</p>
        <form method="post" action="#" className={styles.form} onSubmit={onSaveUserClicked} align="center">
            <div className="fields">

                {/*name input*/}
                <div className={`field ${styles.name}`}>
                    <label htmlFor="name">name</label>
                    <input 
                      className={validUserClass}
                      type="text" 
                      name="name" 
                      id="name" 
                      autoComplete="off"
											value={name}
											onChange={onNameChanged}/>
                </div>

                {/*last name input*/}
                <div className={`field ${styles.lastName}`}>
                    <label htmlFor="lastName">last name</label>
                    <input 
                      className={validUserClass}
                      type="text" 
                      name="lastName" 
                      id="lastName" 
                      autoComplete="off"
											value={lastname}
											onChange={onLastnameChanged}/>
                </div>

                {/*email input*/}
                <div className="field Email">
                    <label htmlFor="Email">Email</label>
                    <input 
                      className={validEmailClass}
                      type="email" 
                      name="Email" 
                      id="Email" 
                      autoComplete="off"
											value={email}
											onChange={onEmailChanged}/>
                </div>

                {/*Speciality input*/}
                <div className={`col-12 ${styles.speciality}`}>
                    <label htmlFor="Speciality">Speciality</label>
                    <select 
                      name="Speciality" 
                      id="Speciality"
                      className={validRolesClass}
                      value={roles}
                      onChange={onRolesChanged}>
                            {options}
                      </select>
                    </div>

                  {/*password input*/}
                  <div className="field password">
                    <label htmlFor="password">password</label>
                    <input 
												className={validPwdClass}
												type="password" 
												name="password" 
												id="password" 
												autoComplete="off"
												value={password}
												onChange={onPasswordChanged}/>
                  </div>
                  <div className="field Cpassword">
											<label htmlFor="Cpassword">confirm password</label>
											<input 
												className={validPwdClass}
												type="password" 
												name="Cpassword" 
												id="Cpassword"
												autoComplete="off"
												value={password}
												onChange={onPasswordChanged} />
										</div>
            </div>

            {/* file selection input */}
            <input
                type="file"
                accept='.pdf'
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
        {/* Custom button to trigger file selection */}
        <label htmlFor="fileInput">Upload your CV:</label>
        <button type="button" onClick={handleButtonClick} className={`button ${styles.primary} icon solid fa-search ${styles.file}`}>
          Choose File
        </button>
        {selectedFile && <p className={styles.selFile}>Selected file: {selectedFile.name}</p>}
           
        <button className={styles.signupButton} title="signUp" onClick={onSaveUserClicked} disabled={!canSave} >Sign Up</button>
        
            <h6 className={styles.noAcc}>already have an account? 	<Link to="/login" className={styles.signupLink}>login</Link></h6>
        
        </form>
    </div>
  );
  return content
}

export default ProSignupForm;