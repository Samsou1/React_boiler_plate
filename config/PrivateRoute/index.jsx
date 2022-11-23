import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const PrivateRoute = () => {
    let auth = {'token': Cookies.get('token')}
    return(
        auth.token ? <Outlet /> : <Navigate to="/sign-in" />
    )
}

export default PrivateRoute