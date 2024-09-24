import { User } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="bg-white py-12 md:py-24" id="about-us">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Us
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
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
            <div className="flex items-center space-x-4 rounded-lg border p-4 shadow-sm transition-all duration-200 hover:shadow-md">
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
