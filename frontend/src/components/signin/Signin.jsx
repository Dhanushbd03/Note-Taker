import React, { useState } from 'react'
import Heading from '@/components/common/Heading'
import Input from '@/components/common/Input'
import image from '@/assets/image.jpg'
import Label from '@/components/common/Label'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import { useAuth } from '@/context/AuthProvider';

const Signin = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await login(formData)
      if (response.status) {
        toast.success(response.message)
        navigate('/')
      } else {
        toast.error(response.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <section className='bg-bg min-h-screen flex items-center flex-col py-24'>
      <Heading className='pb-10' />
      <div className="w-full rounded-lg shadow md:mt-0 max-w-3xl xl:p-0 flex px-5 ">
        <div className="bg-gradient-to-r from-primary to-secondary shadow-lg border border-secondary p-6 space-y-4 md:space-y-6 sm:p-8 lg:w-1/2 w-full">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="email@gmail.com" 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required 
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="••••••••" 
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r to-gray-white from-white hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-gray-900"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500">
              Don't have an account? <Link to="/register" className="font-medium text-primary-600 hover:underline">Register here</Link>
            </p>
          </form>
        </div>
        <div className="w-1/2 lg:block hidden">
          <img src={image} alt="sigin" className="w-full h-full object-cover rounded-r-lg" />
        </div>
      </div>
    </section>
  )
}

export default Signin
