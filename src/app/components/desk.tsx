import interior from "../../../public/images/interior.jpg"
import design from "../../../public/images/design.jpg"
import shop from "../../../public/images/shop.jpg"
import sofa from "../../../public/images/sofa.jpg"


import Image from 'next/image'
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

export default function Desk() {
  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="col-span-1 md:col-span-2 overflow-hidden">
          <CardContent className="p-0 relative aspect-[16/9]">
            <Image
              src={interior}
              alt="Modern living room with beige sofa"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-white text-2xl font-medium mb-2">Interior Design Services</h2>
                <p className="text-white/90 text-lg">Transform your space with our expertise</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shop Selections Card */}
        <Card className="overflow-hidden">
          <CardContent className="p-0 relative aspect-square">
            <Image
              src={shop}
              alt="Shop selections featuring plants"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black/20 hover:bg-black/30 transition-colors">
              <div className="bg-green-500 text-white text-sm px-2 py-1 rounded-full w-fit">
                Shop
              </div>
              <div>
                <h3 className="text-white text-lg font-medium">Shop Selections</h3>
                <Button >
                  Browse Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Design Service Card */}
        <Card className="overflow-hidden">
          <CardContent className="p-0 relative aspect-square">
            <Image
              src={design}
              alt="Design services showcase"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black/20 hover:bg-black/30 transition-colors">
              <div className="bg-neutral-500 text-white text-sm px-2 py-1 rounded-full w-fit">
                Service
              </div>
              <div>
                <h3 className="text-white text-lg font-medium">Design Service</h3>
                <Button >
                  Learn More
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The DesignDesk Card */}
        <Card className="col-span-1 md:col-span-2 overflow-hidden">
          <CardContent className="p-0 relative aspect-[16/9]">
            <Image
              src={sofa}
              alt="The DesignDesk at Greige"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
              <h2 className="text-white text-2xl font-medium mb-2">The Design Desk at Create</h2>
              <p className="text-white/90 mb-4 max-w-xl">
                Expert interior design consultation and curated selections for your home
              </p>
              <Button>Book a Consultation</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

