import { useState } from 'react'
import Input from './components/Input'
import Button from './components/Button';

import { hbo_max_logo, hbo_max_background } from './assets';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className='flex gradient w-full min-h-[100vh]'>
      <div className='w-full sm:w-1/2 min-h-[100vh] p-[20px] sm:p-[40px] md:p-[80px] flex flex-col justify-between'>
        <img className='mb-[80px] w-[215px] h-auto sm:hidden' src={hbo_max_logo}></img>
        <h2 className='text-white text-[36px] font-bold'>Sign in</h2>
        <div className='mt-[40px] mb-[80px] sm:my-[80px]'>

          <div className='flex flex-col gap-[28px]'>
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <a href="#" className='text-right text-[#ABB4ED] mt-[16px] mb-[32px] block'>Forgot password</a>

          <Button
            label="Sign In"
            type="primary"
          />

          <div className='flex items-center gap-[12px] my-[28px]'>
            <div className='flex-1 h-[1px] w-full bg-[rgba(255,255,255,0.3)]'></div>
            <span className='text-white'>OR</span>
            <div className='flex-1 h-[1px] w-full bg-[rgba(255,255,255,0.3)]'></div>
          </div>

          <p className='text-[14px] text-white mb-[28px]'>Do you get HBO Max through another company such as a TV, mobile, or internet provider?</p>
          
          <Button
            label="Sign In With a Provider"
            type="secondary"
          />

          <span className='text-[#ABB4ED] mt-[20px] block sm:hidden text-center'>Don't have an account? <a className='text-white' href="#">Sign Up</a></span>
        </div>

        <div className='flex flex-wrap justify-between gap-[12px]'>
          <span className='text-[#ABB4ED] hidden sm:block'>Don't have an account? <a className='text-white' href="#">Sign Up</a></span>
          <a href="#" className='text-[#ABB4ED]'>Need help signing in?</a>
        </div>

      </div>
      <div className='w-1/2 relative hidden sm:block'>
        <img className='left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] absolute z-[5] opacity-100 sm:w-1/2 md:w-2/3' src={hbo_max_logo}></img>
        <img className='w-full h-full object-cover opacity-30' src={hbo_max_background}></img>
      </div>
    </div>
  )
}

export default Login