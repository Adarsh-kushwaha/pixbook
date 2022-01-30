import React from 'react'
import { NavLink } from 'react-router-dom'
import { categories } from '../utils/Data';
import { AiFillHome } from "react-icons/ai"
const isActiveStyle = "font-bold py-1 capitalize  ";
const isNotActiveStyle = "py-1 font-semiBold capitalize ";


const Sidebar = ({ closeSidebar }) => {

    const handleSidebar = () => {
        closeSidebar(false)
    }

    return (
        <>
            <div className='flex flex-col'>
                <div className='text-red-600 text-2xl p-2 font-bold md:hidden'>PIXBOOK</div>
                <div className='flex flex-col p-4 '>

                    <NavLink to="/" className={(isActive) => isActive ? isActiveStyle : isNotActiveStyle} onClick={handleSidebar}>
                        <div className='flex gap-2 items-center'>
                            <AiFillHome />
                            <p>Home</p>
                        </div>
                    </NavLink>


                </div>
                <div className='px-4 text-red-900 font-semibold underline'>
                    Browse Categories
                </div>
                <div className='flex flex-col p-4'>
                    {categories.map((category) => (
                        <NavLink to={`/category/${category.name}`} className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle} onClick={handleSidebar} key={category.name}>
                            {category.name}
                        </NavLink>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Sidebar
