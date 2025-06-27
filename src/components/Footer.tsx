
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pulse-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/logo.svg" alt="TechFlow IT Solutions" className="h-8 w-auto mr-3 invert" />
              <span className="text-xl font-bold">TechFlow</span>
            </div>
            <p className="text-pulse-200 mb-6 leading-relaxed">
              Leading IT solutions provider offering cloud services, cybersecurity, 
              custom development, and digital transformation for modern businesses.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-pulse-300 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-pulse-300 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-pulse-300 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-pulse-200 hover:text-white transition-colors duration-300">Cloud Solutions</a></li>
              <li><a href="#services" className="text-pulse-200 hover:text-white transition-colors duration-300">Cybersecurity</a></li>
              <li><a href="#services" className="text-pulse-200 hover:text-white transition-colors duration-300">Custom Development</a></li>
              <li><a href="#services" className="text-pulse-200 hover:text-white transition-colors duration-300">IT Consulting</a></li>
              <li><a href="#services" className="text-pulse-200 hover:text-white transition-colors duration-300">Digital Transformation</a></li>
              <li><a href="#services" className="text-pulse-200 hover:text-white transition-colors duration-300">Managed Services</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-pulse-200 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#showcase" className="text-pulse-200 hover:text-white transition-colors duration-300">Our Work</a></li>
              <li><a href="#testimonials" className="text-pulse-200 hover:text-white transition-colors duration-300">Testimonials</a></li>
              <li><a href="#" className="text-pulse-200 hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-pulse-200 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-pulse-200 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-pulse-400 mt-1 flex-shrink-0" />
                <div className="text-pulse-200">
                  <p>123 Tech Street</p>
                  <p>San Francisco, CA 94102</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-pulse-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-pulse-200 hover:text-white transition-colors duration-300">
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-pulse-400 flex-shrink-0" />
                <a href="mailto:info@techflow.com" className="text-pulse-200 hover:text-white transition-colors duration-300">
                  info@techflow.com
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <a 
                href="#contact" 
                className="inline-block bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pulse-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-pulse-300 text-sm">
              © 2024 TechFlow IT Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-pulse-300 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-pulse-300 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-pulse-300 hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
