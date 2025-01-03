import React from "react";
import Image from "next/image";

export function Footer() {
    return (
      <footer className="bg-black text-white px-8 py-6 rounded-t-[20px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Service */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium mb-4">Service</h3>
              <div className="space-y-3">
                <a href="#" className="block text-[13px] text-gray-400 hover:text-white transition-colors">
                  Legal Notice
                </a>
                <a href="#" className="block text-[13px] text-gray-400 hover:text-white transition-colors">
                  Data Protection
                </a>
              </div>
            </div>
  
            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium mb-4">Newsletter</h3>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full bg-transparent text-[13px] text-gray-400 placeholder-gray-400 border-b border-gray-800 pb-2 focus:outline-none focus:border-gray-600"
                />
                <button className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
  
            {/* Logo */}
            <div className="flex justify-center items-start">
              <div className="flex items-center space-x-6">
                <div className="w-[38px] h-[38px] rounded-lg flex items-center justify-center">
                    <Image src="/images/logo.png" width={38} height={38} alt="DEWISH" />
                </div>
                <span className="text-[15px] space-x-4 font-medium">DEWISH</span>
              </div>
            </div>
  
            {/* Connect */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium mb-4">Connect</h3>
              <div className="space-y-3">
                <a href="#" className="block text-[13px] text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="block text-[13px] text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
              </div>
            </div>
  
            {/* Inquiries */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium mb-4">Inquiries</h3>
              <div className="space-y-3">
                <a href="mailto:press@bannach.eu" className="block text-[13px] text-gray-400 hover:text-white transition-colors">
                  press@bannach.eu
                </a>
                <a href="mailto:sales@bannach.eu" className="block text-[13px] text-gray-400 hover:text-white transition-colors">
                  sales@bannach.eu
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  