import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_USER_REQUEST } from './../../redux/logout/actions';
import Billing from '../helpers/icons/Billing';
import LiveChat from '../helpers/icons/LiveChat';
import HelpCenter from '../helpers/icons/HelpCenter';
import Logout from '../helpers/icons/Logout';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loggedOutUser, loading} = useSelector((state) => state.loggedOutUser)

    const logOutUser = () => {
        dispatch({
            type: LOGOUT_USER_REQUEST
        })
    }

    useEffect(() => {
        if(loading === true) {
            if (loggedOutUser !== "") {
                localStorage.removeItem('token');
                navigate('/')
            }
        }
    }, [loading, loggedOutUser, navigate])

    return (
        <div className="row p-3 left-side-navbar">
      
            {/* Navbar Top Half */}
            <div className="col-md-12">
                <img 
                    className="navbar-brand navbar-logo-brand" 
                    src="/navbarBrand/navbarBrand.png" 
                    alt="site-brand-logo"
                />
            </div>     
     
            {/* Navbar Bottom Half */}
            <div className="col-md-12 d-flex flex-wrap align-items-end">
                <div className="row">
                    <span className="col-md-12 nav-control-buttons">
                        <Billing />
                        <p className="mx-2"> Billing</p>
                    </span>

                    <span className="col-md-12 nav-control-buttons">
                        <LiveChat />
                        <p className="mx-2">Live Chat</p>
                    </span>

                    <span className="col-md-12 nav-control-buttons">
                        <HelpCenter />
                        <p className="mx-2">Help Center</p>
                    </span>
                
                    <span onClick={logOutUser} className="col-md-12 nav-control-buttons">
                        <Logout />
                        <p className="mx-2">Logout</p>
                    </span>
                </div>
            </div>   

        </div>        
    );
}

export default Navbar