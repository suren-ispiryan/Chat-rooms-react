import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import { LOGIN_USER_REQUEST } from '../redux/login/actions';

const initialStateLogin = {
    email: '',
    password: ''
}

const Login = () => {
    const dispatch = useDispatch();
    const [loginInfo, setLoginInfo] = useState(initialStateLogin);
    const {loggedUser, loading} = useSelector((state) => state.loggedUser)
    const navigate = useNavigate();

// login
    const handleChange = async ({ target }) => {
        setLoginInfo({
            ...loginInfo,
            [target.name]: target.value,
        })        
    }

    const loginUser = () => {
        dispatch({
            type: LOGIN_USER_REQUEST,
            payload: loginInfo
        })
        setLoginInfo(initialStateLogin)
    }

    useEffect(() => {
        if(loading === true) {
            if (loggedUser !== "") {
                localStorage.setItem('token', loggedUser);
                navigate('/dashboard')
                window.location.reload()
            }
        }
    }, [loading, loggedUser])


    return (
        <div class="component-sign">
            <div className="row">
                <div className="col-md-12">
                    <img 
                        className="navbar-brand" 
                        src="/navbarBrand/navbarBrand.png" 
                        alt="chat"
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 sign-form-parent">
                    
                    <div className="sign-form">
                        <h5 className='mb-3'>Login to your account</h5>
                        
                        <input
                            type="email"
                            name="email"
                            className="form-control my-2 mx-0 sign-inputs"
                            placeholder="Email"
                            onChange={handleChange}
                            value={loginInfo.email || ''}
                        />
                        
                        <input
                            type="password"
                            name="password"
                            className="form-control my-2 sign-inputs"
                            placeholder="Password"
                            onChange={handleChange}
                            value={loginInfo.password || ''}
                        />

                        <button
                            onClick={loginUser}
                            className="btn btn-success form-control my-3"
                        >
                            Login
                        </button>

                        <div>
                            <small className='sign-text'>
                                or login with
                            </small>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-12 p-5">
                    <div>
                        <small className="sign-text">
                             <Link to="/" className='text-secondary'>Forgot password?</Link>
                        </small>
                    </div>

                    <div>
                        <small className="sign-text">
                            Don't have an account? <Link to="/register" className='text-secondary'>Create it</Link>
                        </small>
                    </div>
                <div/>

                </div>
            </div>
        </div>
    )
}

export default Login