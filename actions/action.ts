"use server"

import { IBook } from "@/type"
import { deleteBook, getBook, getBooks, putBook } from "./data"

export const getBookFromDb=async(id:number)=>{
    const res =await getBook(id)
    return res

}

export const getBooksFromDb=async()=>{
    const res=await getBooks()
    return res.data
}

export const putBookInDb=async(book:IBook)=>{
    const res=await putBook(book)
    return res
}

export const deleteBookInDb=async(id:number)=>{
    const res=await deleteBook(id)
    return res
}

