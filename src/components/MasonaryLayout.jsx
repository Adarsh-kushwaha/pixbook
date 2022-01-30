import React from 'react'
import Masonry from "react-masonry-css"
import Pin from './Pin';

const breakPointObject = {
    default: 3,
    3000: 3,
    2000: 3,
    1200: 3,
    1000: 2,
    500: 1
}

const MasonaryLayout = ({ pins }) => {
    return (
        <Masonry className='flex animate-slide-fwd' breakpointCols={breakPointObject}>
            {pins?.map((pin) => <Pin key={Math.random()} pin={pin} className="w-max" />)}
        </Masonry>
    )
}

export default MasonaryLayout
