import React from 'react'

const Heading = ({ className }) => {
    return (
        <div className={`${className} text-center`}>

            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Way to </span> Increase Productivity.</h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl">Take notes efficiently and stay organized with our intuitive note-taking application designed to boost your productivity.</p>
        </div>
    )
}

export default Heading
