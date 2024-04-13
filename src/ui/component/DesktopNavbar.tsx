'use client'
import Image from 'next/image'
import SearchBar from './SearchBar'
import Link from 'next/link'
import ButtonLoginRegis from './ButtonLoginRegis'
import DropDown from './DropDown'
import { navLink } from '@/helpers/constans'

const DesktopNavbar = () => {
  return (
    <>
      <div className='w-full py-4 z-50'>
        <div className='flex items-center justify-between'>
          <div className=''>
            <Link href={'/'}>
              <Image
                src={'/Logo.png'}
                alt='logo'
                width={100}
                height={100}
                priority
              />
            </Link>
          </div>
          <div className='w-[35%]'>
            <SearchBar />
          </div>
          <div className='flex gap-x-8 items-center'>
            <DropDown />
            <div className=''>
              <ButtonLoginRegis />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DesktopNavbar
