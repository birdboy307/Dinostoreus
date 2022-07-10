import React from 'react'

export default function ProductCard(props) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md ">
    <a href="#">
        <img className="p-8 rounded-t-lg" src={props.image} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{props.title}</h5>
        </a>
        <div className="mt-2.5 mb-5 truncate">
            <p>{props.description}</p>
        </div>
        <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900">{props.price}</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
        </div>
    </div>
</div>
  )
}
