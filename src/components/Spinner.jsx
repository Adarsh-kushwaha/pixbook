import React from 'react'
import Loader from "react-loader-spinner"

const Spinner = ({message}) => {
    return (
        <>
        <div className='flex flex-col justify-start items-center w-full h-full mt-12 pt-11'>
            <Loader type='Circles' height={60} width={60} color='#EF4444' />
            <p className='p-4 '>{message}</p>
        </div>
   
        </>
    )
}

export default Spinner
