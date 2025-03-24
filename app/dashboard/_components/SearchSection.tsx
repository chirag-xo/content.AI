import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className = 'p-10 bg-gradient-to-br from-primary via-purple-500 to-blue-400 text-white flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold'> Browse All Templates </h2>
        <p> What would you like to create today ?</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]'>
                <Search className='text-primary'/>
                <input type='text' placeholder='Search' 
                    onChange={(e)=>onSearchInput(e.target.value)}
                
                className='bg-transparent outline-none text-black'/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection