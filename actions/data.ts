import { IBook } from "@/type"
import "server-only"



export const getBooks=async()=>{
    try {
        const res=await fetch(`${process.env.AWS_API_URL}/books`,{
            cache:"no-store"
        }).then(function(res){
            console.log("res",res)
            const status=res.status
            const data=res.json()
            return {status,data}
        })
        console.log("res",res)
        return res
        

        
    } catch (error) {
        console.log("error:",error)
        throw new Error("Failed to fetch books")
        
    }
}

export const getBook=async(id:number)=>{
    try {
        const res=await fetch(`${process.env.AWS_API_URL}/books/${id}`,{
            cache:"no-store"
        }).then( async function(res){
            const status=res.status
            const data= await res.json()
            return {status,data}
        })
        return res
        

        
    } catch (error) {
        console.log("error:",error)
        throw new Error("Failed to fetch book")
        
    }
}


export const putBook=async(data:IBook)=>{
    try {
           const res=await fetch(`${process.env.AWS_API_URL}/books`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
         
            
        })
           if (!res.ok) {
            throw new Error("Failed to Add Book")
                
                
            }
            return res
        
    } catch (error) {
        console.log(error)
        throw new Error("Failed to Add Book")
        
    }
}

export const deleteBook=async(id:number)=>{
    try {
        const res=await fetch(`${process.env.AWS_API_URL}/books/${id}`,{
            method:"DELETE",
            cache:"no-store"
        }).then(function(res){
            const status=res.status
            const data=res.json()
            return {status,data}
        })
        return res
        

        
    } catch (error) {
        console.log("error:",error)
        throw new Error("Failed to fetch book")
        
    }
}