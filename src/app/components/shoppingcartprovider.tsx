// // 'use client'

// // import { ReactNode } from 'react'
// // import { CartProvider } from 'use-shopping-cart'

// // interface ShoppingCartProviderProps {
// //   children: ReactNode
// // }

// // export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
// //   return (
// //     <CartProvider
// //       mode="payment"
// //       cartMode="client-only"
// //       stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
// //       successUrl="https://your-website.com/success"
// //       cancelUrl="https://your-website.com/cancel"
// //       currency="USD"
// //       allowedCountries={['US', 'GB', 'CA']}
// //       billingAddressCollection={true}
// //       shouldPersist={true}
// //     >
// //       {children}
// //     </CartProvider>
// //   )
// // }

'use client'

import { ReactNode } from 'react'
import { CartProvider } from 'use-shopping-cart'

interface ShoppingCartProviderProps {
  children: ReactNode
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
      successUrl="https://your-website.com/success"
      cancelUrl="https://your-website.com/cancel"
      currency="USD"
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CartProvider>
  )
}
