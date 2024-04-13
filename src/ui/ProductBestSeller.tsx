import getData from '@/helpers/action'
import CarouselProduct from './component/CarouselProduct'
import { Suspense } from 'react'
import Card from './component/Card'
import { Product } from '@/helpers/type'

const ProductBestSeller = async () => {
  const data = await getData()

  const webPrograming = data.filter(
    (product: Product) => product.course === 'Web Programing'
  )

  const mobilePrograming = data.filter(
    (product: Product) => product.course === 'Mobile Programing'
  )

  return (
    <>
      <CarouselProduct
        product={webPrograming}
        key={webPrograming.id}
        title={'Web Programing'}
      />
      <CarouselProduct
        product={mobilePrograming}
        key={mobilePrograming.id}
        title={'Mobile Programing'}
      />
      {/* <Card /> */}
    </>
  )
}
export default ProductBestSeller
