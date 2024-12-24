import React from 'react'

const Dot = ({ color, onClick }) => {
    return (
        <div className={`${color} size-6  rounded-full border-2 border-white cursor-pointer`} onClick={() => {
            onClick(color)
        }} >

        </div>
    )
}

export default Dot
