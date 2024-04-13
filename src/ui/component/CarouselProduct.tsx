'use client'

// Import Remix Icon
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from '@remixicon/react'

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

// Import Swiper CSS
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/style/SwiperProduct.css'
import { Product } from '@/helpers/type'
import Image from 'next/image'

// type
type Products = {
  product: Product[]
  title: string
}

const CarouselProduct = ({ product, title }: Products) => {
  return (
    <>
      <div className='py-20 notSupport:hidden product'>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <div className='w-full mb-4'>
          <div className='flex items-center justify-between'>
            <div className='w-full flex items-center banner-pagination sm:hidden md:hidden'>
              {product.length >= 0 ? (
                <div className='banner swiper-pagination'></div>
              ) : (
                <div className='banner swiper-pagination hidden'></div>
              )}
            </div>
            <div className='flex gap-x-4'>
              <div className='product swiper-button-prev sm:hidden md:hidden'>
                <RiArrowLeftCircleLine className='text-2xl text-accenth' size={40} />
              </div>
              <div className='product swiper-button-next sm:hidden md:hidden product-next'>
                <RiArrowRightCircleLine className='text-2xl text-accent' size={40} />
              </div>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: '.product .swiper-button-next',
            prevEl: '.product .swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            type: 'bullets',
            el: '.product .swiper-pagination',
          }}
          breakpoints={{
            320: {
              // centeredSlides: true,
              // centeredSlidesBounds: true,
              slidesPerView: 1,
              spaceBetween: 40,
            },
            425: {
              // centeredSlides: true,
              // centeredSlidesBounds: true,
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}>
          {product &&
            product.map((item) => (
              <SwiperSlide key={item.id} className='rounded-xl bg-bgaccent/20'>
                <div className='h-[100px] flex justify-center'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className='h-[100px] rounded'
                  />
                </div>
                <div className='px-5 pb-5 pt-7'>
                  <div className='flex gap-x-2 mb-2'>
                    <p className='bg-accent2 px-2 text-bgaccent rounded-full text-sm flex items-center'>
                      {item.tags}
                    </p>
                    <p className='bg-accent2 px-2 text-bgaccent rounded-full text-sm flex items-center'>
                      {item.category}
                    </p>
                  </div>
                  <h1 className='text-lg truncate hover:text-clip mb-2 text-text font-medium'>
                    {item.title}
                  </h1>
                  <h2 className='truncate text-sm hover:text-clip text-text font-light'>
                    {item.description}
                  </h2>
                  <h3 className='mt-2'>Rp.{item.price}</h3>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  )
}
export default CarouselProduct
