// // // import React from 'react';
// // // import { Mail, Linkedin } from 'lucide-react';

// // // const Leadership: React.FC = () => {
// // //   const leaders = [
// // //     {
// // //       name: "Sarah Johnson",
// // //       title: "Chief Executive Officer",
// // //       bio: "With over 20 years of experience in technology consulting, Sarah leads Technogen's strategic vision and client relationships.",
// // //       image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
// // //       email: "sarah.johnson@Technogen.com",
// // //       linkedin: "https://linkedin.com/in/sarah-johnson"
// // //     },
// // //     {
// // //       name: "Michael Chen",
// // //       title: "Chief Technology Officer",
// // //       bio: "Michael oversees our technical delivery and innovation initiatives, bringing 15+ years of enterprise architecture experience.",
// // //       image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
// // //       email: "michael.chen@Technogen.com",
// // //       linkedin: "https://linkedin.com/in/michael-chen"
// // //     },
// // //     {
// // //       name: "Dr. Amanda Rodriguez",
// // //       title: "Chief Operating Officer",
// // //       bio: "Amanda manages our operations and ensures delivery excellence across all client engagements and internal processes.",
// // //       image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
// // //       email: "amanda.rodriguez@Technogen.com",
// // //       linkedin: "https://linkedin.com/in/amanda-rodriguez"
// // //     },
// // //     {
// // //       name: "David Thompson",
// // //       title: "Chief Financial Officer",
// // //       bio: "David brings financial expertise and strategic planning to support Technogen's growth and operational efficiency.",
// // //       image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400",
// // //       email: "david.thompson@Technogen.com",
// // //       linkedin: "https://linkedin.com/in/david-thompson"
// // //     }
// // //   ];

// // //   return (
// // //     <div className="pt-16">
// // //       {/* Hero Section */}
// // //       <section className="bg-[#172059] text-white py-20">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center">
// // //             <h1 className="text-4xl lg:text-5xl font-bold mb-6">Leadership Team</h1>
// // //             <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
// // //               Meet the experienced leaders driving innovation and excellence at Technogen
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Leadership Grid */}
// // //       <section className="py-16 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// // //             {leaders.map((leader, index) => (
// // //               <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
// // //                 <div className="flex flex-col sm:flex-row gap-6">
// // //                   <img
// // //                     src={leader.image}
// // //                     alt={leader.name}
// // //                     className="w-32 h-32 rounded-lg object-cover mx-auto sm:mx-0"
// // //                   />
// // //                   <div className="flex-1 text-center sm:text-left">
// // //                     <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
// // //                     <p className="text-[#172059] font-semibold mb-4">{leader.title}</p>
// // //                     <p className="text-gray-600 mb-6">{leader.bio}</p>
// // //                     <div className="flex justify-center sm:justify-start space-x-4">
// // //                       <a
// // //                         href={`mailto:${leader.email}`}
// // //                         className="flex items-center text-[#172059] hover:text-[#1a1f4f] transition-colors"
// // //                       >
// // //                         <Mail className="h-5 w-5 mr-1" />
// // //                         Email
// // //                       </a>
// // //                       <a
// // //                         href={leader.linkedin}
// // //                         target="_blank"
// // //                         rel="noopener noreferrer"
// // //                         className="flex items-center text-[#172059] hover:text-[#1a1f4f] transition-colors"
// // //                       >
// // //                         <Linkedin className="h-5 w-5 mr-1" />
// // //                         LinkedIn
// // //                       </a>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Leadership Philosophy */}
// // //       <section className="py-16 bg-gray-50">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-12">
// // //             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Philosophy</h2>
// // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // //               Our leadership team believes in fostering innovation, maintaining transparency, and building lasting relationships 
// // //               with both our clients and team members.
// // //             </p>
// // //           </div>
          
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //             <div className="text-center">
// // //               <h3 className="text-xl font-bold text-gray-900 mb-4">Servant Leadership</h3>
// // //               <p className="text-gray-600">
// // //                 We lead by serving others, empowering our team members to achieve their full potential 
// // //                 and deliver exceptional value to our clients.
// // //               </p>
// // //             </div>
// // //             <div className="text-center">
// // //               <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
// // //               <p className="text-gray-600">
// // //                 We embrace continuous learning and adaptation, staying current with emerging technologies 
// // //                 and industry best practices to better serve our clients.
// // //               </p>
// // //             </div>
// // //             <div className="text-center">
// // //               <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborative Approach</h3>
// // //               <p className="text-gray-600">
// // //                 We believe in the power of collaboration, working closely with clients and partners 
// // //                 to achieve shared goals and create lasting impact.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default Leadership;

// // // import React from "react";
// // // import { Linkedin } from "lucide-react";

// // // const LeaderCard: React.FC<{
// // //   name: string;
// // //   title: string;
// // //   image: string;
// // //   linkedin: string;
// // // }> = ({ name, title, image, linkedin }) => {
// // //   return (
// // //     <div className="relative group rounded-xl transition">
// // //       {/* Outer Border */}
// // //       <div className="relative rounded-xl border-2 border-gray-300 p-[6px] overflow-hidden">
// // //         {/* Blue hover fill between outer + inner border */}
// // //         <div className="absolute inset-0 bg-transparent group-hover:bg-[#172059] transition"></div>

// // //         {/* Inner Border + Content */}
// // //         <div className="relative border border-gray-300 rounded-lg overflow-hidden bg-white group-hover:bg-[#172059] transition">
// // //           {/* Image */}
// // //           <div className="relative">
// // //             <img src={image} alt={name} className="w-full h-64 object-cover" />

// // //             {/* LinkedIn Icon inside image */}
// // //             <a
// // //               href={linkedin}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className="absolute bottom-2 right-2 bg-white border border-gray-300 rounded-md p-1 shadow group-hover:bg-[#0a66c2] group-hover:border-white transition"
// // //             >
// // //               <Linkedin className="h-5 w-5 text-[#0a66c2] group-hover:text-white" />
// // //             </a>
// // //           </div>

// // //           {/* Text with top border */}
// // //           <div className="border-t border-gray-300 p-4 group-hover:border-white transition">
// // //             <h3 className="font-semibold text-gray-900 text-lg group-hover:text-white transition">
// // //               {name}
// // //             </h3>
// // //             <p className="text-sm text-gray-600 group-hover:text-gray-200 transition">
// // //               {title}
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const Leadership: React.FC = () => {
// // //   const leaders = [
// // //     {
// // //       name: "Kiranmai Kesa",
// // //       title: "Founder, President, CFO",
// // //       image: "https://th.bing.com/th/id/OPAC.AxTEBCxKdIQoYA474C474?w=592&h=550&o=5&dpr=1.5&pid=21.1",
// // //       linkedin: "https://linkedin.com",
// // //     },
// // //     {
// // //       name: "Lax Chepuri",
// // //       title: "Chief Executive Officer",
// // //       image: "https://th.bing.com/th/id/OPAC.AxTEBCxKdIQoYA474C474?w=592&h=550&o=5&dpr=1.5&pid=21.1",
// // //       linkedin: "https://th.bing.com/th/id/OPAC.AxTEBCxKdIQoYA474C474?w=592&h=550&o=5&dpr=1.5&pid=21.1",
// // //     },
// // //     {
// // //       name: "Sunil Nambiar",
// // //       title: "Vice President – Customer Success",
// // //       image: "https://th.bing.com/th/id/OPAC.AxTEBCxKdIQoYA474C474?w=592&h=550&o=5&dpr=1.5&pid=21.1",
// // //       linkedin: "https://linkedin.com",
// // //     },
// // //   ];

// // //   return (
// // //     <div className="bg-white py-16">
// // //       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
// // //         {leaders.map((leader, i) => (
// // //           <LeaderCard key={i} {...leader} />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Leadership;
// import React from "react";
// import { Linkedin } from "lucide-react";

// const LeaderCard: React.FC<{
//   name: string;
//   title: string;
//   image: string;
//   linkedin: string;
// }> = ({ name, title, image, linkedin }) => {
//   return (
//     <div className="relative group rounded-xl transition font-[Montserrat]">
//       {/* Outer Border */}
//       <div className="relative rounded-xl border-2 border-gray-300 p-[6px] overflow-hidden">
//         {/* Blue hover fill between outer + inner border */}
//         <div className="absolute inset-0 bg-transparent group-hover:bg-[#172059] transition"></div>

//         {/* Inner Border + Content */}
//         <div className="relative border border-gray-300 rounded-lg overflow-hidden bg-white group-hover:bg-[#172059] transition">
//           {/* Image */}
//           <div className="relative">
//             <img src={image} alt={name} className="w-full h-64 object-cover" />

//             {/* LinkedIn Icon inside image */}
//             <a
//               href={linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="absolute bottom-2 right-2 bg-white border border-gray-300 rounded-md p-1 shadow group-hover:bg-[#0a66c2] group-hover:border-white transition"
//             >
//               <Linkedin className="h-5 w-5 text-[#0a66c2] group-hover:text-white" />
//             </a>
//           </div>

//           {/* Text with top border */}
//           <div className="border-t border-gray-300 p-4 group-hover:border-white transition">
//             <h3 className="font-semibold text-gray-900 text-lg group-hover:text-white transition">
//               {name}
//             </h3>
//             <p className="text-sm text-gray-600 group-hover:text-gray-200 transition">
//               {title}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Leadership: React.FC = () => {
//   const leaders = [
//     {
//       name: "Kiranmai Kesa",
//       title: "Founder, President, CFO",
//       image:
//         "https://th.bing.com/th/id/OPAC.AxTEBCxKdIQoYA474C474?w=592&h=550&o=5&dpr=1.5&pid=21.1",
//       linkedin: "https://linkedin.com",
//     },
//     {
//       name: "Lax Chepuri",
//       title: "Chief Executive Officer",
//       image:
//         "https://th.bing.com/th/id/OPAC.AxTEBCxKdIQoYA474C474?w=592&h=550&o=5&dpr=1.5&pid=21.1",
//       linkedin: "https://linkedin.com",
//     },
//     {
//       name: "Sunil Nambiar",
//       title: "Vice President – Customer Success",
//       image:
//         "https://th.bing.com/th/id/OPAC.AxTEBCxKdIQoYA474C474?w=592&h=550&o=5&dpr=1.5&pid=21.1",
//       linkedin: "https://linkedin.com",
//     },
//     {
//       name: "Rob Williams",
//       title: "Vice President –  Cyber Security ",
//       image:
//         "https://th.bing.com/th/id/OPAC.AxTEBCxKdIQoYA474C474?w=592&h=550&o=5&dpr=1.5&pid=21.1",
//       linkedin: "https://linkedin.com",
//     },
//     {
//       name: "Sunil Nambiar",
//       title: "Executive Vice President – Customer Success",
//       image:
//         "https://th.bing.com/th/id/OPAC.AxTEBCxKdIQoYA474C474?w=592&h=550&o=5&dpr=1.5&pid=21.1",
//       linkedin: "https://linkedin.com",
//     },
//   ];

//   return (
//     <div className="w-full font-[Montserrat]">
//       {/* Section 1: Full-screen Banner */}
//       <section
//         className="w-full h-screen bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://res.cloudinary.com/dqlxawz9r/image/upload/v1757680485/Black-Banner_bqniuy.png')",
//         }}
//       >
//         <h1 className="text-5xl md:text-6xl font-bold text-white">
//           Leadership
//         </h1>
//       </section>

//       {/* Section 2: Heading + Subheading */}
//       <section className="py-16 bg-white text-center px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//           Meet Technogen Leadership
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
//           Our visionary leaders drive innovation and excellence at every step.
//         </p>
//         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//           Our leadership inspires excellence across every project. Together,
//           we’re redefining what technology can achieve.
//         </p>
//       </section>

//       {/* Section 3: Leader Cards */}
//       <section className="bg-white pb-16">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
//           {leaders.map((leader, i) => (
//             <LeaderCard key={i} {...leader} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Leadership;
import React from "react";
import { Linkedin } from "lucide-react";

// 🔹 LeaderCard Component
const LeaderCard: React.FC<{
  name: string;
  title: string;
  image: string;
  linkedin: string;
}> = ({ name, title, image, linkedin }) => {
  return (
    <div className="relative group rounded-xl transition font-[Montserrat]">
      {/* Outer Border */}
      <div className="relative rounded-xl border-2 border-gray-300 p-[6px] overflow-hidden">
        {/* Blue hover fill between outer + inner border */}
        <div className="absolute inset-0 bg-transparent group-hover:bg-[#172059] transition"></div>

        {/* Inner Border + Content */}
        <div className="relative border border-gray-300 rounded-lg overflow-hidden bg-white group-hover:bg-[#172059] transition">
          {/* Image (square ratio, auto height) */}
          <div className="relative w-full aspect-square overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>

          {/* Text + LinkedIn */}
          <div className="border-t border-gray-300 p-4 group-hover:border-white transition flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 text-lg group-hover:text-white transition">
                {name}
              </h3>

              {/* LinkedIn Fancy Button */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group/linkedin relative bg-sky-700 hover:bg-sky-600 w-10 hover:w-40 h-10 rounded text-neutral-50 duration-700 flex justify-start items-center gap-2 p-2 pr-6 overflow-hidden"
              >
                <Linkedin className="w-6 h-6 shrink-0 fill-neutral-50" />
                <span className="origin-left inline-flex duration-100 group-hover/linkedin:duration-300 group-hover/linkedin:delay-500 opacity-0 group-hover/linkedin:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover/linkedin:scale-x-100 transition-all">
                  Connect
                </span>
              </a>
            </div>

            <p className="text-sm text-gray-600 group-hover:text-gray-200 transition">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🔹 Leaders Data
const leaders = [
  {
    name: "Kiranmai Kesa",
    title: "Founder, President CFO",
    image:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1757939224/78a444c8-474d-4751-ba03-589226317152.png",
    linkedin: "https://www.linkedin.com/in//",
  },
  {
    name: "Lax Chepuri",
    title: "Chief Executive Officer",
    image:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1757939257/c65c49f9-762b-4f3b-8669-48879c204218.png",
    linkedin: "https://www.linkedin.com/in//",
  },
  {
    name: "Sunil Nambiar",
    title: "Vice President Customer Success",
    image:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1757939275/2944f58c-27a9-44ed-905d-bf01543db5c4.png",
    linkedin: "https://www.linkedin.com/in//",
  },
  {
    name: "Rob Williams",
    title: "Vice President",
    image:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1757939327/c477f3f2-c8d8-45dc-bc1b-533000aa47d0.png",
    linkedin: "https://www.linkedin.com/in//",
  },
  {
    name: "Emil J. Modugno",
    title: "Executive Vice President",
    image:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1757939312/4108593d-17f1-49a0-a66a-d508f0e877c4.png",
    linkedin: "https://www.linkedin.com/in//",
  },
];

// 🔹 Leadership Page
const Leadership: React.FC = () => {
  return (
    <main className="font-[Montserrat]">
      {/* ===== HERO / LANDING ===== */}
      <section className="relative w-full h-screen">
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1757945019/Banners-And-images_o5k5ml.png"
          alt="Leadership Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          {/* <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            Leadership
          </h1> */}
          {/* <p className="max-w-3xl text-base sm:text-lg text-gray-200">
            Meet the leaders driving strategy, innovation, and growth across
            Technogen.
          </p> */}
        </div>
      </section>

      {/* ===== SECTION 2: HEADING + SUBHEADING ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Leadership</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our experienced leadership team who drive innovation, strategy,
            and growth across Technogen.
          </p>
        </div>

        {/* Leaders Grid (3 per row on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {leaders.map((leader, idx) => (
            <LeaderCard key={idx} {...leader} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Leadership;


// import React from "react";
// import { Linkedin } from "lucide-react";

// // Leader card with outer + inner border and hover fill between them
// const LeaderCard: React.FC<{
//   name: string;
//   title: string;
//   image: string;
//   linkedin: string;
// }> = ({ name, title, image, linkedin }) => {
//   return (
//     <div className="group">
//       {/* Outer border container with padding = gap between outer & inner */}
//       <div className="relative rounded-xl border-2 border-gray-300 p-[6px] overflow-hidden">
//         {/* Blue fill that appears between outer border and inner card on hover */}
//         <div className="absolute inset-0 bg-transparent group-hover:bg-[#172059] transition-colors duration-300 pointer-events-none"></div>

//         {/* Inner card (has its own border) */}
//         <div className="relative bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
//           {/* Square image — consistent across cards */}
//           <div className="w-full aspect-square overflow-hidden bg-gray-100">
//             <img
//               src={image}
//               alt={name}
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//               loading="lazy"
//             />
//           </div>

//           {/* Content */}
//           <div className="p-4 flex flex-col gap-2">
//             <div className="flex items-center justify-between">
//               <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors">
//                 {name}
//               </h3>

//               {/* Small LinkedIn button — keeps layout tidy */}
//               <a
//                 href={linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-sky-700 hover:bg-sky-600 text-white transition"
//                 aria-label={`Open ${name} on LinkedIn`}
//               >
//                 <Linkedin className="w-4 h-4" />
//               </a>
//             </div>

//             <p className="text-sm text-gray-600 group-hover:text-gray-200 transition-colors">
//               {title}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Leaders data
// const leaders = [
//   {
//     name: "Kiranmai Kesa",
//     title: "Founder, President CFO",
//     image:
//       "https://res.cloudinary.com/deiqxagkd/image/upload/v1757939224/78a444c8-474d-4751-ba03-589226317152.png",
//     linkedin: "https://www.linkedin.com/in/",
//   },
//   {
//     name: "Lax Chepuri",
//     title: "Chief Executive Officer",
//     image:
//       "https://res.cloudinary.com/deiqxagkd/image/upload/v1757939257/c65c49f9-762b-4f3b-8669-48879c204218.png",
//     linkedin: "https://www.linkedin.com/in/",
//   },
//   {
//     name: "Sunil Nambiar",
//     title: "Vice President, Customer Success",
//     image:
//       "https://res.cloudinary.com/deiqxagkd/image/upload/v1757939275/2944f58c-27a9-44ed-905d-bf01543db5c4.png",
//     linkedin: "https://www.linkedin.com/in/",
//   },
//   {
//     name: "Rob Williams",
//     title: "Vice President",
//     image:
//       "https://res.cloudinary.com/deiqxagkd/image/upload/v1757939327/c477f3f2-c8d8-45dc-bc1b-533000aa47d0.png",
//     linkedin: "https://www.linkedin.com/in/",
//   },
//   {
//     name: "Emil J. Modugno",
//     title: "Executive Vice President",
//     image:
//       "https://res.cloudinary.com/deiqxagkd/image/upload/v1757939312/4108593d-17f1-49a0-a66a-d508f0e877c4.png",
//     linkedin: "https://www.linkedin.com/in/",
//   },
// ];

// const Leadership: React.FC = () => {
//   return (
//     <main className="py-20 px-6 max-w-7xl mx-auto font-[Montserrat]">
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//           Leadership
//         </h1>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Meet our experienced leadership team who drive innovation, strategy,
//           and growth across Technogen.
//         </p>
//       </div>

//       {/* 3 columns desktop, 2 tablet, 1 mobile */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {leaders.map((leader, i) => (
//           <LeaderCard key={i} {...leader} />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Leadership;
