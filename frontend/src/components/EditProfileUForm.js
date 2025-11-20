import { useState, useEffect } from "react"
import { useUpdateUserMutation, useDeleteUserMutation } from "../features/users/usersApiSlice"
import { useNavigate } from "react-router-dom"
import Styles from "../css/EditProfileU.module.css"
import PhotoUploadButton from "../components/PhotoUploadButton"
import defaultimage from "../images/defaultUserImage.jpg"

const USER_REGEX = /^[A-z]{3,20}$/
const EMAIL_REGEX = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/


const EditProfileUForm = ({ user }) => {

    const [updateUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateUserMutation()

    const [deleteUser, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteUserMutation()

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [validName, setValidName] = useState(false)
    const [validLastname, setValidLastname] = useState(false)
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validOldPassword, setValidOldPassword] = useState(false);
    const [validNewPassword, setValidNewPassword] = useState(false);

    useEffect(() =>{
		setValidName(USER_REGEX.test(name))
	},[name])
	useEffect(() =>{
		setValidLastname(USER_REGEX.test(lastname))
	},[lastname])
	useEffect(() =>{
		setValidEmail(EMAIL_REGEX.test(email))
	},[email])
	useEffect(() =>{
		setValidOldPassword(PWD_REGEX.test(oldPassword))
	},[oldPassword])
    useEffect(() => {
        setValidNewPassword(
            PWD_REGEX.test(newPassword) &&
            newPassword !== oldPassword &&
            newPassword === confirmPassword
        );
    }, [newPassword, confirmPassword, oldPassword]);

    useEffect(() => {
        if(isSuccess || isDelSuccess) {
            setName('')
            setLastname('')
            setOldPassword('')
            setNewPassword('');
            setConfirmPassword('');
            navigate('/dash/user')
        }
    }, [isSuccess, isDelSuccess, navigate])

	const onNameChanged = e => setName(e.target.value)
	const onLastnameChanged = e => setLastname(e.target.value)
	const onEmailChanged = e => setEmail(e.target.value)
	const onOldPasswordChanged  = e => setOldPassword(e.target.value)
    const onNewPasswordChanged = (e) => setNewPassword(e.target.value);
    const onConfirmPasswordChanged = (e) => setConfirmPassword(e.target.value);

    const onSaveUserClicked = async (e) => {
        e.preventDefault();
        if (newPassword) {
            const userData = { id: user.id, name, lastname, email, password: newPassword };
            // Validate old password before updating
            const isValidOldPassword = await validateOldPassword(user.id, oldPassword);
            if (isValidOldPassword) {
                await updateUser(userData);
            } else {
                console.error("Invalid old password");
            }
        } else {
            await updateUser({ id: user.id, name, lastname, email });
        }
    };

    const onDeleteUserClicked = async () => {
        await deleteUser ({id: user.id})
    }

    const validateOldPassword = async (userId, password) => {
        // Implement this function to validate the old password with the server
        // This is a placeholder; you need to implement the actual validation logic
        // This could involve sending a request to your server to check the password
        return true; // Replace this with actual validation logic
    };

 let canSave = newPassword
        ? [validName, validLastname, validEmail, validOldPassword, validNewPassword].every(Boolean) && !isLoading
        : [validName, validLastname, validEmail].every(Boolean) && !isLoading;

    const errClass = isError ? "errmsg" : "offscreen"
	const validUserClass = (!validName && !validLastname) ? 'form_input--incomplete' : ''
	const validEmailClass = !validEmail ? 'form_input--incomplete' : ''
	const validOldPwdClass = !validOldPassword ? 'form_input--incomplete' : ''
    const validNewPwdClass = !validNewPassword ? 'form_input--incomplete' : '';

    const errContent = (error?.data?.message || delerror?.data?.message) ?? ''

    const content = (
        <>
            <div id="wrapper" >

                <div id="main">

                    <div className={Styles.container}  >

                        <h1 className={Styles.textPrimary}>Edit Profile</h1>
                        <hr/>

                        <div className="row">

                            <div className="col-md-3">

                                <div className={Styles.textCenter}>

                                    <img src={defaultimage} className={Styles.imgAvatar} width="300px" alt="avatar"/>
                                    <h6>Upload a different photo...</h6>
                                    <PhotoUploadButton/>

                                </div>

                            </div>
                        
                        
                            <div className={`col-md-9 ${Styles.personalInfo}`}>

                                <h3>Personal info:</h3>
                            
                                <form className={Styles.formHorizontal} onSubmit={onSaveUserClicked}>

                                {/* first name input */}
                                <div className={Styles.formGroup}>
                                    <label htmlFor="firstName" className={`col-lg-3 ${Styles.controlLabel}`}>First name:</label>
                                    <div className="col-lg-8">
                                    <input 
                                        className={`${Styles.formControl} ${validUserClass}`} 
                                        type="text" 
                                        placeholder="First Name"
                                        name="name"
                                        autoComplete="off"
										value={name}
										onChange={onNameChanged} />
                                </div>
                                </div>

                                {/* last name input */}
                                <div className={Styles.formGroup}>
                                    <label htmlFor="lastName" className={`col-lg-3 ${Styles.controlLabel}`}>Last name:</label>
                                    <div className="col-lg-8">
                                    <input 
                                        className={`${Styles.formControl} ${validUserClass}`} 
                                        type="text" 
                                        placeholder="Last Name"
                                        name="lastName" 
										id="lastName"
										autoComplete="off"
										value={lastname}
										onChange={onLastnameChanged}/>
                                </div>
                                </div>
                            
                                 {/* email input */}
                                <div className={Styles.formGroup}>
                                    <label htmlFor="Email" className={`col-lg-3 ${Styles.controlLabel}`}>Email:</label>
                                    <div className="col-lg-8">
                                    <input 
                                        className={`${Styles.formControl} ${validEmailClass}`}  
                                        type="email" 
                                        placeholder="example@gmail.com"
                                        name="Email" 
										id="Email" 
										autoComplete="off"
										value={email}
										onChange={onEmailChanged}/>
                                </div>
                                </div>

                                <hr/>

                                <h3>Change Password:</h3>

                                    {/* old password input */}
                            <div className={Styles.formGroup}>
                                    <label htmlFor="password" className={`col-lg-3 ${Styles.controlLabel}`}>Old Password:</label>
                                    <div className="col-lg-8">
                                    <input 
                                        className={`${Styles.formControl} ${validOldPwdClass}`} 
                                        type="password" 
                                        placeholder="Old Password"
                                        name="password" 
                                        id="password" 
                                        autoComplete="off"
                                        value={oldPassword}
                                        onChange={onOldPasswordChanged}/>
                                </div>
                            </div>

                            {/* new password input */}
                            <div className={Styles.formGroup}>
                                <label  htmlFor="newPassword" className={`col-lg-3 ${Styles.controlLabel}`}>new password:</label>
                                <div className="col-lg-8">
                                    <input 
                                        className={`${Styles.formControl} ${validNewPwdClass}`}  
                                        type="password" 
                                        placeholder="New Password"  
                                        name="newPassword" 
                                        id="newPassword" 
                                        autoComplete="off"
                                        value={newPassword}
                                        onChange={onNewPasswordChanged}/>
                                </div>
                            </div>

                                {/* confirm password input */}
                                <div className={Styles.formGroup}>
                                        <label htmlFor="confirmPassword" className={`col-lg-3 ${Styles.controlLabel}`}>confirm new password:</label>
                                        <div className="col-lg-8">
                                            <input 
                                                className={`${Styles.formControl} ${validNewPwdClass}`}  
                                                type="password" 
                                                placeholder="New Password"  
                                                name="confirmPassword" 
                                                id="confirmPassword" 
                                                autoComplete="off"
                                                value={confirmPassword}
                                                onChange={onConfirmPasswordChanged}/>
                                        </div>
                                </div>

                                {/* save button */}
                                <button 
                                    className={Styles.saveButton} 
                                    title="Save" 
                                    onClick={onSaveUserClicked} 
                                    disabled={!canSave} >
                                        save
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>   
    )
    return content
}

export default EditProfileUForm