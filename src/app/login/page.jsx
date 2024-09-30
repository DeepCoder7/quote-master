"use client"
import { useLoginMuation } from '@/query/queryHandler'
import React, { useState } from 'react'
// import { useLoginMuation } from '@/query'

const LoginPage = () => {
    const [userDetails, setUserDetails] = useState({
        username: "",
        otp: ""
    })

    const onChange = (e) => {
        setUserDetails((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const {
        mutate
    } = useLoginMuation()

    const onSubmit = (e) =>{
        e.preventDefault();
        mutate(userDetails)
    }

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
            <form className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full" onSubmit={onSubmit}>
                {/* Logo or title */}
                <h1 className="text-white text-2xl mb-8 text-center font-semibold">
                    {/* <span className="text-4xl">“</span> QuoteMaster */}
                    Login
                </h1>

                {/* Username input */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={userDetails.username}
                        placeholder="Enter your username"
                        required
                        onChange={onChange}
                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
                    />
                </div>

                {/* OTP input */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="otp">
                        OTP
                    </label>
                    <input
                        type="text"
                        id="otp"
                        name="otp"
                        placeholder="Enter your OTP"
                        required
                        value={userDetails.otp}
                        onChange={onChange}
                        className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-gray-200 focus:outline-none focus:ring focus:ring-green-500"
                    />
                </div>

                {/* Login button */}
                <button type='submit' className="w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700">
                    Log In
                </button>

                {/* Forgot password or register */}
                <p className="mt-4 text-center text-sm text-gray-400">
                    Forgot password or <a href="#" className="underline hover:text-gray-200">register</a>?
                </p>
            </form>
        </div>
    )
}

export default LoginPage