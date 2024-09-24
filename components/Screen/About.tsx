"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User } from "lucide-react";

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphsRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animating the title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    // Animating the paragraphs
    gsap.fromTo(
      paragraphsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphsRef.current,
          start: "top 80%",
        },
      }
    );

    // Animating the card
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);
  return (
    <section className="bg-white py-12 md:py-24" id="about-us">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2
              ref={titleRef}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              About Us
            </h2>
            <p
              ref={paragraphsRef}
              className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            >
              Welcome to HimalayanEase, your trusted partner for all travel,
              real estate, and local services in Dharamshala and McLeod Ganj.
              With years of experience and a dedicated team of professionals, we
              are committed to providing seamless solutions for both locals and
              visitors.
            </p>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              At HimalayanEase, we work closely with a vast network of local
              people to ensure that every aspect of your journey or real estate
              transaction is handled smoothly. Whether you need hotel bookings,
              transportation, or assistance with property deals, our team is
              here to assist you at every step.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div
              ref={cardRef}
              className="flex items-center space-x-4 rounded-lg border p-4 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <User className="h-10 w-10 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Manish Kumar</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Oversees everything personally, ensuring top-quality service.
                  He is the single point of contact for all your needs, making
                  your experience hassle-free and efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
