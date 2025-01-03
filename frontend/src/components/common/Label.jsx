import React from 'react'

const Label = ({ htmlFor, children }) => {
    return (
        <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-900">
            {children}
        </label>
    )
}

export default Label
