
// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { Menu, X, Briefcase, ChevronDown } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const Header: React.FC = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
// //   const [isSectorOpen, setIsSectorOpen] = useState(false);
// //   const [isCompanyOpen, setIsCompanyOpen] = useState(false);

// //   return (
// //     <header className="fixed top-0 w-full bg-white text-[#1a1a1a] z-50 shadow-md">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo */}
// //           <div className="flex-shrink-0">
// //             <Link to="/">
// //               <img
// //                 src="https://res.cloudinary.com/dqkdopyej/image/upload/v1757418405/TechnoGen_Logo._1_bwwdyo.jpg"
// //                 alt="Technogen Logo"
// //                 className="h-10 w-auto"
// //               />
// //             </Link>
// //           </div>

// //           {/* Center Navigation */}
// //           <nav className="hidden lg:flex space-x-10 font-bold text-sm uppercase tracking-wide">
// //             {/* Solutions */}
// //             <div
// //               className="relative group"
// //               onMouseEnter={() => setIsSolutionsOpen(true)}
// //               onMouseLeave={() => setIsSolutionsOpen(false)}
// //             >
// //               <Link
// //                 to="/solutions"
// //                 className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors"
// //               >
// //                 <span>Solutions</span>
// //                 <ChevronDown className="h-4 w-4" />
// //               </Link>

// //               <AnimatePresence>
// //                 {isSolutionsOpen && (
// //                   <motion.div
// //                     initial={{ opacity: 0, y: -10 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     exit={{ opacity: 0, y: -10 }}
// //                     transition={{ duration: 0.2 }}
// //                     className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl border border-gray-200 z-50 overflow-hidden"
// //                   >
// //                     <div className="py-2 text-sm text-gray-700">
// //                       <Link to="/services" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">ServiceNow</Link>
// //                       <Link to="/aws" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">AWS</Link>
// //                       <Link to="/salesforce" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Salesforce</Link>
// //                       <Link to="/solutions/devsecops" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">DevSecOps</Link>
// //                       <div className="border-t border-gray-200 mt-2">
// //                         <Link to="/solutions" className="block px-5 py-2 text-[#ff6b00] font-semibold hover:bg-[#fff0e6]">View All Solutions →</Link>
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </div>

// //             {/* Capabilities */}
// //             <Link to="/capabilities" className="hover:text-[#ff6b00] transition-colors">
// //               Capabilities
// //             </Link>

// //             {/* Sector */}
// //             <div
// //               className="relative group"
// //               onMouseEnter={() => setIsSectorOpen(true)}
// //               onMouseLeave={() => setIsSectorOpen(false)}
// //             >
// //               <Link
// //                 to="/sector"
// //                 className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors"
// //               >
// //                 <span>Sector</span>
// //                 <ChevronDown className="h-4 w-4" />
// //               </Link>

// //               <AnimatePresence>
// //                 {isSectorOpen && (
// //                   <motion.div
// //                     initial={{ opacity: 0, y: -10 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     exit={{ opacity: 0, y: -10 }}
// //                     transition={{ duration: 0.2 }}
// //                     className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl border border-gray-200 z-50 overflow-hidden"
// //                   >
// //                     <div className="py-2 text-sm text-gray-700">
// //                       <Link to="/sector/federal" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Federal</Link>
// //                       <Link to="/sector/state-local" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">State & Local</Link>
// //                       <Link to="/sector/education" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Education</Link>
// //                       <Link to="/sector/commercial" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Commercial</Link>
// //                       <div className="border-t border-gray-200 mt-2">
// //                         <Link to="/sector" className="block px-5 py-2 text-[#ff6b00] font-semibold hover:bg-[#fff0e6]">View All Sectors →</Link>
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </div>

// //             {/* Company */}
// //             <div
// //               className="relative group"
// //               onMouseEnter={() => setIsCompanyOpen(true)}
// //               onMouseLeave={() => setIsCompanyOpen(false)}
// //             >
// //               <Link
// //                 to="/company"
// //                 className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors"
// //               >
// //                 <span>Company</span>
// //                 <ChevronDown className="h-4 w-4" />
// //               </Link>

// //               <AnimatePresence>
// //                 {isCompanyOpen && (
// //                   <motion.div
// //                     initial={{ opacity: 0, y: -10 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     exit={{ opacity: 0, y: -10 }}
// //                     transition={{ duration: 0.2 }}
// //                     className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl border border-gray-200 z-50 overflow-hidden"
// //                   >
// //                     <div className="py-2 text-sm text-gray-700">
// //                       <Link to="/about" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">About Us</Link>
// //                       <Link to="/blog" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Blog</Link>
// //                       <Link to="/leadership" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Leadership</Link>
// //                       <Link to="/casestudy" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Case Studies</Link>
// //                       <Link to="/contract-vehicles" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Contract Vehicles</Link>
// //                       <Link to="/certifications" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Certifications</Link>
// //                       <Link to="/partners" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Partners</Link>

// //                       {/* ✅ View All Company */}
// //                       <div className="border-t border-gray-200 mt-2">
// //                         <Link
// //                           to="/company"
// //                           className="block px-5 py-2 text-[#ff6b00] font-semibold hover:bg-[#fff0e6]"
// //                         >
// //                           View All Company →
// //                         </Link>
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </div>
// //           </nav>

// //           {/* Right Navigation */}
// //           <div className="hidden lg:flex items-center space-x-6">
// //             <Link to="/careers" className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors font-bold">
// //               <Briefcase className="h-5 w-5" />
// //             </Link>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <div className="lg:hidden">
// //             <button
// //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// //               className="text-[#1a1a1a] hover:text-[#ff6b00]"
// //             >
// //               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Navigation */}
// //       {isMenuOpen && (
// //         <div className="lg:hidden bg-white border-t border-gray-200">
// //           <div className="px-4 py-4 space-y-4 text-[#1a1a1a] font-bold">
// //             {/* Solutions */}
// //             <details>
// //               <summary className="cursor-pointer hover:text-[#ff6b00]">Solutions</summary>
// //               <div className="pl-4 mt-2 space-y-2">
// //                 <Link to="/services" className="block hover:text-[#ff6b00]">ServiceNow</Link>
// //                 <Link to="/aws" className="block hover:text-[#ff6b00]">AWS</Link>
// //                 <Link to="/salesforce" className="block hover:text-[#ff6b00]">Salesforce</Link>
// //                 <Link to="/solutions/devsecops" className="block hover:text-[#ff6b00]">DevSecOps</Link>
// //                 <Link to="/solutions" className="block text-[#ff6b00] font-semibold">View All Solutions →</Link>
// //               </div>
// //             </details>

// //             {/* Capabilities */}
// //             <Link to="/capabilities" className="block hover:text-[#ff6b00]">Capabilities</Link>

// //             {/* Sector */}
// //             <details>
// //               <summary className="cursor-pointer hover:text-[#ff6b00]">Sector</summary>
// //               <div className="pl-4 mt-2 space-y-2">
// //                 <Link to="/sector/federal" className="block hover:text-[#ff6b00]">Federal</Link>
// //                 <Link to="/sector/state-local" className="block hover:text-[#ff6b00]">State & Local</Link>
// //                 <Link to="/sector/education" className="block hover:text-[#ff6b00]">Education</Link>
// //                 <Link to="/sector/commercial" className="block hover:text-[#ff6b00]">Commercial</Link>
// //                 <Link to="/sector" className="block text-[#ff6b00] font-semibold">View All Sectors →</Link>
// //               </div>
// //             </details>

// //             {/* Company */}
// //             <details>
// //               <summary className="cursor-pointer hover:text-[#ff6b00]">Company</summary>
// //               <div className="pl-4 mt-2 space-y-2">
// //                 <Link to="/about" className="block hover:text-[#ff6b00]">About Us</Link>
// //                 <Link to="/blog" className="block hover:text-[#ff6b00]">Blog</Link>
// //                 <Link to="/leadership" className="block hover:text-[#ff6b00]">Leadership</Link>
// //                 <Link to="/casestudy" className="block hover:text-[#ff6b00]">Case Studies</Link>
// //                 <Link to="/contract-vehicles" className="block hover:text-[#ff6b00]">Contract Vehicles</Link>
// //                 <Link to="/certifications" className="block hover:text-[#ff6b00]">Certifications</Link>
// //                 <Link to="/partners" className="block hover:text-[#ff6b00]">Partners</Link>

// //                 {/* ✅ View All Company */}
// //                 <Link
// //                   to="/company"
// //                   className="block text-[#ff6b00] font-semibold"
// //                 >
// //                   View All Company →
// //                 </Link>
// //               </div>
// //             </details>

// //             {/* Careers */}
// //             <Link to="/careers" className="flex items-center space-x-1 hover:text-[#ff6b00]">
// //               <Briefcase className="h-5 w-5" />
// //               <span>Careers</span>
// //             </Link>
// //             <Link to="/blog" className="flex items-center space-x-1 hover:text-[#ff6b00]">
// //               <Newspaper className="h-5 w-5" />
// //               <span>Blog</span>
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // };

// // export default Header;
// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { Menu, X, Briefcase, ChevronDown } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const Header: React.FC = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
// //   const [isSectorOpen, setIsSectorOpen] = useState(false);
// //   const [isCompanyOpen, setIsCompanyOpen] = useState(false);

// //   return (
// //     <header className="fixed top-0 w-full bg-white text-[#1a1a1a] z-50 shadow-md">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-20">
// //           {/* Logo */}
// //           <div className="flex-shrink-0">
// //             <Link to="/">
// //               <img
// //                 src="https://res.cloudinary.com/dqkdopyej/image/upload/v1757418405/TechnoGen_Logo._1_bwwdyo.jpg"
// //                 alt="Technogen Logo"
// //                 className="h-14 w-auto"  // ✅ Increased logo size
// //               />
// //             </Link>
// //           </div>

// //           {/* Center Navigation */}
// //           <nav className="hidden lg:flex space-x-10 font-bold text-sm uppercase tracking-wide">
// //             {/* Solutions */}
// //             <div
// //               className="relative group"
// //               onMouseEnter={() => setIsSolutionsOpen(true)}
// //               onMouseLeave={() => setIsSolutionsOpen(false)}
// //             >
// //               <Link
// //                 to="/solutions"
// //                 className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors"
// //               >
// //                 <span>Solutions</span>
// //                 <ChevronDown className="h-4 w-4" />
// //               </Link>

// //               <AnimatePresence>
// //                 {isSolutionsOpen && (
// //                   <motion.div
// //                     initial={{ opacity: 0, y: -10 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     exit={{ opacity: 0, y: -10 }}
// //                     transition={{ duration: 0.2 }}
// //                     className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl border border-gray-200 z-50 overflow-hidden"
// //                   >
// //                     <div className="py-2 text-sm text-gray-700">
// //                       <Link to="/services" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">ServiceNow</Link>
// //                       <Link to="/aws" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">AWS</Link>
// //                       <Link to="/salesforce" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Salesforce</Link>
// //                       <Link to="/solutions/devsecops" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">DevSecOps</Link>
// //                       <div className="border-t border-gray-200 mt-2">
// //                         <Link to="/solutions" className="block px-5 py-2 text-[#ff6b00] font-semibold hover:bg-[#fff0e6]">View All Solutions →</Link>
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </div>

// //             {/* Capabilities */}
// //             <Link to="/capabilities" className="hover:text-[#ff6b00] transition-colors">
// //               Capabilities
// //             </Link>

// //             {/* Sector */}
// //             <div
// //               className="relative group"
// //               onMouseEnter={() => setIsSectorOpen(true)}
// //               onMouseLeave={() => setIsSectorOpen(false)}
// //             >
// //               <Link
// //                 to="/sector"
// //                 className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors"
// //               >
// //                 <span>Sector</span>
// //                 <ChevronDown className="h-4 w-4" />
// //               </Link>

// //               <AnimatePresence>
// //                 {isSectorOpen && (
// //                   <motion.div
// //                     initial={{ opacity: 0, y: -10 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     exit={{ opacity: 0, y: -10 }}
// //                     transition={{ duration: 0.2 }}
// //                     className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl border border-gray-200 z-50 overflow-hidden"
// //                   >
// //                     <div className="py-2 text-sm text-gray-700">
// //                       <Link to="/sector/federal" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Federal</Link>
// //                       <Link to="/sector/state-local" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">State & Local</Link>
// //                       <Link to="/sector/education" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Education</Link>
// //                       <Link to="/sector/commercial" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Commercial</Link>
// //                       <div className="border-t border-gray-200 mt-2">
// //                         <Link to="/sector" className="block px-5 py-2 text-[#ff6b00] font-semibold hover:bg-[#fff0e6]">View All Sectors →</Link>
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </div>

// //             {/* Company */}
// //             <div
// //               className="relative group"
// //               onMouseEnter={() => setIsCompanyOpen(true)}
// //               onMouseLeave={() => setIsCompanyOpen(false)}
// //             >
// //               <Link
// //                 to="/company"
// //                 className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors"
// //               >
// //                 <span>Company</span>
// //                 <ChevronDown className="h-4 w-4" />
// //               </Link>

// //               <AnimatePresence>
// //                 {isCompanyOpen && (
// //                   <motion.div
// //                     initial={{ opacity: 0, y: -10 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     exit={{ opacity: 0, y: -10 }}
// //                     transition={{ duration: 0.2 }}
// //                     className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl border border-gray-200 z-50 overflow-hidden"
// //                   >
// //                     <div className="py-2 text-sm text-gray-700">
// //                       <Link to="/about" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">About Us</Link>
// //                       <Link to="/blog" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Blog</Link>
// //                       <Link to="/leadership" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Leadership</Link>
// //                       <Link to="/casestudy" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Case Studies</Link>
// //                       <Link to="/contract-vehicles" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Contract Vehicles</Link>
// //                       <Link to="/certifications" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Certifications</Link>
// //                       <Link to="/partners" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Partners</Link>

// //                       <div className="border-t border-gray-200 mt-2">
// //                         <Link
// //                           to="/company"
// //                           className="block px-5 py-2 text-[#ff6b00] font-semibold hover:bg-[#fff0e6]"
// //                         >
// //                           View All Company →
// //                         </Link>
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </div>
// //           </nav>

// //           {/* Right Navigation */}
// //           <div className="hidden lg:flex items-center space-x-6">
// //             {/* Careers */}
// //             {/* <Link to="/careers" className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors font-bold">
// //               <Briefcase className="h-5 w-5" />
// //             </Link> */}

// //             {/* ✅ Added Two Custom Icons */}
// //             <Link to="/contact" className="hover:opacity-80 transition">
// //               <img
// //                 src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758100525/contact-us-icon_ex4dyz.png"
// //                 alt="Contact Us"
// //                 className="h-7 w-7 object-contain"
// //               />
// //             </Link>
// //             <Link to="/careers" className="hover:opacity-80 transition">
// //               <img
// //                 src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758100620/personal-growth-icon_udnwax.png"
// //                 alt="careers"
// //                 className="h-7 w-7 object-contain"
// //               />
// //             </Link>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <div className="lg:hidden">
// //             <button
// //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// //               className="text-[#1a1a1a] hover:text-[#ff6b00]"
// //             >
// //               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Navigation */}
// //       {isMenuOpen && (
// //         <div className="lg:hidden bg-white border-t border-gray-200">
// //           <div className="px-4 py-4 space-y-4 text-[#1a1a1a] font-bold">
// //             {/* ... (unchanged mobile menu code) ... */}
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // };

// // export default Header;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
//   const [isSectorOpen, setIsSectorOpen] = useState(false);
//   const [isCompanyOpen, setIsCompanyOpen] = useState(false);

//   return (
//     <header className="fixed top-0 w-full bg-white text-[#1a1a1a] z-50 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/">
//               <img
//                 src="https://res.cloudinary.com/dqkdopyej/image/upload/v1757418405/TechnoGen_Logo._1_bwwdyo.jpg"
//                 alt="Technogen Logo"
//                 className="h-14 w-auto"
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex space-x-10 font-bold text-sm uppercase tracking-wide">
//             {/* Solutions */}
//             <div
//               className="relative group"
//               onMouseEnter={() => setIsSolutionsOpen(true)}
//               onMouseLeave={() => setIsSolutionsOpen(false)}
//             >
//               <Link
//                 to="/solutions"
//                 className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors"
//               >
//                 <span>Solutions</span>
//                 <ChevronDown className="h-4 w-4" />
//               </Link>

//               <AnimatePresence>
//                 {isSolutionsOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl border border-gray-200 z-50 overflow-hidden"
//                   >
//                     <div className="py-2 text-sm text-gray-700">
//                       <Link to="/services" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">ServiceNow</Link>
//                       <Link to="/aws" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">AWS</Link>
//                       <Link to="/salesforce" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Salesforce</Link>
//                       <Link to="/solutions/devsecops" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">DevSecOps</Link>
//                       <div className="border-t border-gray-200 mt-2">
//                         <Link to="/solutions" className="block px-5 py-2 text-[#ff6b00] font-semibold hover:bg-[#fff0e6]">View All Solutions →</Link>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Capabilities */}
//             <Link to="/capabilities" className="hover:text-[#ff6b00] transition-colors">
//               Capabilities
//             </Link>
//                     <Link to="/ai" className="block">AI ORHCESTRATION</Link>


//             {/* Sector */}
//             <div
//               className="relative group"
//               onMouseEnter={() => setIsSectorOpen(true)}
//               onMouseLeave={() => setIsSectorOpen(false)}
//             >
//               <Link
//                 to="/sector"
//                 className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors"
//               >
//                 <span>Sector</span>
//                 <ChevronDown className="h-4 w-4" />
//               </Link>

//               <AnimatePresence>
//                 {isSectorOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl border border-gray-200 z-50 overflow-hidden"
//                   >
//                     <div className="py-2 text-sm text-gray-700">
//                       <Link to="/sector/federal" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Federal</Link>
//                       <Link to="/sector/state-local" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">State & Local</Link>
//                       <Link to="/sector/education" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Education</Link>
//                       <Link to="/sector/commercial" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Commercial</Link>
//                       <div className="border-t border-gray-200 mt-2">
//                         <Link to="/sector" className="block px-5 py-2 text-[#ff6b00] font-semibold hover:bg-[#fff0e6]">View All Sectors →</Link>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Company */}
//             <div
//               className="relative group"
//               onMouseEnter={() => setIsCompanyOpen(true)}
//               onMouseLeave={() => setIsCompanyOpen(false)}
//             >
//               <Link
//                 to="/company"
//                 className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors"
//               >
//                 <span>Company</span>
//                 <ChevronDown className="h-4 w-4" />
//               </Link>

//               <AnimatePresence>
//                 {isCompanyOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl border border-gray-200 z-50 overflow-hidden"
//                   >
//                     <div className="py-2 text-sm text-gray-700">
//                       <Link to="/about" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">About Us</Link>
//                       <Link to="/blog" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Blog</Link>
//                       <Link to="/leadership" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Leadership</Link>
//                       <Link to="/casestudy" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Case Studies</Link>
//                       <Link to="/contract-vehicles" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Contract Vehicles</Link>
//                       <Link to="/certifications" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Certifications</Link>
//                       <Link to="/partners" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Partners</Link>

//                       <div className="border-t border-gray-200 mt-2">
//                         <Link to="/company" className="block px-5 py-2 text-[#ff6b00] font-semibold hover:bg-[#fff0e6]">
//                           View All Company →
//                         </Link>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </nav>

//           {/* Right Desktop Icons */}
//           <div className="hidden lg:flex items-center space-x-6">
//             <Link to="/contact" className="hover:opacity-80 transition">
//               <img
//                 src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758100525/contact-us-icon_ex4dyz.png"
//                 alt="Contact Us"
//                 className="h-7 w-7 object-contain"
//               />
//             </Link>
//             <Link to="/careers" className="hover:opacity-80 transition">
//               <img
//                 src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758100620/personal-growth-icon_udnwax.png"
//                 alt="careers"
//                 className="h-7 w-7 object-contain"
//               />
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-[#1a1a1a] hover:text-[#ff6b00]"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Mobile Navigation */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.2 }}
//             className="lg:hidden bg-white border-t border-gray-200 px-4 py-6 space-y-4 font-bold"
//           >
//             {/* Solutions */}
//             <div>
//               <button
//                 className="flex justify-between w-full items-center py-2"
//                 onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
//               >
//                 <span>Solutions</span>
//                 <ChevronDown
//                   className={`h-5 w-5 transform transition-transform ${
//                     isSolutionsOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               <AnimatePresence>
//                 {isSolutionsOpen && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     className="pl-4 space-y-2 text-sm text-gray-700"
//                   >
//                     <Link to="/services" className="block">ServiceNow</Link>
//                     <Link to="/aws" className="block">AWS</Link>
//                     <Link to="/salesforce" className="block">Salesforce</Link>
//                     <Link to="/solutions/devsecops" className="block">DevSecOps</Link>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Capabilities */}
//             <Link to="/capabilities" className="block py-2">Capabilities</Link>
//                     <Link to="/ai" className="block">AI ORHCESTRATION</Link>


//             {/* Sector */}
//             <div>
//               <button
//                 className="flex justify-between w-full items-center py-2"
//                 onClick={() => setIsSectorOpen(!isSectorOpen)}
//               >
//                 <span>Sector</span>
//                 <ChevronDown
//                   className={`h-5 w-5 transform transition-transform ${
//                     isSectorOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               <AnimatePresence>
//                 {isSectorOpen && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     className="pl-4 space-y-2 text-sm text-gray-700"
//                   >
//                     <Link to="/sector/federal" className="block">Federal</Link>
//                     <Link to="/sector/state-local" className="block">State & Local</Link>
//                     <Link to="/sector/education" className="block">Education</Link>
//                     <Link to="/sector/commercial" className="block">Commercial</Link>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Company */}
//             <div>
//               <button
//                 className="flex justify-between w-full items-center py-2"
//                 onClick={() => setIsCompanyOpen(!isCompanyOpen)}
//               >
//                 <span>Company</span>
//                 <ChevronDown
//                   className={`h-5 w-5 transform transition-transform ${
//                     isCompanyOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               <AnimatePresence>
//                 {isCompanyOpen && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     className="pl-4 space-y-2 text-sm text-gray-700"
//                   >
//                     <Link to="/about" className="block">About Us</Link>
//                     <Link to="/blog" className="block">Blog</Link>
//                     <Link to="/leadership" className="block">Leadership</Link>
//                     <Link to="/casestudy" className="block">Case Studies</Link>
//                     <Link to="/contract-vehicles" className="block">Contract Vehicles</Link>
//                     <Link to="/certifications" className="block">Certifications</Link>
//                     <Link to="/partners" className="block">Partners</Link>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Contact & Careers */}
//             <Link to="/contact" className="block py-2">Contact Us</Link>
//             <Link to="/careers" className="block py-2">Careers</Link>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isSectorOpen, setIsSectorOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false); // ✅ NEW state

  return (
    <header className="fixed top-0 w-full bg-white text-[#1a1a1a] z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dqkdopyej/image/upload/v1757418405/TechnoGen_Logo._1_bwwdyo.jpg"
                alt="Technogen Logo"
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-10 font-bold text-sm uppercase tracking-wide">
            {/* Solutions */}
            <div
              className="relative group"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <Link
                to="/solutions"
                className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors"
              >
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </Link>

              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl border border-gray-200 z-50 overflow-hidden"
                  >
                    <div className="py-2 text-sm text-gray-700">
                      <Link to="/services" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">ServiceNow</Link>
                      <Link to="/aws" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">AWS</Link>
                      <Link to="/salesforce" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Salesforce</Link>
                      <Link to="/solutions/devsecops" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">DevSecOps</Link>
                      <div className="border-t border-gray-200 mt-2">
                        <Link to="/solutions" className="block px-5 py-2 text-[#ff6b00] font-semibold hover:bg-[#fff0e6]">View All Solutions →</Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ✅ Capabilities with dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsCapabilitiesOpen(true)}
              onMouseLeave={() => setIsCapabilitiesOpen(false)}
            >
              <Link
                to="/capabilities"
                className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors"
              >
                <span>Capabilities</span>
                <ChevronDown className="h-4 w-4" />
              </Link>

              <AnimatePresence>
                {isCapabilitiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl border border-gray-200 z-50 overflow-hidden"
                  >
                    <div className="py-2 text-sm text-gray-700">
                      <Link to="/capabilities/cyber" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">AI & Cyber Security</Link>
                      <Link to="/capabilities/cloud" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Cloud Transformation</Link>
                      <Link to="/capabilities/policy" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Policy & Governance</Link>
                      <Link to="/Ai" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">AI Orchestration</Link>
                      <div className="border-t border-gray-200 mt-2">
                        <Link to="/capabilities" className="block px-5 py-2 text-[#ff6b00] font-semibold hover:bg-[#fff0e6]">View All Capabilities →</Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sector */}
            <div
              className="relative group"
              onMouseEnter={() => setIsSectorOpen(true)}
              onMouseLeave={() => setIsSectorOpen(false)}
            >
              <Link
                to="/sector"
                className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors"
              >
                <span>Sector</span>
                <ChevronDown className="h-4 w-4" />
              </Link>

              <AnimatePresence>
                {isSectorOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl border border-gray-200 z-50 overflow-hidden"
                  >
                    <div className="py-2 text-sm text-gray-700">
                      <Link to="/sector/federal" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Federal</Link>
                      <Link to="/sector/state-local" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">State & Local</Link>
                      <Link to="/sector/education" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Education</Link>
                      <Link to="/sector/commercial" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Commercial</Link>
                      <div className="border-t border-gray-200 mt-2">
                        <Link to="/sector" className="block px-5 py-2 text-[#ff6b00] font-semibold hover:bg-[#fff0e6]">View All Sectors →</Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company */}
            <div
              className="relative group"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <Link
                to="/company"
                className="flex items-center space-x-1 hover:text-[#ff6b00] transition-colors"
              >
                <span>Company</span>
                <ChevronDown className="h-4 w-4" />
              </Link>

              <AnimatePresence>
                {isCompanyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl border border-gray-200 z-50 overflow-hidden"
                  >
                    <div className="py-2 text-sm text-gray-700">
                      <Link to="/about" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">About Us</Link>
                      <Link to="/blog" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Blog</Link>
                      <Link to="/leadership" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Leadership</Link>
                      <Link to="/casestudy" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Case Studies</Link>
                      <Link to="/contract-vehicles" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Contract Vehicles</Link>
                      <Link to="/certifications" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Certifications</Link>
                      <Link to="/partners" className="block px-5 py-2 hover:bg-[#fff0e6] hover:text-[#ff6b00]">Partners</Link>

                      <div className="border-t border-gray-200 mt-2">
                        <Link to="/company" className="block px-5 py-2 text-[#ff6b00] font-semibold hover:bg-[#fff0e6]">
                          View All Company →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/contact" className="hover:opacity-80 transition">
              <img
                src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758100525/contact-us-icon_ex4dyz.png"
                alt="Contact Us"
                className="h-7 w-7 object-contain"
              />
            </Link>
            <Link to="/careers" className="hover:opacity-80 transition">
              <img
                src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758100620/personal-growth-icon_udnwax.png"
                alt="careers"
                className="h-7 w-7 object-contain"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#1a1a1a] hover:text-[#ff6b00]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-200 px-4 py-6 space-y-4 font-bold"
          >
            {/* Solutions */}
            <div>
              <button
                className="flex justify-between w-full items-center py-2"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 space-y-2 text-sm text-gray-700"
                  >
                    <Link to="/services" className="block">ServiceNow</Link>
                    <Link to="/aws" className="block">AWS</Link>
                    <Link to="/salesforce" className="block">Salesforce</Link>
                    <Link to="/solutions/devsecops" className="block">DevSecOps</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ✅ Capabilities for mobile */}
            <div>
              <button
                className="flex justify-between w-full items-center py-2"
                onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)}
              >
                <span>Capabilities</span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${
                    isCapabilitiesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isCapabilitiesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 space-y-2 text-sm text-gray-700"
                  >
                    <Link to="/capabilities/cyber" className="block">AI & Cyber Security</Link>
                    <Link to="/capabilities/cloud" className="block">Cloud Transformation</Link>
                    <Link to="/capabilities/policy" className="block">Policy & Governance</Link>
                    <Link to="/Ai" className="block">AI Orchestration</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sector */}
            <div>
              <button
                className="flex justify-between w-full items-center py-2"
                onClick={() => setIsSectorOpen(!isSectorOpen)}
              >
                <span>Sector</span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${
                    isSectorOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isSectorOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 space-y-2 text-sm text-gray-700"
                  >
                    <Link to="/sector/federal" className="block">Federal</Link>
                    <Link to="/sector/state-local" className="block">State & Local</Link>
                    <Link to="/sector/education" className="block">Education</Link>
                    <Link to="/sector/commercial" className="block">Commercial</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company */}
            <div>
              <button
                className="flex justify-between w-full items-center py-2"
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
              >
                <span>Company</span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${
                    isCompanyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isCompanyOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 space-y-2 text-sm text-gray-700"
                  >
                    <Link to="/about" className="block">About Us</Link>
                    <Link to="/blog" className="block">Blog</Link>
                    <Link to="/leadership" className="block">Leadership</Link>
                    <Link to="/casestudy" className="block">Case Studies</Link>
                    <Link to="/contract-vehicles" className="block">Contract Vehicles</Link>
                    <Link to="/certifications" className="block">Certifications</Link>
                    <Link to="/partners" className="block">Partners</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact & Careers */}
            <Link to="/contact" className="block py-2">Contact Us</Link>
            <Link to="/careers" className="block py-2">Careers</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
