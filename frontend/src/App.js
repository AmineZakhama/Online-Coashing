import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from  "./features/auth/Login"
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import Signup from "./features/client/signup";
import SignupPro from "./features/auth/SignupPro";
import Proprofile from "./features/users/Proprofile";
import UserProfile from "./features/users/UserProfile";
import Notifications from "./features/notifications/Notifications"
import EditProfileU from "./features/users/EditProfileU"
import EditProfileP from "./features/users/EditProfileP"
import DashBoard from "./features/Admins/DashBoard";
import EditAdmin from "./features/Admins/EditAdmin";
import NewAdminForm from "./features/Admins/NewAdminForm";
import Prefetch from "./features/auth/Prefetch";
import AdminsList from "./features/Admins/AdminsList";
import AdminLayout from "./features/Admins/AdminLayout"
import EmployeesList from "./features/Employees/EmployesList"
import OffersLayout from "./features/Offers/OffersLayout";
import Offers from "./features/Offers/Offers";
import SessionLayout from "./features/session/SessionLayout";
import Session from "./features/session/Session";
import ChangeSessionDate from "./features/session/ChangeSessionDate";
import SessionRequestList from "./features/session/SessionRequestList";
import FeedbackHistory from "./features/Employees/FeedbackHistory";
import DoctorsList from "./features/Doctors/DoctorsList";
import CoachesList from "./features/coaches/CoachesList";
import Subscriptions from "./features/Offers/Subscriptions";
import SubsLayout from "./features/subscriptions/SubsLayout"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route index  element={<Public/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="signupPro" element={<SignupPro/>}/>
        <Route path="public"  element={<Public/>}/>
        
        <Route element={<Prefetch/>}>
          <Route path="dash" element={<DashLayout/>}>
            
            <Route index element={<Welcome/>}/>
            
            <Route path="notifications">
              <Route index element={<Notifications/>}/>
            </Route>

            <Route path="Prouser">
              <Route index element={<Proprofile/>}/>
              <Route path="editProfilePro" element={<EditProfileP/>}/>
              <Route path="FeedbackHistory" element={<FeedbackHistory/>}/>

            </Route>

            <Route path="user">
              <Route index element={<UserProfile/>}/>
              <Route path="editProfileUser" element={<EditProfileU/>}/>
            </Route>

          

          </Route>{/* end dash */}
          
          <Route path="admin" element={<AdminLayout/>}>
              <Route index element={<DashBoard/>}/>
              <Route path="adminsList" element={<AdminsList/>}/>
              <Route path="EmployeesList" element={<EmployeesList/>}/>
              <Route path=":id" element={<EditAdmin/>}/>
              <Route path="newAdmin" element={<NewAdminForm/>}/>   
            </Route>

            <Route path="offers" element={<OffersLayout/>}>
            <Route index element={<Offers/>}/>
            <Route path="doctors" element={<DoctorsList/>}/>
            <Route path="coaches" element={<CoachesList/>}/>
            
            </Route>

            <Route path="subscriptions" element={<SubsLayout/>}>
             <Route path="/subscriptions" element={<Subscriptions/>}/>
            </Route>

            <Route path="session" element={<SessionLayout/>}>
            <Route index element={<Session/>}/>
            <Route path="ChangeDate" element={<ChangeSessionDate/>}/>
            <Route path="SessionrequestList" element={<SessionRequestList/>}/>
            </Route>
          
        </Route>

      </Route> 
    </Routes>
    
    
  );
}

export default App;