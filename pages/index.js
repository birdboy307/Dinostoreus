import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dinostoreus | Home</title>
      </Head>
      <div className='h-screen bg-gray-50'>
        <form action="/api/checkout" method='POST'>
          <button type="submit" role="link">
            Checkout
          </button>
        </form>
      </div>
    </>
  )
}
