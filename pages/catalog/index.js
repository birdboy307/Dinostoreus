import Head from "next/head"

import ProductCard from "../../components/productcard"

const products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "https://via.placeholder.com/200x200"
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "https://via.placeholder.com/200x200"
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
        image: "https://via.placeholder.com/200x200"
    }
]

export default function cataloguetest() {
    return (
    <>
        <Head>
            <title>Dinostoreus | Catalogue</title>
        </Head>
        <div className="h-screen w-full bg-gray-50">
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
                                name={product.name}
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