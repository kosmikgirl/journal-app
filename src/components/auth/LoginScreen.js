import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        email: 'juli@gmail.com',
        password: 123456,
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email,password);
        dispatch( startLoginEmailPassword(email, password) );
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }


    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={ handleLogin }>
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <button 
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Login
                </button>


                <div className="auth__social-network">
                    <p>Login with social network</p>

                        <div className="google-btn" onClick={ handleGoogleLogin }>
                                <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                                <p className="btn-text">
                                <b>Sign in with google</b>
                            </p>
                        </div>
                </div>

                <Link to="/auth/register" className="link">Create new account </Link>

            </form>
        </>
    )
}
