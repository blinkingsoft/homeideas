'use client'
import { useState, useEffect } from 'react'
import { Shield, Eye, Lock, Users, FileText, Globe, Mail, Phone, Link } from 'lucide-react'
import Navigation from '../components/Nav'
import Footer from '../components/Footer'

export default function PrivacyPolicyPage() {
  const [isVisible, setIsVisible] = useState(true) // Start as true to match server render

  // Optional: You can still have animations, but use a different approach
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Small delay to ensure smooth animation after hydration
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const privacySections = [
    {
      icon: FileText,
      title: "Introduction",
      content: "Welcome to Home Ideas Technologies (\"we,\" \"us,\" or \"our\"). We value your privacy and are committed to safeguarding the personal information you share with us through our website. This Privacy Policy outlines how we collect, use, share, and protect your data."
    },
    {
      icon: Eye,
      title: "Information We Collect",
      content: "We may gather the following types of personal information:",
      list: [
        "Contact Details: Name, email, phone number, and organization (especially when you request a consultation or contact us)",
        "Usage Information: Website pages visited, time spent, IP address, browser type, and clickstream data",
        "Cookies & Tracking Technologies: Details about how you use the site, which help us tailor and improve your experience"
      ]
    },
    {
      icon: Users,
      title: "How We Use Your Information",
      content: "Your information may be used to:",
      list: [
        "Respond to your inquiries and requests",
        "Provide and personalize our services",
        "Send updates or marketing materials (with your consent)",
        "Analyze site performance and user behavior",
        "Comply with legal obligations or protect our rights"
      ]
    },
    {
      icon: Globe,
      title: "Cookies & Tracking Mechanisms",
      content: "Our website may use cookies and similar technologies to enhance user experience. While essential cookies are required for site functionality, optional cookies (e.g., analytics or marketing) will be used only with your consent. You can manage or disable cookies through your browser, though this may affect the site's functionality."
    },
    {
      icon: Shield,
      title: "How We Share Your Information",
      content: "We will not share your personal information with third parties, except:",
      list: [
        "With trusted service providers who assist with our business operations (e.g., hosting, analytics providers)",
        "When legally required (e.g. court order, regulatory compliance)",
        "In connection with business transfers such as mergers, acquisitions, or asset sales—subject to confidentiality"
      ]
    },
    {
      icon: Lock,
      title: "How We Protect Your Data",
      content: "We implement industry-standard security practices—including encryption and secure servers—to protect your data. While we strive to keep your information safe, no method of transmission or storage is 100% secure."
    }
  ]

  const additionalSections = [
    {
      title: "Data Retention",
      content: "We keep your personal data only as long as necessary to fulfill its intended use or to meet legal obligations. Contact us if you'd like to request deletion or have concerns about your data."
    },
    {
      title: "Your Rights",
      content: "Depending on your jurisdiction, you may have the right to:",
      list: [
        "Access, correct, or delete your data",
        "Limit or object to processing",
        "Withdraw consent (where applicable)",
        "Lodge a complaint with a relevant data protection authority"
      ]
    },
    {
      title: "Children's Privacy",
      content: "We do not knowingly collect information from anyone under 13 years old. If we learn that personal data from a child has been collected, we will delete it promptly."
    },
    {
      title: "International Transfers",
      content: "If your data is transferred outside your country, we will use relevant safeguards to ensure adequate protection, as required by applicable laws."
    },
    {
      title: "Changes to This Privacy Policy",
      content: "We may update this Privacy Policy occasionally. Any changes will be posted here with an updated effective date. Please review this page regularly."
    }
  ]

  return (
    <div className="min-h-screen bg-white font-[!Manrope] overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[url('/assets/images/homeideas_bg.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
                className={`font-bold text-gray-900 mb-6 transition-all duration-1000 delay-100 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <span className="block text-[50px] leading-tight">
                  Privacy Policy
                </span>
                <span className="block text-[32px] leading-tight text-[#B59F0E]">
                  Your Data, Our Commitment
                </span>
              </h1>

              <p
                className={`text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                We are committed to protecting your privacy and ensuring the security
                of your personal information.
              </p>

              <span
                className={`text-gray-700 font-semibold inline-block transition-all duration-1000 delay-300 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                Effective Date: January 1, 2024
              </span>
          </div>
        </div>
      </section>

      {/* Main Privacy Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {privacySections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">{section.content}</p>
                    {section.list && (
                      <ul className="space-y-2">
                        {section.list.map((item, listIndex) => (
                          <li key={listIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {additionalSections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-3">{section.content}</p>
                {section.list && (
                  <ul className="space-y-2">
                    {section.list.map((item, listIndex) => (
                      <li key={listIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[url('/assets/images/homeideas_bg.jpg')] bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <h2 className="relative z-10 text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <div className="w-16 h-1 bg-orange-400 mx-auto"></div>
            </div>
            <p className="text-xl text-gray-600 mt-4">
              Have questions about this Privacy Policy? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Mail className="w-8 h-8 text-orange-500 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">For privacy-related inquiries</p>
                </div>
              </div>
              <a href="mailto:admin@homeideastechnologies.com" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                admin@homeideastechnologies.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Phone className="w-8 h-8 text-orange-500 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">Speak with our privacy team</p>
                </div>
              </div>
              <div className="space-y-1">
                <a href="tel:+917200240860" className="block text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                  +91 72002 40860
                </a>
                <a href="tel:+919884348052" className="block text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                  +91 98843 48052
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
