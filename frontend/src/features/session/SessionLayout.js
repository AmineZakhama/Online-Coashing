import { Outlet } from 'react-router-dom'
import SessionHeader from './SessionHeader'

const SessionLayout = () => {
  return (
   <>
   <SessionHeader/>
   <Outlet/>
   </>
  )
}

export default SessionLayout