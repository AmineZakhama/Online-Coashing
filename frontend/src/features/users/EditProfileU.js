import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUserById } from "./usersApiSlice"
import EditProfileUForm from "../../components/EditProfileUForm"



const EditProfileU = () =>{
    /* const { id } = useParams()

    const user = useSelector(state => selectUserById(state, id)) */

    const content = /* user ? */ <EditProfileUForm /* user={user} *//> /* : <p>Loading...</p> */

    return content
    
}
export default EditProfileU