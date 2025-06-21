// 'use client';
// import 'animate.css';
// import Footer from '../../container/component/Footer';
// import Navbar from '../../container/component/Navbar';
// import { useState } from 'react';


// export default function Contact() {
//     const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setSuccessMessage('');
//   setErrorMessage('');

//   // Simulate network delay
//   setTimeout(() => {
//     setSuccessMessage('Message sent successfully!');
//     setFormData({ name: '', email: '', message: '' });

//     // Optional: clear message after 4 seconds
//     setTimeout(() => {
//       setSuccessMessage('');
//     }, 4000);
//   }, 1000); // Simulates 1 second delay
// };


//   return (
    
//     <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F8FAFC]  relative overflow-hidden">
//       <Navbar/>
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
//       <div className="absolute -bottom-20 -right-20 w-40 h-40 md:w-64 md:h-64 bg-yellow-400/10 rounded-full"></div>
      
//       {/* Main container */}
//       <div className="container mx-auto px-4 sm:px-6 relative z-10">
//         <div className="text-center mb-8 md:mb-12">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 md:mb-4 animate__animated animate__fadeInDown">
//             Contact <span className="text-yellow-500">AimCab</span>
//           </h1>
//           <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
//             We're here to help! Reach out to us for any inquiries or assistance.
//           </p>
//         </div>

//         {/* Contact Form Section */}
//         <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 animate__animated animate__fadeIn animate__delay-1s">
//           {/* Left Section: Contact Info */}
//           <div className="w-full lg:w-1/2 bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 pb-2 border-b-2 border-yellow-400 inline-block">
//               Get in Touch
//             </h2>
//             <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
//               Have a question or need assistance? Reach out to us through the form or via the contact information below.
//             </p>
            
//             <div className="space-y-4 md:space-y-6">
//               {/* Email */}
//               <div className="flex items-start">
//                 <div className="bg-yellow-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-5 h-5 md:w-6 md:h-6 text-yellow-600"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-gray-500 text-sm md:text-base">Email</h3>
//                   <a href="mailto:aimcabhelp@gmail.com" className="text-base md:text-lg text-yellow-600 hover:text-yellow-700 transition-colors">
//                     aimcabhelp@gmail.com
//                   </a>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start">
//                 <div className="bg-yellow-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-5 h-5 md:w-6 md:h-6 text-yellow-600"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-gray-500 text-sm md:text-base">Phone</h3>
//                   <a href="tel:+919130030054" className="text-base md:text-lg text-yellow-600 hover:text-yellow-700 transition-colors">
//                     +91 9130030054
//                   </a>
//                 </div>
//               </div>

//               {/* Address */}
//               <div className="flex items-start">
//                 <div className="bg-yellow-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-5 h-5 md:w-6 md:h-6 text-yellow-600"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-gray-500 text-sm md:text-base">Address</h3>
//                   <p className="text-base md:text-lg text-gray-700">City Vista, Kharadi, Pune</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Section: Contact Form */}
//           <div className="w-full lg:w-1/2">
//             <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 pb-2 border-b-2 border-yellow-400 inline-block">
//                 Send Us a Message
//               </h2>
//               <form
//                 // action="/api/contact"
//                 // method="POST"
           
//                 className="space-y-4 md:space-y-6"
//               >
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//                   <div className="flex flex-col">
//                     <label htmlFor="name" className="text-gray-600 mb-1 md:mb-2 font-medium text-sm md:text-base">Full Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       id="name"
//                       required
//                       className="px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
//                       placeholder="Enter your full name"
//                     />
//                   </div>
//                   <div className="flex flex-col">
//                     <label htmlFor="email" className="text-gray-600 mb-1 md:mb-2 font-medium text-sm md:text-base">Email Address</label>
//                     <input
//                       type="email"
//                       name="email"
//                       id="email"
//                       required
//                       className="px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
//                       placeholder="Enter your email"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="message" className="text-gray-600 mb-1 md:mb-2 font-medium text-sm md:text-base">Message</label>
//                   <textarea
//                     name="message"
//                     id="message"
//                     required
//                     rows={4}
//                     className="px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
//                     placeholder="Enter your message"
//                   ></textarea>
//                 </div>

//                 <div className="text-center pt-1 md:pt-2">
//                   <button
//                     type="submit"
//                     className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm md:text-base"
//                   onClick={handleSubmit}
//                   >
//                     Send Message
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-20 md:mt-20"><Footer /></div>
//     </div>
//   );
// }



'use client';
import 'animate.css';
import Footer from '../../container/component/Footer';
import Navbar from '../../container/component/Navbar';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    // Simulate delay
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setSuccessMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSuccessMessage('');
        }, 4000);
      } else {
        setErrorMessage('Please fill out all fields.');
        setTimeout(() => {
          setErrorMessage('');
        }, 4000);
      }
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F8FAFC] relative overflow-hidden">
      <Navbar />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 md:w-64 md:h-64 bg-yellow-400/10 rounded-full"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 md:mb-4 animate__animated animate__fadeInDown">
            Contact <span className="text-yellow-500">AimCab</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
            We're here to help! Reach out to us for any inquiries or assistance.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 animate__animated animate__fadeIn animate__delay-1s">
          {/* Contact Info */}
          <div className="w-full lg:w-1/2 bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 pb-2 border-b-2 border-yellow-400 inline-block">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
              Have a question or need assistance? Reach out to us through the form or via the contact information below.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500 text-base">Email</h3>
                  <a href="mailto:aimcabhelp@gmail.com" className="text-lg text-yellow-600 hover:text-yellow-700 transition-colors">
                    aimcabhelp@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500 text-base">Phone</h3>
                  <a href="tel:+919130030054" className="text-lg text-yellow-600 hover:text-yellow-700 transition-colors">
                    +91 9130030054
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500 text-base">Address</h3>
                  <p className="text-lg text-gray-700">City Vista, Kharadi, Pune</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-yellow-400 inline-block">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">

                  {successMessage && (
                  <p className="text-green-600 font-medium text-center mt-4">{successMessage}</p>
                )}
                {errorMessage && (
                  <p className="text-red-600 font-medium text-center mt-4">{errorMessage}</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-600 mb-2 font-medium text-base">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-600 mb-2 font-medium text-base">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-gray-600 mb-2 font-medium text-base">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-base"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-md hover:shadow-lg text-base"
                  >
                    Send Message
                  </button>
                </div>

                {/* {successMessage && (
                  <p className="text-green-600 font-medium text-center mt-4">{successMessage}</p>
                )}
                {errorMessage && (
                  <p className="text-red-600 font-medium text-center mt-4">{errorMessage}</p>
                )} */}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20"><Footer /></div>
    </div>
  );
}
