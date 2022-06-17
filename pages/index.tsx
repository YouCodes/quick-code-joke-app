import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import customUseFetch from './customUseFetch'
import CallOnFetch from './CallOnFetch'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Joke App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <CallOnFetch />
      </main>


    </div>
  )
}

export default Home
