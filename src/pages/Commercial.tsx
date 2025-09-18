// import React from "react";
// import { motion } from "framer-motion";

// const Commercial: React.FC = () => {
//   return (
//     <div className="font-[Montserrat]">
//       {/* ===== Hero Banner ===== */}
//       <section
//         className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
//         style={{
//           backgroundImage:
//             "url('https://res.cloudinary.com/dqlxawz9r/image/upload/v1757584924/wmremove-transformed_1_yumuq5.jpg')",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50" />

//         {/* Text Content */}
//         <div className="relative z-10 text-center px-6 max-w-4xl -mt-20">
//           <motion.h1
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl font-bold leading-tight mb-6"
//           >
//             Transforming Enterprises Through <br />
//             <span className="text-pink-400">Intelligent Technology</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="text-lg md:text-xl text-gray-200"
//           >
//             Secure, Scalable, and Future-Ready Solutions for Every Business
//           </motion.p>
//         </div>
//       </section>

//       {/* ===== Section 2 (Introduction White Background) ===== */}
//       <section className="w-full py-20 px-6 md:px-20 bg-white">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#172059] mb-6">
//             Empowering Businesses in a Digital-First World
//           </h2>
//           <p className="text-gray-700 text-lg leading-relaxed mb-6">
//             Technogen empowers commercial enterprises to thrive in a digital-first
//             world by delivering secure, scalable, and innovative IT solutions.
//             With expertise spanning cloud transformation, AI/ML integration,
//             cybersecurity, and data analytics, we help organizations enhance
//             efficiency, accelerate growth, and stay ahead of the competition.
//           </p>
//           <p className="text-gray-700 text-lg leading-relaxed">
//             Our tailored services are designed to meet the unique needs of each
//             client, ensuring sustainable success in an ever-evolving marketplace.
//           </p>
//         </div>
//       </section>

//       {/* ===== Section 3 (Blue Background + Cards) ===== */}
//       <section className="w-full py-16 px-6 md:px-20 bg-[#22224b] text-white">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           Engagement Highlights
//         </h2>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
//           {/* ---------- Card 1 ---------- */}
//           <div className="relative cursor-pointer rounded-2xl shadow-lg overflow-hidden flex flex-col items-start w-[90%] md:w-[85%] min-h-[480px] mx-auto">
//             {/* Background video */}
//             <video
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="absolute inset-0 w-full h-full object-cover"
//             >
//               <source src="https://framerusercontent.com/assets/eg4zyU6B3t9AHH140oL8N6295Ew.mp4" type="video/mp4" />
//             </video>

//             {/* Content */}
//             <div className="relative z-10 p-8 flex flex-col h-full bg-black/50">
//               {/* Icon Circle */}
//               <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-black/40 mb-[200px]">
//                 <span className="text-lg font-bold">GSK</span>
//               </div>

//               {/* Heading */}
//               <h3 className="font-bold text-xl text-white border-b border-gray-400 pb-3 mb-4 w-full">
//                 GSK – Engagement Highlights
//               </h3>

//               {/* Description */}
//               <p className="text-gray-200 text-sm leading-relaxed">
//                 Technogen is leading the migration of GSK’s B2B eCommerce platform,
//                 <strong> gskdirect.com</strong>, to a headless architecture using
//                 SAP Commerce Cloud Composable Storefront. The project includes a
//                 full UI redesign to deliver a seamless headless experience,
//                 leveraging AngularJS, HTML5, TypeScript, CSS3, and JavaScript.
//               </p>
//             </div>
//           </div>

//           {/* ---------- Card 2 ---------- */}
//           <div className="relative cursor-pointer rounded-2xl shadow-lg overflow-hidden flex flex-col items-start w-[90%] md:w-[85%] min-h-[480px] mx-auto">
//             {/* Background video */}
//             <video
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="absolute inset-0 w-full h-full object-cover"
//             >
//               <source src="https://framerusercontent.com/assets/eg4zyU6B3t9AHH140oL8N6295Ew.mp4" type="video/mp4" />
//             </video>

//             {/* Content */}
//             <div className="relative z-10 p-8 flex flex-col h-full bg-black/50">
//               {/* Icon Circle */}
//               <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-black/40 mb-[200px]">
//                 <span className="text-lg font-bold">AKA</span>
//               </div>

//               {/* Heading */}
//               <h3 className="font-bold text-xl text-white border-b border-gray-400 pb-3 mb-4 w-full">
//                 AKA Brands – Engagement Highlights
//               </h3>

//               {/* Description */}
//               <p className="text-gray-200 text-sm leading-relaxed">
//                 Technogen is helping a.k.a. Holdings Corp. consolidate sales and
//                 customer data from multiple brands, overcoming challenges such as
//                 data silos, inconsistent formats, and disparate sources. Our
//                 solutions streamline data integration and provide unified,
//                 actionable insights to support informed decisions and drive growth.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Commercial;


import React from "react";
import { motion } from "framer-motion";

const Commercial: React.FC = () => {
  return (
    <div className="font-[Montserrat]">
      {/* ===== Hero Banner ===== */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dqlxawz9r/image/upload/v1757584924/wmremove-transformed_1_yumuq5.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl -mt-20">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Transforming Enterprises Through <br />
            <span className="text-pink-400">Intelligent Technology</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-200"
          >
            Secure, Scalable, and Future-Ready Solutions for Every Business
          </motion.p>
        </div>
      </section>

      {/* ===== Section 2 (Introduction White Background) ===== */}
      <section className="w-full py-20 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172059] mb-6">
            Empowering Businesses in a Digital-First World
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Technogen empowers commercial enterprises to thrive in a digital-first
            world by delivering secure, scalable, and innovative IT solutions.
            With expertise spanning cloud transformation, AI/ML integration,
            cybersecurity, and data analytics, we help organizations enhance
            efficiency, accelerate growth, and stay ahead of the competition.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our tailored services are designed to meet the unique needs of each
            client, ensuring sustainable success in an ever-evolving marketplace.
          </p>
        </div>
      </section>

      {/* ===== Section 3 (Framer BG Video + White Cards) ===== */}
      <section className="relative w-full py-16 px-6 md:px-20 text-white overflow-hidden">
        {/* Framer video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://framerusercontent.com/assets/eg4zyU6B3t9AHH140oL8N6295Ew.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Engagement Highlights
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
            {/* ---------- Card 1 ---------- */}
            <div className="relative cursor-pointer rounded-2xl shadow-lg overflow-hidden flex flex-col items-start w-[90%] md:w-[85%] min-h-[480px] mx-auto bg-white text-[#22224b]">
              {/* Content */}
              <div className="p-8 flex flex-col h-full">
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center bg-gray-100 mb-[200px]">
                  <span className="text-lg font-bold">GSK</span>
                </div>

                {/* Heading */}
                <h3 className="font-bold text-xl border-b border-gray-300 pb-3 mb-4 w-full">
                  GSK – Engagement Highlights
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  Technogen is leading the migration of GSK’s B2B eCommerce
                  platform, <strong>gskdirect.com</strong>, to a headless
                  architecture using SAP Commerce Cloud Composable Storefront.
                  The project includes a full UI redesign to deliver a seamless
                  headless experience, leveraging AngularJS, HTML5, TypeScript,
                  CSS3, and JavaScript.
                </p>
              </div>
            </div>

            {/* ---------- Card 2 ---------- */}
            <div className="relative cursor-pointer rounded-2xl shadow-lg overflow-hidden flex flex-col items-start w-[90%] md:w-[85%] min-h-[480px] mx-auto bg-white text-[#22224b]">
              {/* Content */}
              <div className="p-8 flex flex-col h-full">
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center bg-gray-100 mb-[200px]">
                  <span className="text-lg font-bold">AKA</span>
                </div>

                {/* Heading */}
                <h3 className="font-bold text-xl border-b border-gray-300 pb-3 mb-4 w-full">
                  AKA Brands – Engagement Highlights
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  Technogen is helping a.k.a. Holdings Corp. consolidate sales
                  and customer data from multiple brands, overcoming challenges
                  such as data silos, inconsistent formats, and disparate
                  sources. Our solutions streamline data integration and provide
                  unified, actionable insights to support informed decisions and
                  drive growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commercial;
