"use client"

import { useRef, useState } from "react"
import { LoadScript, Autocomplete } from "@react-google-maps/api"
import axios from "axios"
import { useRouter } from "next/navigation"
import "animate.css"
import Navbar from '../container/component/Navbar'

const BookingForm = () => {
  const [tripType, setTripType] = useState("One Way")
  const [formData, setFormData] = useState({
    user_trip_type: "One Way",
    user_pickup: "",
    user_drop: "",
    time: "",
    date: "",
    return_date: "",
    time_end: "",
    package_type: "",
    name: "",
    phone: "",
    email: "",
    distance: "",
    baseAmount: "",
    carType: "sedan",
    price_details: "",
  })

  const router = useRouter()
  const pickupRef = useRef<google.maps.places.Autocomplete | null>(null);
  const dropRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [loading, setLoading] = useState(false)

  const handleSelectChange = (e: any) => {
    const value = e.target.value
    setTripType(value)
    setFormData((prev) => ({ ...prev, user_trip_type: value }))
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePlaceChanged = (
    ref: google.maps.places.Autocomplete | null,
    fieldName: string
  ) => {
    const place = ref?.getPlace();
    if (place && place.formatted_address) {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: place.formatted_address,
      }));
    }
  };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault()
  //   setLoading(true)

  //   const id = "AIM" + new Date().getTime()
  //   localStorage.setItem("bookid", id)

  //   const visitor = { ...formData, bookingId: id };

  //   try {
  //     const response = await fetch("http://localhost:5000/api/booking/create-booking", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(visitor),
  //     })

  //     // ✅ Wait for the JSON body
  //     const data = await response.json()
  //     console.log("----------", data.booking)

  //     if (!response.ok) {
  //       console.error("Booking creation failed:", {
  //         status: response.status,
  //         statusText: response.statusText,
  //         error: data,
  //       });

  //       if (data.message?.includes("car type")) {
  //         throw new Error("Please select a valid car type for your booking");
  //       }

  //       throw new Error(data.message || `Failed to create booking: ${response.statusText}`);
  //     }

  //     console.log("📦 Booking created:", data)
  //     console.log("📄 Booking ID from response:", data.bookingId) // ✅ This will now work

  //     localStorage.setItem("trip", JSON.stringify(visitor))

  //     router.push(
  //       `/Booking?tripType=${encodeURIComponent(formData.user_trip_type)}&pickup=${encodeURIComponent(formData.user_pickup)}&drop=${encodeURIComponent(formData.user_drop)}&date=${encodeURIComponent(formData.date)}&return_date=${encodeURIComponent(formData.return_date)}&bookingId=${encodeURIComponent(id)}`
  //     );

  //   } catch (error) {
  //     console.error("Error creating booking:", error);
  //     alert(error instanceof Error ? error.message : "Something went wrong while creating the booking.");
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const id = "AIM" + new Date().getTime();
    localStorage.setItem("bookid", id);

    const visitor = { ...formData, bookingId: id };

    try {
      // STEP 1: Check if pickup/drop exists in DB/Excel via /api/check-route
      const checkRouteResponse = await fetch("http://localhost:5000/api/booking/check-location", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pickupLocation: formData.user_pickup,
          dropLocation: formData.user_drop,
        }),
      });



      const checkRouteData = await checkRouteResponse.json();
      const { pickupValid, dropValid } = checkRouteData.data || {};

      if (!pickupValid && !dropValid) {
        // 🚫 Route not available, redirect to /no-cab page
        router.push("/no-cab");
        return;
      }

      // ✅ STEP 2: Route is available → proceed with booking
      const bookingResponse = await fetch("http://localhost:5000/api/booking/create-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(visitor),
      });

      const bookingData = await bookingResponse.json();

      if (!bookingResponse.ok) {
        console.error("Booking creation failed:", {
          status: bookingResponse.status,
          statusText: bookingResponse.statusText,
          error: bookingData,
        });

        if (bookingData.message?.includes("car type")) {
          throw new Error("Please select a valid car type for your booking");
        }

        throw new Error(bookingData.message || `Failed to create booking: ${bookingResponse.statusText}`);
      }

      // ✅ Booking created successfully
      console.log("📦 Booking created:", bookingData);
      localStorage.setItem("trip", JSON.stringify(visitor));

      router.push(
        `/Booking?tripType=${encodeURIComponent(formData.user_trip_type)}&pickup=${encodeURIComponent(formData.user_pickup)}&drop=${encodeURIComponent(formData.user_drop)}&date=${encodeURIComponent(formData.date)}&return_date=${encodeURIComponent(formData.return_date)}&bookingId=${encodeURIComponent(id)}`
      );
    } catch (error) {
      console.error("Error in booking process:", error);
      alert(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };


  console.log("🚗 Submitting booking with carType:", formData.carType);


  // Add this function to your component
  const handleClick = (e) => {
    e.target.showPicker?.();
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits

    if (value.length <= 10) {
      setFormData((prev) => ({ ...prev, phone: value }));
    }
  };



  return (

    <div className="relative z-10 top-12 w-full flex flex-col lg:flex-row p-0 m-0 min-h-screen">

      {/* Promo Section */}
      <div className="w-full lg:w-1/2 bg-transparent">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("/images/frontcar.jpg")' }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>

        </div>
        <div className="carousel slide h-full">
          <div className="carousel-inner relative h-full">
            <div className="carousel-item active h-full">
              <div className="text-center min-h-[60vh] lg:min-h-screen py-16 px-8 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
                  15% off on One Way & Round Trips
                </h2>
                <div className="flex justify-center items-center gap-4">
                  <span className="border border-[#76453B] px-6 py-3 text-[#F3B664] bg-[#0F0E0E] font-semibold text-lg rounded-md animate__animated animate__fadeInUp animate__delay-1s">
                    AIMNEW15
                  </span>
                  <button
                    className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#0F0E0E] transition duration-300 animate__animated animate__fadeInUp animate__delay-2s"
                    onClick={() => navigator.clipboard.writeText("AIMNEW15")}
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="w-full lg:w-1/2 p-4 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-2xl">
          <LoadScript googleMapsApiKey="AIzaSyCelDo4I5cPQ72TfCTQW-arhPZ7ALNcp8w" libraries={["places"]}>

            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-center text-3xl font-bold text-[#F3B664] mb-6">BOOK A CAB NOW</h2>

              {/* Trip Type */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Trip Type</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  {["One Way", "Round Trip", "Rental"].map((type) => (
                    <label key={type} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="tripType"
                        value={type} // ✅ Set correct value for each radio
                        checked={tripType === type}
                        onChange={handleSelectChange}
                        className="form-radio h-5 w-5 text-[#F3B664] border-2 bg-[#0F0E0E]/80"
                        required
                      />
                      <span className="ml-2 text-white">{type}</span>
                    </label>
                  ))}

                </div>
              </div>

              {/* From & To */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Autocomplete
                  onLoad={(ref) => (pickupRef.current = ref)}
                  onPlaceChanged={() => handlePlaceChanged(pickupRef.current, "user_pickup")}
                >
                  <input
                    type="text"
                    name="user_pickup"
                    placeholder="Pickup Location"
                    value={formData.user_pickup}
                    onChange={handleChange}
                    className="w-full p-2 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg"
                    required
                  />
                </Autocomplete>
                <Autocomplete
                  onLoad={(ref) => (dropRef.current = ref)}
                  onPlaceChanged={() => handlePlaceChanged(dropRef.current, "user_drop")}
                >
                  <input
                    type="text"
                    name="user_drop"
                    placeholder="Drop Location"
                    value={formData.user_drop}
                    onChange={handleChange}
                    className="w-full p-2 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg"
                    required
                  />
                </Autocomplete>
              </div>

              {/* Date & Time */}
              <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
                <div >
                  <label className="block  text-white text-sm font-medium mb-2">Pickup Date</label>
                  <input
                    className="w-full p-3 cursor-pointer bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    onClick={handleClick}
                    onFocus={handleClick}
                    min={new Date().toISOString().split('T')[0]} // Prevents past dates
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Pickup Time</label>
                  <input
                    className="w-full p-3 cursor-pointer bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    onClick={handleClick}
                    onFocus={handleClick}
                    required
                  />
                </div>
              </div>

              {/* Round Trip */}
              {tripType === "Round Trip" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Return Date</label>
                    <input
                      className="w-full p-3 bg-[#0F0E0E]/80 text-white cursor-pointer border-2 border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
                      type="date"
                      name="return_date"
                      value={formData.return_date}
                      onChange={handleChange}
                      onClick={handleClick}
                      onFocus={handleClick}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Return Time</label>

                    <input
                      className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 cursor-pointer border-[#F3B664] rounded-lg focus:ring-2 focus:ring-[#F3B664] focus:border-[#F3B664]"
                      type="time"
                      name="time_end"
                      value={formData.time_end}
                      onChange={handleChange}
                      onClick={handleClick}
                      onFocus={handleClick}
                      required
                    />
                  </div>
                </div>
              )}

              {/* Rental Package */}
              {tripType === "Rental" && (
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Package</label>
                  <select
                    name="package_type"
                    value={formData.package_type}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg"
                  >
                    <option value="4">4 Hours / 40 Kms</option>
                    <option value="6">6 Hours / 60 Kms</option>
                    <option value="8">8 Hours / 80 Kms</option>
                  </select>
                </div>
              )}

              {/* Personal Info */}
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No."
                  value={formData.phone}
                  // onChange={handleChange}
                  onChange={handlePhoneChange}
                  className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#0F0E0E]/80 text-white border-2 border-[#F3B664] rounded-lg"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-[#cfc126] hover:bg-[#0F0E0E] text-[#0F0E0E] hover:text-[#F3B664] font-bold rounded-lg border-2 border-[#F3B664] transition duration-300 flex justify-center"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0F0E0E]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Processing...
                  </>
                ) : (
                  "BOOK NOW"
                )}
              </button>
            </form>
          </LoadScript>
        </div>
      </div>



    </div>
  )
}

export default BookingForm