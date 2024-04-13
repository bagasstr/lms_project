import { RiSearch2Line } from '@remixicon/react'
import Link from 'next/link'

const SearchBar = () => {
  return (
    <>
      <div className=''>
        <Link href={''} className=''>
          <div className='bg-bg px-4 flex items-center justify-between py-2 w-full rounded-md'>
            <p className='text-sm text-text/50'>Cari Materi</p>
            <RiSearch2Line size={18} className='' />
          </div>
        </Link>
      </div>
    </>
  )
}
export default SearchBar
