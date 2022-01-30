import React from 'react'
import { FaSearch } from "react-icons/fa"
import { useNavigate, Link } from 'react-router-dom'
import { BsPlusLg } from "react-icons/bs"
const Navbar = ({ setSearchTerm, searchTerm, user }) => {
    const navigate = useNavigate()

    if (!user) {
        return null
    }

    return (
        <>
            <div className='flex gap-2 md:gap-3 w-full mt-4 '>

                <div className='flex justify-start items-center w-full bg-white  shadow-sm rounded-md'>
                    <FaSearch fontSize={21} className="ml-3" />
                    <input
                        type="text"
                        onChange={e => setSearchTerm(e.target.value)}
                        placeholder='Search...'
                        value={searchTerm}
                        onFocus={() => navigate("/search")}
                        className='w-full p-3  bg-white outline-none px-4'
                        name="search"
                    />
                </div>

                <div className='md:flex md:justify-between md:gap-3 hidden'>
                    <Link to={`user-profile/${user?._id}`}>
                        <img src={user?.image} alt={user?.name} className="w-14 rounded-full" />
                    </Link>
                    <Link to="/create-pin">
                        <div className=' w-11 h-11 bg-red-500 rounded-full flex justify-center items-center'><BsPlusLg className='text-gray-50' /></div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
