// "use client"
// import { client } from "../../sanity/lib/client"
// import { urlFor } from "../../sanity/lib/image"
// import { useEffect, useState } from "react"

// interface Color {
//   colorCode: string
// }

// interface Product {
//   _id: string
//   name: string
//   location?: string // Changed to optional
//   price: number
//   image: any
//   colors: Color[]
// }

// interface ProductGridProps {
//   products: Product[]
// }

// const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
//       {products.map((product) => (
//         <div key={product._id} className="border p-4 rounded-lg bg-[#E8E8E8] shadow-lg
//          shadow-zinc-500 cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-l">
//           <img src={urlFor(product.image).url()} alt={product.name} 
//            className="w-200 h-200 object-cover mb-4 shadow-lg rounded-lg" />
//           <h2 className="text-xl font-bold mb-2">{product.name}</h2>
//           {product.location && <p className="text-gray-600 mb-2">{product.location}</p>}
//           <p className="text-lg font-semibold mb-4">${product.price}</p>
//           <div className="flex space-x-2 mb-4">
//             {product.colors.map((color) => (
//               <span key={color.colorCode} className="w-6 h-6 rounded-full" 
//               style={{ backgroundColor: color.colorCode }}></span>
//             ))}
//           </div>
//           <Button>Add to Cart</Button>
//         </div>
//       ))}
//     </div>
//   )
// }

// export function Product() {
//   const [post, setPost] = useState<Product[]>([])

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await client.fetch(`*[_type == "product"] {
//         _id,
//         name,
//         location,
//         price,
//         image,
//         colors
//       }`)
//       setPost(data)
//     }

//     fetchData()
//   }, [])

//   return <ProductGrid products={post} />
// }

// export default ProductGrid
"use client"
import { useShoppingCart } from "use-shopping-cart"
import { client } from "../../sanity/lib/client"
import { urlFor } from "../../sanity/lib/image"
import {Button} from "../ui/button"
import { useEffect, useState } from "react"

interface Color {
  colorCode: string
}

interface Product {
  _id: string
  name: string
  location?: string // Changed to optional
  price: number
  image: any
  colors: Color[]
}

interface ProductGridProps {
  products: Product[]
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {

const { addItem } = useShoppingCart() // Accessing addItem method

// Handle Add to Cart click
const handleAddToCart = (product: Product) => {
  addItem({
    id: product._id,
    name: product.name,
    price: product.price,
    currency: 'USD', // or any other currency you're using
    image: urlFor(product.image).url(), // Using the image URL
  })
}

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    {products.map((product) => (
      <div key={product._id} className="border p-4 rounded-lg bg-[#F6F3F3] shadow-lg shadow-zinc-500 cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-l">
       <div className="grid place-items-center">
  <img 
    src={urlFor(product.image).url()} 
    alt={product.name} 
    className="w-52 h-52 object-cover rounded-md"
  />
</div>
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        {product.location && <p className="text-gray-600 mb-2">{product.location}</p>}

        {/* Flex container for price and button */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold">${product.price}</p>
          <Button onClick={() => handleAddToCart(product)} >Add to Cart</Button>
        </div>

        {/* Colors */}
        <div className="flex space-x-2 mb-4">
          {product.colors && product.colors.map((color) => (
            <span key={color.colorCode} className="w-6 h-6 rounded-full" style={{ backgroundColor: color.colorCode }}></span>
          ))}
        </div>
      </div>
    ))}
  </div>
)
}

export function Product() {
  const [post, setPost] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "product"] {
        _id,
        name,
        location,
        price,
        image,
        colors
      }`)
      setPost(data)
    }

    fetchData()
  }, [])

  return <ProductGrid products={post} />
}

export default ProductGrid;
