'use client'
import { motion } from 'framer-motion';
import { FaCar, FaShieldAlt, FaWallet, FaHeadset, FaMapMarkerAlt, FaClock, FaThumbsUp } from 'react-icons/fa';
import Navbar from '../../container/component/Navbar';
import Footer from '../../container/component/Footer';
import { useRouter } from "next/navigation"

const AboutSection = () => {
    const router = useRouter()

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    { icon: <FaCar className="text-2xl" />, text: "Multiple vehicle options" },
    { icon: <FaShieldAlt className="text-2xl" />, text: "Safety first approach" },
    { icon: <FaWallet className="text-2xl" />, text: "Affordable rates" },
    { icon: <FaHeadset className="text-2xl" />, text: "24/7 customer support" },
    { icon: <FaMapMarkerAlt className="text-2xl" />, text: "Wide network coverage" },
    { icon: <FaClock className="text-2xl" />, text: "On-time service" },
    { icon: <FaThumbsUp className="text-2xl" />, text: "Verified drivers" }
  ];

  const handleClick = () => {
    router.push('#services'); // ✅ This is correct
  };

 
  return (
    <div className="relative">
      {/* Navbar should be outside the section with background image */}
      <Navbar />
      
      <section
        className="about_section pt-32 pb-20 bg-cover bg-center relative overflow-hidden"
        id="about"
        style={{
          backgroundImage: "url('/images/car-rental.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-[#F3B664]/30 z-0"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#F3B664]/10 blur-xl z-0"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#F3B664]/10 blur-xl z-0"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/5 blur-lg z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Aimcab?</h2>
            <div className="w-20 h-1 bg-[#F3B664] mx-auto mb-6"></div>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Trusted by thousands of customers across India for reliable, safe, and comfortable transportation
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left column - About content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#F3B664] clip-corner"></div>
                
                <h3 className="text-3xl font-bold text-gray-800 mb-6 relative">
                  <span className="text-[#F3B664]">Our</span> Story
                </h3>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Founded in 2001, Aimcab began with a simple mission: to make transportation accessible, reliable, and 
                    stress-free for everyone. What started as a small fleet in one city has now grown to serve over 1000 
                    cities across India.
                  </p>
                  
                  <p className="leading-relaxed">
                    We understand that every journey matters. Whether it's a business trip, family vacation, or daily commute, 
                    we're committed to providing a seamless experience with our well-maintained vehicles and professional drivers.
                  </p>
                  
                  <p className="leading-relaxed">
                    Our transparent pricing, real-time tracking, and 24/7 customer support have made us the preferred choice 
                    for travelers who value comfort, safety, and convenience.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-[#F3B664]/10 p-4 rounded-lg border border-[#F3B664]/20">
                    <h4 className="text-2xl font-bold text-[#F3B664]">1000+</h4>
                    <p className="text-gray-600">Cities Covered</p>
                  </div>
                  <div className="bg-[#F3B664]/10 p-4 rounded-lg border border-[#F3B664]/20">
                    <h4 className="text-2xl font-bold text-[#F3B664]">20+</h4>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                </div>
                
                <motion.a
                  href="/"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-[#2B2B2B] text-[#D5D5D5] font-semibold rounded-lg duration-300 border-2 border-[#F3B664]  text-center block hover:bg-[#0F0E0E] hover:text-[#F3B664] transition-all"
                >
                  Book Your Ride
                </motion.a>
              </div>
            </motion.div>

            {/* Right column - Features */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <h3 className="text-3xl font-bold text-gray-800 mb-8">
                  <span className="text-[#F3B664]">Our</span> Advantages
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start space-x-4 p-4 hover:bg-[#F3B664]/10 rounded-lg transition-colors duration-300"
                    >
                      <div className="text-[#F3B664] mt-1">{feature.icon}</div>
                      <p className="text-gray-700 font-medium">{feature.text}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300/50"></div>
                  </div>
                  <div className="relative flex justify-center">
                    
                    <motion.a
                      // href="#services"
                      onClick={handleClick}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-[#2B2B2B] text-[#D5D5D5] font-semibold rounded-lg duration-300 border-2 border-[#F3B664]  text-center block hover:bg-[#0F0E0E] hover:text-[#F3B664] transition-all"
                    >
                      Explore All Services
                      {/* <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg> */}
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <style jsx>{`
          .clip-corner {
            clip-path: polygon(100% 0, 0% 100%, 100% 100%);
          }
        `}</style>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutSection;