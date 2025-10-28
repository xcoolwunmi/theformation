import React from 'react'

function Card() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-6 my-10 mx-4 '>
      <div className=''>
      <img src="https://res.cloudinary.com/reformation/image/upload/c_scale,w_3840,w_800/v1/home%20banner%202025/homepage%20content%20tiles%202025/1319155.1.VANILLA_ROSE?_i=AH" alt="" className='w-500' />
        <p className='text-center text-2xl '>New</p>
      </div>
       <div className=' '>
      <img src="https://res.cloudinary.com/reformation/image/upload/c_scale,w_3840,w_800/v1/home%20banner%202025/homepage%20content%20tiles%202025/1319305.1.CHIANTI_SATIN?_i=AH" alt="" className='w-500 ' />
        <p className='text-center text-2xl '>Shoes</p>
      </div>
       <div className=''>
      <img src="https://res.cloudinary.com/reformation/image/upload/c_scale,w_3840,w_800/v1/home%20banner%202025/homepage%20content%20tiles%202025/1314815.1.BLACK_DOT?_i=AH" alt="" className='w-500' />
        <p className='text-center text-2xl '>Day Night</p>
      </div>
       <div className=''>
      <img src="https://res.cloudinary.com/reformation/image/upload/c_scale,w_3840,w_800/v1/home%20banner%202025/homepage%20content%20tiles%202025/1319262.1.CHIANTI?_i=AH" alt="" className='w-500 ' />
        <p className='text-center text-2xl '>Bestsellers</p>
      </div>
    </div>
  )
}

export default Card
