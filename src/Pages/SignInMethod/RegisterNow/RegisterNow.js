import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContexts';
import { toast } from 'react-hot-toast';
import useToken from '../../../Hooks/UseHooks';
import { useState } from 'react';

const RegisterNow = () => {


    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { createUser, updateName, verifyEmail } = useContext(AuthContext)

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);

    if (token) {
        navigate('/');
    }
    // Signup using Email & Pass
    const handleSubmit = event => {
        event.preventDefault()

        const name = event.target.fullname.value
        const email = event.target.email.value
        const password = event.target.password.value

        //1. Create Account
        if (name || email || password) {
            createUser(email, password, name)
                .then(result => {
                    console.log(result.user)
                    const user = (result.user)
                    toast.success('Successfully created an account')
                    //2. Update Name
                    updateName(name)
                        .then(() => {
                            saveUser(name, email)
                            toast.success('Name Updated')

                            //3. Email verification
                            verifyEmail()
                                .then(() => {
                                    toast.success('Please check your email for verification link')
                                    navigate(from, { replace: true })
                                })
                                .catch(error => {
                                    toast.error(error.message)
                                })
                        })
                        .catch(error => {
                            toast.error(error.message)
                        })
                })
                .catch(error => console.log(error))
        }
        else {
            toast.error('Please fill the all input')
        }
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://doctorsbd-server-side.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('save user', data);
                setCreatedUserEmail(email);
            })
    }


    return (
        <div>

            <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center font-bold">Register Now</h1>
                        <form onSubmit={handleSubmit} action="">
                            <input
                                type="text"
                                class="block border border-gray-400 w-full p-3 rounded mb-4"
                                name="fullname"
                                placeholder="Full Name" />

                            <input
                                type="text"
                                class="block border border-gray-400 w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />

                            <input
                                type="password"
                                class="block border border-gray-400 w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />

                            <button
                                type="submit"
                                class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-800 focus:outline-none my-1"
                            >Create Account</button>
                        </form>

                        <div class="text-center text-sm text-gray-400 mt-4">
                            By signing up, you agree to the
                            <Link to="" class="no-underline border-b border-grey-dark text-gray-400" >
                                Terms of Service
                            </Link> and
                            <Link to="" class="no-underline border-b border-grey-dark " >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                    <div class=" mt-6">
                        Already have an account?
                        <Link to="/login" class="no-underline text-blue-600 font-bold text-xl " >
                            Log in
                        </Link>.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterNow;