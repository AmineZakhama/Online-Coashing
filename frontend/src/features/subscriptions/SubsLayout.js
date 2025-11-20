import { Outlet } from 'react-router-dom'
import OffersHeader from './SubsHeader'
import Copyright from '../../components/Copyright'

const OffersLayout = () => {
    return (
        <>
                <OffersHeader/>
                 <Outlet />
                 <Copyright/>
        </>
    )
}
export default OffersLayout