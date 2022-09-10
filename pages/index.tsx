import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Context } from 'vm'
import Home from '../components/Main/Home'

export type data = {
  createdAt: string;
  name: string;
  images: string;
  status: string;
  onSale: any;
  category: string;
  vendor: string;
  quantity: number;
  id: string;
} []

interface Props {
  data: data;
  totalItems: number;
  filter: string[]
}

const HomePage: NextPage<Props> = ({data, totalItems, filter}) => {

  return (
    <div className="mt-[16px] mb-16 w-full">
      <Head>
        <title>Table App</title>
        <meta name="description" content="Created by Godshield Oche Godshield" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home data={data} totalItems={totalItems} filter={filter} />
    </div>
  )
}

export async function getServerSideProps(context: any) {
  let page = context.query.page || 1
  const { name, vendor, status, createdAt, onSale } = context.query



  let link = `https://60a8e2a620a641001730664e.mockapi.io/api/products/?page=${page}&limit=5`
  let link2 = `https://60a8e2a620a641001730664e.mockapi.io/api/products/?page=${page}`

  if (name) {
    link = link.concat(`&name=${name}`)
    link2 = link2.concat(`&name=${name}`)
  }
  if (vendor) {
    link = link.concat(`&vendor=${vendor}`)
    link2 = link2.concat(`&vendor=${vendor}`)
  }
  if (status) {
    link = link.concat(`&status=${status}`)
    link2 = link2.concat(`&status=${status}`)
  }
  if (onSale) {
    link = link.concat(`&onSale=${onSale}`)
    link2 = link2.concat(`&onSale=${onSale}`)
  }
  if (createdAt) {
    link = link.concat(`&createdAt=${createdAt}`)
    link2 = link2.concat(`&createdAt=${createdAt}`)
  }
  
  const result = await axios.get(link)

  const result2 = await axios.get(link2)


  const totalItems = result2.data.length

  const filter = result2.data.map((item: any) => {
    return item.status
  })

  let uniqueFilter: string[] = []

  filter.forEach((item : string) => {
    if (uniqueFilter.includes(item)) {
      return
    }
    uniqueFilter.push(item)
  })

  const data = result.data
  
  return {
    props: {
      data,
      filter: uniqueFilter,
      totalItems
    }, // will be passed to the page component as props
  }
}

export default HomePage
