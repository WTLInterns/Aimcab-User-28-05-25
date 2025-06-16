"use client"
import { useEffect, useState, Suspense } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Footer from "../../container/component/Footer"
import Navbar from "../../container/component/Navbar"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { MdLocationOn } from 'react-icons/md';
import { FaArrowRight, FaClock } from 'react-icons/fa';

function BookingContent() {
  const route = useRouter()
  const [loadingData, setLoadingData] = useState({})
  const [cars, setCars] = useState([
    {
      id: 1, name: "Hatchback", model: "Hatchback", price: 0, image: "/images/hatchback.png", facilities: [
        { name: "Snacks", icon: "/images/snacks.png" },
        { name: "Water Bottle", icon: "/images/water.jpg" },
        { name: "Newspaper", icon: "/images/news.jpg" },
      ],
    },
    {
      id: 2, name: "Sedan", model: "Sedan", price: 0, image: "/images/etios.jpg", facilities: [
        { name: "Snacks", icon: "/images/snacks.png" },
        { name: "Water Bottle", icon: "/images/water.jpg" },
        { name: "Newspaper", icon: "/images/news.jpg" },
      ],
    },
    {
      id: 3, name: "SUV", model: "SUV", price: 0, image: "/images/muv.png", facilities: [
        { name: "Snacks", icon: "/images/snacks.png" },
        { name: "Water Bottle", icon: "/images/water.jpg" },
        { name: "Newspaper", icon: "/images/news.jpg" },
      ],
    },
    {
      id: 4, name: "SUVPLUS", model: "MUV", price: 0, image: "/images/innova.jpg", facilities: [
        { name: "Snacks", icon: "/images/snacks.png" },
        { name: "Water Bottle", icon: "/images/water.jpg" },
        { name: "Newspaper", icon: "/images/news.jpg" },
      ],
    },
  ])

  const searchParams = useSearchParams();
  const user_trip_type = searchParams.get("tripType");
  const user_pickup = searchParams.get("pickup");
  const user_drop = searchParams.get("drop");
  const date = searchParams.get("date");
  const return_date = searchParams.get("return_date");

  useEffect(() => {
    const fetchPrices = async () => {
      const updatedCars = await Promise.all(
        cars.map(async (car) => {
          try {
            const res = await axios.get("http://localhost:5000/api/booking/getBaseAmount", {
              params: {
                user_trip_type: user_trip_type.trim(),
                user_pickup: user_pickup.trim(),
                user_drop: user_drop.trim(),
                date: date.trim(),
                return_date: return_date?.trim() || null,
                car: car.name.toLowerCase().trim(),
              },
            })
            console.log("res", res)
            return { ...car, price: res.data.baseAmount, distance: res.data.distance }
          } catch (err) {
            console.error(`Error fetching price for ${car.name}:`, err.message)
            return { ...car, price: 0 }
          }
        })
      )
      setCars(updatedCars)
    }

    fetchPrices()
  }, [])

  const handleBookNow = async (car, index) => {
    const bookingId = searchParams.get("bookingId") || localStorage.getItem("bookid");

    if (!bookingId) {
      alert("Missing booking ID");
      return;
    }

    setLoadingData((prev) => ({ ...prev, [index]: true }));

    try {
      const res = await axios.put(
        `http://localhost:5000/api/booking/update-booking?bookingId=${encodeURIComponent(bookingId)}`,
        {
          carType: car.name.toLowerCase(),
        }
      );

      // Store all car details in localStorage
      localStorage.setItem("bookingCarImage", car.image);
      localStorage.setItem("bookingCarModel", car.name);
      localStorage.setItem("bookingCarMake", car.name);
      localStorage.setItem("bookingCarFeatures", JSON.stringify(car.facilities));
      localStorage.setItem("selectedCarType", car.name);

      console.log("✅ Booking successful:", res);
      route.push("/Invoice");
    } catch (err) {
      console.error("❌ Booking failed:", err);
      alert("Booking failed. Please try again.");
    } finally {
      setLoadingData((prev) => ({ ...prev, [index]: false }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-md w-full sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="bg-[#F8F9FA]">
        <section className="relative text-center py-12 bg-gradient-to-r from-[#faa499] to-[#f7dd85] overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Our Car Rental Service</h1>
            <p className="text-xl text-gray-700">Explore the best cars available for your trips</p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mt-8 space-y-8">
            {cars.map(
              (car, index) =>
                car.price > 0 && (
                  <div
                    key={car.id}
                    className="card p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6 border border-gray-100 hover:border-yellow-100"
                  >
                    <div className="w-full md:w-2/5 lg:w-1/3 h-64 md:h-auto overflow-hidden rounded-lg shadow-sm relative">
                      <Image
                        src={car.image || "/placeholder-car.svg"}
                        alt={car.name}
                        width={600}
                        height={400}
                        loading="lazy"
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        style={{ aspectRatio: "3/2" }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    <div className="w-full md:w-3/5 lg:w-2/3 flex flex-col">
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{car.name}</h3>
                            <div className="flex items-center mt-1 space-x-2">
                              <span className="text-sm font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded">
                                {car.category}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900">Rs. {car.price.toLocaleString()}/-</p>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {car.facilities.map((facility, facilityIndex) => (
                              <li key={facilityIndex} className="flex items-center space-x-2">
                                <div className="w-7 h-7 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                                  <img
                                    src={facility.icon || "/feature-icon.svg"}
                                    alt={facility.name}
                                    className="w-4 h-4 text-yellow-500"
                                  />
                                </div>
                                <p className="text-sm text-gray-700">{facility.name}</p>
                              </li>
                            ))}

                            {/* Distance */}
                            <li className="flex items-center space-x-2">
                              <div className="w-7 h-7 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                                <MdLocationOn size={20} color="#ffbd33" />
                              </div>
                              <p className="text-sm text-gray-700 font-bold">
                                Distance: <div className="font-medium mt-2">{car.distance}</div>
                              </p>
                            </li>


                            {/* Fuel Type */}
                            <li className="flex items-center space-x-2">
                              <div className="w-7 h-7 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                                <FaArrowRight size={20} color="#ffbd33" />
                              </div>
                              <p className="text-sm text-gray-700 font-bold">
                                Fuel Type: <div className="font-medium mt-2">CNG with refill breaks</div>
                              </p>
                            </li>


                            {/* Duration */}
                            <li className="flex items-center space-x-2">
                              <div className="w-7 h-7 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                                <FaClock size={20} color="#ffbd33" />
                              </div>
                              <p className="text-sm text-gray-900 font-bold">
                                Duration: <div className="font-medium  mt-2">24 Hours Rental</div>
                              </p>
                            </li>

                          </ul>
                        </div>

                      </div>

                      <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <button
                          className="relative px-6 py-3 font-medium text-white bg-[#0F0E0E] border-2 border-[#F3B664] rounded-lg hover:text-[#F3B664] hover:bg-[#0F0E0E] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm hover:shadow-md w-full sm:w-auto text-center"
                          disabled={loadingData[index]}
                          onClick={() => handleBookNow(car, index)}
                        >
                          {loadingData[index] ? (
                            <div className="flex items-center justify-center space-x-2">
                              <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-white animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentFill"
                                />
                              </svg>
                              <span>Processing...</span>
                            </div>
                          ) : (
                            <span className="flex items-center justify-center space-x-2">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>Book Now</span>
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ),
            )}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    }>
      <BookingContent />
    </Suspense>
  )
}



