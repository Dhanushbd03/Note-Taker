import React, { useState } from 'react'
import Heading from '../common/Heading'
import Input from '@/components/common/Input'
import image from '@/assets/image.jpg'
import Label from '@/components/common/Label'
import { useNavigate , Link } from 'react-router-dom'
import axiosInstance from '@/services/axios';
import { toast } from 'react-hot-toast';
const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const response = await axiosInstance.post('/register', formData)
      if (response.data.status) {
        toast.success(response.data.message)
        navigate('/signin')
      } else {
        toast.error(response.data.message)
      }
    }catch(error){
      toast.error(error.response.data.message)
    }
    
  }


  return (
    <section className='bg-bg min-h-screen flex items-center flex-col py-24'>
      <Heading className='pb-10' />
      <div className="w-full rounded-lg shadow md:mt-0 max-w-3xl xl:p-0 flex px-5 ">
        <div className="bg-gradient-to-r from-primary to-secondary shadow-lg border border-secondary   p-6 space-y-4 md:space-y-6 sm:p-8 lg:w-1/2 w-full">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">Your Name</Label>
              <Input type="email" name="email" id="email" placeholder="name@company.com" onChange={
                (e) => {
                  setFormData({ ...formData, name: e.target.value })
                }
              } required />
            </div>
            <div>
              <Label htmlFor="password">Email</Label>
              <Input type="email" name="email" id="email" placeholder="email@gmail.com" onChange={
                (e) => {
                  setFormData({ ...formData, email: e.target.value })
                }
              } required />
            </div>
            <div>
              <Label htmlFor="confirm-password">Password</Label>
              <Input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" onChange={
                (e) => {
                  setFormData({ ...formData, password: e.target.value })
                }
              } required />
            </div>
            {/* <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
              </div>
            </div> */}
            <button type="submit" className="w-full bg-gradient-to-r to-gray-white from-white hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-gray-900">Create an account</button>

            <p className="text-sm font-light text-gray-500">
              Already have an account? <Link to="/signin" className="font-medium text-primary-600 hover:underline">Login here</Link>
            </p>
          </form>
        </div>
        <div className="w-1/2 lg:block hidden">
          <img src={image} alt="register" className="w-full h-full object-cover rounded-r-lg" />
        </div>
      </div>
    </section>
  )
}

export default Register
