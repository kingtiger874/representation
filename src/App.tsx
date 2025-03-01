import React from 'react';
import { Phone, Send, CheckCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-blue-600">SilverRabbit</h1>
            </div>
            <div className="flex items-center">
              <a 
                href="#contact" 
                className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional IT Interview Representation
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We connect skilled representatives with remote IT job opportunities
          </p>
          <div className="flex justify-center">
            <img 
              // src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              src="/cobb.jpg"
              alt="Remote work illustration" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 bg-white" id="about">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            About Us
          </h2>
          <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
            <p className="text-lg text-gray-700 mb-4">
              We are seeking a skilled individual to represent us in remote IT job interviews. If you are an experienced developer with excellent English communication skills and a strong understanding of software development concepts, we want to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Role Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            Your Role
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">First</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Attend remote IT job interviews on our behalf, scheduled by us</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Communicate effectively with recruiters via phone, Google Meet, or Zoom</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Typically hold two 20-minute meetings daily</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Second</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Attend meetings for job management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Typically hold one meeting weekly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            What We Provide
          </h2>
          <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>A complete resume, relevant materials, and detailed job descriptions for each interview</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Technical support during meetings, if needed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Before Job Offer</h3>
              <p className="text-2xl font-bold text-gray-800">$100–$200 per week</p>
              <p className="text-gray-600">Based on your skills after a 10-day trial period</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">After Job Offer</h3>
              <p className="text-2xl font-bold text-gray-800">10% of monthly salary</p>
              <p className="text-gray-600">Typically around $1,400 per month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-blue-600" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Contact Us
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            If this opportunity aligns with your skills and interests, don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <a 
              href="https://wa.me/12817264707" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              WhatsApp: +1 (281) 726-4707
            </a>
            <a 
              href="https://t.me/kingtiger308" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              <Send className="h-5 w-5" />
              Telegram: @kingtiger308
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} RemoteRepresent. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;