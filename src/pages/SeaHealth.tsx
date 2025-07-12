import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaRobot, FaChartBar, FaPhoneAlt, FaCommentDots, FaCalendarCheck, FaHeadset, FaCheckCircle, FaExclamationTriangle, FaUserMd, FaPhoneSlash, FaRegSmile, FaRegClock, FaRegHandshake, FaRegHospital, FaRegAddressBook, FaRegComments, FaRegThumbsUp, FaRegLifeRing, FaRegBell, FaRegListAlt, FaRegEnvelopeOpen, FaRegStar, FaRegHeart, FaRegLightbulb, FaRegCalendarPlus, FaRegCalendarCheck, FaRegCalendarTimes, FaRegArrowAltCircleRight, FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaRegArrowAltCircleLeft } from 'react-icons/fa';
import SEOHelmet from '../components/SEOHelmet';

const SeaHealth = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <SEOHelmet 
      title="SeaHealth - AI-Powered Communication for Healthcare"
      description="Elevate patient communication and streamline operations with SeaHealth's AI-powered, HIPAA-compliant platform. Unify calls, texts, and messaging in one secure inbox."
      favicon="/health-images/main/favicon-seahealth.ico"
      canonicalUrl={typeof window !== 'undefined' ? `${window.location.origin}/seahealth` : `/seahealth`}
    />
    <Header />
    <main className="flex-1 w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-4 text-center overflow-hidden">
        <img src="/health-images/main/background-hero.svg" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none animate-pulse" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2 drop-shadow-lg">SeaHealth lets healthcare professionals –</h1>
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 mb-6 animate-gradient-x">Transform Patients Interactions, with:</h2>
          <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-10">
            <li className="flex flex-col items-center bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl px-14 py-10 text-blue-800 font-bold shadow-xl min-w-[320px] min-h-[180px] max-w-[340px] hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <FaUserPlus className="w-14 h-14 mb-4 text-blue-500 animate-bounce" />
              <span className="text-2xl md:text-2xl text-center leading-snug break-words">New Patients Acquisition</span>
            </li>
            <li className="flex flex-col items-center bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl px-14 py-10 text-blue-800 font-bold shadow-xl min-w-[320px] min-h-[180px] max-w-[340px] hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-100">
              <FaRobot className="w-14 h-14 mb-4 text-blue-500 animate-bounce" />
              <span className="text-2xl md:text-2xl text-center leading-snug break-words">After-hour Voice AI Receptionists</span>
            </li>
            <li className="flex flex-col items-center bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl px-14 py-10 text-blue-800 font-bold shadow-xl min-w-[320px] min-h-[180px] max-w-[340px] hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-200">
              <FaChartBar className="w-14 h-14 mb-4 text-blue-500 animate-bounce" />
              <span className="text-2xl md:text-2xl text-center leading-snug break-words">Front Office Call Analytics</span>
            </li>
          </ul>
          <a href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-green-400 text-white px-10 py-5 rounded-2xl text-2xl font-extrabold shadow-2xl transition-all duration-200 mb-4 animate-fade-in">Book a Demo Today!</a>
          <p className="text-lg md:text-xl text-blue-800 drop-shadow-lg animate-fade-in-up delay-300">AI-powered front office for healthcare. Never miss a call, complaint, or appointment again.</p>
        </div>
        <style>{`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 4s ease-in-out infinite;
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
          .animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
          .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
          .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 1.2s ease both;
          }
        `}</style>
      </section>

      {/* Top 4 Reasons */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 mb-8 animate-gradient-x">Top 4 reasons hospitals and clinics choose SeaHealth:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <li className="flex flex-col items-center bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl px-6 py-6 text-blue-800 font-bold shadow-xl min-h-[120px] hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <FaPhoneAlt className="w-10 h-10 mb-2 text-blue-500" aria-label="Call" />
              <span className="text-xl md:text-2xl text-center">Never Miss a Call</span>
            </li>
            <li className="flex flex-col items-center bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl px-6 py-6 text-blue-800 font-bold shadow-xl min-h-[120px] hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-100">
              <FaCommentDots className="w-10 h-10 mb-2 text-blue-500" aria-label="Complaint" />
              <span className="text-xl md:text-2xl text-center">Never Miss a Customer Complaint</span>
            </li>
            <li className="flex flex-col items-center bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl px-6 py-6 text-blue-800 font-bold shadow-xl min-h-[120px] hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-200">
              <FaCalendarCheck className="w-10 h-10 mb-2 text-blue-500" aria-label="Appointment" />
              <span className="text-xl md:text-2xl text-center">Book New Patient Appointments After Business Hours</span>
            </li>
            <li className="flex flex-col items-center bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl px-6 py-6 text-blue-800 font-bold shadow-xl min-h-[120px] hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-300">
              <FaHeadset className="w-10 h-10 mb-2 text-blue-500" aria-label="Hotline" />
              <span className="text-xl md:text-2xl text-center">Provide 24/7 Hotline to Prospective and Existing Patients</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Addressing Front Office Challenges */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 mb-8 animate-gradient-x text-center">
            Addressing Front Office Challenges
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Unmonitored Front Desk Phone Call */}
            <div className="bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fade-in-up">
              <div className="mb-2 flex items-center justify-center">
                <FaPhoneSlash className="w-16 h-16 text-blue-500 mr-4" aria-label="Unmonitored Call" />
                <h3 className="text-xl font-bold text-blue-900 text-center">Unmonitored Front Desk Phone Call</h3>
              </div>
              <ul className="space-y-2 text-blue-800 text-base">
                <li className="flex items-center"><FaExclamationTriangle className="w-10 h-10 mr-3 text-yellow-500" aria-label="Warning" />Address customer complaints before they escalate.</li>
                <li className="flex items-center"><FaUserMd className="w-10 h-10 mr-3 text-blue-400" aria-label="Doctor" />Mitigate risks from initial medical triage errors.</li>
                <li className="flex items-center"><FaRegComments className="w-16 h-16 mr-4 text-green-500" aria-label="Comments" />Enhance professionalism with improved speaking tone and receptionist conduct.</li>
              </ul>
            </div>
            {/* Missed Inbound Calls from Patients */}
            <div className="bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fade-in-up delay-100">
              <div className="mb-2 flex items-center justify-center">
                <FaRegArrowAltCircleDown className="w-16 h-16 text-blue-500 mr-4" aria-label="Missed Call" />
                <h3 className="text-xl font-bold text-blue-900 text-center">Missed Inbound Calls from Patients</h3>
              </div>
              <ul className="space-y-2 text-blue-800 text-base">
                <li className="flex items-center"><FaRegBell className="w-10 h-10 mr-3 text-cyan-500" aria-label="Bell" />Eliminate after-hour voicemails with active follow-ups.</li>
                <li className="flex items-center"><FaRegCalendarCheck className="w-10 h-10 mr-3 text-green-500" aria-label="Calendar" />Simplify appointment scheduling and rescheduling.</li>
                <li className="flex items-center"><FaRegLifeRing className="w-16 h-16 mr-4 text-blue-400" aria-label="Life Ring" />Retain patients by ensuring your phones are answered 24/7, preventing them from seeking competitors.</li>
              </ul>
            </div>
            {/* Outbound Calls Nobody Wants to Make */}
            <div className="bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fade-in-up delay-200">
              <div className="mb-2 flex items-center justify-center">
                <FaRegArrowAltCircleUp className="w-16 h-16 text-blue-500 mr-4" aria-label="Outbound Call" />
                <h3 className="text-xl font-bold text-blue-900 text-center">Outbound Calls Nobody Wants to Make</h3>
              </div>
              <ul className="space-y-2 text-blue-800 text-base">
                <li className="flex items-center"><FaRegListAlt className="w-10 h-10 mr-3 text-blue-400" aria-label="List" />Ensure thoroughness in procedure follow-up calls.</li>
                <li className="flex items-center"><FaRegHandshake className="w-10 h-10 mr-3 text-green-500" aria-label="Handshake" />Simplify lengthy conversations with insurance companies.</li>
                <li className="flex items-center"><FaRegStar className="w-16 h-16 mr-4 text-yellow-500" aria-label="Star" />Reactivate lapsed patients with effective promotions to fill empty slots.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions for Every Healthcare Setting */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 mb-10 animate-gradient-x text-center">Solutions for Every Healthcare Setting</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Hospitals & Clinics */}
            <div className="relative flex flex-col items-center justify-center rounded-2xl shadow-lg overflow-hidden min-h-[180px] h-56 p-6" style={{backgroundImage: 'url(/health-images/settings/hospital.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <img src="/health-images/settings/hospital.svg" alt="Hospitals & Clinics Icon" className="w-16 h-16 mb-2 z-10" />
              <h3 className="text-lg font-semibold text-white text-center z-10 drop-shadow-lg">Hospitals & Clinics</h3>
              <div className="absolute inset-0 bg-black/30 z-0" aria-hidden="true"></div>
            </div>
            {/* Dental Clinics */}
            <div className="relative flex flex-col items-center justify-center rounded-2xl shadow-lg overflow-hidden min-h-[180px] h-56 p-6" style={{backgroundImage: 'url(/health-images/settings/dental.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <img src="/health-images/settings/dental.svg" alt="Dental Clinics Icon" className="w-16 h-16 mb-2 z-10" />
              <h3 className="text-lg font-semibold text-white text-center z-10 drop-shadow-lg">Dental Clinics</h3>
              <div className="absolute inset-0 bg-black/30 z-0" aria-hidden="true"></div>
            </div>
            {/* Hospice Homes */}
            <div className="relative flex flex-col items-center justify-center rounded-2xl shadow-lg overflow-hidden min-h-[180px] h-56 p-6" style={{backgroundImage: 'url(/health-images/settings/hospice.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <img src="/health-images/settings/hospice.svg" alt="Hospice Homes Icon" className="w-16 h-16 mb-2 z-10" />
              <h3 className="text-lg font-semibold text-white text-center z-10 drop-shadow-lg">Hospice Homes</h3>
              <div className="absolute inset-0 bg-black/30 z-0" aria-hidden="true"></div>
            </div>
            {/* Emergency Care */}
            <div className="relative flex flex-col items-center justify-center rounded-2xl shadow-lg overflow-hidden min-h-[180px] h-56 p-6" style={{backgroundImage: 'url(/health-images/settings/emergency.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <img src="/health-images/settings/emergency.svg" alt="Emergency Care Icon" className="w-16 h-16 mb-2 z-10" />
              <h3 className="text-lg font-semibold text-white text-center z-10 drop-shadow-lg">Emergency Care</h3>
              <div className="absolute inset-0 bg-black/30 z-0" aria-hidden="true"></div>
            </div>
            {/* Adult Family Homes */}
            <div className="relative flex flex-col items-center justify-center rounded-2xl shadow-lg overflow-hidden min-h-[180px] h-56 p-6" style={{backgroundImage: 'url(/health-images/settings/adult.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <img src="/health-images/settings/adult.svg" alt="Adult Family Homes Icon" className="w-16 h-16 mb-2 z-10" />
              <h3 className="text-lg font-semibold text-white text-center z-10 drop-shadow-lg">Adult Family Homes</h3>
              <div className="absolute inset-0 bg-black/30 z-0" aria-hidden="true"></div>
            </div>
            {/* Veterinary Hospitals */}
            <div className="relative flex flex-col items-center justify-center rounded-2xl shadow-lg overflow-hidden min-h-[180px] h-56 p-6" style={{backgroundImage: 'url(/health-images/settings/vet.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <img src="/health-images/settings/vet.svg" alt="Veterinary Hospitals Icon" className="w-16 h-16 mb-2 z-10" />
              <h3 className="text-lg font-semibold text-white text-center z-10 drop-shadow-lg">Veterinary Hospitals</h3>
              <div className="absolute inset-0 bg-black/30 z-0" aria-hidden="true"></div>
            </div>
            {/* Cosmetic Surgery */}
            <div className="relative flex flex-col items-center justify-center rounded-2xl shadow-lg overflow-hidden min-h-[180px] h-56 p-6" style={{backgroundImage: 'url(/health-images/settings/cosmetic.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <img src="/health-images/settings/cosmetic.svg" alt="Cosmetic Surgery Icon" className="w-16 h-16 mb-2 z-10" />
              <h3 className="text-lg font-semibold text-white text-center z-10 drop-shadow-lg">Cosmetic Surgery</h3>
              <div className="absolute inset-0 bg-black/30 z-0" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SeaHealth Solution + For Providers & Patients */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-12">
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl shadow-xl p-8 w-full md:w-1/2 animate-fade-in-up">
              <img src="/logo-seahealth.svg" alt="SeaHealth Logo" className="w-40 h-40 mb-4" />
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 mb-2 text-center animate-gradient-x">The SeaHealth Front Office Solution – Fills Your Appointment Slots Automatically.</h3>
              <p className="text-blue-900 mb-2 text-center text-xl">Our AI-powered solution streamlines your front office operations, allowing your staff to focus on what matters most - patient care.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-1/2">
              <div className="bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl shadow-xl p-6 animate-fade-in-up delay-100">
                <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 mb-4 animate-gradient-x">For Healthcare Providers</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <FaRegListAlt className="w-8 h-8 mr-3 text-blue-500" aria-label="Reduce administrative burden" />
                    <span className="text-blue-900 text-lg font-bold">Reduce administrative burden</span>
                  </li>
                  <li className="flex items-center">
                    <FaRegSmile className="w-8 h-8 mr-3 text-green-500" aria-label="Improve patient satisfaction" />
                    <span className="text-blue-900 text-lg font-bold">Improve patient satisfaction</span>
                  </li>
                  <li className="flex items-center">
                    <FaChartBar className="w-8 h-8 mr-3 text-blue-400" aria-label="Increase operational efficiency" />
                    <span className="text-blue-900 text-lg font-bold">Increase operational efficiency</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl shadow-xl p-6 animate-fade-in-up delay-200">
                <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 mb-4 animate-gradient-x">For Patients</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <FaRegClock className="w-8 h-8 mr-3 text-blue-500" aria-label="24/7 access to support" />
                    <span className="text-blue-900 text-lg font-bold">24/7 access to support</span>
                  </li>
                  <li className="flex items-center">
                    <FaRegCalendarPlus className="w-8 h-8 mr-3 text-green-500" aria-label="Quick appointment scheduling" />
                    <span className="text-blue-900 text-lg font-bold">Quick appointment scheduling</span>
                  </li>
                  <li className="flex items-center">
                    <FaRegComments className="w-8 h-8 mr-3 text-blue-400" aria-label="Seamless communication" />
                    <span className="text-blue-900 text-lg font-bold">Seamless communication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SeaHealth */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 mb-8 animate-gradient-x text-center">Why Choose SeaHealth?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'HIPAA Compliance', desc: 'We prioritize patient data privacy and security.', img: 'image-why-1.png' },
              { title: 'Natural & Contextual Speech Technologies', desc: 'Engage patients with human-like communication.', img: 'image-why-2.png' },
              { title: 'Automation Done Right', desc: 'Always caring for patients and your own employees.', img: 'image-why-3.png' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl shadow-xl p-8 animate-fade-in-up delay-100">
              <img src={`/health-images/main/${item.img}`} alt={item.title} className="w-20 h-20 mb-4" />
                <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 mb-2 animate-gradient-x text-center">{item.title}</h3>
                <p className="text-blue-900 text-lg text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 mb-8 animate-gradient-x text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                q: 'How does your front desk call analytics work?',
                a: 'We record your incoming and outgoing phone calls, then transcribe them for further analysis. Summary and alert emails are sent out on a daily basis.'
              },
              {
                q: 'Does it require recording the phone calls, and how?',
                a: 'We connect your VoIP provider to get the call recordings and do speech analysis on the recordings. If you use analog phones, we use a phone recording device that connects your call with phone jacks to get the recordings.'
              },
              {
                q: 'How does 24/7 phone call coverage work?',
                a: 'AI-powered receptionists handle calls round-the-clock, ensuring no missed opportunities. You can either pick up the call when they ring, or transfer the call to the AI receptionists during or after business hours.'
              },
              {
                q: 'Why should I use your service?',
                a: 'SeaHealth improves efficiency, enhances patient satisfaction, and increases revenue through automation and AI-powered solutions. It’s cheaper, more reliable, and more empathetic than outsourcing your front desk receptionist work.'
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl shadow-xl p-8 animate-fade-in-up delay-100">
                <h4 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 mb-2 animate-gradient-x text-center">{faq.q}</h4>
                <p className="text-blue-900 text-lg text-center">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Integrations */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 mb-8 animate-gradient-x text-center">Partners & Integrations</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex flex-row flex-wrap justify-center items-center gap-8 w-full mb-8">
              <div className="bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl shadow-xl p-4 animate-fade-in-up">
                <img src="/health-images/main/image-partners-kontak.png" alt="Kontak" className="h-12 md:h-14" />
              </div>
              <div className="bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl shadow-xl p-4 animate-fade-in-up delay-100">
                <img src="/health-images/main/image-partners-momentum.svg" alt="Momentum" className="h-12 md:h-14" />
              </div>
              <div className="bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl shadow-xl p-4 animate-fade-in-up delay-200">
                <img src="/health-images/main/image-partners-patients_force.svg" alt="Patients Force" className="h-12 md:h-14" />
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="bg-gradient-to-br from-white via-blue-100 to-cyan-100 border-2 border-blue-300 rounded-2xl shadow-xl p-6 animate-fade-in-up delay-300">
                <img src="/health-images/main/image-partners-gold.png" alt="Twilio Gold Partner" className="h-24 md:h-32" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 mb-6 animate-gradient-x">Ready to transform patient interactions?</h2>
        <a href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-green-400 text-white px-10 py-5 rounded-2xl text-2xl font-extrabold shadow-2xl transition-all duration-200 mb-4 animate-fade-in">Book a Demo Today!</a>
      </section>
    </main>
    <Footer />
  </div>
);

export default SeaHealth;
