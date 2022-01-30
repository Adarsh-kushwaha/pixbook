import React, { useState } from 'react'
import Search from "../components/Search"
import CreatePin from "../components/CreatePin"
import { Route, Routes } from 'react-router-dom'
import Feed from '../components/Feed'
import PinDetail from '../components/PinDetail'
import Navbar from '../components/Navbar'
import UserProfile from '../components/UserProfile'

const Pins = ({user}) => {

    const [searchTerm, setSearchTerm] = useState("")

    return (
        <>
            <div className='px-2 md:px-5 mb-5'>
                <div >
                    <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}  user={user}/>
                </div>
            </div>
            <div className='h-full'>
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/category/:categoryId" element={<Feed />} />
                    <Route path="/pin-detail/:pinId" element={<PinDetail user={user}/>} />
                    <Route path="/create-pin" element={<CreatePin user={user}/>} />
                    <Route path="/search" element={<Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />} />
                    <Route path="user-profile/:userId" element={<UserProfile user={user}/>} />
                </Routes>
            </div>
        </>
    )
}

export default Pins
