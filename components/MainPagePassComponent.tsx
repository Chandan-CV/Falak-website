import React from 'react'

function MainPagePassComponent({userData}:any) {
  return (
    <div className='w-full flex flex-row justify-center mt-10'>
      <p className='text-white text-3xl'>
      Your pass: {(userData.pass).toUpperCase()}
      </p>
      
      </div>
  )
}

export default MainPagePassComponent