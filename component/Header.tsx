import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='flex justify-between items-center py-5  px-4 h-16 bg-white mx-14 my-5  rounded-md sticky  ' >
            <h1
                className='font-semibold hover:text-blue-500 cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out text-base md:text-md lg:text-xl '
            >
                Book Library
            </h1>

            <nav>
                <ul className='flex justify-center items-center gap-5 ' >
                    <li className='font-semibold text-base md:text-md lg:text-xl ' ><Link href='/' className='hover:underline  hover:text-blue-500 cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out '  >Home</Link></li>
                    <li className='font-semibold text-base md:text-md lg:text-xl' ><button className='py-2 px-3 bg-blue-400 border-none outline-none hover:scale-95 transition-colors ease-in-out rounded duration-500 ' ><Link href='/add' >Add Book</Link></button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header