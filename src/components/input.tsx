import React from 'react'

export  function Input() {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-12 '>
      <h1 className='text-5xl font-semibold leading-[80px] max-w-md'>Sign Up for <span className="text-btn"> Updates </span> & Newsletter</h1>
      <div className='w-full md:w-1/3 h-4 relative mb-16'>
      <input type="text" className='border  w-full border-black px-4 md:px-6 rounded-full h-16 focus:outline-none placeholder:w-44 text-slate-700' placeholder='subscribe@converse' />
      <span className='absolute right-6 top-3 bg-btn px-4 py-2 md:px-6 rounded-3xl text-white placeholder:px-5'>Sign Up</span>
      </div>
    </div>
  )
}
