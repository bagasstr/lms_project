const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <div className='max-w-[1024px] mx-auto'>{children}</div>
    </>
  )
}
export default Layout
