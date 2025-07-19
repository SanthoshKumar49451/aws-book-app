import { IBook } from '@/type'
import Link from 'next/link'
import React from 'react'

const Bookcard = ({book}:{book:IBook}) => {
  return (
    <div className='py-6 px-3 bg-slate-100 rounded-lg shadow-lg  ' >
        <h3 className='text-2xl font-semibold' >{book.title}</h3>
        <p className='text-lg text-gray-600' >
           by { book.author}
        </p>
        <p className='mt-2 text-xl font-bold ' >
            {book.price}
        </p>
     <Link href={`/${book.id}`} >    <button className='py-2 px-3 bg-blue-400 border-none outline-none hover:scale-95 transition-colors ease-in-out rounded duration-500 ' >View Book</button></Link>
    </div>
  )
}

export default Bookcard