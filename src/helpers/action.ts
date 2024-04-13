'use server'

const getData = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}`, {
      next: { revalidate: 30 },
    })

    if (!res.ok) {
      throw new Error('failed to fetch data')
    }
    const data = await res.json()
    return data
    // console.log(data)
  } catch (error) {
    throw error
  }
}
export default getData
