export interface Mobilenavbar {
  title: string
  icon: JSX.Element | React.ReactElement | any
  link: string
}

export type SubMenu = {
  label: string
  link: string
}

export interface NavLink {
  menu: boolean
  label: string
  link: string
  children: SubMenu[]
}

export type DropDown = {
  index: number
  items: NavLink
}

export type Banner = {
  url: string
}

export type Category = {
  title: string
}

export type Product = {
  id: string
  title: string
  description: string
  image: string
  price: number
  rating: number
  course: string
  category: string
  tags: string
}
