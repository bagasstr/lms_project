import Banner from '@/ui/Banner'
import Navbar from '@/ui/Navbar'
import ProductBestSeller from '@/ui/ProductBestSeller'
import Layout from '@/ui/component/Layout'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Loading from '@/ui/component/Loading'

// Komponen yang akan diimpor secara dinamis
const ProductComponent = dynamic(() => import('@/ui/ProductBestSeller'), {
  ssr: false,
  loading: () => <Loading />,
})
const BannerComponent = dynamic(() => import('@/ui/Banner'), {
  ssr: false,
  loading: () => <Loading />,
})
const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Layout>
        <BannerComponent /> {/* Component banner yang berisi swiper */}
        <ProductComponent />
      </Layout>
    </>
  )
}
export default page
