import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaRobot, FaChartBar, FaPhoneAlt, FaCommentDots, FaCalendarCheck, FaHeadset } from 'react-icons/fa';

const SeaHealth = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <Header />
    <main className="flex-1 w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-4 text-center overflow-hidden">
        <img src="/health-images/main/background-hero.svg" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Transform Patients Interactions, with <span className="text-blue-600">SeaHealth</span></h1>
          <p className="text-lg md:text-xl text-blue-800 mb-8">AI-powered front office for healthcare. Never miss a call, complaint, or appointment again.</p>
          <a href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-200">Book a Demo Today!</a>
        </div>
      </section>

      {/* Top 4 Reasons */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">Top 4 reasons hospitals and clinics choose SeaHealth:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li className="flex items-center bg-blue-50 rounded-xl p-5 shadow-sm">
              <span className="flex items-center justify-center w-8 h-8 mr-4"><FaPhoneAlt className="w-7 h-7 text-blue-500" aria-label="Call" /></span>
              <span className="text-lg text-blue-900 font-medium">Never Miss a Call</span>
            </li>
            <li className="flex items-center bg-blue-50 rounded-xl p-5 shadow-sm">
              <span className="flex items-center justify-center w-8 h-8 mr-4"><FaCommentDots className="w-7 h-7 text-blue-500" aria-label="Complaint" /></span>
              <span className="text-lg text-blue-900 font-medium">Never Miss a Customer Complaint</span>
            </li>
            <li className="flex items-center bg-blue-50 rounded-xl p-5 shadow-sm">
              <span className="flex items-center justify-center w-8 h-8 mr-4"><FaCalendarCheck className="w-7 h-7 text-blue-500" aria-label="Appointment" /></span>
              <span className="text-lg text-blue-900 font-medium">Book New Patient Appointments After Business Hours</span>
            </li>
            <li className="flex items-center bg-blue-50 rounded-xl p-5 shadow-sm">
              <span className="flex items-center justify-center w-8 h-8 mr-4"><FaHeadset className="w-7 h-7 text-blue-500" aria-label="Hotline" /></span>
              <span className="text-lg text-blue-900 font-medium">Provide 24/7 Hotline to Prospective and Existing Patients</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Solutions for Every Healthcare Setting */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">Solutions for Every Healthcare Setting</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { name: 'Hospitals & Clinics', url: 'https://seasalt.ai/health/categories/hospitals-clinics/' },
              { name: 'Dental Clinics', url: 'https://seasalt.ai/health/categories/dental-clinics/' },
              { name: 'Hospice Homes', url: 'https://seasalt.ai/health/categories/hospice-homes/' },
              { name: 'Emergency Care', url: 'https://seasalt.ai/health/categories/emergency-care/' },
              { name: 'Adult Family Homes', url: 'https://seasalt.ai/health/categories/adult-family-homes/' },
              { name: 'Veterinary Hospitals', url: 'https://seasalt.ai/health/categories/veterinary-hospitals/' },
              { name: 'Cosmetic Surgery', url: 'https://seasalt.ai/health/categories/cosmetic-surgery/' },
            ].map((cat, idx) => (
              <a key={idx} href={cat.url} target="_blank" rel="noopener noreferrer" className="bg-white border border-blue-200 rounded-lg px-5 py-2 text-blue-700 font-semibold hover:bg-blue-100 transition-all">{cat.name}</a>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Addressing Front Office Challenges</h3>
              <ul className="space-y-3">
                {[
                  { text: 'Unmonitored Front Desk Phone Call', icon: 'icon-challenge-phone-in_talk.svg' },
                  { text: 'Address customer complaints before they escalate.', icon: 'icon-challenge-check.svg' },
                  { text: 'Mitigate risks from initial medical triage errors.', icon: 'icon-challenge-check.svg' },
                  { text: 'Enhance professionalism with improved speaking tone and receptionist conduct.', icon: 'icon-challenge-phone-missed.svg' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <img src={`/health-images/main/${item.icon}`} alt="" className="w-7 h-7 mr-3" />
                    <span className="text-blue-900">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Missed Inbound Calls from Patients</h3>
              <ul className="space-y-3">
                {[
                  { text: 'Eliminate after-hour voicemails with active follow-ups.', icon: 'icon-challenge-check.svg' },
                  { text: 'Simplify appointment scheduling and rescheduling.', icon: 'icon-challenge-check.svg' },
                  { text: 'Retain patients by ensuring your phones are answered 24/7, preventing them from seeking competitors.', icon: 'icon-challenge-phone-outbound.svg' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <img src={`/health-images/main/${item.icon}`} alt="" className="w-7 h-7 mr-3" />
                    <span className="text-blue-900">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Outbound Calls Nobody Wants to Make</h3>
              <ul className="space-y-3">
                {[
                  { text: 'Ensure thoroughness in procedure follow-up calls.', icon: 'icon-challenge-check.svg' },
                  { text: 'Simplify lengthy conversations with insurance companies.', icon: 'icon-challenge-check.svg' },
                  { text: 'Reactivate lapsed patients with effective promotions to fill empty slots.', icon: 'icon-challenge-check.svg' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <img src={`/health-images/main/${item.icon}`} alt="" className="w-7 h-7 mr-3" />
                    <span className="text-blue-900">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg p-8">
              <img src="/logo-seahealth.svg" alt="SeaHealth Logo" className="w-32 h-32 mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">The SeaHealth Front Office Solution – Fills Your Appointment Slots Automatically.</h3>
              <p className="text-blue-900 mb-2">Our AI-powered solution streamlines your front office operations, allowing your staff to focus on what matters most - patient care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Providers & Patients */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">For Healthcare Providers</h3>
              <ul className="space-y-3">
                {[
                  'Reduce administrative burden',
                  'Improve patient satisfaction',
                  'Increase operational efficiency',
                ].map((text, idx) => (
                  <li key={idx} className="flex items-center">
                    <img src="/health-images/main/icon-appointment-check.svg" alt="Check" className="w-7 h-7 mr-3" />
                    <span className="text-blue-900">{text}</span>
                  </li>
                ))}
              </ul>
              <img src="/health-images/main/icon-appointment-patients.svg" alt="Patients" className="w-20 h-20 mt-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">For Patients</h3>
              <ul className="space-y-3">
                {[
                  '24/7 access to support',
                  'Quick appointment scheduling',
                  'Seamless communication',
                ].map((text, idx) => (
                  <li key={idx} className="flex items-center">
                    <img src="/health-images/main/icon-appointment-check.svg" alt="Check" className="w-7 h-7 mr-3" />
                    <span className="text-blue-900">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SeaHealth */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">Why Choose SeaHealth?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'HIPAA Compliance', desc: 'We prioritize patient data privacy and security.', img: 'image-why-1.png' },
              { title: 'Natural & Contextual Speech Technologies', desc: 'Engage patients with human-like communication.', img: 'image-why-2.png' },
              { title: 'Automation Done Right', desc: 'Always caring for patients and your own employees.', img: 'image-why-3.png' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
                <img src={`/health-images/main/${item.img}`} alt={item.title} className="w-20 h-20 mb-4" />
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-blue-900">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
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
              <div key={idx} className="bg-blue-50 rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">{faq.q}</h4>
                <p className="text-blue-900">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Integrations */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">Partners & Integrations</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex flex-row flex-wrap justify-center items-center gap-8 w-full mb-8">
              <img src="/health-images/main/image-partners-kontak.png" alt="Kontak" className="h-12 md:h-14" />
              <img src="/health-images/main/image-partners-patients_force.svg" alt="Patients Force" className="h-12 md:h-14" />
              <img src="/health-images/main/image-partners-momentum.svg" alt="Momentum" className="h-12 md:h-14" />
            </div>
            <div className="flex justify-center items-center w-full">
              <img src="/health-images/main/image-partners-gold.png" alt="Twilio Gold Partner" className="h-24 md:h-32" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Ready to transform patient interactions?</h2>
        <a href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-200">Book a Demo Today!</a>
      </section>
    </main>
    <Footer />
  </div>
);

export default SeaHealth;
