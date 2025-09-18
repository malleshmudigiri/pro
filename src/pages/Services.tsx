// import React, { useRef } from 'react';
// import { Cloud, Shield, Users, Heart, Building, BookOpen, Globe } from 'lucide-react';

// const ServiceNowPage: React.FC = () => {
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const scrollCarousel = (direction: 'left' | 'right') => {
//     if (carouselRef.current) {
//       const scrollAmount = 320;
//       if (direction === 'left') {
//         carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
//       } else {
//         carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//       }
//     }
//   };

//   const services = [
//     {
//       title: "Advise",
//       icon: Cloud,
//       description:
//         "From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.",
//     },
//     {
//       title: "Implement",
//       icon: Shield,
//       description:
//         "We build and deliver scalable, high-performing ServiceNow solutions that accelerate business outcomes and reduce time to value.",
//     },
//     {
//       title: "Manage",
//       icon: Users,
//       description:
//         "Our managed services ensure your platform evolves with your business through continuous support and improvement.",
//     },
//   ];

//   const supports = [
//     { icon: Building, label: 'FEDERAL' },
//     { icon: Heart, label: 'FED HEALTH' },
//     { icon: BookOpen, label: 'SLED' },
//     { icon: Globe, label: 'COMMERCIAL' },
//   ];

//   const caseStudies = [
//     { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
//     { title: 'Implement', description: 'By embedding AI at every step, we’re cutting timelines, reducing errors, and accelerating time-to-value. All this while maintaining governance and performance.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
//     { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
//     { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
//     { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
//   ];

//   const faqs = [
//     { question: 'What is ServiceNow?', answer: 'ServiceNow is a platform for digital workflows.' },
//     { question: 'How do I migrate to ServiceNow?', answer: 'We provide full-service migration solutions.' },
//     { question: 'What industries do you support?', answer: 'Federal, Healthcare, Education, Commercial.' },
//   ];

//   return (
//     <div className="font-sans text-gray-900">

//       {/* Hero Section */}
//       <section
//         className="relative w-full h-[100vh] md:h-screen bg-cover bg-center"
//         style={{ backgroundImage: "url('https://res.cloudinary.com/dh1chwfqf/image/upload/v1757515698/2_evbibb.png')" }}
//       >
//         <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
//           <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center px-4">
//             SERVICENOW
//           </h1>
//         </div>
//       </section>

//       {/* Advantage Section */}
//       <section className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-8 pt-20 bg-white">
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
//             opacity: 0.1,
//           }}
//         />
//         <div className="relative z-10 w-full max-w-5xl mx-auto text-left">
//           <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-black mb-8 leading-snug">
//             <span style={{ color: "#272654" }}>
//               Modernize ServiceNow to reduce technical debt <br></br> and scale with AI.
 
//             </span>
//           </h2>
//           <p className="text-base md:text-lg text-black leading-relaxed mb-12 max-w-3xl">
//             Are you still running on older ServiceNow releases? Then, you’re facing higher costs, compliance risks, and limited scalability. Many enterprises delay upgrades because they fear downtime, disruption, or long migration timelines. This usually only creates bigger challenges down the road.
//           </p>
//           <div>
//             <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
//               <span style={{ color: "#272654" }}>The Technogen Advantage</span>
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
//               <div>
//                 <h4 className="text-xl font-semibold text-black mb-2">
//                   <span style={{ color: "#272654" }}>Cut Costs</span>
//                 </h4>
//                 <p className="text-base text-black">
//                   We help you rationalize licenses, retire unused modules, and automate manual work.
//                 </p>
//               </div>
//               <div>
//                 <h4 className="text-xl font-semibold text-black mb-2">
//                   <span style={{ color: "#272654" }}>Stay Compliant</span>
//                 </h4>
//                 <p className="text-base text-black">
//                   Our proven upgrade playbooks ensure secure, error-free migrations with zero business disruption.
//                 </p>
//               </div>
//               <div>
//                 <h4 className="text-xl font-semibold text-black mb-2">
//                   <span style={{ color: "#272654" }}>Move Faster</span>
//                 </h4>
//                 <p className="text-base text-black">
//                   With AI embedded into workflows, you gain real-time insights into platform health, performance, and adoption.
//                 </p>
//               </div>
//               <div>
//                 <h4 className="text-xl font-semibold text-black mb-2">
//                   <span style={{ color: "#272654" }}>Scale Smarter</span>
//                 </h4>
//                 <p className="text-base text-black">
//                   We future-proof your ServiceNow investment with frameworks and accelerators designed to adapt as your business grows.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
//     {/* Left Content */}
//     <div className="md:w-1/3 text-left">
//       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
//         What We Do?
//       </h2>
//       <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md">
//         A long established fact that a reader will be distracted by the readable content when looking at its layout.
//       </p>
//     </div>

//     {/* Flip Cards Grid */}
//     <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {services.map(({ title, icon: Icon, description }, idx) => (
//         <div key={idx} className="flip-card cursor-pointer h-64 sm:h-72">
//           <div className="flip-card-inner group">
//             {/* Front */}
//             <div className="flip-card-front bg-white shadow p-6 rounded-lg flex flex-col items-center justify-center space-y-4">
//               <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-900 rounded-lg flex items-center justify-center">
//                 <Icon size={28} className="text-white sm:w-8 sm:h-8" />
//               </div>
//               <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center">{title}</h3>
//             </div>
//             {/* Back */}
//             <div className="flip-card-back bg-blue-50 shadow p-6 rounded-lg flex items-center justify-center">
//               <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
//                 {description}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Flip Card Styles */}
//   <style>{`
//     .flip-card {
//       perspective: 1000px;
//       width: 100%;
//     }
//     .flip-card-inner {
//       position: relative;
//       width: 100%;
//       height: 100%;
//       transform-style: preserve-3d;
//       transition: transform 0.8s ease-in-out;
//     }
//     .flip-card:hover .flip-card-inner {
//       transform: rotateY(180deg);
//     }
//     .flip-card-front, .flip-card-back {
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       backface-visibility: hidden;
//       border-radius: 0.5rem;
//     }
//     .flip-card-back {
//       transform: rotateY(180deg);
//     }
//   `}</style>
// </section>


//       {/* Who We Support */}
//       <section className="py-24 bg-white text-center px-6">
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Who We Support</h2>
//         <p className="text-gray-600 max-w-2xl mx-auto mb-12">
//           A long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
//         </p>
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
//           {supports.map((support, idx) => (
//             <div key={idx} className="flex flex-col items-center animate-fade-up">
//               <div className="w-24 h-24 flex items-center justify-center relative group hover:scale-105 transition-transform duration-500">
//                 <svg viewBox="0 0 100 100" className="absolute w-full h-full">
//                   <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" stroke="#EF4444" strokeWidth="3" fill="none" />
//                 </svg>
//                 <div className="w-12 h-12 text-blue-900">
//                   <support.icon size={48} />
//                 </div>
//               </div>
//               <span className="mt-4 text-lg font-semibold text-gray-900">{support.label}</span>
//             </div>
//           ))}
//         </div>
//         <style>{`
//           @keyframes fadeUp {
//             0% { opacity: 0; transform: translateY(20px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//           .animate-fade-up {
//             animation: fadeUp 0.8s ease forwards;
//           }
//         `}</style>
//       </section>

      // {/* FAQ Section */}
      // <section className="w-full bg-white text-gray-900 px-6 py-24">
      //   <div className="max-w-7xl mx-auto">
      //     <div className="flex flex-col lg:flex-row items-start gap-12">
      //       <div className="lg:w-1/3">
      //         <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-900 mb-6">
      //           Frequently Asked Questions
      //         </h2>
      //         <a href="/faq" className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition font-sans">
      //           See more FAQs →
      //         </a>
      //       </div>
      //       <div className="lg:w-2/3 space-y-6">
      //         {faqs.map(({ question, answer }, idx) => (
      //           <details key={idx} className="border-b border-gray-300 pb-4 group">
      //             <summary className="cursor-pointer font-semibold text-lg font-heading flex justify-between items-center">
      //               {question}
      //               <span className="ml-2 text-blue-600 group-open:rotate-180 transition-transform duration-300">&#9660;</span>
      //             </summary>
      //             <p className="mt-2 text-gray-700 font-sans">{answer}</p>
      //           </details>
      //         ))}
      //       </div>
      //     </div>
      //   </div>
      // </section>
      //  {/* Case Studies Carousel */}
      // <section className="relative py-10 text-white" style={{ backgroundColor: '#23214A' }}>
      //   <div className="max-w-7xl mx-auto px-6">
      //     <div className="flex items-center justify-between mb-8">
      //       <h2 className="text-3xl sm:text-4xl font-extrabold">CASE STUDY</h2>
      //       <div className="flex space-x-2">
      //         <button
      //           onClick={() => scrollCarousel('left')}
      //           className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
      //         >
      //           &#8592;
      //         </button>
      //         <button
      //           onClick={() => scrollCarousel('right')}
      //           className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
      //         >
      //           &#8594;
      //         </button>
      //       </div>
      //     </div>
      //     <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12">
      //       It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      //     </p>
      //     <div
      //       ref={carouselRef}
      //       className="flex overflow-x-auto space-x-6 scroll-smooth py-4 no-scrollbar"
      //     >
      //       {caseStudies.map((caseStudy, idx) => (
      //         <div
      //           key={idx}
      //           className="min-w-[260px] sm:min-w-[300px] rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all"
      //           style={{ backgroundColor: '#23214A' }}
      //         >
      //           <img
      //             src={caseStudy.image}
      //             alt={caseStudy.title}
      //             className="w-full h-40 sm:h-48 object-cover"
      //           />
      //           <div className="bg-white/10 backdrop-blur-md p-6 text-left">
      //             <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
      //               {caseStudy.title}
      //             </h3>
      //             <p className="text-gray-300 mb-4 text-sm sm:text-base">{caseStudy.description}</p>
      //             <button className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition">
      //               Learn More &#8594;
      //             </button>
      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </section>
//      {/* Book Your Demo */}
// <section className="relative px-4 sm:px-6 lg:px-8">
//   <div className="relative overflow-hidden rounded-b-[2.5rem] max-w-7xl mx-auto">
//     {/* Background Image */}
//     <img
//       src="https://www.shutterstock.com/image-photo/online-education-elearning-concept-learning-600nw-2305781813.jpg"
//       alt="Book Your Demo"
//       className="w-full h-[250px] sm:h-[300px] lg:h-[360px] object-cover"
//     />

//     {/* Dark Overlay */}
//     <div className="absolute inset-0 bg-black/60 rounded-b-[2.5rem]"></div>

//     {/* Content (bottom-aligned) */}
//     <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-10 px-4 sm:px-8 z-10">
//       <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-4xl text-white">
//         With us, your ServiceNow journey is faster, safer, <br className="hidden sm:block" />
//         and designed for long-term success.
//       </h2>

//       {/* ✅ Added space between H1 and button */}
//       <div className="mt-6">
//         <button className="cssbuttonsIoButton">
//           Book Your Free Health Check
//           <div className="icon">
//             <svg
//               height="20"
//               width="20"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M0 0h24v24H0z" fill="none"></path>
//               <path
//                 d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
//                 fill="currentColor"
//               ></path>
//             </svg>
//           </div>
//         </button>
//       </div>
//     </div>
//   </div>

//   {/* ✅ Fancy Button Styles */}
//   <style>
//     {`
//       .cssbuttonsIoButton {
//         background: #ce3266;
//         color: white;
//         font-family: inherit;
//         border: 1px solid #ce3266;
//         text-align: center;
//         font-size: 15px;
//         font-weight: 600;
//         border-radius: 2rem;
//         letter-spacing: 0.05em;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         overflow: hidden;
//         position: relative;
//         height: 3em;
//         padding-right: 3em;
//         padding-left: 1.2rem;
//         cursor: pointer;
//         transition: background-color 0.4s ease, color 0.4s ease, border 0.4s ease;
//       }

//       .cssbuttonsIoButton .icon {
//         background: white;
//         margin-left: 1em;
//         position: absolute;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         height: 2.2em;
//         width: 2.2em;
//         border-radius: 2rem;
//         right: 0.4em;
//         transition: all 0.3s ease-out;
//       }

//       .cssbuttonsIoButton:hover {
//         background-color: white;
//         color: #ce3266;
//         border: 1px solid #ce3266;
//       }

//       .cssbuttonsIoButton .icon svg {
//         width: 1em;
//         transition: transform 0.3s ease-out;
//         color: #ce3266;
//       }

//       .cssbuttonsIoButton:hover .icon svg {
//         transform: translateX(0.1em) rotate(-25deg);
//       }

//       .cssbuttonsIoButton:active .icon {
//         transform: scale(0.95);
//       }
//     `}
//   </style>
// </section>

//     </div>
//   );
// };

// export default ServiceNowPage;
import React, { useRef } from 'react';
import { Cloud, Shield, Users, Heart, Building, BookOpen, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceNowPage: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      if (direction === 'left') {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const services = [
    {
      title: "Advise",
      icon: Cloud,
      description:
        "From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.",
    },
    {
      title: "Implement",
      icon: Shield,
      description:
        "We build and deliver scalable, high-performing ServiceNow solutions that accelerate business outcomes and reduce time to value.",
    },
    {
      title: "Manage",
      icon: Users,
      description:
        "Our managed services ensure your platform evolves with your business through continuous support and improvement.",
    },
  ];

  const supports = [
    { icon: Building, label: 'FEDERAL' },
    { icon: Heart, label: 'FED HEALTH' },
    { icon: BookOpen, label: 'SLED' },
    { icon: Globe, label: 'COMMERCIAL' },
  ];

  const caseStudies = [
    { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
    { title: 'Implement', description: 'By embedding AI at every step, we’re cutting timelines, reducing errors, and accelerating time-to-value. All this while maintaining governance and performance.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
    { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
    { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
    { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
  ];

  const faqs = [
    { question: 'What is ServiceNow?', answer: 'ServiceNow is a platform for digital workflows.' },
    { question: 'How do I migrate to ServiceNow?', answer: 'We provide full-service migration solutions.' },
    { question: 'What industries do you support?', answer: 'Federal, Healthcare, Education, Commercial.' },
  ];

  return (
    <div className="font-sans text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative w-full h-[100vh] md:h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dh1chwfqf/image/upload/v1757515698/2_evbibb.png')" }}
      >
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center px-4">
            SERVICENOW
          </h1>
        </div>
      </section>

     {/* ================= Advantage ================= */}
<section className="relative min-h-screen w-full flex items-center justify-center px-8 pt-12 bg-white">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative z-10 w-full max-w-6xl mx-auto text-center"
  >
    {/* Heading & Description */}
    <div className="flex flex-col items-center justify-center text-center px-4 mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
        <span className="text-[#272654]">
          Modernize ServiceNow to reduce technical  <br />  debt and scale with AI.
        </span>
      </h2>

      <p className="md:text-lg text-gray-700 leading-relaxed max-w-3xl">
        Are you still running on older ServiceNow releases? Then, you’re facing
        higher costs, compliance risks, and limited scalability. Many enterprises 
        delay upgrades because they fear downtime, disruption, or long migration 
        timelines. This usually only creates bigger challenges down the road.
      </p>
    </div>

    {/* Technogen Advantage */}
    <h3 className="text-2xl md:text-3xl font-bold text-[#ce3266] mb-10">
      The Technogen Advantage
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "Cut Costs",
          desc: "We help you rationalize licenses, retire unused modules, and automate manual work.",
        },
        {
          title: "Stay Compliant",
          desc: "Our proven upgrade playbooks ensure secure, error-free migrations with zero business disruption.",
        },
        {
          title: "Move Faster",
          desc: "With AI embedded into workflows, you gain real-time insights into platform health, performance, and adoption.",
        },
        {
          title: "Scale Smarter",
          desc: "We future-proof your ServiceNow investment with frameworks and accelerators designed to adapt as your business grows.",
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

  <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
  {/* Background video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="https://framerusercontent.com/assets/eg4zyU6B3t9AHH140oL8N6295Ew.mp4" type="video/mp4" />
  </video>

  {/* Optional dark overlay for readability */}
  <div className="absolute inset-0 bg-black/30 z-0" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
    {/* Left Content */}
    <div className="md:w-1/3 text-left">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
        What We Do?
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-md">
        A long established fact that a reader will be distracted by the readable content when looking at its layout.
      </p>
    </div>

    {/* Flip Cards Grid */}
    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {services.map(({ title, icon: Icon, description }, idx) => (
        <div key={idx} className="flip-card cursor-pointer h-64 sm:h-72">
          <div className="flip-card-inner group">
            {/* Front */}
            <div className="flip-card-front bg-white shadow p-6 rounded-lg flex flex-col items-center justify-center space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-900 rounded-lg flex items-center justify-center">
                <Icon size={28} className="text-white sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center">
                {title}
              </h3>
            </div>
            {/* Back */}
            <div className="flip-card-back bg-blue-50 shadow p-6 rounded-lg flex items-center justify-center">
              <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Flip Card Styles */}
  <style>{`
    .flip-card {
      perspective: 1000px;
      width: 100%;
    }
    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.8s ease-in-out;
    }
    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
    .flip-card-front, .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 0.5rem;
    }
    .flip-card-back {
      transform: rotateY(180deg);
    }
  `}</style>
</section>


      {/* Who We Support */}
      <section className="py-24 bg-white text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Who We Support</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          A long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
          {supports.map((support, idx) => (
            <div key={idx} className="flex flex-col items-center animate-fade-up">
              <div className="w-24 h-24 flex items-center justify-center relative group hover:scale-105 transition-transform duration-500">
                <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                  <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" stroke="#EF4444" strokeWidth="3" fill="none" />
                </svg>
                <div className="w-12 h-12 text-blue-900">
                  <support.icon size={48} />
                </div>
              </div>
              <span className="mt-4 text-lg font-semibold text-gray-900">{support.label}</span>
            </div>
          ))}
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

      {/* ================= What We Do ================= */}
      {/* (same as your code, not touched) */}

      {/* ================= Who We Support ================= */}
      {/* (same as your code, not touched) */}

      {/* ================= FAQ ================= */}
      {/* (same as your code, not touched) */}

      {/* ================= Case Studies ================= */}
      {/* (same as your code, not touched) */}

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

           {/* Case Studies Carousel */}
      <section className="relative py-10 text-white" style={{ backgroundColor: '#23214A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold">CASE STUDY</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => scrollCarousel('left')}
                className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
              >
                &#8592;
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
              >
                &#8594;
              </button>
            </div>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <div
            ref={carouselRef}
            className="flex overflow-x-auto space-x-6 scroll-smooth py-4 no-scrollbar"
          >
            {caseStudies.map((caseStudy, idx) => (
              <div
                key={idx}
                className="min-w-[260px] sm:min-w-[300px] rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all"
                style={{ backgroundColor: '#23214A' }}
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
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">{caseStudy.description}</p>
                  <button className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition">
                    Learn More &#8594;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* ================= Book Your Demo ================= */}
<section className="relative px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl">
    {/* Gradient Background */}
    <div className="bg-gradient-to-b from-gray-300 to-black p-10 sm:p-16 lg:p-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-montserrat">
        BOOK YOUR DEMO TODAY!
      </h2>

      {/* Subheading */}
      <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl mx-auto">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking
      </p>

      {/* Button */}
      <div className="mt-8">
        <button className="px-8 py-3 rounded-md bg-pink-600 text-white font-semibold tracking-wide shadow-lg hover:bg-pink-700 transition">
          BOOK YOUR CONSULTATION
        </button>
      </div>
    </div>
  </div>
</section>



{/* FAQ Section */}
      <section className="w-full bg-white text-gray-900 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-900 mb-6">
                Frequently Asked Questions
              </h2>
              <a href="/faq" className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition font-sans">
                See more FAQs →
              </a>
            </div>
            <div className="lg:w-3/3 space-y-6">
              {faqs.map(({ question, answer }, idx) => (
                <details key={idx} className="border-b border-gray-300 pb-4 group">
                  <summary className="cursor-pointer font-semibold text-lg font-heading flex justify-between items-center">
                    {question}
                    <span className="ml-2 text-blue-600 group-open:rotate-180 transition-transform duration-300">&#9660;</span>
                  </summary>
                  <p className="mt-2 text-gray-700 font-sans">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceNowPage;
