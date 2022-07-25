import React from 'react'
import { useCart } from 'react-use-cart'

export default function cart() {
    const { isEmpty } = useCart(); 

    if (isEmpty) return (
        <div className="flex justify-center items-center h-screen">
            <p className='font-bold text-3xl'>Cart Empty</p>
        </div>
    );
    
    return (
        <div className="flex justify-center items-center h-screen">
            <p className='font-bold text-3xl'>Cart</p>
            
        </div>
    )
}
