'use client'
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from '@remixicon/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/style/SwiperBanner.css'
import { banner, navLink } from '@/helpers/constans'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='notSupport:hidden banner' id='banner'>
      <div className=''>
        <div className='flex gap-x-14 lg:px-4 '>
          <div className='banner swiper-button-prev sm:hidden md:hidden banner-prev'>
            <RiArrowLeftCircleLine className='text-2xl text-accent' size={40} />
          </div>
          <Swiper
            className=''
            modules={[Navigation, Pagination]}
            centeredSlides={true}
            navigation={{
              nextEl: '.banner .swiper-button-next',
              prevEl: '.banner .swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              type: 'bullets',
              el: '.banner .swiper-pagination',
            }}
            slidesPerView={1}
            spaceBetween={10}>
            {banner.map((item, index) => (
              <SwiperSlide key={index} className=''>
                <div className='w-full mx-auto flex justify-center'>
                  <Image
                    src={item.url}
                    width={750}
                    height={100}
                    className='rounded-lg'
                    alt='banner'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='banner swiper-button-next sm:hidden md:hidden banner-next'>
            <RiArrowRightCircleLine size={40} className='text-accent' />
          </div>
        </div>
        <div className='w-full mt-6 flex items-center justify-center banner-pagination'>
          {navLink.length >= 0 ? (
            <div className='banner swiper-pagination'></div>
          ) : (
            <div className='banner swiper-pagination hidden'></div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Banner
