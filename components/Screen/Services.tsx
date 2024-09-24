import {
  Hotel,
  CarTaxiFront,
  Bike,
  MapPin,
  Ticket,
  FileText,
  Map,
  Home,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Hotel Booking",
      description:
        "Book the best hotels across Dharamshala and McLeod Ganj at competitive prices. Choose from luxury stays to budget-friendly rooms.",
      icon: <Hotel className="w-8 h-8 mb-4" />,
    },
    {
      title: "Pick & Drop Taxi Service",
      description:
        "Reliable taxi service to get you to your destination safely. Available 24/7 for airport transfers, sightseeing, and local transport.",
      icon: <CarTaxiFront className="w-8 h-8 mb-4" />,
    },
    {
      title: "Bike Rentals",
      description:
        "Rent well-maintained bikes for a convenient and scenic ride through the mountains.",
      icon: <Bike className="w-8 h-8 mb-4" />,
    },
    {
      title: "GPS Tracking Devices",
      description:
        "Ensure the safety of your loved ones or track your vehicle with our GPS device rentals.",
      icon: <MapPin className="w-8 h-8 mb-4" />,
    },
    {
      title: "Ticket Booking",
      description:
        "Hassle-free booking for local, national, and international travel.",
      icon: <Ticket className="w-8 h-8 mb-4" />,
    },
    {
      title: "Vehicle Permit & Insurance Assistance",
      description:
        "Save time and effort by letting us handle your vehicle permits, insurance renewals, and tax payments.",
      icon: <FileText className="w-8 h-8 mb-4" />,
    },
    {
      title: "Tour Packages",
      description:
        "From group treks to personalized sightseeing tours, we offer tailored packages for an unforgettable experience.",
      icon: <Map className="w-8 h-8 mb-4" />,
    },
    {
      title: "Real Estate Brokerage",
      description:
        "Whether you're looking to buy, sell, or rent property in the scenic surroundings of Dharamshala and McLeod Ganj, we provide end-to-end assistance to make the process hassle-free.",
      icon: <Home className="w-8 h-8 mb-4" />,
    },
  ];

  return (
    <div className=" bg-slate-100" id="services">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-6">Our Services</h2>
        <h3 className="text-2xl font-medium text-center mb-12">
          Comprehensive Travel, Real Estate & Local Services in Dharamshala
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
