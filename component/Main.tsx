
import React from 'react'
import { IBook } from '@/type';
import Bookcard from '@/component/Bookcard'
import { getBooksFromDb } from '@/actions/action';

const Main =async () => {
  const fictionBooks: IBook[] = await getBooksFromDb()
  return (
    <main className='py-12' >
        <h2 className='font-semibold px-5 text-xl mb-5 ' >
            Explore Our Collections
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ' >
          {
            fictionBooks.map((item,index)=>(
            <Bookcard key={index} book={item} />
             
            ))
          }

        </div>
    </main>
  )
}

export default Main