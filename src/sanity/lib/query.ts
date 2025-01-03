import { groq } from 'next-sanity'

export const getProductsQuery = groq`
  *[_type == "product"] {
    _id,
    name,
    "slug": slug.current,
    location,
    price,
    image,
    colors[]{
      colorCode
    }
  }
`

