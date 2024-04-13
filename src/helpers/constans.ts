'use client'
import { RiApps2Line, RiHome6Line, RiUser3Line, RiBook3Line } from '@remixicon/react'
import { Banner, Mobilenavbar, NavLink } from './type'

export const mobileNavbar: Mobilenavbar[] = [
  { title: 'Beranda', icon: RiHome6Line, link: '/' },
  { title: 'Kursus', icon: RiBook3Line, link: '/course' },
  { title: 'Kategori', icon: RiApps2Line, link: '/category' },
  { title: 'Masuk', icon: RiUser3Line, link: '/auth' },
]

export const navLink: NavLink[] = [
  {
    label: 'Course',
    menu: true,
    link: '/course',
    children: [
      { label: 'React JS', link: '/' },
      { label: 'Flutter', link: '/' },
      { label: 'Design Figma', link: '/' },
      { label: 'CEO', link: '/' },
      { label: 'Marketing For Website', link: '/' },
    ],
  },
  {
    label: 'Category',
    menu: true,
    link: '/category',
    children: [
      { label: 'Web Programing', link: '/' },
      { label: 'Mobile Programing', link: '/' },
      { label: 'UI/UX', link: '/' },
      { label: 'CEO', link: '/' },
      { label: 'Digital Marketing', link: '/' },
    ],
  },
]

export const banner: Banner[] = [
  {
    url: 'https://img.freepik.com/free-vector/gradient-horizontal-banner-template-international-day-education_23-2149942366.jpg?t=st=1710705582~exp=1710709182~hmac=f12c41ead06265f5be672ffa7641112133e9de66c9a364fb57f2bfbacabf5565&w=1060',
  },
  {
    url: 'https://img.freepik.com/free-vector/gradient-horizontal-banner-template-international-day-education_23-2149942372.jpg?t=st=1710705622~exp=1710709222~hmac=b7824c0645034db973ed501bf1c505f400793e3d2d401695634019a5ffa92d78&w=1060',
  },
  {
    url: 'https://img.freepik.com/free-vector/gradient-horizontal-banner-template-international-day-education_23-2149942363.jpg?t=st=1710705610~exp=1710709210~hmac=0362f641afe99289d56e050afb012c32e6951df50fbb320125d5daaada4003d4&w=1060',
  },
]
