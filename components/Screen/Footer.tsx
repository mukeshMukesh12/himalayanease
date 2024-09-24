export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {/* Column 1 - Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">HimalayanEase</h2>
          <p className="text-gray-400">
            Your trusted partner for all travel, real estate, and local services
            in Dharamshala & McLeod Ganj.
          </p>
        </div>
        <div></div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-400">
            D K HOLIDAYS,
            <br /> Ward No. 9 V.p.o. Sidhpur Dharamshala 176057, Yol, Cantt,
            Dharamshala, Himachal Pradesh 176057
          </p>
          <p className="text-gray-400">
            Phone: <a href="tel:918626877277">+918626877277</a>
          </p>
          <p className="text-gray-400">
            WhatsApp: <a href="https://wa.me/918626877277">+918626877277</a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
        <p>&copy; 2024 HimalayanEase. All rights reserved.</p>
      </div>
    </footer>
  );
}
