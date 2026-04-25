'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      alert('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubscribed(true)
    setShowSuccess(true)
    setEmail('')
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
      setIsSubscribed(false)
    }, 3000)
    
    setIsLoading(false)
  }

  return (
    <>
      <footer className="bg-white border-t border-gray-200 py-16 relative overflow-hidden">        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Newsletter Section */}
            <div className="lg:col-span-2">
              <Link 
              href="/">
                <div className="flex items-center mb-6">
                  <img src="/assets/images/logo.jpeg" className='w-[200px] lg:w-[330px]' alt="Home Ideas Logo" />
                </div>
              </Link>
              
              <p className="text-lg text-gray-700 mb-6">
                Join our newsletter to stay up to date on features and releases.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 mb-4 w-full max-w-xl">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900 placeholder-gray-500 transition-all"
                  disabled={isLoading || isSubscribed}
                />
                <button 
                  type="submit"
                  disabled={isLoading || isSubscribed}
                  className={`px-6 py-3 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                    isSubscribed
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500 disabled:bg-gray-400'
                  }`}
                >
                  {isLoading ? (
                    <span className="animate-spin">⏳</span>
                  ) : isSubscribed ? (
                    <>
                      <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      Subscribed
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>

              {showSuccess && (
                <div className="animate-fade-in-up mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-700 font-semibold">Thanks for subscribing! Check your email for updates.</span>
                </div>
              )}

              <p className="text-sm text-gray-500">
                By subscribing you agree to with our{' '}
                <a href="/privacy-policy" className="text-gray-700 underline">Privacy Policy</a>{' '}
                and provide consent to receive updates from our company.
              </p>
            </div>
            
            {/* Company and Social Links */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                <ul className="space-y-3 text-gray-600">
                  <li><a href="/" className="hover:text-gray-900">Home</a></li>
                  <li><a href="/about-us" className="hover:text-gray-900">About</a></li>
                  <li><a href="/products" className="hover:text-gray-900">Products</a></li>
                  <li><a href="/contact-us" className="hover:text-gray-900">Contact Us</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <a 
                    href="https://www.facebook.com/share/17HQa5LQ5B/" 
                    target='_blank'
                    className="hover:text-gray-900 flex items-center">
                      <svg 
                        className="w-5 h-5 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22.675 0h-21.35C.597 0 0 .597 0 
                        1.326v21.348C0 23.403.597 24 1.326 
                        24h11.495v-9.294H9.691V11.01h3.13V8.309c0-3.1 
                        1.893-4.788 4.659-4.788 1.325 0 2.463.099 
                        2.794.143v3.24h-1.918c-1.504 
                        0-1.796.715-1.796 1.763v2.313h3.587l-.467 
                        3.696h-3.12V24h6.116C23.403 24 24 
                        23.403 24 22.674V1.326C24 .597 23.403 
                        0 22.675 0z"/>
                      </svg>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a 
                    href="https://www.instagram.com/thehomeideas9/"
                    target='_blank'
                    className="hover:text-gray-900 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a 
                    href="https://www.linkedin.com/company/112437856/admin/dashboard/"
                    target='_blank' 
                    className="hover:text-gray-900 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a 
                    href="https://www.youtube.com/channel/UCj0CvnMogG2rdAiTumVIVOQ"
                    target='_blank' 
                    className="hover:text-gray-900 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='mb-8'>
            <img src="/assets/images/home_ideas_footer.png" alt="" />
          </div>
          
          {/* Bottom Links */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600">
              <a href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</a>
              <a href="/term-of-services" className="hover:text-gray-900">Terms of Service</a>
              {/* <a href="/" className="hover:text-gray-900">Cookies Settings</a> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
