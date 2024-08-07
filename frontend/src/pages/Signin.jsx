import React from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'

const Signin = () => {
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex justify-center flex-col'>
            <div className='bg-white rounded-lg w-80 text-center p-2 h-max px-4'>
                <Heading lable={"Sign in"} />
                <SubHeading lable={"Enter your credentials to access your account"}/>
                <InputBox lable={"Email"} placeholder={"jhon_doe@gmail.com"}/>
                <InputBox lable={"Password"} placeholder={"Password"}/>
                <div className='pt-4'>
                    <Button lable={"Sign in"} />
                </div>
                <BottomWarning lable={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
            </div>
        </div>
    </div>
  )
}

export default Signin