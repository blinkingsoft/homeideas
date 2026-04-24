  'use client'

  import { useState, useEffect } from 'react'
  import { ChevronRight, Play, Star, Users, Zap, Shield,
    Smartphone, Code, Database, Globe, Cloud, Cpu, Target, BarChart3,  CheckCircle, LucideIcon } from 'lucide-react'
  
  import Navigation from './components/Nav'
  import Footer from './components/Footer'
  import Link from "next/link";

  type ScreenSize = 'mobile' | 'tablet' | 'desktop';
  type OrbitPosition = 'inner' | 'outer';

  interface OrbitingIcon {
    iconPath: string;
    color: string;
    position: OrbitPosition;
  }


  export default function HomePage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      setIsVisible(true)
    }, [])
      const [screenSize, setScreenSize] = useState<ScreenSize>('desktop');

  useEffect(() => {
    const handleResize = (): void => {
      const width = window.innerWidth;
      if (width <= 640) {
        setScreenSize('mobile');
      } else if (width <= 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    // Set initial screen size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const orbitingIcons: OrbitingIcon[] = [
  { iconPath: '/assets/icons/ai.svg', color: 'bg-[#FFBF60]', position: 'inner' },
  { iconPath: '/assets/icons/bull-market.svg', color: 'bg-[#FF5758]', position: 'outer' },
  { iconPath: '/assets/icons/cloud.svg', color: 'bg-[#FF5758]', position: 'inner' },
  { iconPath: '/assets/icons/hand.svg', color: 'bg-[#37A3FF]', position: 'outer' },
  { iconPath: '/assets/icons/home-favorites.svg', color: 'bg-[#00CA75]', position: 'inner' },
  { iconPath: '/assets/icons/VR.svg', color: 'bg-[#00CA75]', position: 'outer' },
  { iconPath: '/assets/icons/paper-scroll-3.svg', color: 'bg-[#FFBF60]', position: 'inner' },
  { iconPath: '/assets/icons/pencil-in-draft.svg', color: 'bg-[#37A3FF]', position: 'outer' },
  { iconPath: '/assets/icons/server.svg', color: 'bg-[#37A3FF]', position: 'outer' },
];

  const getAnimationClass = (position: OrbitPosition): string => {
    return `orbit-${position}-${screenSize}`;
  };
    return (
      <>
        <div className="min-h-screen bg-white font-[!Manrope] overflow-x-hidden">
          {/* Navigation */}
          <Navigation/>

          {/* Hero Section */}
          <section className="pt-24 pb-16 bg-[url('/assets/images/homeideas_bg.jpg')] bg-cover bg-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1
                  className={`font-bold text-gray-900 mb-6 transition-all duration-1000 delay-100 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  <span className="block text-[50px] leading-tight">
                    Innovating the Future of Business with Smart
                  </span>
                  <span className="block text-[62px] leading-tight text-[#B59F0E]">
                    Home Tech Apps
                  </span>
                </h1>
                <p className={`text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  Unlock business potential with cutting-edge solutions that are designed to make your workflow smarter, faster, and more efficient than ever before.
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <Link 
                  href="/contact-us"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center">
                    Get Started Today
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                  {/* <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-colors">
                    Watch Demo
                  </button> */}
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-20" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center md:text-center lg:text-left md:justify-center lg:justify-start">
                
                {/* Left content */}
                <div className="space-y-6 flex flex-col gap-8 items-center md:items-center lg:items-start md:text-center lg:text-left">
                  <div className="relative inline-block">
                    <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900">
                      About Us
                    </h2>
                    {/* underline brush vector */}
                    <img
                      src="/assets/icons/about_us_underline.svg"
                      alt="underline"
                      className="absolute -bottom-8 left-1/2 md:-translate-x-1/2 lg:left-0 lg:translate-x-0 -z-0 mt-2"
                    />
                  </div>

                  <div className="space-y-6 max-w-2xl">
                    <h3 className="text-2xl font-semibold text-gray-700">
                      Who We Are: Innovators in Digital Solutions for Design and Construction
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We are a team of passionate innovators dedicated to revolutionizing the way businesses operate through cutting-edge technology solutions. Our expertise spans across digital transformation, smart applications, and innovative workflow optimization.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      With years of experience in the industry, we understand the challenges modern businesses face and have developed comprehensive solutions that drive real results.
                    </p>
                  </div>
                </div>

                {/* Right image */}
                <div className="relative flex justify-center lg:justify-end">
                  <img src="/assets/images/About_us.jpg" alt="About Us" className="rounded-xl" />
                </div>
              </div>
            </div>
          </section>

          {/* Innovation Section */}
          <section className="py-10 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Image (left on desktop, bottom on mobile/tablet) */}
                <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
                  <img src="/assets/images/Innovate.jpg" alt="Innovate" className="rounded-xl" />
                </div>

                {/* Content (first on mobile/tablet, right on desktop) */}
                <div className="space-y-6 order-1 lg:order-2 text-center md:text-center lg:text-left flex flex-col items-center lg:items-start">
                  {/* Innovate heading with underline */}
                  <div className="relative inline-block">
                    <span className="relative z-10 text-[40px] font-semibold text-gray-900">
                      Innovate
                    </span>
                    <img
                      src="/assets/icons/innovate_underline.svg"
                      alt="underline"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-[300px] -z-0"
                    />
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl">
                    Transforming Workflows with Innovative Applications
                  </h2>
                  <p className="text-gray-600 leading-relaxed max-w-2xl">
                    Our innovative applications are designed to streamline your business processes,
                    increase productivity, and drive growth. Experience the future of business management today.
                  </p>
                  <p className="text-gray-600 leading-relaxed max-w-2xl">
                    From project management to customer relations, our solutions integrate seamlessly
                    with your existing workflows while providing advanced features that set you apart from the competition.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What We Do Section */}
          <section className="py-20 bg-[url('/assets/images/homeideas_bg.jpg')] bg-cover bg-center min-h-screen flex items-center" id='services'>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Content Side */}
                  <div className="space-y-8 max-w-lg">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                          What We Do
                        </h2>
                        <img src="/assets/icons/what_we_do_underline.svg" alt="" />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                        Empowering Professionals with Innovative, Scalable Solutions for the Future
                      </h3>
                      
                      <p className="text-black/40 leading-relaxed text-lg">
                        We provide design and construction professionals with 
                        smart solutions that enhance productivity and streamline 
                        workflows for design and construction professionals. Our 
                        mission is to empower you with tools that adapt to your 
                        needs and drive success.
                      </p>
                    </div>
                  </div>
                  
                  {/* Planetary Animation Side */}
                  <div className="relative flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[600px]">
                    {/* Central Hub */}
                    <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <img 
                        src="/assets/images/logo.jpeg" 
                        alt="Logo" 
                        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                      />
                    </div>
          
                    {/* Dashed Orbit Rings */}
                    <div
                      className="absolute w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] lg:w-[310px] lg:h-[310px] rounded-full border-2 border-dashed border-[#544A07]"
                    ></div>
                    <div
                      className="absolute w-[290px] h-[290px] sm:w-[390px] sm:h-[390px] lg:w-[490px] lg:h-[490px] rounded-full border-2 border-dashed border-[#544A07]"
                    ></div>
          
                    {orbitingIcons.map((planet: OrbitingIcon, index: number) => {
                      // Separate inner and outer orbit icons and distribute them evenly
                      const innerIcons = orbitingIcons.filter(p => p.position === 'inner');
                      const outerIcons = orbitingIcons.filter(p => p.position === 'outer');
                      
                      let initialRotation = 0;
                      if (planet.position === 'inner') {
                        // FOR INNER ICONS: Position them in plus structure (N, E, S, W)
                        const innerIndex = innerIcons.findIndex(p => p === planet);
                        const plusPositions = [0, 90, 180, 270]; // N, E, S, W positions
                        initialRotation = plusPositions[innerIndex % plusPositions.length];
                      } else {
                        // FOR OUTER ICONS: Position them in diagonal positions (NE, SE, SW, NW)
                        const outerIndex = outerIcons.findIndex(p => p === planet);
                        const diagonalPositions = [45, 135, 225, 315]; // NE, SE, SW, NW positions
                        initialRotation = diagonalPositions[outerIndex % diagonalPositions.length];
                      }
                      
                      return (
                        <div
                          key={index}
                          className={`absolute w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${planet.color} rounded-full flex items-center justify-center shadow-lg z-20 ${getAnimationClass(planet.position)}`}
                          style={{
                            left: '50%',
                            top: '50%',
                            animationDelay: `${-initialRotation / 36}s`, // Convert degrees to seconds for offset
                          }}
                        >
                          <img 
                            src={planet.iconPath} 
                            alt="icon" 
                            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white filter brightness-0 invert"
                          />
                        </div>
                      );
                    })}
                  </div>
                  
                </div>
              </div>
            </section>

          {/* Smart Solutions Section */}
        <section className="py-20 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <div className="relative inline-block">
                    <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900 mb-4 inline-block">
                      Smart Solutions, Real Impact
                    </h2>
                    <img
                      src="/assets/icons/smart_solutions_underline.svg"
                      alt="underline"
                      className="absolute top-full left-0 w-full -mt-2 z-0"
                    />
                  </div>
                </div>

                <p className="text-[40px] text-black font-[700] text-center max-w-3xl mx-auto">
                  Why Professionals Choose Homeideas for Their Business Solutions
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Experience Seamless Integration of Technology in Your Workflow",
                image: "/assets/images/b1.jpg",
                description: "Streamline your processes with our cutting-edge solutions."
              },
              {
                title: "Harness Advanced Responsive Technology for Your Business",
                image: "/assets/images/b2.jpg",
                description: "Mobile-first approach ensuring accessibility everywhere."
              },
              {
                title: "Future-Ready Technology That Grows with Your Business",
                image: "/assets/images/b3.jpg",
                description: "Scalable solutions designed for sustainable growth."
              }
            ].map((item, index) => (
              <div key={index} className="group h-full">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all  duration-300 transform hover:-translate-y-2 flex flex-col gap-3 h-full">
                  {/* Image section */}
                  <div className="w-full h-48 md:h-fit rounded-xl mb-2 md:mb-0 lg:mb-6  flex items-center justify-center ">
                    <img src={item.image} alt={item.title} className="rounded-xl"/>
                  </div>

                  {/* Text content */}
                  <h3 className="text-xl font-bold text-gray-900  group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600  flex-grow">{item.description}</p>

                  {/* Button stays at bottom */}
                  <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors mt-auto text-left">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

            </section>


          {/* Enhance Section */}
          <section className="pt-10 py-20 lg:py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 flex flex-col items-center gap-3">
        <div className="relative inline-block">
          <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900 mb-4 inline-block">
            Enhance
          </h2>
          <img
            src="/assets/icons/enhance_underline.svg"
            alt="underline"
            className="absolute top-full left-0 w-full -mt-4 z-0"
          />
        </div>
        <div></div>
        <h3 className="text-[40px] lg:w-[760px] font-semibold text-gray-700">
          Smarter Tools for Industry Professionals
        </h3>
      </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "/assets/icons/App_icon.svg",
                    title: "Empowering Your Projects with Our Cutting-Edge Mobile Applications",
                    subtitle: "Our AI scans and identifies high-value leads from various sources, including LinkedIn, company websites, and databases.",
                    color: "bg-orange-500"
                  },
                  {
                    icon: "/assets/icons/mobile.svg",
                    title: "Our Innovative Apps Streamline Your Design and Construction Processes",
                    subtitle: "Track lead engagement and optimize campaigns with real-time analytics.AI predicts the best times to send emails",
                    color: "bg-purple-500"
                  },
                  {
                    icon: "/assets/icons/dropbox.svg",
                    title: "Upcoming Apps to Enhance Your Design Experience and Efficiency",
                    subtitle: "Launch AI-driven multi-channel outreach campaigns via email, LinkedIn, and WhatsApp with minimal effort.",
                    color: "bg-blue-500"
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center border shadow-sm border-gray-100 p-4 rounded-lg">
                    <div className={`flex items-center justify-center mx-auto mb-4`}>
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    {item.subtitle && <p className="text-gray-600">{item.subtitle}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>      


          {/* Testimonial Section */}
          <section className="py-20 bg-[url('/assets/images/homeideas_bg.jpg')] bg-cover bg-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src='/assets/images/testimonial2.jpg' alt="Testimonial" />
        </div>
        
        <div className="space-y-6">
            <div className='flex flex-col gap-12 '>
              <div className="relative inline-block">
              <h2 className="relative z-10 text-4xl font-bold text-gray-900 inline-block">
                Testimonials
              </h2>
              <img
                src="/assets/icons/underline.svg"
                alt="underline"
                className="absolute top-full left-0 w-fit -mt-1 z-0"
              />
            </div>

            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#544A07] fill-current" />
              ))}
            </div>

            </div>
                <blockquote className="text-xl text-gray-700 leading-relaxed">
                  "HomeIdeas Technology has transformed the way we approach our projects. Their innovative solutions have streamlined our processes and significantly improved our efficiency."
                </blockquote>

                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-600">CEO, TechCorp Solutions</p>
                </div>
              </div>
            </div>
            </div>
          </section>
          {/* CTA Section */}
          <section className="py-20" id="contact">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Left content (first on all screens, left on desktop) */}
      <div className="space-y-6 order-1 lg:order-1 text-center md:text-center lg:text-left flex flex-col items-center lg:items-start">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Join the Future of Home Tech
        </h2>
        <p className="text-xl text-black/40 max-w-2xl">
          Ready to transform your business with our innovative solutions? Get started today and experience the difference.
        </p>
        <div className="flex gap-4 justify-center lg:justify-start">
          <Link
            href="/contact-us"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Right image (below content on mobile, right on desktop) */}
      <div className="relative order-2 lg:order-2 flex justify-center lg:justify-end">
        <div className="w-full object-cover h-full rounded-2xl flex items-center justify-center">
          <div className="text-6xl">
            <img src="/assets/images/cta.jpg" alt="Call to Action" className="rounded-[18px]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


          <Footer/>
        </div>
      </>
    )
  }
