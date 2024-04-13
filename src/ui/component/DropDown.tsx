'use client'
import { navLink } from '@/helpers/constans'
import Link from 'next/link'
import { useState } from 'react'

const DropDown = () => {
  const [heading, setHeading] = useState('')
  return (
    <>
      {navLink.map((item, idx) => (
        <div key={idx} className='cursor-pointer group'>
          <div className=''>
            <Link
              href={item.link}
              className=''
              onClick={() => {
                heading !== item.label ? setHeading(item.label) : setHeading('')
              }}>
              {item.label}
            </Link>
            <div
              className={`group-hover:block hidden ${
                heading == item.label ? 'sm:hidden' : 'hidden'
              }`}>
              <div className='absolute top-[41px]'>
                <div className='h-10'></div>
                <div className=' bg-bgaccent rounded-lg p-3'>
                  <div className='w-3 h-3 absolute rounded left-5 top-9 rotate-45 bg-bgaccent'></div>
                  {item.children.map((i) => (
                    <div key={i.label} className=''>
                      <Link href={i.link}>{i.label}</Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
export default DropDown
