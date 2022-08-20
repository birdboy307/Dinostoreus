import { useCart } from "react-use-cart"

export default function carttest() {
    const { items, isEmpty, removeItem, updateItemQuantity, totalUniqueItems, emptyCart } = useCart()

    if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
      {items.map((item) => (
                              <li key={item.id} className="flex py-6">
                                
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a>{item.name}</a>
                                      </h3>
                                      <p className="ml-4">{item.price}</p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty <button className='' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>{item.quantity}<button className='' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button></p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() => removeItem(item.id)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
      </ul>
      <button onClick={emptyCart}>clear</button>
    </>
  )
}
