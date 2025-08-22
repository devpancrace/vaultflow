"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // icônes

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="w-full fixed top-0 z-50 bg-[rgba(11,1,33,1)] ">
        <nav className="relative z-50 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-custom rounded-lg flex items-center justify-center">
                <Image src={"/logo.png"} width={50} height={50} alt="logo" />
              </div>
              <span className="font-montserrat font-[700] text-[22px] leading-[100%] text-[rgba(236,236,236,1)]">
                Vaultflow
              </span>
            </div>

            {/* Menu desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                About us
              </a>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Bouton desktop uniquement */}
              <button className="hidden md:block px-4 py-2 bg-white text-dark-bg rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Talk to an expert
              </button>

              {/* Hamburger mobile */}
              <button
                className="md:hidden text-gray-300"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60"
            onClick={() => setSidebarOpen(false)}
          ></div>

          {/* Panel */}
          <div className="relative w-64 bg-[rgba(11,1,33,1)] p-6 flex flex-col  justify-between">
            {/* Haut du menu */}
            <div className="space-y-6 flex flex-col">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-gray-300"
                onClick={() => setSidebarOpen(false)}
              >
                <X size={28} />
              </button>

              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                About us
              </a>
            </div>

            {/* Bas du menu (Talk) */}
            <div className="pt-6">
              <button className="w-full px-4 py-2  border border-white rounded-[60px]  font-medium text-white">
                Talk to an expert
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
