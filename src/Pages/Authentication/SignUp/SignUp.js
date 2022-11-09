import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaHandPointer } from 'react-icons/fa';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { providerLogin, createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSingIN = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, {replace: true})
                handleUpdateUserProfile(name, photoURL)
            }).catch(err => console.error(err))
        console.log(name, photoURL, email, password);
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <Form onSubmit={handleSubmit} className="flex flex-col items-center justify-center my-20">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-5">Sign Up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Full Name" className="input input-bordered focus" name='name' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Upload Image</span>
                            </label>
                            <input type="text" className="input input-bordered" name='photoURL' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered" name='password' required />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-orange-400 hover:bg-orange-600  duration-300 py-3 px-5 rounded-md font-semibold text-white">Sign Up</button>
                            <div className='border-2 mt-5 rounded-md'>
                            </div>
                            <div onClick={handleGoogleSingIN} className='text-center text-3xl mt-2 cursor-pointer'>
                                <span
                                    className='font-bold text-red-600' >G</span><span
                                        className='font-bold text-yellow-300' >o</span><span
                                            className='font-bold text-green-500' >o</span><span
                                                className='font-bold text-blue-500' >g</span><span
                                                    className='font-bold text-red-600' >l</span><span
                                                        className='font-bold text-yellow-300' >e</span> <FaHandPointer className='inline-block text-orange-500 text-xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default SignUp;