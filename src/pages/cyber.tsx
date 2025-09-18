import React from "react";
import { motion } from "framer-motion";

const CyberSecurity: React.FC = () => {
  return (
    <div className="w-full text-gray-900 font-montserrat">
      {/* ================== Section 1 (Banner) ================== */}
 <div className="w-full text-gray-900 font-montserrat">
  {/* ================== Section 1 (Banner) ================== */}
  <section
    className="relative h-[600px] bg-cover bg-center flex items-center justify-center text-white mb-20"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758203844/CYBER-SECURITY-Banner_qddzdw.png')",
    }}
  >
    <div className="text-center px-6">
      {/* <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        CYBER-SECURITY
      </h1> */}
      {/* <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Protecting Your Business with Comprehensive Cybersecurity
      </p> */}
    </div>
  </section>

  {/* ================== Section 2 (Introduction) ================== */}
  <section
    className="relative w-full min-h-[400px] bg-cover bg-center flex items-center"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758203844/Group_598_mgkrjk.png')",
    }}
  >
    <div className="max-w-5xl mx-auto px-6 py-16 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Introduction</h2>
      <p className="text-lg leading-relaxed max-w-3xl mx-auto">
        Technogen’s Trust Center is the cornerstone of our security and
        compliance approach. Helping organizations meet stringent regulatory
        and operational requirements whilst safeguarding critical assets.
      </p>
    </div>
  </section>
</div>

      {/* ================== Section 3 (Technogen Advantage) ================== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758203844/cyber_vut8pn.png"
              alt="Technogen Advantage"
              className="w-3/4 md:w-full"
            />
          </div>
          {/* Right Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Technogen Advantage</h2>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Zero Trust Architecture:</span>{" "}
                Focus on identity authentication and authorization for all users
                and devices.
              </li>
              <li>
                <span className="font-semibold">Comprehensive Coverage:</span>{" "}
                Security across government, applications, infrastructure, and
                corporate operations.
              </li>
              <li>
                <span className="font-semibold">Transparent Reporting:</span>{" "}
                Security scorecards and independent assessments ensure trust and
                compliance.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================== Section 4 (Our Expertise) ================== */}
      <section className="py-20 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Expertise</h2>
        </div>

        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-3">
                Government Security
              </h3>
              <p>
                Compliance with DISA STIGs, VPATs, SSDF, and other federal and
                regulatory security standards.
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758203844/Government_Security_pinb0p.png"
                alt="Government Security"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758203834/Application_Product_Security_leyx4e.png"
                alt="Application Security"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-3">
                Application & Product Security
              </h3>
              <p>
                Secure SDLC, MFA, vulnerability disclosure, audit logging.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-3">
                Infrastructure & Data Security
              </h3>
              <p>
                Continuous monitoring, secure backups, access auditing, secure
                deletion.
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758203843/Infrastructure_Data_Security_lfuuks.png"
                alt="Infrastructure Security"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758203844/Cloud_Corporate_Security_c7pv8u.png"
                alt="Cloud Security"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-3">
                Cloud & Corporate Security
              </h3>
              <p>
                Safeguard cloud environments and corporate assets with threat
                monitoring, training, and phishing protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================== Section 5 (Certifications + CTA) ================== */}
      <section
        className="relative py-24 bg-cover bg-center text-white border-t-4 border-b-4 border-gray-200"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758203843/CTA_cyber_yxfemm.png')",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="mb-6">
            Technogen guides organizations in securing key cybersecurity
            certifications: ISO, CMMC, NIST, and more. We also conduct SOC 2
            audits and independent penetration testing to validate robust
            security frameworks.
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;
