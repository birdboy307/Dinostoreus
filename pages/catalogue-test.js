import Head from "next/head"

import ProductCard from "../components/productcard-test"

const products = [
    {
        id: "1",
        name: "Product 1",
        price: "$1.00",
        description: "This is a product",
        image: "https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: "2",
        name: "Product 2",
        price: "$2.00",
        description: "This is a product",
        image: "https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: "3",
        name: "Product 3",
        price: "$3.00",
        description: "This is a product",
        image: "https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8MTYlM0E5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
]

export default function catalogue() {
  return (
    <>
        <Head>
            <title>Dinostoreus | Catalogue</title>
        </Head>
        <div className="h-fit w-full bg-gray-50">
            <section className="w-1/3 flex justify-center h-1/6">
                <div>
                    <h2 className="text-4xl font-semibold my-24">Catalogue</h2> 
                </div>
            </section>
            <section className="flex justify-center translate-y-12 pb-24">
                <div>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 list-none'>
                        {products.map((product) => 
                            <li key={product.id}>
                                <ProductCard
                                id={product.id}
                                title={product.name}
                                description={product.description}
                                image={product.image}
                                price={product.price}
                                />
                            </li>
                        )}
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}