import React from 'react'

export default function ProductCard(props) {
  return (
    <div class="max-w-sm bg-white rounded-lg shadow-md ">
    <a href="#">
        <img class="p-8 rounded-t-lg" src={props.image} alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">{props.title}</h5>
        </a>
        <div class="mt-2.5 mb-5 truncate">
            <p>{props.description}</p>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-3xl font-bold text-gray-900">{props.price}</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
        </div>
    </div>
</div>
  )
}
