
// // import React, { useEffect } from "react";
// // import AOS from "aos";
// // import "aos/dist/aos.css";

// // const stateServices = [
// //   {
// //     title: "Cloud Services",
// //     description:
// //       "Provides scalable and secure cloud infrastructure to support government operations.",
// //     image:
// //       "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300",
// //   },
// //   {
// //     title: "Cybersecurity",
// //     description:
// //       "Protects government data and systems from cyber threats through comprehensive security measures, including firewalls, encryption, and monitoring services.",
// //     image:
// //       "https://images.pexels.com/photos/5380645/pexels-photo-5380645.jpeg?auto=compress&cs=tinysrgb&w=300",
// //   },
// //   {
// //     title: "Network Management",
// //     description:
// //       "Ensures reliable and secure communication networks for government agencies and public services.",
// //     image:
// //       "https://images.pexels.com/photos/1181318/pexels-photo-1181318.jpeg?auto=compress&cs=tinysrgb&w=300",
// //   },
// //   {
// //     title: "Application Modernization",
// //     description:
// //       "Upgrades and maintains legacy systems to ensure they meet current technology standards.",
// //     image:
// //       "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=300",
// //   },
// //   {
// //     title: "Data Management & Analytics",
// //     description:
// //       "Manages and analyzes large datasets to support decision-making and improve citizen services.",
// //     image:
// //       "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300",
// //   },
// //   {
// //     title: "Enterprise Resource Planning (ERP)",
// //     description:
// //       "Integrates administrative functions like finance, HR, and procurement into a unified system.",
// //     image:
// //       "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300",
// //   },
// //   {
// //     title: "Help Desk & Support Services",
// //     description:
// //       "Provides technical support and troubleshooting for government employees and agencies.",
// //     image:
// //       "https://images.pexels.com/photos/5453829/pexels-photo-5453829.jpeg?auto=compress&cs=tinysrgb&w=300",
// //   },
// //   {
// //     title: "AI and Automation",
// //     description:
// //       "Uses artificial intelligence and automation to streamline workflows and enhance operational efficiency.",
// //     image:
// //       "https://images.pexels.com/photos/8294627/pexels-photo-8294627.jpeg?auto=compress&cs=tinysrgb&w=300",
// //   },
// // ];

// // const localServices = [
// //   {
// //     title: "Managed IT Services",
// //     description:
// //       "MSPs handle monitoring, management, and maintenance of IT tasks to improve efficiency, enhance security, and manage costs.",
// //     image:
// //       "https://images.pexels.com/photos/1181318/pexels-photo-1181318.jpeg?auto=compress&cs=tinysrgb&w=300",
// //   },
// //   {
// //     title: "Cybersecurity Services",
// //     description:
// //       "Includes developing security policies, LAN and WAN perimeter protection, firewall enforcement, intrusion detection, and web filtering.",
// //     image:
// //       "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=300",
// //   },
// //   {
// //     title: "IT Infrastructure Solutions",
// //     description:
// //       "Covers planning, designing, implementing, and managing scalable IT environments to achieve government goals and ensure reliable services.",
// //     image:
// //       "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=300",
// //   },
// // ];

// // const StateLocalServices = () => {
// //   useEffect(() => {
// //     AOS.init({ duration: 1000, once: true });
// //   }, []);

// //   return (
// //     <section className="font-[Montserrat] relative overflow-hidden">
// //       {/* ===== Banner Section ===== */}
// //       <div
// //         className="w-full h-screen flex items-center justify-center text-center text-white bg-cover bg-center relative"
// //         style={{
// //           backgroundImage:
// //             "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758105913/State-_-local-banner_myplyu.png')",
// //         }}
// //       >
// //         <div className="absolute inset-0 " />
// //         {/* <div className="relative z-10 px-6 max-w-6xl">
// //           <h1
// //             className="text-5xl md:text-6xl font-bold mb-6"
// //             data-aos="fade-up"
// //           >
// //             Transforming Public Services with Advanced IT Solutions
// //           </h1>
// //           <p
// //             className="text-xl md:text-2xl font-medium"
// //             data-aos="fade-up"
// //             data-aos-delay="200"
// //           >
// //             Reliable, Scalable, and Citizen-Centered Technology for Every Agency
// //           </p>
// //         </div> */}
// //       </div>

// //       {/* ===== Section 2: Introduction ===== */}
// //       <div className="py-20 px-6 md:px-20 bg-white relative overflow-hidden">
        
// //         <div className="max-w-7xl mx-auto text-left relative">
// //           <h1
// //             className="text-5xl md:text-4xl font-bold mb-6"
// //             data-aos="fade-up"
// //           >
// //             Transforming Public Services with Advanced IT Solutions
// //           </h1>
// //           <p
// //             className="text-m md:text-2xl font-medium"
// //             data-aos="fade-up"
// //             data-aos-delay="200"
// //           >
// //             Reliable, Scalable, and Citizen-Centered Technology for Every Agency
// //           </p>
// //           <p
// //             className="text-black text-lg md:text-xl leading-relaxed mb-6"
// //             data-aos="fade-up"
// //           >
// //             Technogen enables state and local governments to modernize
// //             infrastructure, improve service delivery, and protect sensitive
// //             data via secure, scalable IT solutions. We’re partnering with
// //             agencies across health, education, and public safety to integrate
// //             AI analytics, cloud transformation, and streamlined workflows.
// //           </p>
// //           <p
// //             className="text-black text-lg md:text-xl leading-relaxed"
// //             data-aos="fade-up"
// //             data-aos-delay="200"
// //           >
// //             With our solutions, we aim to reduce operational friction, improve
// //             citizen experience, and ensure compliance.
// //           </p>
// //         </div>
// //       </div>

// //       {/* ===== Section 3: Services Offered (Blue Background) ===== */}
// //       <div className="relative py-20 px-6 md:px-20 bg-[#22224b] overflow-hidden">
// //         <h2
// //           className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
// //           data-aos="fade-up"
// //         >
// //           Services We Offer
// //         </h2>

// //         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
// //           {/* State Government */}
// //           <div data-aos="fade-up" className="text-center">
// //             <h3 className="text-2xl font-bold text-white mb-8">
// //               State Government
// //             </h3>
// //             <div className="space-y-6">
// //               {stateServices.map((service, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex items-start bg-white rounded-xl shadow-lg p-5 text-left hover:shadow-2xl transition-transform transform hover:scale-[1.02]"
// //                   data-aos="fade-up"
// //                 >
// //                   <img
// //                     src={service.image}
// //                     alt={service.title}
// //                     className="w-20 h-20 object-cover rounded-md border"
// //                   />
// //                   <div className="ml-4">
// //                     <h4 className="font-bold text-[#172059] mb-1">
// //                       {service.title}
// //                     </h4>
// //                     <p className="text-sm text-gray-600">
// //                       {service.description}
// //                     </p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Local Government */}
// //           <div data-aos="fade-up" className="text-center">
// //             <h3 className="text-2xl font-bold text-white mb-8">
// //               Local Government
// //             </h3>
// //             <div className="space-y-6">
// //               {localServices.map((service, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex items-start bg-white rounded-xl shadow-lg p-5 text-left hover:shadow-2xl transition-transform transform hover:scale-[1.02]"
// //                   data-aos="fade-up"
// //                 >
// //                   <img
// //                     src={service.image}
// //                     alt={service.title}
// //                     className="w-20 h-20 object-cover rounded-md border"
// //                   />
// //                   <div className="ml-4">
// //                     <h4 className="font-bold text-[#172059] mb-1">
// //                       {service.title}
// //                     </h4>
// //                     <p className="text-sm text-gray-600">
// //                       {service.description}
// //                     </p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ===== New Section: Maryland State IT Support & Development ===== */}
// //       <div className="py-20 px-6 md:px-20 bg-white relative overflow-hidden">
// //         <div className="max-w-6xl mx-auto text-center">
// //           <h2
// //             className="text-3xl md:text-4xl font-bold text-[#172059] mb-6"
// //             data-aos="fade-up"
// //           >
// //             Maryland State IT Support & Development
// //           </h2>
// //           <h3
// //             className="text-xl md:text-2xl font-semibold text-gray-800 mb-4"
// //             data-aos="fade-up"
// //             data-aos-delay="200"
// //           >
// //             Technogen’s Commitment to Public Service
// //           </h3>
// //           <p
// //             className="text-lg md:text-xl text-gray-700 leading-relaxed"
// //             data-aos="fade-up"
// //             data-aos-delay="400"
// //           >
// //             Technogen Inc. (TGI) provides comprehensive IT solutions to support
// //             the State of Maryland’s critical human services programs across
// //             multiple agencies. Our expertise spans IT applications development,
// //             operations & maintenance, systems analysis, and technical support,
// //             ensuring seamless service delivery for programs impacting thousands
// //             of Maryland residents.
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default StateLocalServices;
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { motion } from "framer-motion";

// const StateLocalServices = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section className="font-[Montserrat] relative overflow-hidden">
//       {/* ===== Banner Section ===== */}
//       <div
//         className="w-full h-screen flex items-center justify-center text-center text-white bg-cover bg-center relative"
//         style={{
//           backgroundImage:
//             "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758105913/State-_-local-banner_myplyu.png')",
//         }}
//       >
//         <div className="absolute inset-0" />
//       </div>

//       {/* ===== Section 2: Introduction ===== */}
//       <div className="py-20 px-6 md:px-20 bg-white relative overflow-hidden">
//         <div className="max-w-7xl mx-auto text-left relative">
//           <h1
//             className="text-5xl md:text-4xl font-bold mb-6"
//             data-aos="fade-up"
//           >
//             Transforming Public Services with Advanced IT Solutions
//           </h1>
//           <p
//             className="text-m md:text-2xl font-medium"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             Reliable, Scalable, and Citizen-Centered Technology for Every Agency
//           </p>
//           <p
//             className="text-black text-lg md:text-xl leading-relaxed mb-6"
//             data-aos="fade-up"
//           >
//             Technogen enables state and local governments to modernize
//             infrastructure, improve service delivery, and protect sensitive
//             data via secure, scalable IT solutions. We’re partnering with
//             agencies across health, education, and public safety to integrate
//             AI analytics, cloud transformation, and streamlined workflows.
//           </p>
//           <p
//             className="text-black text-lg md:text-xl leading-relaxed"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             With our solutions, we aim to reduce operational friction, improve
//             citizen experience, and ensure compliance.
//           </p>
//         </div>
//       </div>

//       {/* ===== Section 3: Services Offered with Background Video ===== */}
//       <section className="relative w-full overflow-hidden">
//         {/* Background video */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover z-0"
//         >
//           <source
//             src="https://framerusercontent.com/assets/eg4zyU6B3t9AHH140oL8N6295Ew.mp4"
//             type="video/mp4"
//           />
//         </video>

//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/40 z-0"></div>

//         {/* Content wrapper */}
//         <div className="relative z-10 w-full py-20 px-6 md:px-20 text-white">
//           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//             Services We Offer
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center max-w-7xl mx-auto">
//             {/* State Government Card */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="relative cursor-pointer rounded-2xl shadow-lg bg-white text-[#22224b] flex flex-col 
//               w-full min-h-[400px] p-8"
//             >
//               <h3 className="font-bold text-xl border-b border-gray-300 pb-2 mb-4 w-full">
//                 State Government
//               </h3>
//               <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow">
//                 Technogen delivers end-to-end IT solutions for government
//                 agencies, including Cloud Services, Cybersecurity, Network
//                 Management, Application Modernization, Data Analytics, ERP, Help
//                 Desk, and AI-driven Automation. We provide secure, scalable
//                 infrastructure, modernize legacy systems, and ensure reliable
//                 networks while protecting sensitive data. Our solutions
//                 streamline workflows, support informed decision-making, and
//                 enhance operational efficiency to improve government services.
//               </p>
//             </motion.div>

//             {/* Local Government Card */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative cursor-pointer rounded-2xl shadow-lg bg-white text-[#22224b] flex flex-col 
//               w-full min-h-[400px] p-8"
//             >
//               <h3 className="font-bold text-xl border-b border-gray-300 pb-2 mb-4 w-full">
//                 Local Government
//               </h3>
//               <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow">
//                 Technogen delivers end-to-end IT solutions for government
//                 agencies, combining Managed Services, Cybersecurity, and IT
//                 Infrastructure. We enhance efficiency, security, and cost
//                 management while protecting against cyber threats with advanced
//                 monitoring, policy enforcement, and intrusion detection. Our
//                 scalable infrastructure solutions ensure reliable, responsive,
//                 and future-ready IT services that support government objectives.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ===== Section 4: Maryland State IT Support & Development ===== */}
//       <div className="py-20 px-6 md:px-20 bg-white relative overflow-hidden">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2
//             className="text-3xl md:text-4xl font-bold text-[#172059] mb-6"
//             data-aos="fade-up"
//           >
//             Maryland State IT Support & Development
//           </h2>
//           <h3
//             className="text-xl md:text-2xl font-semibold text-gray-800 mb-4"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             Technogen’s Commitment to Public Service
//           </h3>
//           <p
//             className="text-lg md:text-xl text-gray-700 leading-relaxed"
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             Technogen Inc. (TGI) provides comprehensive IT solutions to support
//             the State of Maryland’s critical human services programs across
//             multiple agencies. Our expertise spans IT applications development,
//             operations & maintenance, systems analysis, and technical support,
//             ensuring seamless service delivery for programs impacting thousands
//             of Maryland residents.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StateLocalServices;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const StateLocalServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="font-[Montserrat] relative overflow-hidden">
      {/* ===== Banner Section ===== */}
      <div
        className="w-full h-screen flex items-center justify-center text-center text-white bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758105913/State-_-local-banner_myplyu.png')",
        }}
      >
        <div className="absolute inset-0" />
      </div>

      {/* ===== Section 2: Introduction ===== */}
      <div className="py-20 px-6 md:px-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-left relative">
          <h1
            className="text-5xl md:text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Transforming Public Services with Advanced IT Solutions
          </h1>
          <p
            className="text-m md:text-2xl font-medium"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Reliable, Scalable, and Citizen-Centered Technology for Every Agency
          </p>
          <p
            className="text-black text-lg md:text-xl leading-relaxed mb-6"
            data-aos="fade-up"
          >
            Technogen enables state and local governments to modernize
            infrastructure, improve service delivery, and protect sensitive
            data via secure, scalable IT solutions. We’re partnering with
            agencies across health, education, and public safety to integrate
            AI analytics, cloud transformation, and streamlined workflows.
          </p>
          <p
            className="text-black text-lg md:text-xl leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            With our solutions, we aim to reduce operational friction, improve
            citizen experience, and ensure compliance.
          </p>
        </div>
      </div>

      {/* ===== Section 3: Services Offered (Video + Cards) ===== */}
      <section className="relative w-full overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://framerusercontent.com/assets/eg4zyU6B3t9AHH140oL8N6295Ew.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content wrapper */}
        <div className="relative z-10 w-full py-20 px-6 md:px-20 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Services We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center max-w-7xl mx-auto">
            {[
              {
                title: "State Government",
                desc: "Technogen delivers end-to-end IT solutions for government agencies, including Cloud Services, Cybersecurity, Network Management, Application Modernization, Data Analytics, ERP, Help Desk, and AI-driven Automation. We provide secure, scalable infrastructure, modernize legacy systems, and ensure reliable networks while protecting sensitive data. Our solutions streamline workflows, support informed decision-making, and enhance operational efficiency to improve government services.",
                icon: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757685712/vuesax-linear-cloud-change_cnqlkn.svg",
              },
              {
                title: "Local Government",
                desc: "Technogen delivers end-to-end IT solutions for government agencies, combining Managed Services, Cybersecurity, and IT Infrastructure. We enhance efficiency, security, and cost management while protecting against cyber threats with advanced monitoring, policy enforcement, and intrusion detection. Our scalable infrastructure solutions ensure reliable, responsive, and future-ready IT services that support government objectives.",
                icon: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757685712/vuesax-linear-cloud-change_cnqlkn.svg",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 + idx * 0.2 }}
                viewport={{ once: true }}
                className="relative cursor-pointer rounded-2xl shadow-lg bg-white text-[#22224b] flex flex-col items-start 
                w-[90%] min-h-[450px] p-8 mx-auto"
              >
                <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center bg-gray-100 mb-8">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-bold text-xl border-b border-gray-300 pb-2 mb-4 w-full">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 4: Maryland State IT Support & Development ===== */}
      <div className="py-20 px-6 md:px-20 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#172059] mb-6"
            data-aos="fade-up"
          >
            Maryland State IT Support & Development
          </h2>
          <h3
            className="text-xl md:text-2xl font-semibold text-gray-800 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Technogen’s Commitment to Public Service
          </h3>
          <p
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Technogen Inc. (TGI) provides comprehensive IT solutions to support
            the State of Maryland’s critical human services programs across
            multiple agencies. Our expertise spans IT applications development,
            operations & maintenance, systems analysis, and technical support,
            ensuring seamless service delivery for programs impacting thousands
            of Maryland residents.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StateLocalServices;
