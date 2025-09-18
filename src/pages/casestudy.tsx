// // import React from "react";
// // import { ArrowUpRight } from "lucide-react";

// // const CaseStudy: React.FC = () => {
// //   const caseStudies = [
// //     {
// //       id: 1,
// //       title: "Modernizing HRSA operations with our IT solutions",
// //       description:
// //         "Explore how we helped HRSA modernize IT operations, improve compliance, and strengthen healthcare delivery through innovation.",
// //       image:
// //         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600", // sample image
// //     },
// //     {
// //       id: 2,
// //       title: "Driving Efficiency in Public Sector IT",
// //       description:
// //         "Learn how our tailored IT services streamlined government operations and improved citizen services.",
// //       image:
// //         "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600",
// //     },
// //   ];

// //   return (
// //     <div className="w-full font-sans">
// //       {/* Hero Section */}
// //       <section className="relative w-full h-[70vh] bg-[#1f2140]">
// //         <img
// //           src="https://res.cloudinary.com/dqlxawz9r/image/upload/v1757680485/Black-Banner_bqniuy.png"
// //           alt="Case Study Banner"
// //           className="w-full h-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
// //           <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Study</h1>
// //           <h2 className="text-2xl md:text-3xl font-bold mb-2">
// //             PROVEN SOLUTIONS, REAL RESULTS
// //           </h2>
// //           <p className="max-w-2xl text-lg">
// //             See how Technogen helps organizations overcome obstacles and achieve
// //             sustainable success.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Case Studies Section (Single Column) */}
// //       <section className="max-w-4xl mx-auto px-6 py-16 space-y-10">
// //         {caseStudies.map((study) => (
// //           <div
// //             key={study.id}
// //             className="bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition p-4"
// //           >
// //             <div className="relative">
// //               <img
// //                 src={study.image}
// //                 alt={study.title}
// //                 className="w-full h-72 object-cover rounded-lg"
// //               />
// //               <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-gray-100">
// //                 <ArrowUpRight className="h-5 w-5 text-gray-700" />
// //               </button>
// //             </div>
// //             <div className="mt-4">
// //               <h3 className="text-lg font-bold text-[#1f2140] mb-2">
// //                 {study.title}
// //               </h3>
// //               <p className="text-gray-600 text-sm">{study.description}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </section>
// //     </div>
// //   );
// // };

// // export default CaseStudy;
// import React from "react";
// import { ArrowUpRight } from "lucide-react";

// const CaseStudy: React.FC = () => {
//   const caseStudy = {
//     id: 1,
//     title: "Modernizing HRSA operations with our IT solutions",
//     description:
//       "Explore how we helped HRSA modernize IT operations, improve compliance, and strengthen healthcare delivery through innovation.",
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600", // sample image
//   };

//   return (
//     <div className="w-full font-[Montserrat]">
//       {/* Hero Section */}
//       <section className="relative w-full h-screen">
//         <img
//           src="https://res.cloudinary.com/dqlxawz9r/image/upload/v1757680485/Black-Banner_bqniuy.png"
//           alt="Case Study Banner"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 flex justify-center items-center text-center text-white px-4 bg-black/50">
//           <h1 className="text-5xl md:text-6xl font-bold">Case Studies</h1>
//         </div>
//       </section>

//       {/* Section 2: Intro */}
//       <section className="max-w-4xl mx-auto px-6 py-16 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#1f2140] mb-4">
//           Proven Solutions, Real Results
//         </h2>
//         <p className="text-gray-700 text-lg">
//           See how Technogen helps organizations overcome obstacles and achieve
//           sustainable success.
//         </p>
//       </section>

//       {/* Case Study Card */}
//       <section className="max-w-4xl mx-auto px-6 pb-20">
//         <div className="bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition p-4">
//           <div className="relative">
//             <img
//               src={caseStudy.image}
//               alt={caseStudy.title}
//               className="w-full h-80 object-cover rounded-lg"
//             />
//             <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-gray-100">
//               <ArrowUpRight className="h-5 w-5 text-gray-700" />
//             </button>
//           </div>
//           <div className="mt-6">
//             <h3 className="text-xl font-bold text-[#1f2140] mb-2">
//               {caseStudy.title}
//             </h3>
//             <p className="text-gray-600 text-base">{caseStudy.description}</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CaseStudy;
import React from "react";
import { ArrowUpRight } from "lucide-react";

const CaseStudy: React.FC = () => {
  const caseStudy = {
    id: 1,
    title: "Modernizing HRSA operations with our IT solutions",
    description:
      "Explore how we helped HRSA modernize IT operations, improve compliance, and strengthen healthcare delivery through innovation.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600", // sample image
  };

  return (
    <div className="w-full font-[Montserrat]">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1757945022/Banners_And_images.3-05_p7pner.png"
          alt="Case Study Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center text-center text-white px-4 ">
          {/* <h1 className="text-5xl md:text-6xl font-bold">Case Studies</h1> */}
        </div>
      </section>

      {/* Section 2: Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f2140] mb-4">
          Proven Solutions, Real Results
        </h2>
        <p className="text-gray-700 text-lg">
          See how Technogen helps organizations overcome obstacles and achieve
          sustainable success.
        </p>
      </section>

      {/* Case Study Card */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="group relative rounded-xl border-2 border-gray-300 p-[6px] overflow-hidden transition">
          {/* Blue hover fill between borders */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#1f2140] transition"></div>

          {/* Inner content */}
          <div className="relative bg-white border border-gray-300 rounded-lg overflow-hidden group-hover:bg-[#1f2140] transition">
            <div className="relative">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-80 object-cover rounded-t-lg"
              />
              <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-gray-100">
                <ArrowUpRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1f2140] mb-2 group-hover:text-white transition">
                {caseStudy.title}
              </h3>
              <p className="text-gray-600 text-base group-hover:text-gray-200 transition">
                {caseStudy.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
