// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Leadership from './pages/Leadership';
// import Certifications from './pages/Certifications';
// import Partners from './pages/Partners';
// import Services from './pages/Services';
// import ServiceNow from './pages/ServiceNow';
// import Industries from './pages/Industries';
// import Federal from './pages/Federal';
// import StateLocal from './pages/StateLocal';
// import Education from './pages/Education';
// import Commercial from './pages/Commercial';
// import ContractVehicles from './pages/ContractVehicles';
// import Careers from './pages/Careers';
// import Contact from './pages/Contact';
// import Blog from './pages/Blog';
// import './index.css';
// import Sector from './pages/sector';
// import Solutions from './pages/Solutions';
// import ServiceNow from './pages/ServiceNow';
// import salesforce from './pages/salesforce';
// import solution from './pages/Solutions';
// import company from './pages/company';
// import capabilities from './pages/Capabilities';
// import aws from './pages/Aws';
// import devsecops from './pages/devsecops';
// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/leadership" element={<Leadership />} />
//             <Route path="/certifications" element={<Certifications />} />
//             <Route path="/partners" element={<Partners />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/services/servicenow" element={<ServiceNow />} />
//             <Route path="/industries" element={<Industries />} />
//             <Route path="/industries/federal" element={<Federal />} />
//             <Route path="/industries/state-local" element={<StateLocal />} />
//             <Route path="/industries/education" element={<Education />} />
//             <Route path="/industries/commercial" element={<Commercial />} />
//             <Route path="/contract-vehicles" element={<ContractVehicles />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/blog" element={<Blog />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
// ##########################################################
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';

// // Pages
// import Home from './pages/Home';
// import About from './pages/About';
// import Leadership from './pages/Leadership';
// import Certifications from './pages/Certifications';
// import Partners from './pages/Partners';
// import Services from './pages/Services';

// import Industries from './pages/Industries';
// import Federal from './pages/Federal';
// import StateLocal from './pages/StateLocal';
// import Education from './pages/Education';
// import Commercial from './pages/Commercial';
// import ContractVehicles from './pages/ContractVehicles';
// import Careers from './pages/Careers';
// import Contact from './pages/Contact';
// import Blog from './pages/Blog';
// import Sector from './pages/Sector';
// import Solutions from './pages/Solutions';
// import Capabilities from './pages/Capabilities';
// import Aws from './pages/Aws';
// import DevSecOps from './pages/DevSecOps';

// import './index.css';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         {/* ✅ Header always visible */}
//         <Header />

//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/leadership" element={<Leadership />} />
//             <Route path="/certifications" element={<Certifications />} />
//             <Route path="/partners" element={<Partners />} />
//            <Route path="/services" element={<Services />} />
//             {/* <Route path="/services/servicenow" element={<ServiceNow />} /> */}
//             <Route path="/industries" element={<Industries />} />
//             <Route path="/industries/federal" element={<Federal />} />
//             <Route path="/industries/state-local" element={<StateLocal />} />
//             <Route path="/industries/education" element={<Education />} />
//             <Route path="/industries/commercial" element={<Commercial />} />
//             <Route path="/contract-vehicles" element={<ContractVehicles />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/sector" element={<Sector />} />
//             <Route path="/solutions" element={<Solutions />} />
//             <Route path="/capabilities" element={<Capabilities />} />
//             <Route path="/aws" element={<Aws />} />
//             <Route path="/devsecops" element={<DevSecOps />} />
//           </Routes>
//         </main>

//         {/* ✅ Footer always visible */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';

// import './index.css';

// // ✅ Pages
// import Home from './pages/Home';

// // Company
// import About from './pages/About';
// import Leadership from './pages/Leadership';
// import Certifications from './pages/Certifications';
// import Partners from './pages/Partners';

// // Services
// import Services from './pages/Services';

// // Sectors (Federal, StateLocal, Education, Commercial)
// import Sector from './pages/Sector';
// import Federal from './pages/Federal';
// import StateLocal from './pages/StateLocal';
// import Education from './pages/Education';
// import Commercial from './pages/Commercial';

// // Solutions
// import Solutions from './pages/Solutions';
// import Aws from './pages/Aws';
// import DevSecOps from './pages/DevSecOps';
// import Salesforce from './pages/Salesforce'; // ✅ Create this page

// // Capabilities
// import Capabilities from './pages/Capabilities';

// // Others
// import ContractVehicles from './pages/ContractVehicles';
// import Careers from './pages/Careers';
// import Contact from './pages/Contact';
// import Blog from './pages/Blog';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         {/* ✅ Header always visible */}
//         <Header />

//         <main className="flex-grow">
//           <Routes>
//             {/* Home */}
//             <Route path="/" element={<Home />} />

//             {/* ✅ Company dropdown */}
//             <Route path="/about" element={<About />} />
//             <Route path="/leadership" element={<Leadership />} />
//             <Route path="/certifications" element={<Certifications />} />
//             <Route path="/partners" element={<Partners />} />

//             {/* ✅ Services */}
//             <Route path="/services" element={<Services />} />

//             {/* ✅ Sectors dropdown */}
//             <Route path="/sector" element={<Sector />} />
//             <Route path="/sector/federal" element={<Federal />} />
//             <Route path="/sector/state-local" element={<StateLocal />} />
//             <Route path="/sector/education" element={<Education />} />
//             <Route path="/sector/commercial" element={<Commercial />} />

//             {/* ✅ Solutions dropdown */}
//             <Route path="/solutions" element={<Solutions />} />
//             <Route path="/solutions/aws" element={<Aws />} />
//             <Route path="/solutions/devsecops" element={<DevSecOps />} />
//             <Route path="/solutions/salesforce" element={<Salesforce />} />

//             {/* ✅ Capabilities dropdown */}
//             <Route path="/capabilities" element={<Capabilities />} />

//             {/* Others */}
//             <Route path="/contract-vehicles" element={<ContractVehicles />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/blog" element={<Blog />} />
//           </Routes>
//         </main>

//         {/* ✅ Footer always visible */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// #####################################
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';

// import './index.css';

// // ✅ Pages
// import Home from './pages/Home';

// // Company
// import About from './pages/About';
// import Leadership from './pages/Leadership';
// import Certifications from './pages/Certifications';
// import Partners from './pages/Partners';

// // Services
// import Services from './pages/Services';

// // Sectors
// import Sector from './pages/Sector';
// import Federal from './pages/Federal';
// import StateLocal from './pages/StateLocal';
// import Education from './pages/Education';
// import Commercial from './pages/Commercial';
// import Hhs from "./pages/hhs";

// // Solutions
// import Solutions from './pages/Solutions';
// import Aws from './pages/Aws';
// import DevSecOps from './pages/DevSecOps';
// import Salesforce from './pages/Salesforce';

// // Capabilities
// import Capabilities from './pages/Capabilities';

// // Others
// import ContractVehicles from './pages/ContractVehicles';
// import Careers from './pages/Careers';
// import Contact from './pages/Contact';
// import Blog from './pages/Blog';
// import Casestudy from './pages/Casestudy';
// import ContractsPage from "./pages/ContractsPage";
// import ContractDetail from "./pages/ContractDetail";


// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         {/* ✅ Header always visible */}
//         <Header />

//         <main className="flex-grow">
//           <Routes>
//             {/* Home */}
//             <Route path="/" element={<Home />} />

//             {/* ✅ Company dropdown */}
//             <Route path="/about" element={<About />} />
//             <Route path="/leadership" element={<Leadership />} />
//             <Route path="/certifications" element={<Certifications />} />
//             <Route path="/partners" element={<Partners />} />

//             {/* ✅ Services */}
//             <Route path="/services" element={<Services />} />

//             {/* ✅ Sectors dropdown */}
//             <Route path="/sector" element={<Sector />} />
//             <Route path="/sector/federal" element={<Federal />} />
//             <Route path="/sector/state-local" element={<StateLocal />} />
//             <Route path="/sector/education" element={<Education />} />
//             <Route path="/sector/commercial" element={<Commercial />} /> 
//             <Route path="/hhs" element={<Hhs/>} />  


//             {/* ✅ Solutions dropdown */}
//             <Route path="/solutions" element={<Solutions />} />
//             <Route path="/solutions/aws" element={<Aws />} />
//             <Route path="/solutions/devsecops" element={<DevSecOps />} />
//             <Route path="/solutions/salesforce" element={<Salesforce />} />

//             {/* 🔄 Added top-level shortcuts */}
//             <Route path="/devsecops" element={<DevSecOps />} />
//             <Route path="/salesforce" element={<Salesforce />} />
//           <Route path="/aws" element={<Aws />} />


//             {/* ✅ Capabilities dropdown */}
//             <Route path="/capabilities" element={<Capabilities />} />

//             {/* Others */}
//             <Route path="/contract-vehicles" element={<ContractVehicles />} />
//             <Route path="/contracts/:id" element={<ContractDetail />} />
//   <Route path="/contracts" element={<ContractsPage />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/casestudy" element={<Casestudy/>} />

//           </Routes>
//         </main>

//         {/* ✅ Footer always visible */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
// ######################################%%%%%%%%%%%%%%%%
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import './index.css';

// ✅ Pages
import Home from './pages/Home';

// Company
import About from './pages/About';
import Leadership from './pages/Leadership';
import Certifications from './pages/Certifications';
import Partners from './pages/Partners';

// Services
import Services from './pages/Services';

// Sectors
import Sector from './pages/sector';
import Federal from './pages/Federal';
import StateLocal from './pages/StateLocal';
import Education from './pages/Education';
import Commercial from './pages/Commercial';
import Hhs from "./pages/hhs";

// Solutions
import Solutions from './pages/Solutions';
import Aws from './pages/Aws';
import DevSecOps from './pages/devsecops';
import Salesforce from './pages/salesforce';

// Capabilities
import Capabilities from './pages/Capabilities';
import Ai from "./pages/Ai";
import Cyber from "./pages/cyber";
import Cloud from "./pages/Cloud";
import Policy from "./pages/Policy";

// Others
import ContractVehicles from './pages/ContractVehicles';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Casestudy from './pages/casestudy';
import ContractsPage from "./pages/ContractsPage";
import ContractDetail from "./pages/ContractDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* ✅ Header always visible */}
        <Header />

        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* ✅ Company dropdown */}
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/partners" element={<Partners />} />

            {/* ✅ Services */}
            <Route path="/services" element={<Services />} />

            {/* ✅ Sectors dropdown */}
            <Route path="/sector" element={<Sector />} />
            <Route path="/sector/federal" element={<Federal />} />
            <Route path="/sector/state-local" element={<StateLocal />} />
            <Route path="/sector/education" element={<Education />} />
            <Route path="/sector/commercial" element={<Commercial />} /> 
            <Route path="/hhs" element={<Hhs />} />  

            {/* ✅ Solutions dropdown */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/aws" element={<Aws />} />
            <Route path="/solutions/devsecops" element={<DevSecOps />} />
            <Route path="/solutions/salesforce" element={<Salesforce />} />

            {/* 🔄 Added top-level shortcuts */}
            <Route path="/devsecops" element={<DevSecOps />} />
            <Route path="/salesforce" element={<Salesforce />} />
            <Route path="/aws" element={<Aws />} />

            {/* ✅ Capabilities dropdown */}
            <Route path="/capabilities" element={<Capabilities />} />
    <Route path="/ai" element={<Ai />} />
            <Route path="/capabilities/cyber" element={<Cyber />} />
            <Route path="/capabilities/cloud" element={<Cloud />} />
            <Route path="/capabilities/policy" element={<Policy />} />

            {/* Others */}
            <Route path="/contract-vehicles" element={<ContractVehicles />} />
            <Route path="/contracts/:id" element={<ContractDetail />} />
            <Route path="/contracts" element={<ContractsPage />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/casestudy" element={<Casestudy />} />
          </Routes>
        </main>

        {/* ✅ Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
