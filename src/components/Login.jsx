import React from 'react'
import landing from "../assets/landing.jpg"
import GoogleLogin from "react-google-login"
import { FcGoogle } from "react-icons/fc"
import { client } from '../Client'
import { useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()

    const googleResponse = (response) => {
        localStorage.setItem("user", JSON.stringify(response.profileObj))
        const { name, googleId, imageUrl } = response.profileObj

        const doc = {
            _id: googleId,
            _type: "user",
            userName: name,
            image: imageUrl
        }

        client.createIfNotExists(doc).then(() => {
            navigate("/", { replace: true })
        })
    }

    return (
        <div className='flex flex-col h-screen justify-start items-center'>
            <div className='w-full h-full relative'>
                <img src={landing} alt="landing" className='w-full h-full object-cover ' />
            </div>
            <div className='absolute flex flex-col justify-center top-0 bottom-0 left-0 right-0 bg-blackOverlay'>
                <h2 className='text-center text-red-100 text-3xl font-bold'>PIXBOOK</h2>
                <div className='flex flex-col jusify-center items-center mt-3 shadow-2xl'>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        render={(renderProps) => (
                            <button type='button' className='flex flex-justify bg-mainColor py-3 px-4 rounded-lg cursor-pointer font-bold' onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                <FcGoogle className='mr-3 mt-0.5' size={21} />
                                SignIn With Google
                            </button>
                        )}
                        onSuccess={googleResponse}
                        onFailure={googleResponse}

                    />
                </div>

            </div>
        </div>
    )
}

export default Login
