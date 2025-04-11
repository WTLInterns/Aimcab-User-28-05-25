"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import Navbar from "../../container/component/Navbar"
import Footer from "../../container/component/Footer"

const InvoicePage = () => {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [carDetails, setCarDetails] = useState({
    image: "/placeholder.svg",
    model: "Loading...",
    make: "Loading...",
    year: "2023",
    color: "Pearl White",
    features: ["AC", "Power Windows", "Music System", "GPS Navigation"],
  })

  // Get car details from localStorage when component mounts
  useEffect(() => {
    const storedImage = localStorage.getItem("bookedCarImage")
    const storedModel = localStorage.getItem("bookedCarModel")

    if (storedImage && storedModel) {
      setCarDetails({
        ...carDetails,
        image: storedImage,
        model: storedModel,
        make: storedModel, // Using model as make for simplicity
      })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Here you would typically send the data to your API
    setTimeout(() => {
      router.push("/ThankYou")
    }, 1000)
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">Booking Invoice</h1>
                <p className="mt-2 opacity-90">Confirmation #INV-2025-00404</p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <p className="text-sm">Total Amount</p>
                <p className="text-2xl font-bold">₹2,082.00</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left column - Customer and Trip info */}
              <div className="lg:col-span-2 space-y-8">
                {/* Customer Information Section */}
                <div className="bg-gray-50 p-5 rounded-xl">
                  <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Customer Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 text-sm">Name:</p>
                      <p className="font-medium">xyz</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Phone Number:</p>
                      <p className="font-medium">1234567890</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Email:</p>
                      <p className="font-medium">xyz@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Trip Information Section */}
                <div className="bg-gray-50 p-5 rounded-xl">
                  <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Trip Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 text-sm">Pickup Location:</p>
                      <p className="font-medium">Pune, Maharashtra, India</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Drop Location:</p>
                      <p className="font-medium">Mumbai, Maharashtra, India</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Date & Time:</p>
                      <p className="font-medium">April 4, 2025 at 2:48 PM</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Trip Type:</p>
                      <p className="font-medium">One Way</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Distance:</p>
                      <p className="font-medium">151 km</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Estimated Duration:</p>
                      <p className="font-medium">3 hrs 15 min</p>
                    </div>
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="bg-gray-50 p-5 rounded-xl">
                  <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Pricing Details
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <p className="text-gray-600">Base Price (₹12/km):</p>
                      <p className="font-medium">₹1,812.00</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-600">Platform Fee:</p>
                      <p className="font-medium">₹90.00</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-600">GST (10%):</p>
                      <p className="font-medium">₹180.00</p>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-gray-200 mt-2">
                      <p className="text-lg font-semibold text-gray-800">Total Amount:</p>
                      <p className="text-xl font-bold text-indigo-600">₹2,082.00</p>
                    </div>
                  </div>
                </div>
                {/* Booking Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Confirm & Book Now"
                  )}
                </button>
              </div>

              {/* Right column - Car image and details */}
              <div className="space-y-8">
                {/* Car Image Section */}
                <div className="bg-gray-50 p-5 rounded-xl">
                  <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-2a1 1 0 00-.293-.707l-3-3A1 1 0 0016 7h-1V5a1 1 0 00-1-1H3z" />
                    </svg>
                    Your Vehicle
                  </h2>
                  <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden bg-indigo-50 flex items-center justify-center">
                    <Image
                      src={carDetails.image || "/placeholder.svg"}
                      alt={`${carDetails.make} ${carDetails.model}`}
                      width={300}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-800">
                      {carDetails.make} {carDetails.model}
                    </h3>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Year:</span>
                      <span className="font-medium">{carDetails.year}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Color:</span>
                      <span className="font-medium">{carDetails.color}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Seats:</span>
                      <span className="font-medium">4+1</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Fuel Type:</span>
                      <span className="font-medium">CNG-Diesel</span>
                    </div>
                  </div>
                </div>

                {/* Features Section */}
                <div className="bg-gray-50 p-5 rounded-xl">
                  <h3 className="font-semibold text-gray-800 mb-3">Car Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {carDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-green-500 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Help Info */}
                <div className="text-center text-sm text-gray-500 mt-4">
                  <p>
                    Need help? Call us at <span className="text-indigo-600">1800-123-4567</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <p className="text-center text-gray-500 text-sm">
              Thank you for choosing our service. For any queries, contact us at support@cabservice.com
            </p>
            <div className="flex justify-center space-x-6 mt-3">
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default InvoicePage
