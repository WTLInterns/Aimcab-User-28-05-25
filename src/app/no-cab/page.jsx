"use client";

import { Phone, MapPin, Clock, AlertTriangle, ArrowLeft, RefreshCw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function NoCabPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);
    const router = useRouter()

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate refresh action
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  const handleCall = () => {
    window.location.href = 'tel:+919999999999';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 px-8 py-6">
            <div className="flex items-center justify-center text-white">
              <AlertTriangle className="w-8 h-8 mr-3 animate-pulse" />
              <h1 className="text-3xl font-bold">Service Unavailable</h1>
            </div>
          </div>

          {/* Main Content */}
          <div className="px-8 py-12 text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center">
                <MapPin className="w-16 h-16 text-red-400" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                No Cabs Available for This Route
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-2">
                We're sorry, but we currently don't have cab services available for your selected route.
              </p>
              <p className="text-gray-500">
                Our team is constantly working to expand our coverage area.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <button
                onClick={handleCall}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Call for Assistance: +91-9130030054
              </button>
              
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <RefreshCw className={`w-5 h-5 mr-3 ${isRefreshing ? 'animate-spin' : ''}`} />
                {isRefreshing ? 'Checking Availability...' : 'Refresh Availability'}
              </button>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-900 mb-2">Operating Hours</h3>
                <p className="text-blue-700 text-sm">24/7 Customer Support Available</p>
              </div>
              
              <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-green-900 mb-2">Expanding Coverage</h3>
                <p className="text-green-700 text-sm">New routes added weekly</p>
              </div>
            </div>

            {/* Alternative Options */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Alternative Options</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Contact our support team to request service in your area</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Check back later as we frequently add new routes</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Consider nearby pickup locations that we do serve</p>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <button className="mt-8 inline-flex items-center text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"   onClick={() => router.push("/")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go back to search
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            We appreciate your patience as we work to serve you better
          </p>
        </div>
      </div>
    </div>
  );
}