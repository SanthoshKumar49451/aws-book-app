"use client"

import Header from "@/component/Header"
import { IBook } from "@/type"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { putBookInDb } from "@/actions/action"

const AddPage  = () => {
  const router=useRouter()
  const[error,setError]=useState<string|null>(null)
    const[book,setBook]=useState<IBook>(
   {
    id:Math.floor(1000+Math.random()*9000),     
         title:"",
        author:"",
        price:0,
        description:""
   }
    )
       const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
          const{name,value}=e.target;
        
            const newBook:IBook={
              ...book,
              [name]:name==="price"?parseFloat(value):value,
            }
            setBook(newBook)
            
    
        }
              const  handleSubmit=async(e:React.FormEvent)=>{
             e.preventDefault()
             try {
              await putBookInDb(book)
               router.push("/")
               router.refresh()
               
             } catch (error) {
               setError("Failed To Add Book")
               
             }
           }
    
  return (
    <div className="min-h-screen" >
        <Header/>
          {error&&<div className='my-5 w-full max-w-lg mx-auto bg-red-400 p-4 rounded-lg ' >
        <p className='font-extrabold text-center ' >{error}</p>
        
        </div>}
        <div>
           <form onSubmit={handleSubmit} action="" className='my-5 w-full max-w-lg mx-auto' >
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
                <label htmlFor="description" className='block font-semibold' >Description</label>
                <textarea id='description' name='description' rows={4}  value={book.description} onChange={handleChange} required  placeholder='Enter Book Title' className='w-full p-2 mt-2 border rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-400' />

              </div>
              <button type='submit' className='w-full py-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition duration-200 ease-in-out hover:cursor-pointer  ' >Add Book</button>
              
            </form>
        </div>
        
    </div>
  )
}

export default AddPage