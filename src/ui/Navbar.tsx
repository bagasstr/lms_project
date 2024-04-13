import DesktopNavbar from './component/DesktopNavbar'
import Layout from './component/Layout'
import MobileNavbar from './component/MobileNavbar'

const Navbar = () => {
  return (
    <header className='notSupport:hidden'>
      <div className='sm:hidden md:hidden z-50 lg:px-3 fixed w-full bg-bgaccent top-0'>
        <Layout>
          <DesktopNavbar />
        </Layout>
      </div>
      <div className='xl:hidden lg:hidden z-50'>
        <MobileNavbar />
      </div>
    </header>
  )
}
export default Navbar
