import React from "react";
import { Link } from "react-router-dom";
import { Cloud, Shield, Users, Building, BookOpen, Globe } from "lucide-react";

const Solutions: React.FC = () => {
  return (
    <div className="w-full">
      {/* ----------------- Banner ----------------- */}
      <section className="bg-[#22224b] text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empowering Businesses with Next-Gen IT Solutions
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Driving digital transformation through trusted platforms, seamless
          integrations, and secure innovation.
        </p>
      </section>

      {/* ----------------- Introduction ----------------- */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto text-center">
        <p className="text-lg md:text-xl leading-relaxed">
          At <span className="font-semibold">Technogen Inc.</span>, we deliver
          end-to-end IT solutions that help organizations modernize, innovate,
          and scale with confidence. From process automation to cloud
          transformation, our certified experts design solutions that improve
          efficiency, strengthen security, and create measurable business
          impact.
        </p>
      </section>

      {/* ----------------- Solutions Offered ----------------- */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            "ServiceNow Solutions",
            "Migration Services",
            "Audit Readiness",
            "Integration Services",
            "ITSM (IT Service Management)",
            "ITAM (IT Asset Management)",
            "Cloud Transformation",
            "Cybersecurity & Compliance",
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600 text-sm">
                Expertise in {service} tailored to your business needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- Supported Sectors ----------------- */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Who We Support
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { name: "Federal", icon: <Building />, link: "/federal" },
            { name: "Healthcare", icon: <Heart />, link: "/healthsector" },
            { name: "Education", icon: <BookOpen />, link: "/education" },
            { name: "Global Enterprises", icon: <Globe />, link: "/global" },
          ].map((sector, i) => (
            <Link
              to={sector.link}
              key={i}
              className="p-6 bg-gray-50 rounded-xl shadow hover:bg-white hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-3">{sector.icon}</div>
              <p className="font-semibold">{sector.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ----------------- Case Studies ----------------- */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={`/images/casestudy${id}.jpg`}
                alt={`Case Study ${id}`}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Case Study {id}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Brief description of the case study with measurable outcomes.
                </p>
                <a
                  href={`/pdfs/casestudy${id}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read Full Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- CTA with HubSpot Form ----------------- */}
      <section className="py-20 px-6 md:px-20 text-center bg-[#1f2140] text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your IT?
        </h2>
        <p className="mb-8">
          Talk to our experts and discover how we can accelerate your digital
          journey.
        </p>
        {/* Replace embed code with your HubSpot Form ID */}
        <div className="max-w-xl mx-auto">
          <iframe
            src="https://share.hsforms.com/your-hubspot-form-id"
            width="100%"
            height="500"
            frameBorder="0"
            title="Contact Form"
          ></iframe>
        </div>
      </section>

      {/* ----------------- FAQs ----------------- */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "What industries do you serve?",
              a: "We support Federal, Healthcare, Education, and global enterprises with tailored IT solutions.",
            },
            {
              q: "Do you provide ServiceNow implementation?",
              a: "Yes, we offer full ServiceNow implementation, migration, and integration services.",
            },
            {
              q: "Can you help with audit readiness?",
              a: "Absolutely. Our experts prepare your IT systems for compliance and security audits.",
            },
          ].map((faq, i) => (
            <div key={i} className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Solutions;
