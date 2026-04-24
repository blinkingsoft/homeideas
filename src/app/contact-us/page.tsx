'use client'
import { useState, useEffect } from 'react'
import { ChevronDown, Mail, Phone, MapPin } from 'lucide-react'
import Navigation from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    topic: '',
    role: '',
    message: '',
    agreeToTerms: false
  })

  const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);

  const handleInputChange = (e:any) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation/>
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-[url('/assets/images/homeideas_bg.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`inline-block mb-4 transition-all duration-1000 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <span className="text-sm font-semibold text-orange-600 tracking-wider uppercase">
                Connect
              </span>
            </div>

            <h1 className={`text-5xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              Get in Touch
            </h1>

            <p className={`text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              We're here to help you with your inquiries.
            </p>
          </div>
        </div>
      </section>


      {/* Contact Info Cards */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+91 72002 40860 / +91 98843 48052",
                subtitle: "Mon-Fri 9am-6pm",
                href: "tel:+917200240860"
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "admin@homeideastechnologies.com",
                subtitle: "We'll respond within 24hrs",
                href:"mailto:admin@homeideastechnologies.com"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                operationsAddress: [
                  "Home Ideas Technologies Pvt Ltd",
                  "Coxbit F14, TN Startup Hub",
                  "Gate No. 12, TNAU Campus",
                  "Lawley Road, Coimbatore, Tamil Nadu - 641003",
                  "India"
                ],
                headOfficeAddress: [
                  "Home Ideas Technologies",
                  "102, 20, Eden Park, Vittal Mallya Rd",
                  "KG Halli, D' Souza Layout, Ashok Nagar",
                  "Bengaluru, Karnataka - 560001",
                  "India"
                ],
                href: "https://maps.google.com/?q=TN+Startup+Hub+Gate+No+12+TNAU+Campus+Lawley+Road+Coimbatore+Tamil+Nadu+641003"
              }
            ].map((item, index) => (
              <Link key={index} href={item.href} target='_blank' className="bg-white rounded-2xl p-6 shadow-lg 
              hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border 
              border-gray-100 flex flex-col  items-center text-center ">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                {item.title === "Visit Us" ? (
                  <div className="w-full mt-2 text-left space-y-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-orange-600 mb-1">
                        Operations
                      </p>
                      {item.operationsAddress?.map((line, lineIndex) => (
                        <p key={`ops-${lineIndex}`} className="text-sm leading-6 text-gray-800">
                          {line}
                        </p>
                      ))}
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500 mb-1">
                        Head Office
                      </p>
                      {item.headOfficeAddress?.map((line, lineIndex) => (
                        <p key={`hq-${lineIndex}`} className="text-sm leading-6 text-gray-700">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-gray-900 font-semibold mb-1">{item.info}</p>
                    <p className="text-gray-600 text-sm">{item.subtitle}</p>
                  </>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gray-100">
            <div className="space-y-8">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium"
                    required
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium"
                    required
                  />
                </div>
              </div>

              {/* Topic Selector */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Select a Topic
                </label>
                <div className="relative">
                  <select
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium appearance-none bg-white"
                    required
                  >
                    <option value="">Choose One...</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
                </div>
              </div>

              {/* Role Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-4">
                  Your Role in Project
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { value: 'engineer', label: 'Engineer' },
                    { value: 'interior designer', label: 'Interior Designer' },
                    { value: 'architect', label: 'Architect' },
                    { value: 'vendor', label: 'Vendor' },
                    { value: 'other', label: 'Other' },
                  ].map((option, index) => (
                    <label key={index} className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="role"
                        value={option.value}
                        checked={formData.role === option.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 border-2 rounded-full mr-3 flex items-center justify-center transition-all ${
                        formData.role === option.value 
                          ? 'border-orange-500 bg-orange-500' 
                          : 'border-gray-300 group-hover:border-orange-400'
                      }`}>
                        {formData.role === option.value && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="text-gray-900 font-medium group-hover:text-orange-600 transition-colors">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message..."
                  rows={6}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium resize-none"
                  required
                />
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start">
                <label className="flex items-start cursor-pointer group">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="sr-only"
                    required
                  />
                  <div className={`w-5 h-5 border-2 rounded mt-0.5 mr-3 flex items-center justify-center transition-all ${
                    formData.agreeToTerms 
                      ? 'border-orange-500 bg-orange-500' 
                      : 'border-gray-300 group-hover:border-orange-400'
                  }`}>
                    {formData.agreeToTerms && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-700 leading-relaxed">
                    I agree to <span className="text-orange-600 hover:text-orange-700 font-semibold">
                      <a href="/term-of-services">Terms</a>
                    </span>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  // disabled={!formData.agreeToTerms}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      {/* <section className="py-16 bg-[url('/assets/images/homeideas_bg.jpg')] bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of professionals who trust HomeIdeas Technology for their business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <Footer/>
    </div>
  )
}
