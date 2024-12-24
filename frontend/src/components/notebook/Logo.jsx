import React from 'react'
import logo from '@/assets/logo.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <img src={logo} className="h-8" alt="NOTE TAKER " />
    <span className="self-center text-2xl font-semibold whitespace-nowrap">Note Taker</span>
</Link>
  )
}

export default Logo
