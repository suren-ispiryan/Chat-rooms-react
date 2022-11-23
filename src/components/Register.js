import React, { useEffect } from 'react'
import { createRef, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { REGISTER_USER_REQUEST } from '../redux/register/actions';
//Recaptcha
import ReCAPTCHA from 'react-google-recaptcha';

const initialStateRegister = {
    fullName: '',
    email: '',
    password: '',
}

const Register = () => {
    const dispatch = useDispatch();
    const [registerInfo, setRegisterInfo] = useState(initialStateRegister);
    const {register, loading} = useSelector((state) => state.registeredUser)
    const navigate = useNavigate();
    
    useEffect(() => {
        if(loading === true) {
            if (register !== '') {
                navigate('/')
            }
        }
    }, [loading, register, navigate])

    // Recaptcha
    const grecaptchaObject = window.grecaptcha;
    const recaptchaRef = createRef();

    window.recaptchaOptions = {
        useRecaptchaNet: true,
    };

    // register
    const handleChange = async ({ target }) => {
        setRegisterInfo({
            ...registerInfo,
            [target.name]: target.value,
        })        
    }

    const registerUser = async () => {
        registerInfo['g-recaptcha-response'] = await recaptchaRef.current.execute()
        dispatch({
            type: REGISTER_USER_REQUEST,
            payload: registerInfo
        })
        setRegisterInfo(initialStateRegister)
    }

    

    return (
        <div className="component-sign">
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
                        <h5 className='mb-3'>Create your account</h5>

                        <input
                            type="text"
                            name="fullName"
                            className="form-control my-2 mx-0 sign-inputs"
                            placeholder="Full Name"
                            onChange={handleChange}
                            value={registerInfo.fullName || ''}
                        />

                        <input
                            type="email"
                            name="email"
                            className="form-control my-2 sign-inputs"
                            placeholder="Email"
                            onChange={handleChange}
                            value={registerInfo.email  || ''}
                        />

                        <input
                            type="password"
                            name="password"
                            className="form-control my-2 sign-inputs"
                            placeholder="Password"
                            onChange={handleChange}
                            value={registerInfo.password || ''}
                        />

                        <ReCAPTCHA
                            ref={recaptchaRef}
                            size="invisible"
                            sitekey='6LdnJnYiAAAAAHtXqZf7ZQOkceIB72wuWgPei7yR'
                            grecaptcha={grecaptchaObject}
                        />

                        <div>
                            <button
                                onClick={registerUser}
                                className="btn btn-success form-control my-3"
                            >
                                Create account
                            </button>
                        </div>

                        <div>
                            <small className='sign-text'>
                                Or sign up with
                            </small>
                        </div>

                        <div>
                            <small className='sign-text'>
                                By signing up you agree with oue Terms & Conditions
                            </small>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 p-5">
                    <div>
                        <small className="sign-text">
                            Already have an account? <Link to="/" className='text-secondary'>Log in</Link>
                        </small>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register