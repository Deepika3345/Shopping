import React from 'react'

const Login = () => {
    return (


        <div className="card login-container">
            <div className="login-box">

                <h1 className="display-3 text-center w-100 ">Sign up</h1>

                <form className='w-100'>
                    <input className='form-control '
                        type="text or number" required placeholder='Email or mobile' />

                    <input className='form-control my-1' type="password" placeholder="Enter your password" />

                </form>
                <span >
                    <p >No account?<a href="#">Create one!</a></p>
                    <a href="#">Can't access your account?</a>
                </span>
                <div className="help">
                </div>

                <br />
                <button className="btn btn-lg btn-primary w-100">Sign in</button>
            </div>

        </div>
    )
}

export default Login