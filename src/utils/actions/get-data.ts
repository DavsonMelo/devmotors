export async function getDataHome() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/68a915bfd2eb0c9d58cb5456?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`)

    if(!res.ok) {
      throw new Error("Failed to fetch data")
    }
    return res.json()

  } catch (error) {
    throw new Error('Faled to fetch data');
  }
}
