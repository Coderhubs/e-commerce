// // // 'use client'

// // // import { useShoppingCart } from 'use-shopping-cart'
// // // import { ShoppingBag } from 'lucide-react'

// // // interface ShoppingCartProps {
// // //   isOpen: boolean
// // //   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
// // // }

// // // const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, setIsOpen }) => {
// // //   const {
// // //     cartCount,
// // //     cartDetails,
// // //     formattedTotalPrice,
// // //     removeItem,
// // //     redirectToCheckout,
// // //   } = useShoppingCart()

// // //   const handleCheckout = async (event: React.MouseEvent<HTMLButtonElement>) => {
// // //     event.preventDefault()
// // //     try {
// // //       const result = await redirectToCheckout()
// // //       if (result?.error) {
// // //         console.error('Redirect to checkout failed:', result)
// // //       }
// // //     } catch (error) {
// // //       console.error('Redirect to checkout failed:', error)
// // //     }
// // //   }

// // //   return (
// // //     <div className="relative">
// // //       <button 
// // //         aria-label="Cart" 
// // //         className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
// // //         onClick={() => setIsOpen(!isOpen)}
// // //       >
// // //         <ShoppingBag className="w-[18px] h-[18px] text-gray-800" />
// // //         {cartCount && cartCount > 0 && (
// // //           <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
// // //             {cartCount}
// // //           </span>
// // //         )}
// // //       </button>

// // //       {isOpen && cartDetails && (
// // //         <div className="absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-lg z-10">
// // //           <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
// // //             <h2 className="text-xl font-semibold">Your cart</h2>
// // //             <ul className="flex flex-col divide-y dark:divide-gray-300">
// // //               {Object.values(cartDetails).map((item: any) => (
// // //                 <li key={item.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
// // //                   {/* ... (rest of the item rendering code) ... */}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //             <div className="space-y-1 text-right">
// // //               <p>Total amount:
// // //                 <span className="font-semibold"> {formattedTotalPrice}</span>
// // //               </p>
// // //               <p className="text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
// // //             </div>
// // //             <div className="flex justify-end space-x-4">
// // //               <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-600" onClick={() => setIsOpen(false)}>
// // //                 Back<span className="sr-only sm:not-sr-only"> to shop</span>
// // //               </button>
// // //               <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600" onClick={handleCheckout}>
// // //                 <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   )
// // // }

// // // export default ShoppingCart

// // 'use client'

// // import { useShoppingCart } from 'use-shopping-cart'
// // import { ShoppingBag } from 'lucide-react'

// // interface ShoppingCartProps {
// //   isOpen: boolean
// //   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
// // }

// // const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, setIsOpen }) => {
// //   const {
// //     cartCount,
// //     cartDetails,
// //     formattedTotalPrice,
// //     removeItem,
// //     redirectToCheckout,
// //   } = useShoppingCart()

// //   const handleCheckout = async (event: React.MouseEvent<HTMLButtonElement>) => {
// //     event.preventDefault()
// //     try {
// //       const result = await redirectToCheckout()
// //       if (result?.error) {
// //         console.error('Redirect to checkout failed:', result)
// //       }
// //     } catch (error) {
// //       console.error('Redirect to checkout failed:', error)
// //     }
// //   }

// //   return (
// //     <div className="relative">
// //       <button 
// //         aria-label="Cart" 
// //         className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
// //         onClick={() => setIsOpen(!isOpen)}
// //       >
// //         <ShoppingBag className="w-[18px] h-[18px] text-gray-800" />
// //         {cartCount && cartCount > 0 && (
// //           <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
// //             {cartCount}
// //           </span>
// //         )}
// //       </button>

// //       {isOpen && cartDetails && (
// //         <div className="absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-lg z-10">
// //           <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
// //             <h2 className="text-xl font-semibold">Your cart</h2>
// //             <ul className="flex flex-col divide-y dark:divide-gray-300">
// //               {Object.values(cartDetails).map((item: any) => (
// //                 <li key={item.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
// //                   <div className="flex space-x-4">
// //                     <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
// //                     <div>
// //                       <h3 className="text-lg font-semibold">{item.name}</h3>
// //                       <p>Quantity: {item.quantity}</p>
// //                       <p className="text-sm text-gray-600">Price: {item.formattedValue}</p>
// //                     </div>
// //                   </div>
// //                   <button 
// //                     className="text-red-500 mt-2 sm:mt-0 sm:text-sm"
// //                     onClick={() => removeItem(item.id)}
// //                   >
// //                     Remove
// //                   </button>
// //                 </li>
// //               ))}
// //             </ul>

// //             <div className="space-y-1 text-right">
// //               <p>Total amount: <span className="font-semibold">{formattedTotalPrice}</span></p>
// //               <p className="text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
// //             </div>

// //             <div className="flex justify-end space-x-4">
// //               <button 
// //                 type="button" 
// //                 className="px-6 py-2 border rounded-md dark:border-violet-600"
// //                 onClick={() => setIsOpen(false)}
// //               >
// //                 Back<span className="sr-only sm:not-sr-only"> to shop</span>
// //               </button>

// //               <button 
// //                 type="button" 
// //                 className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600"
// //                 onClick={handleCheckout}
// //               >
// //                 <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // export default ShoppingCart
// 'use client'

// import { useShoppingCart } from 'use-shopping-cart'
// import { ShoppingBag } from 'lucide-react'

// interface ShoppingCartProps {
//   isOpen: boolean
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
// }

// const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, setIsOpen }) => {
//   const {
//     cartCount,
//     cartDetails,
//     formattedTotalPrice,
//     removeItem,
//     redirectToCheckout,
//   } = useShoppingCart()

//   const handleCheckout = async (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault()
//     try {
//       const result = await redirectToCheckout()
//       if (result?.error) {
//         console.error('Redirect to checkout failed:', result)
//       }
//     } catch (error) {
//       console.error('Redirect to checkout failed:', error)
//     }
//   }

//   return (
//     <div className="relative">
//       <button
//         aria-label="Cart"
//         className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <ShoppingBag className="w-[18px] h-[18px] text-gray-800" />
//         {cartCount && cartCount > 0 && (
//           <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
//             {cartCount}
//           </span>
//         )}
//       </button>

//       {isOpen && cartDetails && (
//         <div className="absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-lg z-10">
//           <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
//             <h2 className="text-xl font-semibold">Your cart</h2>
//             <ul className="flex flex-col divide-y dark:divide-gray-300">
//               {Object.values(cartDetails).map((item: any) => (
//                 <li key={item.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
//                   <div className="flex space-x-4">
//                     <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
//                     <div>
//                       <h3 className="text-lg font-semibold">{item.name}</h3>
//                       <p>Quantity: {item.quantity}</p>
//                       <p className="text-sm text-gray-600">Price: {item.formattedValue}</p>
//                     </div>
//                   </div>
//                   <button
//                     className="text-red-500 mt-2 sm:mt-0 sm:text-sm"
//                     onClick={() => removeItem(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>

//             <div className="space-y-1 text-right">
//               <p>Total amount: <span className="font-semibold">{formattedTotalPrice}</span></p>
//               <p className="text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
//             </div>

//             <div className="flex justify-end space-x-4">
//               <button
//                 type="button"
//                 className="px-6 py-2 border rounded-md dark:border-violet-600"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Back<span className="sr-only sm:not-sr-only"> to shop</span>
//               </button>

//               <button
//                 type="button"
//                 className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600"
//                 onClick={handleCheckout}
//               >
//                 <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default ShoppingCart
