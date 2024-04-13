import { RiLoader4Line } from '@remixicon/react'
const Loading = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center mt-20'>
        <RiLoader4Line className='animate-spin' />
        <h1 className=''>Loading...</h1>
      </div>
    </>
  )
}
export default Loading
