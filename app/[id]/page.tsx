"use client"


import { deleteBookInDb, getBookFromDb, putBookInDb } from '@/actions/action'
import Header from '@/component/Header'
import { IBook } from '@/type'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = ({params}:{params:{id:number}}) => {
    const[book,setBook]=useState<IBook|null>(null)
    const [error,setError]=useState<string|null>(null)
    const router=useRouter()

    const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
      const{name,value}=e.target;
      if (book) {
        const newBook:IBook={
          ...book,
          [name]:name==="price"?parseFloat(value):value,
        }
        setBook(newBook)
        
      }

    }

  const  handleEditSubmit=async(e:React.FormEvent)=>{
    e.preventDefault()
    try {
      if (book) {
        await putBookInDb(book)
        router.push("/")
        router.refresh()
      }
      
    } catch (error) {
      setError("Failed To Edit Book")
      
    }
  }
   const handleDeleteSubmit=async(e:React.FormEvent)=>{
    e.preventDefault()
    try {
     if (book) {
      await deleteBookInDb(params.id)
       router.push("/")
      router.refresh()

      
     }
      
    } catch (error) {
      setError("Something Went Wrong")
      
    }


   }

    useEffect(()=>{
        const fetchBook=async()=>{
        const book=await getBookFromDb(params.id) 
        setBook(book.data)

      }
      fetchBook()


    },[params.id])
  return (
    <div className='min-h-screen' >
      <Header/>
      {error&&<div className='my-5 w-full max-w-lg mx-auto bg-red-400 p-4 rounded-lg ' >
        <p className='font-extrabold text-center ' >{error}</p>
        
        </div>}
        {
          book?<div>
            <form onSubmit={handleEditSubmit} action="" className='my-5 w-full max-w-lg mx-auto' >
              <h2 className='text-2xl font-bold mb-6' >
              
                Edit Book
              </h2>
              <div className='mb-4' >
                <label htmlFor="title" className='block font-semibold' >Title</label>
                <input type="text" id='title' name='title'  value={book.title} onChange={handleChange} required  placeholder='Enter Book Title' className='w-full p-2 mt-2 border rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-400' />

              </div>
              <div className='mb-4' >
                <label htmlFor="author" className='block font-semibold' >Author</label>
                <input type="text" id='author' name='author'  value={book.author} onChange={handleChange}  required  placeholder='Enter Book Title' className='w-full p-2 mt-2 border rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-400' />

              </div>
              <div className='mb-4' >
                <label htmlFor="price" className='block font-semibold' >price</label>
                <input type="number" id='price' name='price' step='0.01'  value={book.price} onChange={handleChange} required  placeholder='Enter Book Title' className='w-full p-2 mt-2 border rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-400' />

              </div>
              <div className='mb-4' >
                <label htmlFor="description" className='block font-semibold' >Decsription</label>
                <textarea id='description' name='decsription' rows={4}  value={book.description} onChange={handleChange} required  placeholder='Enter Book Title' className='w-full p-2 mt-2 border rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-400' />

              </div>
              <button type='submit' className='w-full py-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition duration-200 ease-in-out hover:cursor-pointer  ' >Edit Book</button>
              
            </form>

            <form action="" onSubmit={handleDeleteSubmit}  className='my-5 w-full max-w-lg mx-auto' >
              <button type='submit' className='w-full py-3 bg-red-400 text-white rounded hover:bg-red-600 transition duration-200 ease-in-out hover:cursor-pointer  ' >Delete Book</button>
            </form>


          </div>:<div>
            Loading
            </div>
        }
    </div>
  )
}

export default page