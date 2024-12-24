import React from 'react'

const Input = ({ placeholder, onChange, className  }) => {
    return (
        <input type="text" id="first_name" className={`bg-gray-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-primary focus:ring-primary focus:border-primary block w-full p-2.5 ${className}`} placeholder={placeholder} required onChange={onChange} />
    )
}

export default Input;
