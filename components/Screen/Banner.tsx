"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import Iframe from "../ui/iframe";

export default function Banner() {
  const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative h-[500px] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <header className="absolute top-0 left-0 w-full z-10">
          <div className="container mx-auto flex justify-between items-center p-6">
            {/* Logo */}
            <div className="text-white text-2xl font-bold">
              <a href="/" className="hover:text-gray-300">
                HimalayanEase
              </a>
            </div>

            {/* Hamburger Icon (for mobile) */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6">
              <a href="/about-us" className="text-white hover:text-gray-300">
                About Us
              </a>
              <a href="/services" className="text-white hover:text-gray-300">
                Our Services
              </a>
              <a href="/contact-us" className="text-white hover:text-gray-300">
                Contact Us
              </a>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
              <nav className="absolute top-full left-0 w-full bg-gray-900 text-white md:hidden">
                <div className="flex flex-col space-y-2 p-4">
                  <a href="/about-us" className="hover:text-gray-300">
                    About Us
                  </a>
                  <a href="/services" className="hover:text-gray-300">
                    Our Services
                  </a>
                  <a href="/contact-us" className="hover:text-gray-300">
                    Contact Us
                  </a>
                </div>
              </nav>
            )}
          </div>
        </header>
        {/* Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Your One-Stop Solution for All Travel, Real Estate, and Local
            Services in Dharamshala & McLeod Ganj
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            From hotel bookings and vehicle rentals to property buying and
            selling,{`we've`} got you covered.
          </p>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {`Let's Connect`}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[90vw] sm:w-[540px] sm:max-w-[90vw]">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold mb-4">
                  Connect With Us
                </SheetTitle>
              </SheetHeader>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>
                      <a href="tel:918626877277">+918626877277</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p>
                      <a href="https://wa.me/918626877277">+918626877277</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>
                      D K HOLIDAYS,
                      <br /> Ward No. 9 V.p.o. Sidhpur Dharamshala 176057, Yol,
                      Cantt, Dharamshala, Himachal Pradesh 176057
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-semibold mb-2">Location</p>
                  <div className="aspect-video">
                    <Iframe />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
