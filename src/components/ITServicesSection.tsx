
import React from "react";
import { Cloud, Shield, Code, Database, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migrate to the cloud with confidence. We provide comprehensive cloud strategy, migration, and management services."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with enterprise-grade security solutions, threat monitoring, and compliance management."
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Build tailored software solutions that perfectly fit your business needs and scale with your growth."
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Optimize your data infrastructure with modern databases, analytics, and business intelligence solutions."
  },
  {
    icon: Smartphone,
    title: "Digital Transformation",
    description: "Transform your business processes with cutting-edge technology and automation solutions."
  },
  {
    icon: Zap,
    title: "IT Support",
    description: "24/7 technical support and maintenance to keep your systems running smoothly and efficiently."
  }
];

const ITServicesSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-gray-50" id="services">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
              <span>Services</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
            Comprehensive IT Solutions for Modern Businesses
          </h2>
          <p className="text-lg text-gray-600">
            From cloud infrastructure to cybersecurity, we deliver enterprise-grade IT services that drive innovation and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-pulse-100 rounded-xl mr-4">
                  <service.icon className="w-6 h-6 text-pulse-600" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITServicesSection;
