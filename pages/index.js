import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dinostoreus | Home</title>
      </Head>
      <div className='h-screen bg-gray-50'>
        <div className='relative'>
          <img className='w-full object-cover h-screen' src='https://cdn.discordapp.com/attachments/873118006195138570/993076004912377856/562F0036-0A26-42BD-8AC9-DC9381318E2E.jpg'></img>
          <div className='absolute top-56 left-10'>
            <h1 className='text-8xl font-bold text-slate-100'>Driver Safety</h1>
            <h2 className='text-6xl font-semibold text-slate-100'>Speeding</h2>
          </div>
        </div>
      </div>
    </>
  )
}
