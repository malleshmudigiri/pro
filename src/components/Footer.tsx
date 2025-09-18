// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Download } from 'lucide-react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#172059] text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><Link to="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
//               <li><Link to="/about" className="hover:text-gray-300 transition-colors">About Us</Link></li>
//               <li><Link to="/leadership" className="hover:text-gray-300 transition-colors">Leadership</Link></li>
//               <li><Link to="/careers" className="hover:text-gray-300 transition-colors">Careers</Link></li>
//               <li><Link to="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link></li>
//               <li><Link to="/blog" className="hover:text-gray-300 transition-colors">Blog</Link></li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Services</h3>
//             <ul className="space-y-2">
//               <li><Link to="/services" className="hover:text-gray-300 transition-colors">Cloud Solutions</Link></li>
//               <li><Link to="/services" className="hover:text-gray-300 transition-colors">Data & Analytics</Link></li>
//               <li><Link to="/services" className="hover:text-gray-300 transition-colors">Hyper Automation</Link></li>
//               <li><Link to="/services" className="hover:text-gray-300 transition-colors">Cyber Security</Link></li>
//               <li><Link to="/services" className="hover:text-gray-300 transition-colors">Customer Experience</Link></li>
//               <li><Link to="/services" className="hover:text-gray-300 transition-colors">Business Process Mgmt</Link></li>
//             </ul>
//           </div>

//           {/* Industries */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Industries</h3>
//             <ul className="space-y-2">
//               <li><Link to="/industries/federal" className="hover:text-gray-300 transition-colors">Federal Government</Link></li>
//               <li><Link to="/industries/state-local" className="hover:text-gray-300 transition-colors">State & Local</Link></li>
//               <li><Link to="/industries/education" className="hover:text-gray-300 transition-colors">Education</Link></li>
//               <li><Link to="/industries/commercial" className="hover:text-gray-300 transition-colors">Commercial</Link></li>
//             </ul>
//           </div>

//           {/* Contract Vehicles */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contract Vehicles</h3>
//             <ul className="space-y-2">
//               <li><Link to="/contract-vehicles" className="hover:text-gray-300 transition-colors">GSA MAS</Link></li>
//               <li><Link to="/contract-vehicles" className="hover:text-gray-300 transition-colors">CIO-SP3 Small Business</Link></li>
//               <li><Link to="/contract-vehicles" className="hover:text-gray-300 transition-colors">GSA 8(a) Stars III</Link></li>
//               <li><Link to="/contract-vehicles" className="hover:text-gray-300 transition-colors">CMS SPARC</Link></li>
//             </ul>
            
//             {/* Capability Statement Download */}
//             <div className="mt-6">
//               <a
//                 href="/capability-statement.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center px-4 py-2 bg-white text-[#172059] rounded-md hover:bg-gray-100 transition-colors"
//               >
//                 <Download className="mr-2 h-4 w-4" />
//                 Capability Statement
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-600 mt-8 pt-8 text-center">
//           <p>&copy; 2025 Technogen. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#172059] py-10 px-6 rounded-xl shadow-lg max-w-7xl mx-auto mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <img src="https://res.cloudinary.com/dqkdopyej/image/upload/v1757418405/TechnoGen_Logo._1_bwwdyo.jpg" alt="Technogen Logo" className="h-12 mb-4" />
          <p className="text-sm text-gray-500">
            It is a long established fact that a reader will be distracted by the readable content of a page.
          </p>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-sm mb-4 font-normal">Solution</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/servicenow" className="hover:text-[#ff3f6c]">ServiceNow</Link></li>
            <li><Link to="/services/aws" className="hover:text-[#ff3f6c]">AWS</Link></li>
            <li><Link to="/services/salesforce" className="hover:text-[#ff3f6c]">Salesforce</Link></li>
            <li><Link to="/services/devsecops" className="hover:text-[#ff3f6c]">DevSecOps</Link></li>
          </ul>
        </div>

        {/* Sector / Company */}
        <div>
          <h3 className="text-sm mb-4 font-normal">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-[#ff3f6c]">About Us</Link></li>
            <li><Link to="/leadership" className="hover:text-[#ff3f6c]">Leadership</Link></li>
            <li><Link to="/careers" className="hover:text-[#ff3f6c]">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-[#ff3f6c]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Capabilities */}
        <div>
          <h3 className="text-sm mb-4 font-normal">Capabilities</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/capabilities" className="hover:text-[#ff3f6c]">Cloud</Link></li>
            <li><Link to="/capabilities" className="hover:text-[#ff3f6c]">Data Analytics</Link></li>
            <li><Link to="/capabilities" className="hover:text-[#ff3f6c]">Cybersecurity</Link></li>
            <li><Link to="/capabilities" className="hover:text-[#ff3f6c]">AI/Automation</Link></li>
          </ul>

          {/* Capability Statement Download */}
          <div className="mt-4">
            <a
              href="/capability-statement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50 text-sm transition"
            >
              <Download className="mr-2 h-4 w-4" />
              Capability Statement
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mt-8 border-t border-gray-200 pt-4">
        <p>© 2025 Technogen Inc. All Rights Reserved.</p>
        <Link to="/privacy" className="hover:text-[#ff3f6c] mt-2 md:mt-0">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
