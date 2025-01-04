// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Search, User, ShoppingBag, Menu } from 'lucide-react'
// import { useShoppingCart } from 'use-shopping-cart'

// interface CartItem {
//   id: string;
//   name: string;
//   image?: string; // Make image optional to match the CartEntry type
//   quantity: number;
//   formattedValue: string;
// }

// export function NavBar() {
//   const [isCartOpen, setIsCartOpen] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const {
//     cartCount = 0,
//     cartDetails,
//     formattedTotalPrice,
//     removeItem,
//   } = useShoppingCart()

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
//                 {isCartOpen && cartDetails && (
//               //      <div className="absolute mx-auto right-0 mt-2 w-80 md:w-[540px] bg-zinc-100 shadow-lg rounded-lg z-10 max-h-[calc(100vh-120px)] overflow-y-auto">
//               //                   <div className="flex flex-col p-4 md:p-6">
//               //                        <h2 className="text-xl font-semibold mb-4">Your cart</h2>
                                         
//               //         <div className="flex-1 overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-100">
//               //           <ul className="flex flex-col divide-y">
//               //             {Object.values(cartDetails).map((item: CartItem) => (
//               //               <li key={item.id} className="flex flex-col py-4 sm:flex-row sm:justify-between">
//               //                 <div className="flex space-x-4">
//               //                   <Image 
//               //                     src={item.image || '/fallback-image.jpg'} 
//               //                     alt={item.name} 
//               //                     className="w-16 h-16 object-cover rounded-md" 
//               //                     width={64} 
//               //                     height={64} 
//               //                   />
//               //                   <div>
//               //                     <h3 className="text-sm sm:text-lg font-semibold">{item.name}</h3>
//               //                     <p className="text-sm">Quantity: {item.quantity}</p>
//               //                     <p className="text-xs sm:text-sm text-gray-600">Price: {item.formattedValue}</p>
//               //                   </div>
//               //                 </div>
//               //                 <button
//               //                   className="text-red-500 mt-2 sm:mt-0 text-xs sm:text-sm"
//               //                   onClick={() => removeItem(item.id)}
//               //                 >
//               //                   Remove
//               //                 </button>
//               //               </li>
//               //             ))}
//               //           </ul>
//               //         </div>

//               //         {/* Fixed Bottom Section */}
//               //         <div className="mt-4 pt-4 border-t border-gray-200">
//               //           <div className="space-y-1 text-right mb-4">
//               //             <p>Total amount: <span className="font-semibold">{formattedTotalPrice}</span></p>
//               //             <p className="text-xs sm:text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
//               //           </div>

//               //           <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
//               //             <button
//               //               type="button"
//               //               className="px-4 sm:px-6 py-2 border rounded-md dark:border-violet-600 text-sm"
//               //               onClick={() => setIsCartOpen(false)}
//               //             >
//               //               Back<span className="sr-only sm:not-sr-only"> to shop</span>
//               //             </button>
//               //           </div>
//               //         </div>
//               //       </div>
//               //     </div>
//               //   )}
//               // </div>
//               <div className="fixed inset-x-0 top-[64px] mx-auto px-4 sm:px-0 sm:right-0 sm:absolute sm:w-[480px]">
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden max-h-[80vh] flex flex-col">
//                 {/* Header */}
//                 <div className="p-4 border-b">
//                   <h2 className="text-lg font-semibold">Your cart</h2>
//                 </div>
        
//                 {/* Cart Items */}
//                 <div className="flex-1 overflow-y-auto">
//                   <ul className="divide-y divide-gray-100">
//                     {Object.values(cartDetails).map((item: CartItem) => (
//                       <li key={item.id} className="p-4">
//                         <div className="flex gap-3">
//                           <div className="flex-shrink-0">
//                             <Image 
//                               src={item.image || '/fallback-image.jpg'} 
//                               alt={item.name} 
//                               className="w-16 h-16 object-cover rounded-md" 
//                               width={64} 
//                               height={64} 
//                             />
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <h3 className="text-sm font-medium text-gray-900 truncate">{item.name}</h3>
//                             <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
//                             <p className="text-sm text-gray-500">{item.formattedValue}</p>
//                           </div>
//                           <button
//                             onClick={() => removeItem(item.id)}
//                             className="text-xs text-red-500 hover:text-red-700"
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
        
//                 {/* Footer */}
//                 <div className="border-t bg-gray-50 p-4 space-y-4">
//                   <div className="flex justify-between items-baseline">
//                     <span className="text-sm font-medium">Total amount</span>
//                     <span className="text-lg font-semibold">{formattedTotalPrice}</span>
//                   </div>
//                   <p className="text-xs text-gray-500">Not including taxes and shipping costs</p>
//                   <div className="flex justify-end">
//                     <button
//                       type="button"
//                       onClick={() => setIsCartOpen(false)}
//                       className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
//                     >
//                       Back to shop
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
           
//           )
//         }
//           </div>
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
  image?: string;
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
                  <div className="fixed inset-x-0 top-[64px] mx-auto px-4 sm:px-0 sm:right-0 sm:left-auto sm:absolute sm:w-[320px] md:w-[480px] lg:w-[520px] xl:w-[580px]">
                    <div className="bg-zinc-100 rounded-lg shadow-lg overflow-hidden max-h-[calc(100vh-80px)] sm:max-h-[80vh] flex flex-col">
                      {/* Header */}
                      <div className="p-4 lg:p-6 border-b">
                        <h2 className="text-lg lg:text-xl font-semibold">Your cart</h2>
                      </div>
              
                      {/* Cart Items */}
                      <div className="flex-1 overflow-y-auto">
                        <ul className="divide-y divide-gray-200">
                          {Object.values(cartDetails).map((item: CartItem) => (
                            <li key={item.id} className="p-4 lg:p-6">
                              <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                  <Image 
                                    src={item.image || '/fallback-image.jpg'} 
                                    alt={item.name} 
                                    className="w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-md" 
                                    width={80} 
                                    height={80} 
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-sm lg:text-base font-medium text-gray-900">{item.name}</h3>
                                  <p className="text-sm text-gray-500 mt-1">Quantity: {item.quantity}</p>
                                  <p className="text-sm lg:text-base font-medium mt-1">{item.formattedValue}</p>
                                </div>
                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="text-xs lg:text-sm text-red-500 hover:text-red-700 self-start"
                                >
                                  Remove
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
              
                      {/* Footer */}
                      <div className="border-t bg-zinc-100 p-4 lg:p-6 space-y-4">
                        <div className="flex justify-between items-baseline">
                          <span className="text-sm lg:text-base font-medium">Total amount</span>
                          <span className="text-lg lg:text-xl font-semibold">{formattedTotalPrice}</span>
                        </div>
                        <p className="text-xs lg:text-sm text-gray-500">Not including taxes and shipping costs</p>
                        <div className="flex justify-end">
                          <button
                            type="button"
                            onClick={() => setIsCartOpen(false)}
                            className="px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md
                             hover:bg-lime-300 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                          >
                            Back to shop
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

