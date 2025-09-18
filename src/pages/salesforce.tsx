// // // import React, { useRef } from 'react';
// // // import { Cloud, Shield, Users, Heart, Building, BookOpen, Globe } from 'lucide-react';

// // // const SalesforcePage: React.FC = () => {
// // //   const carouselRef = useRef<HTMLDivElement>(null);

// // //   const scrollCarousel = (direction: 'left' | 'right') => {
// // //     if (carouselRef.current) {
// // //       const scrollAmount = 320;
// // //       carouselRef.current.scrollBy({
// // //         left: direction === 'left' ? -scrollAmount : scrollAmount,
// // //         behavior: 'smooth',
// // //       });
// // //     }
// // //   };

// // //   const services = [
// // //     {
// // //       title: "Sales Cloud",
// // //       icon: Cloud,
// // //       description: "Empower sales teams with tools to close deals faster.",
// // //     },
// // //     {
// // //       title: "Service Cloud",
// // //       icon: Shield,
// // //       description: "Deliver seamless, personalized customer support.",
// // //     },
// // //     {
// // //       title: "Marketing Automation",
// // //       icon: Users,
// // //       description: "Drive campaigns that connect with the right audience at the right time.",
// // //     },
// // //     {
// // //       title: "Analytics & AI",
// // //       icon: BookOpen,
// // //       description: "Turn data into actionable insights for smarter decisions.",
// // //     },
// // //     {
// // //       title: "Integrations & Customization",
// // //       icon: Globe,
// // //       description: "Align Salesforce with your existing systems for a unified workflow.",
// // //     },
// // //   ];

// // //   const supports = [
// // //     { icon: Building, label: 'Healthcare' },
// // //     { icon: Heart, label: 'Finance' },
// // //     { icon: BookOpen, label: 'Retail' },
// // //     { icon: Globe, label: 'Other Industries' },
// // //   ];

// // //   const caseStudies = [
// // //     {
// // //       title: 'Healthcare CRM',
// // //       description: 'Enabled better patient engagement and HIPAA-compliant workflows.',
// // //       image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png',
// // //     },
// // //     {
// // //       title: 'Financial Services',
// // //       description: 'Boosted customer experience with Salesforce Service Cloud.',
// // //       image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png',
// // //     },
// // //     {
// // //       title: 'Retail Marketing',
// // //       description: 'Personalized campaigns increased sales conversions by 30%.',
// // //       image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png',
// // //     },
// // //   ];

// // //   const faqs = [
// // //     { question: 'What is Salesforce?', answer: 'Salesforce is a leading CRM platform for managing customer relationships and business workflows.' },
// // //     { question: 'How can Technogen help with Salesforce?', answer: 'We provide implementation, customization, and managed Salesforce services across industries.' },
// // //     { question: 'Why choose Technogen for Salesforce?', answer: 'With 20+ years of IT excellence and Salesforce-certified experts, we deliver scalable and ROI-driven solutions.' },
// // //   ];

// // //   return (
// // //     <div className="font-sans text-gray-900">

// // //       {/* Hero Section */}
// // //       <section
// // //         className="relative w-full h-screen bg-cover bg-center"
// // //         style={{ backgroundImage: "url('https://res.cloudinary.com/dh1chwfqf/image/upload/v1757515698/2_evbibb.png')" }}
// // //       >
// // //         <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
// // //           <h1 className="text-white text-6xl font-bold">Salesforce Solutions</h1>
// // //         </div>
// // //       </section>

// // //       {/* Intro Section */}
// // //       <section className="relative min-h-screen w-full flex items-center justify-center px-8 pt-20 bg-white">
// // //         <div className="relative z-10 w-full max-w-5xl mx-auto text-left">
// // //           <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8 leading-snug">
// // //             <span style={{ color: "#272654" }}>
// // //               Transform Your Business with Salesforce Solutions
// // //             </span>
// // //           </h2>
// // //           <p className="text-base md:text-lg text-black leading-relaxed mb-12 max-w-3xl">
// // //             At Technogen, we help organizations unlock the full potential of Salesforce by combining
// // //             technology expertise with business insight. We go beyond just implementing tools.
// // //             We’re creating solutions that empower teams, enhance customer engagement, and drive growth.
// // //           </p>

// // //           <div>
// // //             <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
// // //               <span style={{ color: "#272654" }}>The Technogen Advantage</span>
// // //             </h3>

// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
// // //               <div>
// // //                 <h4 className="text-xl font-semibold text-black mb-2">
// // //                   <span style={{ color: "#272654" }}>Deep Salesforce Expertise</span>
// // //                 </h4>
// // //                 <p className="text-base text-black">
// // //                   Industry-specific expertise spanning healthcare, finance, retail, and more.
// // //                 </p>
// // //               </div>

// // //               <div>
// // //                 <h4 className="text-xl font-semibold text-black mb-2">
// // //                   <span style={{ color: "#272654" }}>Consultative Approach</span>
// // //                 </h4>
// // //                 <p className="text-base text-black">
// // //                   We understand your business needs first, then design tailored solutions.
// // //                 </p>
// // //               </div>

// // //               <div>
// // //                 <h4 className="text-xl font-semibold text-black mb-2">
// // //                   <span style={{ color: "#272654" }}>Certified Experts</span>
// // //                 </h4>
// // //                 <p className="text-base text-black">
// // //                   Salesforce-certified professionals ensuring accuracy and best practices.
// // //                 </p>
// // //               </div>

// // //               <div>
// // //                 <h4 className="text-xl font-semibold text-black mb-2">
// // //                   <span style={{ color: "#272654" }}>Scalable & Secure</span>
// // //                 </h4>
// // //                 <p className="text-base text-black">
// // //                   User-friendly solutions built to grow with your business.
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* What We Do Section */}
// // //       <section className="py-24 bg-gray-50 overflow-hidden">
// // //         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between space-y-12 md:space-y-0">
// // //           <div className="md:w-1/3 text-left">
// // //             <h2 className="text-5xl font-bold mb-4 text-gray-900">What We Do</h2>
// // //             <p className="text-lg text-gray-600 max-w-md">
// // //               Whether you’re just starting with Salesforce or looking to optimize your existing setup, Technogen is your trusted partner.
// // //             </p>
// // //           </div>

// // //           <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// // //             {services.map(({ title, icon: Icon, description }, idx) => (
// // //               <div key={idx} className="flip-card cursor-pointer">
// // //                 <div className="flip-card-inner group">
// // //                   <div className="flip-card-front bg-white shadow p-6 rounded-lg flex flex-col items-center justify-center space-y-4">
// // //                     <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center">
// // //                       <Icon size={32} color="white" />
// // //                     </div>
// // //                     <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
// // //                   </div>
// // //                   <div className="flip-card-back bg-blue-50 shadow p-6 rounded-lg flex items-center justify-center">
// // //                     <p className="text-sm text-gray-700">{description}</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <style>{`
// // //           .flip-card { perspective: 1000px; }
// // //           .flip-card-inner {
// // //             position: relative;
// // //             width: 100%;
// // //             height: 240px;
// // //             transform-style: preserve-3d;
// // //             transition: transform 0.8s ease-in-out;
// // //           }
// // //           .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
// // //           .flip-card-front, .flip-card-back {
// // //             position: absolute;
// // //             width: 100%; height: 100%;
// // //             backface-visibility: hidden; border-radius: 0.5rem;
// // //           }
// // //           .flip-card-back { transform: rotateY(180deg); }
// // //         `}</style>
// // //       </section>

// // //       {/* Why Us Section */}
// // //       <section className="py-24 bg-white text-center px-6">
// // //         <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why Us</h2>
// // //         <p className="text-gray-600 max-w-2xl mx-auto mb-12">
// // //           When you partner with Technogen, you gain more than a technology provider. You gain a long-term strategic ally.
// // //         </p>
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
// // //           <div>
// // //             <h4 className="text-xl font-semibold text-blue-900 mb-2">20+ Years of Excellence</h4>
// // //             <p>Delivering success across industries with proven expertise.</p>
// // //           </div>
// // //           <div>
// // //             <h4 className="text-xl font-semibold text-blue-900 mb-2">Certified Experts</h4>
// // //             <p>Salesforce-certified consultants and solution architects.</p>
// // //           </div>
// // //           <div>
// // //             <h4 className="text-xl font-semibold text-blue-900 mb-2">500+ Projects</h4>
// // //             <p>Delivered with precision, compliance, and measurable ROI.</p>
// // //           </div>
// // //         </div>
// // //       </section>

   

// // //       {/* CTA */}
// // //       <section
// // //         className="relative pt-24 pb-12 text-center text-white"
// // //         style={{
// // //           backgroundImage: "url('https://www.shutterstock.com/image-photo/online-education-elearning-concept-learning-600nw-2305781813.jpg')",
// // //           backgroundSize: "cover",
// // //           borderRadius: "0 0 2rem 2rem",
// // //         }}
// // //       >
// // //         <div className="absolute inset-0 bg-black bg-opacity-60 rounded-b-2xl"></div>
// // //         <div className="relative z-10 px-6">
// // //           <h2 className="text-4xl font-bold mb-6">
// // //             Unlock your Salesforce potential with Technogen.
// // //           </h2>
// // //           <button className="mt-4 px-8 py-3 bg-blue-900 rounded-full text-lg font-semibold hover:bg-blue-800 transition">
// // //             Get Started Today
// // //           </button>
// // //         </div>
// // //       </section>

// // //       {/* FAQ
// // //       <section className="w-full bg-white text-gray-900 px-6 py-24">
// // //         <div className="max-w-7xl mx-auto">
// // //           <div className="flex flex-col lg:flex-row items-start gap-12">
// // //             <div className="lg:w-1/3">
// // //               <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Frequently Asked Questions</h2>
// // //               <a href="/faq" className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition font-sans">
// // //                 See more FAQs →
// // //               </a>
// // //             </div>
// // //             <div className="lg:w-2/3 space-y-6">
// // //               {faqs.map(({ question, answer }, idx) => (
// // //                 <details key={idx} className="border-b border-gray-300 pb-4 group">
// // //                   <summary className="cursor-pointer font-semibold text-lg flex justify-between items-center">
// // //                     {question}
// // //                     <span className="ml-2 text-blue-600 group-open:rotate-180 transition-transform duration-300">▼</span>
// // //                   </summary>
// // //                   <p className="mt-2 text-gray-700">{answer}</p>
// // //                 </details>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section> */}
// // //     </div>
// // //   );
// // // };

// // // export default SalesforcePage;
// // import React, { useRef } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   Cloud,
// //   Shield,
// //   Users,
// //   Heart,
// //   Building,
// //   BookOpen,
// //   Globe,
// // } from "lucide-react";

// // const SalesforcePage: React.FC = () => {
// //   const carouselRef = useRef<HTMLDivElement>(null);

// //   const scrollCarousel = (direction: "left" | "right") => {
// //     if (carouselRef.current) {
// //       const scrollAmount = 320;
// //       carouselRef.current.scrollBy({
// //         left: direction === "left" ? -scrollAmount : scrollAmount,
// //         behavior: "smooth",
// //       });
// //     }
// //   };

// //   const services = [
// //     {
// //       title: "Sales Cloud",
// //       icon: Cloud,
// //       description: "Empower sales teams with tools to close deals faster.",
// //     },
// //     {
// //       title: "Service Cloud",
// //       icon: Shield,
// //       description: "Deliver seamless, personalized customer support.",
// //     },
// //     {
// //       title: "Marketing Automation",
// //       icon: Users,
// //       description:
// //         "Drive campaigns that connect with the right audience at the right time.",
// //     },
// //     {
// //       title: "Analytics & AI",
// //       icon: BookOpen,
// //       description:
// //         "Turn data into actionable insights for smarter decisions.",
// //     },
// //     {
// //       title: "Integrations & Customization",
// //       icon: Globe,
// //       description:
// //         "Align Salesforce with your existing systems for a unified workflow.",
// //     },
// //   ];

// //   return (
// //     <div className="font-sans text-gray-900">
// //       {/* Hero Section */}
// //       <section
// //         className="relative w-full h-screen bg-cover bg-center"
// //         style={{
// //           backgroundImage:
// //             "url('https://t4.ftcdn.net/jpg/05/23/88/79/360_F_523887946_koGkGYKaSSj5EHSESmPFvCv7GsIpRTQ9.jpg')",
// //         }}
// //       >
// //         <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
// //           <motion.h1
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 1 }}
// //             className="text-white text-6xl font-bold"
// //           >
// //             Salesforce Solutions
// //           </motion.h1>
// //         </div>
// //       </section>

// //       {/* Intro Section */}
// //       <section className="relative min-h-screen w-full flex items-center justify-center px-8 pt-20 bg-white">
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }}
// //           className="relative z-10 w-full max-w-5xl mx-auto text-left"
// //         >
// //           <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8 leading-snug">
// //             <span style={{ color: "#272654" }}>
// //               Transform Your Business with Salesforce Solutions
// //             </span>
// //           </h2>
// //           <p className="text-base md:text-lg text-black leading-relaxed mb-12 max-w-3xl">
// //             At Technogen, we help organizations unlock the full potential of
// //             Salesforce by combining technology expertise with business insight.
// //           </p>
// //         </motion.div>
// //       </section>

// //       {/* What We Do Section */}
// //       <section className="py-24 bg-gray-50 overflow-hidden">
// //         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between space-y-12 md:space-y-0">
// //           <motion.div
// //             initial={{ opacity: 0, x: -80 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.9 }}
// //             viewport={{ once: true }}
// //             className="md:w-1/3 text-left"
// //           >
// //             <h2 className="text-5xl font-bold mb-4 text-gray-900">What We Do</h2>
// //             <p className="text-lg text-gray-600 max-w-md">
// //               Whether you’re just starting with Salesforce or optimizing, we’re
// //               your trusted partner.
// //             </p>
// //           </motion.div>

// //           <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //             {services.map(({ title, icon: Icon, description }, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 40 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6, delay: idx * 0.2 }}
// //                 viewport={{ once: true }}
// //                 className="flip-card cursor-pointer"
// //               >
// //                 <div className="flip-card-inner group">
// //                   <div className="flip-card-front bg-white shadow p-6 rounded-lg flex flex-col items-center justify-center space-y-4">
// //                     <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center">
// //                       <Icon size={32} color="white" />
// //                     </div>
// //                     <h3 className="text-xl font-semibold text-gray-900">
// //                       {title}
// //                     </h3>
// //                   </div>
// //                   <div className="flip-card-back bg-blue-50 shadow p-6 rounded-lg flex items-center justify-center">
// //                     <p className="text-sm text-gray-700">{description}</p>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>

// //         <style>{`
// //           .flip-card { perspective: 1000px; }
// //           .flip-card-inner {
// //             position: relative;
// //             width: 100%;
// //             height: 240px;
// //             transform-style: preserve-3d;
// //             transition: transform 0.8s ease-in-out;
// //           }
// //           .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
// //           .flip-card-front, .flip-card-back {
// //             position: absolute;
// //             width: 100%; height: 100%;
// //             backface-visibility: hidden; border-radius: 0.5rem;
// //           }
// //           .flip-card-back { transform: rotateY(180deg); }
// //         `}</style>
// //       </section>

// //       {/* Why Us Section */}
// //       <section className="py-24 bg-white text-center px-6">
// //         <motion.h2
// //           initial={{ opacity: 0, y: -40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.7 }}
// //           viewport={{ once: true }}
// //           className="text-4xl font-extrabold text-gray-900 mb-4"
// //         >
// //           Why Us
// //         </motion.h2>
// //         <motion.p
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 0.9, delay: 0.3 }}
// //           viewport={{ once: true }}
// //           className="text-gray-600 max-w-2xl mx-auto mb-12"
// //         >
// //           When you partner with Technogen, you gain more than a provider. You
// //           gain a long-term strategic ally.
// //         </motion.p>
// //       </section>
      

// //       {/* CTA */}
// //       <section
// //         className="relative pt-24 pb-12 text-center text-white"
// //         style={{
// //           backgroundImage:
// //             "url('https://www.shutterstock.com/image-photo/online-education-elearning-concept-learning-600nw-2305781813.jpg')",
// //           backgroundSize: "cover",
// //           borderRadius: "0 0 2rem 2rem",
// //         }}
// //       >
// //         <div className="absolute inset-0 bg-black bg-opacity-60 rounded-b-2xl"></div>
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           whileInView={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }}
// //           className="relative z-10 px-6"
// //         >
// //           <h2 className="text-4xl font-bold mb-6">
// //             Unlock your Salesforce potential with Technogen.
// //           </h2>
// //           <button className="mt-4 px-8 py-3 bg-blue-900 rounded-full text-lg font-semibold hover:bg-blue-800 transition">
// //             Get Started Today
// //           </button>
// //         </motion.div>
// //       </section>
      
// //     </div>
// //   );
// // };

// // export default SalesforcePage;

// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import {
//   Cloud,
//   Shield,
//   Users,
//   BookOpen,
//   Globe,
// } from "lucide-react";

// const SalesforcePage: React.FC = () => {
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const scrollCarousel = (direction: "left" | "right") => {
//     if (carouselRef.current) {
//       const scrollAmount = 320;
//       carouselRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const services = [
//     {
//       title: "Sales Cloud",
//       icon: Cloud,
//       description: "Empower sales teams with tools to close deals faster.",
//     },
//     {
//       title: "Service Cloud",
//       icon: Shield,
//       description: "Deliver seamless, personalized customer support.",
//     },
//     {
//       title: "Marketing Automation",
//       icon: Users,
//       description:
//         "Drive campaigns that connect with the right audience at the right time.",
//     },
//     {
//       title: "Analytics & AI",
//       icon: BookOpen,
//       description:
//         "Turn data into actionable insights for smarter decisions.",
//     },
//     {
//       title: "Integrations & Customization",
//       icon: Globe,
//       description:
//         "Align Salesforce with your existing systems for a unified workflow.",
//     },
//   ];

//   const caseStudies = [
//     {
//       title: "Boosting Sales Efficiency",
//       description:
//         "How we helped a retail giant increase sales by 30% using Salesforce Sales Cloud.",
//       image:
//         "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png",
//     },
//     {
//       title: "Smarter Customer Support",
//       description:
//         "Improving response times and satisfaction with Salesforce Service Cloud.",
//       image:
//         "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png",
//     },
//     {
//       title: "Data-Driven Decisions",
//       description:
//         "Using Salesforce Analytics to provide real-time business insights.",
//       image:
//         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
//     },
//   ];

//   return (
//     <div className="font-sans text-gray-900">
//       {/* Hero Section */}
//       <section
//         className="relative w-full h-screen bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://t4.ftcdn.net/jpg/05/23/88/79/360_F_523887946_koGkGYKaSSj5EHSESmPFvCv7GsIpRTQ9.jpg')",
//         }}
//       >
//         <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
//           <motion.h1
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             className="text-white text-6xl font-bold"
//           >
//             Salesforce Solutions
//           </motion.h1>
//         </div>
//       </section>

//       {/* Intro Section */}
//       <section className="relative min-h-screen w-full flex items-center justify-center px-8 pt-20 bg-white">
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//     viewport={{ once: true }}
//     className="relative z-10 w-full max-w-6xl mx-auto text-left"
//   >
//     {/* ===== Heading & Description ===== */}
//     <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-snug">
//       <span className="text-[#272654]">
//         Simplify your operations with scalable Salesforce innovations.
//       </span>
//     </h2>
//     <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl">
//       At Technogen, we help organizations unlock the full potential of Salesforce by 
//       combining technology expertise with business insight. We go beyond just implementing tools. 
//       We’re creating solutions that empower teams, enhance customer engagement, and drive growth.
//     </p>

//     {/* ===== Advantages Section ===== */}
//     <h3 className="text-2xl md:text-3xl font-bold text-[#ce3266] mb-8">
//       Technogen Advantage
//     </h3>

//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {[
//         {
//           title: "Deep Salesforce expertise",
//           desc: "Across industries – from healthcare to finance, retail, and beyond.",
//         },
//         {
//           title: "Consultative approach",
//           desc: "We understand your business needs first, then design tailored solutions.",
//         },
//         {
//           title: "Certified professionals",
//           desc: "Trusted experts who ensure accuracy and best practices.",
//         },
//         {
//           title: "Scalable, secure solutions",
//           desc: "Built to grow with your business and remain user-friendly.",
//         },
//       ].map((item, idx) => (
//         <motion.div
//           key={idx}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: idx * 0.2 }}
//           viewport={{ once: true }}
//           className="relative bg-[#f8f8fc] rounded-2xl p-6 shadow-md 
//                      hover:shadow-xl transition duration-300 overflow-hidden group"
//         >
//           {/* Overlay effect */}
//           <div className="absolute inset-0 bg-gradient-to-tr from-[#272654]/80 to-[#ce3266]/70 
//                           opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>

//           {/* Content */}
//           <div className="relative z-10">
//             <h4 className="text-lg font-semibold text-[#272654] group-hover:text-white mb-3">
//               {item.title}
//             </h4>
//             <p className="text-sm text-gray-600 group-hover:text-gray-200 leading-relaxed">
//               {item.desc}
//             </p>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </motion.div>
// </section>

//       {/* What We Do Section */}
//       <section className="py-24 bg-gray-50 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between space-y-12 md:space-y-0">
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//             viewport={{ once: true }}
//             className="md:w-1/3 text-left"
//           >
//             <h2 className="text-5xl font-bold mb-4 text-gray-900">What We Do</h2>
//             <p className="text-lg text-gray-600 max-w-md">
//               Whether you’re just starting with Salesforce or optimizing, we’re
//               your trusted partner.
//             </p>
//           </motion.div>

//           <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {services.map(({ title, icon: Icon, description }, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: idx * 0.2 }}
//                 viewport={{ once: true }}
//                 className="flip-card cursor-pointer"
//               >
//                 <div className="flip-card-inner group">
//                   <div className="flip-card-front bg-white shadow p-6 rounded-lg flex flex-col items-center justify-center space-y-4">
//                     <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center">
//                       <Icon size={32} color="white" />
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-900">
//                       {title}
//                     </h3>
//                   </div>
//                   <div className="flip-card-back bg-blue-50 shadow p-6 rounded-lg flex items-center justify-center">
//                     <p className="text-sm text-gray-700">{description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <style>{`
//           .flip-card { perspective: 1000px; }
//           .flip-card-inner {
//             position: relative;
//             width: 100%;
//             height: 240px;
//             transform-style: preserve-3d;
//             transition: transform 0.8s ease-in-out;
//           }
//           .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
//           .flip-card-front, .flip-card-back {
//             position: absolute;
//             width: 100%; height: 100%;
//             backface-visibility: hidden; border-radius: 0.5rem;
//           }
//           .flip-card-back { transform: rotateY(180deg); }
//         `}</style>
//       </section>

//      {/* Why Choose Us Section */}
// <section className="py-20 bg-white text-center">
//   {/* Heading */}
//   <motion.h2
//     initial={{ opacity: 0, y: -40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.7 }}
//     viewport={{ once: true }}
//     className="text-4xl font-extrabold text-gray-900 mb-4"
//   >
//     Why Us
//   </motion.h2>
//   <motion.p
//     initial={{ opacity: 0 }}
//     whileInView={{ opacity: 1 }}
//     transition={{ duration: 0.9, delay: 0.3 }}
//     viewport={{ once: true }}
//     className="text-gray-600 max-w-2xl mx-auto mb-12"
//   >
//     When you partner with Technogen, you gain more than a technology provider. 
//     You gain a long-term strategic ally.
//   </motion.p>

//   {/* 4 Containers */}
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
//     {[
//       {
//         text: "20+ years of IT excellence delivering success across industries.",
//         image: "https://res.cloudinary.com/deiqxagkd/image/upload/v1757942155/Rectangle_-3_ypshee.png",
//       },
//       {
//         text: "Certified consultants and solution architects with proven Salesforce expertise.",
//         image: "https://res.cloudinary.com/deiqxagkd/image/upload/v1757942155/Rectangle_-3_ypshee.png",
//       },
//       {
//         text: "500+ successful projects delivered with precision and impact.",
//         image: "https://res.cloudinary.com/deiqxagkd/image/upload/v1757942155/Rectangle_-3_ypshee.png",
//       },
//       {
//         text: "Customer-first approach ensuring innovation, compliance, and measurable ROI.",
//         image: "https://res.cloudinary.com/deiqxagkd/image/upload/v1757942155/Rectangle_-3_ypshee.png",
//       },
//     ].map((item, idx) => (
//       <motion.div
//         key={idx}
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: idx * 0.2 }}
//         viewport={{ once: true }}
//         className="relative h-64 group cursor-pointer overflow-hidden"
//       >
//         {/* Background Image */}
//         <img
//           src={item.image}
//           alt="Why Choose Us"
//           className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
//         />

//         {/* Glassmorphism Overlay (Hidden until Hover) */}
//         <div
//           className="absolute inset-0 flex items-center justify-center p-4 
//                      opacity-0 group-hover:opacity-100 transition duration-500"
//         >
//           <div
//             className="bg-black/0 backdrop-blur-md border border-white/30 
//                        rounded-xl p-4 w-[90%] shadow-lg"
//           >
//             <p className="text-white text-base font-semibold leading-snug">
//               {item.text}
//             </p>
//           </div>
//         </div>
//       </motion.div>
//     ))}
//   </div>
// </section>


//       {/* Case Studies Carousel */}
//       <section
//         className="relative py-16 text-white"
//         style={{ backgroundColor: "#23214A" }}
//       >
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-3xl sm:text-4xl font-extrabold">CASE STUDY</h2>
//             <div className="flex space-x-2">
//               <button
//                 onClick={() => scrollCarousel("left")}
//                 className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
//               >
//                 &#8592;
//               </button>
//               <button
//                 onClick={() => scrollCarousel("right")}
//                 className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
//               >
//                 &#8594;
//               </button>
//             </div>
//           </div>
//           <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12">
//             Discover how we’ve helped businesses transform with Salesforce
//             solutions tailored for success.
//           </p>
//           <div
//             ref={carouselRef}
//             className="flex overflow-x-auto space-x-6 scroll-smooth py-4 no-scrollbar"
//           >
//             {caseStudies.map((caseStudy, idx) => (
//               <div
//                 key={idx}
//                 className="min-w-[260px] sm:min-w-[300px] rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all"
//                 style={{ backgroundColor: "#23214A" }}
//               >
//                 <img
//                   src={caseStudy.image}
//                   alt={caseStudy.title}
//                   className="w-full h-40 sm:h-48 object-cover"
//                 />
//                 <div className="bg-white/10 backdrop-blur-md p-6 text-left">
//                   <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
//                     {caseStudy.title}
//                   </h3>
//                   <p className="text-gray-300 mb-4 text-sm sm:text-base">
//                     {caseStudy.description}
//                   </p>
//                   <button className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition">
//                     Learn More &#8594;
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Book Your Demo */}
//       <section className="relative px-4 sm:px-6 lg:px-8">
//         <div className="relative overflow-hidden rounded-b-[2.5rem] max-w-7xl mx-auto">
//           {/* Background Image */}
//           <img
//             src="https://www.shutterstock.com/image-photo/online-education-elearning-concept-learning-600nw-2305781813.jpg"
//             alt="Book Your Demo"
//             className="w-full h-[250px] sm:h-[300px] lg:h-[360px] object-cover"
//           />

//           {/* Dark Overlay */}
//           <div className="absolute inset-0 bg-black/60 rounded-b-[2.5rem]"></div>

//           {/* Content */}
//           <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-10 px-4 sm:px-8 z-10">
//             <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-4xl text-white">
//               With us, your Salesforce journey is faster, safer,
//               <br className="hidden sm:block" />
//               and designed for long-term success.
//             </h2>
//             <div className="mt-6">
//               <button className="cssbuttonsIoButton">
//                 Book Your Free Health Check
//                 <div className="icon">
//                   <svg
//                     height="20"
//                     width="20"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M0 0h24v24H0z" fill="none"></path>
//                     <path
//                       d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
//                       fill="currentColor"
//                     ></path>
//                   </svg>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Fancy Button Styles */}
//         <style>
//           {`
//             .cssbuttonsIoButton {
//               background: #ce3266;
//               color: white;
//               font-family: inherit;
//               border: 1px solid #ce3266;
//               text-align: center;
//               font-size: 15px;
//               font-weight: 600;
//               border-radius: 2rem;
//               letter-spacing: 0.05em;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               overflow: hidden;
//               position: relative;
//               height: 3em;
//               padding-right: 3em;
//               padding-left: 1.2rem;
//               cursor: pointer;
//               transition: background-color 0.4s ease, color 0.4s ease, border 0.4s ease;
//             }

//             .cssbuttonsIoButton .icon {
//               background: white;
//               margin-left: 1em;
//               position: absolute;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               height: 2.2em;
//               width: 2.2em;
//               border-radius: 2rem;
//               right: 0.4em;
//               transition: all 0.3s ease-out;
//             }

//             .cssbuttonsIoButton:hover {
//               background-color: white;
//               color: #ce3266;
//               border: 1px solid #ce3266;
//             }

//             .cssbuttonsIoButton .icon svg {
//               width: 1em;
//               transition: transform 0.3s ease-out;
//               color: #ce3266;
//             }

//             .cssbuttonsIoButton:hover .icon svg {
//               transform: translateX(0.1em) rotate(-25deg);
//             }

//             .cssbuttonsIoButton:active .icon {
//               transform: scale(0.95);
//             }
//           `}
//         </style>
//       </section>
//     </div>
//   );
// };

// export default SalesforcePage;
import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  Users,
  BookOpen,
  Globe,
  Building,
  Heart,
} from "lucide-react";

const SalesforcePage: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const services = [
    {
      title: "Sales Cloud",
      icon: Cloud,
      description: "Empower sales teams with tools to close deals faster.",
    },
    {
      title: "Service Cloud",
      icon: Shield,
      description: "Deliver seamless, personalized customer support.",
    },
    {
      title: "Marketing Automation",
      icon: Users,
      description:
        "Drive campaigns that connect with the right audience at the right time.",
    },
    {
      title: "Analytics & AI",
      icon: BookOpen,
      description:
        "Turn data into actionable insights for smarter decisions.",
    },
    {
      title: "Integrations & Customization",
      icon: Globe,
      description:
        "Align Salesforce with your existing systems for a unified workflow.",
    },
  ];

  const supports = [
    { icon: Building, label: "FEDERAL" },
    { icon: Heart, label: "FED HEALTH" },
    { icon: BookOpen, label: "SLED" },
    { icon: Globe, label: "COMMERCIAL" },
  ];

  const caseStudies = [
    {
      title: "Boosting Sales Efficiency",
      description:
        "How we helped a retail giant increase sales by 30% using Salesforce Sales Cloud.",
      image:
        "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png",
    },
    {
      title: "Smarter Customer Support",
      description:
        "Improving response times and satisfaction with Salesforce Service Cloud.",
      image:
        "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png",
    },
    {
      title: "Data-Driven Decisions",
      description:
        "Using Salesforce Analytics to provide real-time business insights.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* ================== HERO SECTION ================== */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/05/23/88/79/360_F_523887946_koGkGYKaSSj5EHSESmPFvCv7GsIpRTQ9.jpg')",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="text-white text-6xl font-bold text-center px-6"
          >
            Salesforce Solutions
          </motion.h1>
        </div>
      </section>

      {/* ================== INTRO / ADVANTAGE ================== */}
      <section className="relative min-h-screen w-full flex items-center justify-center px-8 pt-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-6xl mx-auto text-center"
        >
         {/* Heading & Description */}
<div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
  <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-snug">
    <span className="text-[#272654]">
      Simplify your operations with scalable Salesforce innovations.
    </span>
  </h2>

  <p className="md:text-lg text-gray-700 leading-relaxed max-w-3xl">
    At Technogen, we help organizations unlock the full potential of Salesforce 
    by combining technology expertise with business insight. We go beyond just 
    implementing tools. We’re creating solutions that empower teams, enhance 
    customer engagement, and drive growth.
  </p>
</div>


          {/* Technogen Advantage */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#ce3266] mb-8">
            Technogen Advantage
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Deep Salesforce expertise",
                desc: "Across industries – from healthcare to finance, retail, and beyond.",
              },
              {
                title: "Consultative approach",
                desc: "We understand your business needs first, then design tailored solutions.",
              },
              {
                title: "Certified professionals",
                desc: "Trusted experts who ensure accuracy and best practices.",
              },
              {
                title: "Scalable, secure solutions",
                desc: "Built to grow with your business and remain user-friendly.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative bg-[#f8f8fc] rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
              >
                {/* Gradient overlay on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-[#272654]/80 to-[#ce3266]/70 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl pointer-events-none"
                  aria-hidden
                />
                <div className="relative z-10">
                  <h4 className="text-lg font-semibold text-[#272654] group-hover:text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-gray-200 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================== WHAT WE DO ================== */}
      <section className="relative w-full overflow-hidden">
        
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pt-10"
        >
          <source src="https://framerusercontent.com/assets/eg4zyU6B3t9AHH140oL8N6295Ew.mp4" type="video/mp4" />
        </video>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between space-y-12 md:space-y-0 p-20">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="md:w-1/3 text-left relative w-full overflow-hidden"
          >
            <h2 className="text-5xl font-bold mb-4 text-white-900 text-white/60">What We Do</h2>
            <p className="text-lg text-white-600 max-w-md text-white/90">
              Whether you’re just starting with Salesforce or optimizing, we’re
              your trusted partner.
            </p>
          </motion.div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map(({ title, icon: Icon, description }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="flip-card cursor-pointer"
              >
                <div className="flip-card-inner group">
                  <div className="flip-card-front bg-white shadow p-6 rounded-lg flex flex-col items-center justify-center space-y-4">
                    <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center">
                      <Icon size={28} color="white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                  </div>

                  <div className="flip-card-back bg-blue-50 shadow p-6 rounded-lg flex items-center justify-center">
                    <p className="text-sm text-gray-700 text-center">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          .flip-card { perspective: 1000px; }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 240px;
            transform-style: preserve-3d;
            transition: transform 0.8s ease-in-out;
          }
          .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%; height: 100%;
            backface-visibility: hidden; border-radius: 0.5rem;
          }
          .flip-card-back { transform: rotateY(180deg); }
        `}</style>
      </section>

      {/* ================== WHO WE SUPPORT (after What We Do) ================== */}
      <section className="py-24 bg-white text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Who We Support
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          A long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
          {supports.map((support, idx) => {
            const Icon = support.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                viewport={{ once: true }}
                className="flex flex-col items-center animate-fade-up"
              >
                <div className="w-24 h-24 flex items-center justify-center relative group hover:scale-105 transition-transform duration-500">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    <polygon
                      points="50,1 95,25 95,75 50,99 5,75 5,25"
                      stroke="#EF4444"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                  <div className="w-12 h-12 text-blue-900">
                    <Icon size={48} />
                  </div>
                </div>
                <span className="mt-4 text-lg font-semibold text-gray-900">
                  {support.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        <style>{`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fadeUp 0.8s ease forwards;
          }
        `}</style>
      </section>

      {/* ================== WHY US (4 image tiles, glass overlay on hover) ================== */}
      {/* ================= Why Us ================= */}
<section className="py-20 bg-gray-50 text-center">
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-montserrat"
  >
    Why Us
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.15 }}
    viewport={{ once: true }}
    className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg leading-relaxed font-montserrat"
  >
    When you partner with <span className="font-semibold text-blue-600">Technogen</span>, you gain
    more than a technology provider — you gain a long-term strategic ally.
  </motion.p>

  {/* Glassmorphism Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
    {[
      "20+ years of IT excellence delivering success across industries.",
      "Certified consultants and solution architects with proven Salesforce expertise.",
      "500+ successful projects delivered with precision and impact.",
      "Customer-first approach ensuring innovation, compliance, and measurable ROI.",
    ].map((text, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.15 }}
        viewport={{ once: true }}
        className="relative h-64 flex items-center justify-center p-8 rounded-2xl 
                   shadow-lg bg-white/20 backdrop-blur-lg border border-white/30
                   hover:bg-white/30 hover:shadow-2xl transition duration-500"
      >
        <p className="text-lg md:text-xl font-semibold text-gray-800 text-center leading-relaxed font-montserrat">
          {text}
        </p>
      </motion.div>
    ))}
  </div>
</section>


      {/* ================== CASE STUDIES CAROUSEL ================== */}
      <section className="relative py-16 text-white" style={{ backgroundColor: "#23214A" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold">CASE STUDY</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => scrollCarousel("left")}
                className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
                aria-label="scroll left"
              >
                &#8592;
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
                aria-label="scroll right"
              >
                &#8594;
              </button>
            </div>
          </div>

          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12">
            Discover how we’ve helped businesses transform with Salesforce solutions tailored for success.
          </p>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto space-x-6 scroll-smooth py-4 no-scrollbar"
          >
            {caseStudies.map((caseStudy, idx) => (
              <div
                key={idx}
                className="min-w-[260px] sm:min-w-[300px] rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all"
                style={{ backgroundColor: "#23214A" }}
              >
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="bg-white/10 backdrop-blur-md p-6 text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">
                    {caseStudy.description}
                  </p>
                  <button className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition">
                    Learn More &#8594;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== BOOK YOUR DEMO ================== */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-b-[2.5rem] max-w-7xl mx-auto">
          {/* Background Image */}
          <img
            src="https://www.shutterstock.com/image-photo/online-education-elearning-concept-learning-600nw-2305781813.jpg"
            alt="Book Your Demo"
            className="w-full h-[250px] sm:h-[300px] lg:h-[360px] object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 rounded-b-[2.5rem]" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-10 px-4 sm:px-8 z-10">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-4xl text-white">
             Unlock your Salesforce potential with Technogen. 
              <br className="hidden sm:block" />
             
            </h2>

            <div className="mt-6">
              <button className="cssbuttonsIoButton">
                Unlock Salesforce Today
                <div className="icon" aria-hidden>
                  <svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Styles: button, scrollbars, small animations */}
        <style>
          {`
            /* Fancy button used across the page */
            .cssbuttonsIoButton {
              background: #ce3266;
              color: white;
              font-family: inherit;
              border: 1px solid #ce3266;
              text-align: center;
              font-size: 15px;
              font-weight: 600;
              border-radius: 2rem;
              letter-spacing: 0.05em;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              position: relative;
              height: 3em;
              padding-right: 3em;
              padding-left: 1.2rem;
              cursor: pointer;
              transition: background-color 0.35s ease, color 0.35s ease, border 0.35s ease;
            }

            .cssbuttonsIoButton .icon {
              background: white;
              margin-left: 1em;
              position: absolute;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 2.2em;
              width: 2.2em;
              border-radius: 2rem;
              right: 0.4em;
              transition: all 0.25s ease-out;
            }

            .cssbuttonsIoButton:hover {
              background-color: white;
              color: #ce3266;
              border: 1px solid #ce3266;
            }

            .cssbuttonsIoButton .icon svg {
              width: 1em;
              transition: transform 0.3s ease-out;
              color: #ce3266;
            }

            .cssbuttonsIoButton:hover .icon svg {
              transform: translateX(0.12em) rotate(-25deg);
            }

            .cssbuttonsIoButton:active .icon {
              transform: scale(0.95);
            }

            /* Hide horizontal scrollbar in most browsers */
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
      </section>
    </div>
  );
};

export default SalesforcePage;
