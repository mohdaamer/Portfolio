import React from 'react'

const Works = () => {
  return (
    <div className='max-w-[1240px] md:m-auto md:p-8 ml-8'>
      <h1 className='text-2xl font-semibold'>My Works</h1>

      {/* Works  */}
      <div className="md:flex md:flex-wrap gap-10 items-center justify-center md:w-full md:my-12 w-[335px] overflow-hidden p-4">

        <div className="wrapper md:w-[30%] p-2 bg-[#2C3333] rounded-lg border border-white my-4 md:hover:scale-110 md:duration-500">
            <img src="./images/image1.png" alt="" className='rounded-lg object-cover' />
            <h4 className='text-white text-[10px] md:text-lg font-semibold py-3 md:px-2'>Creative Space Clone</h4>
            <button className='md:p-2 block p-1 rounded text-[#2C3333] md:rounded-lg border border-white md:mx-auto bg-white md:my-4 md:font-semibold'>Visit Website</button>
        </div>

        <div className="wrapper md:w-[30%] p-2 bg-[#2C3333] rounded-lg border border-white my-4 md:hover:scale-110 md:duration-500">
            <img src="./images/image2.png" alt=""  className='rounded-lg object-cover'/>
            <h4 className='text-white text-[10px] md:text-lg font-semibold py-3 md:px-2'>SpaceX Clone</h4>
            <button className='md:p-2 block p-1 rounded text-[#2C3333] md:rounded-lg border border-white md:mx-auto bg-white md:my-4 md:font-semibold'>Visit Website</button>
        </div>

        <div className="wrapper md:w-[30%] p-2 bg-[#2C3333] rounded-lg border border-white my-4 md:hover:scale-110 md:duration-500">
            <img src="./images/image3.png" alt="" className='rounded-lg object-cover'/>
            <h4 className='text-white text-[10px] md:text-lg font-semibold py-3 md:px-2'>Nike Clone</h4>
            <button className='md:p-2 block p-1 rounded text-[#2C3333] md:rounded-lg border border-white md:mx-auto bg-white md:my-4 md:font-semibold'>Visit Website</button>
        </div>
      </div>
    </div>
  )
}

export default Works
