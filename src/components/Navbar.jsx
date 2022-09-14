import { Link } from 'react-router-dom'

import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full bg-green-300 pt-[20px] px-[10px] box-border'>
      <ul className='flex mt-0 mx-auto max-w-[960px] items-center'>
        <li className='mr-auto font-bold tracking-wider text-lg'>myMoney</li>

        <li className='mx-[16px]'><Link to='/login'>Login</Link></li>
        <li className='mx-[16px]'><Link to='/signup'>Signup</Link></li>

      </ul>
    </nav>
  )
}

export default Navbar
