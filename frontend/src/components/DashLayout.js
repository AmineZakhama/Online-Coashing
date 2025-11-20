import { Outlet } from "react-router-dom"
import '../index.css'
import DashHeader from "./DashHeader"
import DashFooter from "./DashFooter"
import Copyright from "./Copyright"
import Styles from "../css/dashLayout.module.css"

const DashLayout =() =>{
    return(
        <>
       
       <div id="wrapper" className={Styles.wrapper}>
        <DashHeader />
        
        <div id="main" className={Styles.main}>
            <Outlet />
            
        </div>
        
      <Copyright />
      </div>
        </>
    )
}
export default DashLayout