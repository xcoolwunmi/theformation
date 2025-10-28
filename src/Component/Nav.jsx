import React from 'react'


function Nav() {
  return (
    <div className='flex items-center justify-between p-9'>
        <a href="#"> <h1 className='text-5xl font-bold'>Reformation</h1></a>
        <div className='flex items-center gap-6 text-lg font-medium'>
          <a href="#">Sustainability</a>
        <a href="#">Our stores</a>
        <a href="#">Sign in</a>
        <a href="#"> <img src="https://cdn-icons-png.flaticon.com/128/535/535285.png" alt="heart" className="w-10 h-10 ml-4"/></a>
        <a href=""><img src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png" alt="shopping bag" className="w-10 h-10 ml-1"/></a>
        </div>
     
    </div>
  )
}

export default Nav
