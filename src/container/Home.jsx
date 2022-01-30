import React, { useState, useEffect, useRef } from 'react'
import Sidebar from '../components/Sidebar'
import UserProfile from '../components/UserProfile'
import Pins from './Pins'
import { GiHamburgerMenu } from "react-icons/gi"
import { userQuery } from '../utils/Data'
import { client } from '../Client'
import { Link, Route, Routes} from "react-router-dom"
import { ImCancelCircle } from "react-icons/im"
import { BsPlusLg } from "react-icons/bs"


const Home = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [user, setUser] = useState(null)
    const scrollRef = useRef(null)

    const userInfo = localStorage.getItem("user") !== "undefined" ? JSON.parse(localStorage.getItem("user")) : localStorage.clear();

    useEffect(() => {
        let isUnmount = false
        const query = userQuery(userInfo?.googleId)
        client.fetch(query).then((data) => {
            if (!isUnmount) { setUser(data[0]) }
        })

        return () => {
            isUnmount = true
        }
    }, [userInfo?.googleId])

    useEffect(() => {
        scrollRef.current.scrollTo(0, 0)

    }, [])

    return (
        <>
            {sidebarToggle && <div className=' bg-white w-3/5 h-full overflow-auto animate-slide-in absolute top-0 shadow-lg flex flex-row justify-between z-50'>
                <Sidebar user={user && user} closeSidebar={setSidebarToggle} />
                <ImCancelCircle size={25} className=' text-red-500 m-2 cursor-pointer' onClick={() => { setSidebarToggle(false) }} />

            </div>
            }
            {/* mobile Resposive  */}

            <div className='md:hidden'>
                <div className='flex items-center bg-dark-300 justify-between md:p-2 shadow-lg md:shadow-none'>
                    <div className='md:hidden cursor-pointer p-2'><GiHamburgerMenu size={25} onClick={() => { setSidebarToggle(true) }} /></div>
                    <div className='hidden'><Sidebar user={user && user} /></div>
                    <div className='text-2xl font-bold text-red-500 p-2 '>PIXBOOK</div>
                    <div className='p-2 flex gap-2'>
                        <Link to={`user-profile/${user?.id}`}>
                            <img src={user?.image} alt={user?.name} className="w-10 rounded-full" />
                        </Link>
                        <Link to="/create-pin">
                            <div className='p-4 w-10 h-10 bg-red-500 rounded-full flex justify-center items-center'><BsPlusLg className='text-gray-50' /></div>
                        </Link>
                    </div>
                </div>

                <div className='p-2 flex-1 h-screen ' ref={scrollRef}>
                    <Routes>
                        <Route path="user-profile/:userId" element={<UserProfile user={user} />} />
                        <Route path="/*" element={<Pins user={user && user} />} />
                    </Routes>
                </div>
            </div>

            {/* Desktop and Tablet Responsive  */}

            <div className='hidden md:grid md:grid-cols-4 md:gap-5 md:h-screen'>
                <div className="bg-dark-50 px-4 py-2">
                    <div className='text-3xl font-bold text-red-600 p-2 '>PIXBOOK</div>
                    < Sidebar user={user && user} />
                </div>

                <div className='col-span-3 bg-gray-50 py-4 px-2 '>
                    <Pins user={user && user} />
                </div>
            </div>
        </>
    )
}

export default Home
