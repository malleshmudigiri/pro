// import React from 'react';
// import { Award, Shield, CheckCircle } from 'lucide-react';

// const Certifications: React.FC = () => {
//   const certifications = [
//     {
//       category: "Security Clearances",
//       items: [
//         "Secret Security Clearance Personnel",
//         "Top Secret Security Clearance Personnel",
//         "TS/SCI Cleared Professionals",
//         "Public Trust Clearance"
//       ]
//     },
//     {
//       category: "Industry Certifications",
//       items: [
//         "ISO 27001 Information Security Management",
//         "ISO 20000-1 IT Service Management",
//         "CMMI Level 3 Services",
//         "SOC 2 Type II Compliance"
//       ]
//     },
//     {
//       category: "Technology Partnerships",
//       items: [
//         "AWS Advanced Consulting Partner",
//         "ServiceNow Premier Partner",
//         "Salesforce Consulting Partner",
//         "Microsoft Gold Partner"
//       ]
//     },
//     {
//       category: "Government Certifications",
//       items: [
//         "GSA Multiple Award Schedule",
//         "8(a) Small Business Certification",
//         "HUBZone Certified",
//         "WOSB Certified"
//       ]
//     }
//   ];

//   return (
//     <div className="pt-16">
//       {/* Hero Section */}
//       <section className="bg-[#172059] text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl lg:text-5xl font-bold mb-6">Certifications & Compliance</h1>
//             <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
//               Our certifications demonstrate our commitment to excellence, security, and industry best practices
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Certifications Grid */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {certifications.map((cert, index) => (
//               <div key={index} className="bg-gray-50 rounded-xl p-8">
//                 <div className="flex items-center mb-6">
//                   <div className="flex items-center justify-center w-12 h-12 bg-[#172059] text-white rounded-lg mr-4">
//                     {cert.category.includes('Security') ? <Shield className="h-6 w-6" /> : 
//                      cert.category.includes('Industry') ? <Award className="h-6 w-6" /> :
//                      <CheckCircle className="h-6 w-6" />}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900">{cert.category}</h3>
//                 </div>
//                 <ul className="space-y-3">
//                   {cert.items.map((item, itemIndex) => (
//                     <li key={itemIndex} className="flex items-center text-gray-600">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Certifications Matter */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Certifications Matter</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our comprehensive certifications and compliance standards ensure we can meet the most stringent 
//               requirements across all sectors we serve.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
//                 <Shield className="h-8 w-8" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Security Assurance</h3>
//               <p className="text-gray-600">
//                 Our security clearances and compliance certifications ensure we can handle sensitive 
//                 government and enterprise data with the highest levels of protection.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
//                 <Award className="h-8 w-8" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Standards</h3>
//               <p className="text-gray-600">
//                 Industry-standard certifications like ISO 27001 and CMMI Level 3 demonstrate our 
//                 commitment to delivering consistent, high-quality services.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
//                 <CheckCircle className="h-8 w-8" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Market Access</h3>
//               <p className="text-gray-600">
//                 Our government certifications and contract vehicles provide clients with streamlined 
//                 procurement processes and compliance with regulatory requirements.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Certifications;
import React from "react";

const Certifications: React.FC = () => {
  const logos = [
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102318/Group_547_nmr7tl.png",
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102326/Group_548_mu3hfh.png",
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102306/Group_549_rjtco1.png",
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102335/Group_550_gimq7i.png",
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102350/Group_551_hdgcbp.png",
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102361/Group_552_et187j.png",
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102377/Group_553_ekwwdn.png",
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102390/Group_555_tes38e.png",
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102384/Group_554_d0ccdc.png",
  ];

  return (
    <div className="w-full">
      {/* Landing Page Section */}
      <section className="w-full">
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758102708/Certifications-Banner_hcbedx.png"
          alt="Certifications Banner"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Certifications Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#172059] mb-4">
              Certifications
            </h2>
            <div className="w-16 h-[2px] bg-gray-300 mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Our certifications include ISO 9001:2015, ISO/IEC 27001:2022 and
              ISO/IEC 20000-1:2018. Along with ISO certifications we are MDOT,
              SWAM, USPAACC, Capital Region Minority Supplier, Metropolitan
              Washington Airports Authority (MWAA) and MBE certified. These
              certifications allow us to partner and serve companies worldwide.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758102981/Certifications-Image_xndnxt.png"
              alt="Standard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Logos Section */}
<section className="bg-[#172059] py-16">
  <div className="max-w-6xl mx-auto px-6">
    {/* First row - 4 logos */}
    <div className="flex justify-center gap-8 mb-8">
      {logos.slice(0, 4).map((logo, index) => (
        <div key={index} className="flex items-center justify-center">
          <img src={logo} alt={`Logo ${index + 1}`} className="h-32 object-contain" />
        </div>
      ))}
    </div>

    {/* Second row - 4 logos staggered */}
    <div className="flex justify-center gap-8 mb-8">
      {logos.slice(4, 8).map((logo, index) => (
        <div
          key={index}
          className={`flex items-center justify-center ${index === 0 ? 'ml-12 md:ml-16' : ''} ${
            index === 3 ? 'mr-12 md:mr-16' : ''
          }`}
        >
          <img src={logo} alt={`Logo ${index + 5}`} className="h-32 object-contain" />
        </div>
      ))}
    </div>

    {/* Third row - 1 logo centered */}
    <div className="flex justify-center">
      <div className="flex items-center justify-center">
        <img src={logos[8]} alt="Logo 9" className="h-32 object-contain" />
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Certifications;
