import type { NextPage } from 'next'
import Head from 'next/head'
import Home from '../components/Main/Home'

const HomePage: NextPage = () => {
  return (
    <div className="mt-[33px] w-full">
      <Head>
        <title>Table App</title>
        <meta name="description" content="Created by Godshield Oche Godshield" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  )
}

export default HomePage
