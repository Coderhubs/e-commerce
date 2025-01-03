// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Search, User, ShoppingBag, Menu } from 'lucide-react'
// import { useShoppingCart } from 'use-shopping-cart'

// export function NavBar() {
//   const [isCartOpen, setIsCartOpen] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const {
//     cartCount = 0,
//     cartDetails,
//     formattedTotalPrice,
//     removeItem,
//     // redirectToCheckout,
//   } = useShoppingCart()

//   // const handleCheckout = async (event: React.MouseEvent<HTMLButtonElement>) => {
//   //   event.preventDefault()
//   //   try {
//   //     const result = await redirectToCheckout()
//   //     if (result?.error) {
//   //       console.error('Redirect to checkout failed:', result)
//   //     }
//   //   } catch (error) {
//   //     console.error('Redirect to checkout failed:', error)
//   //   }
//   // }

//   return (
//     <div className="fixed top-4 left-4 right-4 z-50">
//       <nav className="bg-white/80 backdrop-blur-md rounded-xl">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="flex items-center justify-between h-16">
//             {/* Mobile Menu Button */}
//             <button 
//               className="lg:hidden p-1.5 hover:bg-gray-100 rounded-full transition-colors"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               <Menu className="w-[18px] h-[18px] text-gray-800" />
//             </button>

//             {/* Logo */}
//             <Link href="/" className="flex items-center space-x-2.5">
//               <div className="w-[38px] h-[38px] rounded-lg flex items-center justify-center">
//                 <Image src="/images/logo.png" width={38} height={38} alt="DEWISH" />
//               </div>
//               <span className="text-[15px] font-medium">DEWISH</span>
//             </Link>

//             {/* Navigation Links - Desktop */}
//             <div className="hidden lg:flex items-center">
//               <div className="flex space-x-8">
//                 <Link href="/whats-new" className="text-[14px] font-medium text-gray-800 hover:text-gray-600">What&apos;s New</Link>
//                 <Link href="/wedding-registry" className="text-[14px] font-medium text-gray-800 hover:text-gray-600">Wedding Registry</Link>
//                 <Link href="/free-design-service" className="text-[14px] font-medium text-gray-800 hover:text-gray-600">Free Design Service</Link>
//                 <Link href="/trade-program" className="text-[14px] font-medium text-gray-800 hover:text-gray-600">Trade Program</Link>
//                 <Link href="/personalization-shop" className="text-[14px] font-medium text-gray-800 hover:text-gray-600">The Personalization Shop</Link>
//               </div>
//             </div>

//             {/* Utility Icons */}
//             <div className="flex items-center space-x-5">
//               <button aria-label="Search" className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
//                 <Search className="w-[18px] h-[18px] text-gray-800" />
//               </button>

//               {/* Shopping Cart */}
//               <div className="relative">
//                 <button
//                   aria-label="Cart"
//                   className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
//                   onClick={() => setIsCartOpen(!isCartOpen)}
//                 >
//                   <ShoppingBag className="w-[18px] h-[18px] text-gray-800" />
//                   {cartCount > 0 && (
//                     <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
//                       {cartCount}
//                     </span>
//                   )}
//                 </button>
// {/* // className="absolute right-0 mt-2 w-[280px] sm:w-96 max-w-5xl bg-red-100 shadow-lg rounded-lg z-10 max-h-[calc(100vh-120px)] overflow-y-auto" */}
//                 {isCartOpen && cartDetails && (
//                   <div className="absolute mx-auto right-0 mt-2 w-80 md:w-[540px] bg-zinc-100 shadow-lg rounded-lg z-10 max-h-[calc(100vh-120px)] overflow-y-auto">
//                     <div className="flex flex-col p-4 md:p-6">
//                       <h2 className="text-xl font-semibold mb-4">Your cart</h2>
                      
//                       {/* Scrollable Cart Items */}

// <div className="flex-1 overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-100">
//   <ul className="flex flex-col divide-y dark:divide-gray-300">
//     {Object.values(cartDetails).map((item: any) => (
//       <li key={item.id} className="flex flex-col py-4 sm:flex-row sm:justify-between">
//         <div className="flex space-x-4">
//           <Image src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
//           <div>
//             <h3 className="text-sm sm:text-lg font-semibold">{item.name}</h3>
//             <p className="text-sm">Quantity: {item.quantity}</p>
//             <p className="text-xs sm:text-sm text-gray-600">Price: {item.formattedValue}</p>
//           </div>
//         </div>
//         <button
//           className="text-red-500 mt-2 sm:mt-0 text-xs sm:text-sm"
//           onClick={() => removeItem(item.id)}
//         >
//           Remove
//         </button>
//       </li>
//     ))}
//   </ul>
// </div>


//                       {/* Fixed Bottom Section */}
//                       <div className="mt-4 pt-4 border-t border-gray-200">
//                         <div className="space-y-1 text-right mb-4">
//                           <p>Total amount: <span className="font-semibold">{formattedTotalPrice}</span></p>
//                           <p className="text-xs sm:text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
//                         </div>

//                         <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
//                           <button
//                             type="button"
//                             className="px-4 sm:px-6 py-2 border rounded-md dark:border-violet-600 text-sm"
//                             onClick={() => setIsCartOpen(false)}
//                           >
//                             Back<span className="sr-only sm:not-sr-only"> to shop</span>
//                           </button>

//                           {/* <button
//                             type="button"
//                             className="px-4 sm:px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600 text-sm"
//                             onClick={handleCheckout}
//                           >
//                             <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
//                           </button> */}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <button aria-label="Account" className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
//                 <User className="w-[18px] h-[18px] text-gray-800" />
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation Menu */}
//           {isMobileMenuOpen && (
//             <div className="lg:hidden px-4 pt-2 pb-4 space-y-2 border-t border-gray-200">
//               <Link href="/whats-new" className="block py-2 text-[14px] font-medium text-gray-800 hover:text-gray-600">What&apos;s New</Link>
//               <Link href="/wedding-registry" className="block py-2 text-[14px] font-medium text-gray-800 hover:text-gray-600">Wedding Registry</Link>
//               <Link href="/free-design-service" className="block py-2 text-[14px] font-medium text-gray-800 hover:text-gray-600">Free Design Service</Link>
//               <Link href="/trade-program" className="block py-2 text-[14px] font-medium text-gray-800 hover:text-gray-600">Trade Program</Link>
//               <Link href="/personalization-shop" className="block py-2 text-[14px] font-medium text-gray-800 hover:text-gray-600">The Personalization Shop</Link>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   )
// }
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, User, ShoppingBag, Menu } from 'lucide-react'
import { useShoppingCart } from 'use-shopping-cart'

interface CartItem {
  id: string;
  name: string;
  image?: string; // Make image optional to match the CartEntry type
  quantity: number;
  formattedValue: string;
}

export function NavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const {
    cartCount = 0,
    cartDetails,
    formattedTotalPrice,
    removeItem,
  } = useShoppingCart()

  return (
    <div className="fixed top-4 left-4 right-4 z-50">
      <nav className="bg-white/80 backdrop-blur-md rounded-xl">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-[18px] h-[18px] text-gray-800" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-[38px] h-[38px] rounded-lg flex items-center justify-center">
                <Image src="/images/logo.png" width={38} height={38} alt="DEWISH" />
              </div>
              <span className="text-[15px] font-medium">DEWISH</span>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center">
              <div className="flex space-x-8">
                <Link href="/whats-new" className="text-[14px] font-medium text-gray-800 hover:text-gray-600">What&apos;s New</Link>
                <Link href="/wedding-registry" className="text-[14px] font-medium text-gray-800 hover:text-gray-600">Wedding Registry</Link>
                <Link href="/free-design-service" className="text-[14px] font-medium text-gray-800 hover:text-gray-600">Free Design Service</Link>
                <Link href="/trade-program" className="text-[14px] font-medium text-gray-800 hover:text-gray-600">Trade Program</Link>
                <Link href="/personalization-shop" className="text-[14px] font-medium text-gray-800 hover:text-gray-600">The Personalization Shop</Link>
              </div>
            </div>

            {/* Utility Icons */}
            <div className="flex items-center space-x-5">
              <button aria-label="Search" className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-[18px] h-[18px] text-gray-800" />
              </button>

              {/* Shopping Cart */}
              <div className="relative">
                <button
                  aria-label="Cart"
                  className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                  onClick={() => setIsCartOpen(!isCartOpen)}
                >
                  <ShoppingBag className="w-[18px] h-[18px] text-gray-800" />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                      {cartCount}
                    </span>
                  )}
                </button>
                {isCartOpen && cartDetails && (
                  <div className="absolute mx-auto right-0 mt-2 w-80 md:w-[540px] bg-zinc-100 shadow-lg rounded-lg z-10 max-h-[calc(100vh-120px)] overflow-y-auto">
                    <div className="flex flex-col p-4 md:p-6">
                      <h2 className="text-xl font-semibold mb-4">Your cart</h2>
                      <div className="flex-1 overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                        <ul className="flex flex-col divide-y dark:divide-gray-300">
                          {Object.values(cartDetails).map((item: CartItem) => (
                            <li key={item.id} className="flex flex-col py-4 sm:flex-row sm:justify-between">
                              <div className="flex space-x-4">
                                <Image 
                                  src={item.image || '/fallback-image.jpg'} 
                                  alt={item.name} 
                                  className="w-16 h-16 object-cover rounded-md" 
                                  width={64} 
                                  height={64} 
                                />
                                <div>
                                  <h3 className="text-sm sm:text-lg font-semibold">{item.name}</h3>
                                  <p className="text-sm">Quantity: {item.quantity}</p>
                                  <p className="text-xs sm:text-sm text-gray-600">Price: {item.formattedValue}</p>
                                </div>
                              </div>
                              <button
                                className="text-red-500 mt-2 sm:mt-0 text-xs sm:text-sm"
                                onClick={() => removeItem(item.id)}
                              >
                                Remove
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Fixed Bottom Section */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="space-y-1 text-right mb-4">
                          <p>Total amount: <span className="font-semibold">{formattedTotalPrice}</span></p>
                          <p className="text-xs sm:text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
                          <button
                            type="button"
                            className="px-4 sm:px-6 py-2 border rounded-md dark:border-violet-600 text-sm"
                            onClick={() => setIsCartOpen(false)}
                          >
                            Back<span className="sr-only sm:not-sr-only"> to shop</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button aria-label="Account" className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                <User className="w-[18px] h-[18px] text-gray-800" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden px-4 pt-2 pb-4 space-y-2 border-t border-gray-200">
              <Link href="/whats-new" className="block py-2 text-[14px] font-medium text-gray-800 hover:text-gray-600">What&apos;s New</Link>
              <Link href="/wedding-registry" className="block py-2 text-[14px] font-medium text-gray-800 hover:text-gray-600">Wedding Registry</Link>
              <Link href="/free-design-service" className="block py-2 text-[14px] font-medium text-gray-800 hover:text-gray-600">Free Design Service</Link>
              <Link href="/trade-program" className="block py-2 text-[14px] font-medium text-gray-800 hover:text-gray-600">Trade Program</Link>
              <Link href="/personalization-shop" className="block py-2 text-[14px] font-medium text-gray-800 hover:text-gray-600">The Personalization Shop</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
