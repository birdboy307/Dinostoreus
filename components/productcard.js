import { toast } from 'react-toastify';
import { useCart } from "react-use-cart";

import 'react-toastify/dist/ReactToastify.css';

export default function ProductCard(props) {
    const { addItem } = useCart();
    
    const product = {id: props.id, name: props.title, price: props.price, description: props.description, image: props.image};

    const notify = () => {
        addItem(product)
        toast.success("Added to Cart");
    }
    
    return (
        <div className="max-w-sm bg-white rounded-lg drop-shadow-md hover:drop-shadow-xl ease-in-out duration-150">
            <a>
                <img className="p-8 rounded-t-lg" src={props.image} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{props.title}</h5>
                </a>
                <div className="mt-2.5 mb-5 truncate">
                    <p>{props.description}</p>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900">{props.price}</span>
                    <button onClick={notify} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ease-in-out duration-300">Add to cart</button>
                </div>
            </div>
        </div>
    )
}
