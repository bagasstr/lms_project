import Link from 'next/link'

const ButtonLoginRegis = () => {
  return (
    <>
      <Link href={'/auth'}>
        <div className='bg-accent px-4 py-2 rounded'>
          <h1 className='text-sm font-medium'>Masuk/Daftar</h1>
        </div>
      </Link>
    </>
  )
}
export default ButtonLoginRegis
