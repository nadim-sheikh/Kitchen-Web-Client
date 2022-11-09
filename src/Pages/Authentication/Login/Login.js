import React, { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const {singIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

     const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        singIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true})
        }).catch(err => console.error(err))
        console.log(email,password);
    }
    return (
        <Form  onSubmit={handleSubmit} className="flex flex-col items-center justify-center my-28">
            <div className="hero-content flex-col w-full">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" name='email' required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered" name='password' required/>
                            <label className="label">
                                <Link to='/signup' className="label-text-alt link link-hover">Create An Account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button  className="bg-orange-400 hover:bg-orange-600  duration-300 py-3 px-5 rounded-md font-semibold text-white">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default Login;