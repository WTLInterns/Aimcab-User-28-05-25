'use client';

import { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {

  const [isPopupOpen, setIsPopupOpen] = useState(true); // Show popup on page load

  const router = useRouter();

useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === 'Escape') closePopup();
  };

  document.addEventListener('keydown', handleEsc);
  return () => document.removeEventListener('keydown', handleEsc);
}, []);

const closePopup = () => {
  setIsPopupOpen(false);
  router.push('/'); // Go back to homepage
};

  const handleCall = () => {
    window.open('tel:999999999', '_self');
  };

 

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      {/* Directly show the popup without a trigger button */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full transform animate-in zoom-in-95 duration-200">
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-3xl">
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200"
              >
                <X size={20} />
              </button>

              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                <p className="text-blue-100">Get in touch with us</p>
              </div>
            </div>

            <div className="p-8">
              <div className="text-center space-y-6">
                <p className="text-xl font-semibold text-gray-800">
                  Please contact on
                </p>

                <div className="flex items-center justify-center space-x-4 p-6 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors duration-200 group">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Phone size={28} className="text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-green-600 font-semibold uppercase tracking-wide mb-1">Phone Number</p>
                    <p className="text-2xl font-bold text-gray-800">+91 9130030054</p>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
