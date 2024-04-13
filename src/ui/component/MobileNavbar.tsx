'use client'
import Link from 'next/link'
import { mobileNavbar } from '@/helpers/constans'
import Image from 'next/image'
import { useState } from 'react'

const MobileNavbar = () => {
  const [isActive, setActive] = useState(null)
  const handleActive = (index: any) => {
    setActive(index)
  }
  return (
    <header>
      <div className='fixed top-0 left-0 w-full px-8 flex justify-center py-3 bg-bgaccent'>
        <Image src={'/Logo.png'} alt='logo' width={100} height={100} priority />
      </div>
      <div className='py-3 fixed bottom-0 z-50 bg-bgaccent w-full left-0 sm:px-5 md:px-8'>
        <div className='flex items-center justify-between'>
          {/* link bottom navbar */}
          {mobileNavbar &&
            mobileNavbar?.map((item, index) => (
              <Link key={index} href={item.link} onClick={() => handleActive(index)}>
                <div
                  className={`flex items-center flex-col ${
                    isActive === index ? 'text-accent' : null
                  }`}>
                  {<item.icon />}
                  <h1 className='text-sm'>{item.title}</h1>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </header>
  )
}
export default MobileNavbar
