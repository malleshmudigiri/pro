
import React, { useRef, useEffect } from "react";
import {
  Shield,
  Zap,
  Settings,
  Users,
  BarChart,
  Building,
  Globe,
  Heart,
  BookOpen,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const DevSecOps: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // ✅ Advantage Items
  const advantages = [
    { title: "Security", description: "We embed security into every stage of the SDLC, reducing risks and avoiding costly last-minute fixes." },
    { title: "Agility", description: "Adaptive frameworks and automation enable rapid iterations, faster delivery, and continuous improvement." },
    { title: "Automation", description: "CI/CD pipelines, automated testing, and Infrastructure as Code streamline workflows and minimize errors." },
    { title: "Compliance Ready", description: "We align processes with industry standards (HIPAA, FedRAMP, PCI-DSS, GDPR, etc.) to ensure compliance." },
  ];

  // ✅ What We Do
  const services = [
    { title: "CI/CD", icon: Zap, description: "Rapid, reliable releases with built-in testing to ensure software quality and faster delivery." },
    { title: "Infrastructure as Code", icon: Settings, description: "Automated, repeatable, and secure environment provisioning with IaC frameworks." },
    { title: "Automated Security Testing", icon: Shield, description: "Identify vulnerabilities early and fix before deployment, ensuring safer applications." },
    { title: "Agile Development Practices", icon: Users, description: "Adaptive frameworks like extreme programming, iterative modeling, and stakeholder-driven feedback." },
    { title: "Monitoring & Compliance", icon: BarChart, description: "Real-time visibility and controls to maintain compliance and operational resilience." },
  ];

  // ✅ Who We Support
  const supports = [
    { label: "Federal", icon: Building },
    // { label: "Startups", icon: Zap },
    { label: "FED Health", icon: Heart },
    { label: "SLED", icon: BookOpen },
    // { label: "Government", icon: Shield },
    { label: "Commercial", icon: Globe },
  ];

  // ✅ Case Studies
  const caseStudies = [
    { title: "CI/CD Pipeline Modernization", description: "We implemented secure CI/CD pipelines, reducing release cycles by 40% while ensuring compliance.", image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png" },
    { title: "Automated Security Testing", description: "Early vulnerability detection improved system resilience and reduced production issues.", image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png" },
    { title: "Agile DevSecOps Framework", description: "Delivered an adaptive DevSecOps framework aligned with FedRAMP and HIPAA standards.", image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png" },
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* ✅ Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://tse1.mm.bing.net/th/id/OIP.t2oawKRVBj7y9__2cMMMfQHaD3?r=0&w=1200&h=627&rs=1&pid=ImgDetMain&o=7&rm=3')",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <h1 className="text-white text-6xl font-bold" data-aos="zoom-in">
            DEVSECOPS
          </h1>
        </div>
      </section>

      {/* ================= Advantage ================= */}
<section className="relative min-h-screen w-full flex items-center justify-center px-8 pt-16 bg-white">
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
          Secure by Design. <br /> Agile by Nature.
        </span>
      </h2>

      <p className="md:text-lg text-gray-700 leading-relaxed max-w-3xl">
        At Technogen, we integrate development, security, and operations into a single, streamlined process. 
        Our DevSecOps approach ensures security is built into every stage of the lifecycle.
      </p>
    </div>

    {/* Sub-heading */}
    <h3 className="text-2xl md:text-3xl font-bold text-[#ce3266] mb-10">
      The Technogen Advantage
    </h3>

    {/* Advantage Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {advantages.map((adv, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.15 }}
          viewport={{ once: true }}
          className="relative bg-[#f8f8fc] rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
        >
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-[#272654]/80 to-[#ce3266]/70 
                       opacity-0 group-hover:opacity-100 transition duration-500 
                       rounded-2xl pointer-events-none"
            aria-hidden
          />
          {/* Content */}
          <div className="relative z-10">
            <h4 className="text-lg font-semibold text-[#272654] group-hover:text-white mb-3">
              {adv.title}
            </h4>
            <p className="text-sm text-gray-600 group-hover:text-gray-200 leading-relaxed">
              {adv.description}
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


      {/* ✅ What We Do (Flip Cards) */}
      {/* <section className="py-24 bg-gray-50 overflow-hidden"> */}
        {/* <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between space-y-12 md:space-y-0">
          <div className="md:w-1/3 text-left" data-aos="fade-right">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-md">
              Technogen helps organizations modernize their software delivery with secure, scalable, and resilient solutions.
            </p>
          </div> */}
{/* 
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" data-aos="fade-left">
            {services.map(({ title, icon: Icon, description }, idx) => (
              <div key={idx} className="flip-card cursor-pointer">
                <div className="flip-card-inner group">
                  <div className="flip-card-front bg-white shadow p-6 rounded-lg flex flex-col items-center justify-center space-y-4">
                    <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center">
                      <Icon size={32} color="white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                  </div>
                  <div className="flip-card-back bg-blue-50 shadow p-6 rounded-lg flex items-center justify-center">
                    <p className="text-sm text-gray-700">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <style>{`
          .flip-card { perspective: 1000px; }
          .flip-card-inner { position: relative; width: 100%; height: 240px; transform-style: preserve-3d; transition: transform 0.8s ease-in-out; }
          .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
          .flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 0.5rem; }
          .flip-card-back { transform: rotateY(180deg); }
        `}</style>
      </section> */}

      {/* ✅ Who We Support */}
      <section className="py-24 bg-white text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Who We Support</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          A long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
          {supports.map((support, idx) => {
            const Icon = support.icon;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: idx * 0.12 }} viewport={{ once: true }} className="flex flex-col items-center animate-fade-up">
                <div className="w-24 h-24 flex items-center justify-center relative group hover:scale-105 transition-transform duration-500">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" stroke="#EF4444" strokeWidth="3" fill="none" />
                  </svg>
                  <div className="w-12 h-12 text-blue-900">
                    <Icon size={48} />
                  </div>
                </div>
                <span className="mt-4 text-lg font-semibold text-gray-900">{support.label}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

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

      {/* ✅ Case Studies Carousel */}
      {/* (same as you had, unchanged) */}
      <section className="relative py-10 text-white" style={{ backgroundColor: "#23214A" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold">CASE STUDY</h2>
            <div className="flex space-x-2">
              <button onClick={() => scrollCarousel("left")} className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition">&#8592;</button>
              <button onClick={() => scrollCarousel("right")} className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition">&#8594;</button>
            </div>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <div ref={carouselRef} className="flex overflow-x-auto space-x-6 scroll-smooth py-4 no-scrollbar">
            {caseStudies.map((caseStudy, idx) => (
              <div key={idx} className="min-w-[260px] sm:min-w-[300px] rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all" style={{ backgroundColor: "#23214A" }}>
                <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-40 sm:h-48 object-cover" />
                <div className="bg-white/10 backdrop-blur-md p-6 text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{caseStudy.title}</h3>
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
 {/* Book Your Demo */}
<section className="relative px-4 sm:px-6 lg:px-8">
  <div className="relative overflow-hidden rounded-b-[2.5rem] max-w-7xl mx-auto">
    {/* Background Image */}
    <img
      src="https://www.shutterstock.com/image-photo/online-education-elearning-concept-learning-600nw-2305781813.jpg"
      alt="Book Your Demo"
      className="w-full h-[250px] sm:h-[300px] lg:h-[360px] object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60 rounded-b-[2.5rem]"></div>

    {/* Content (bottom-aligned) */}
    <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-10 px-4 sm:px-8 z-10">
      <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-4xl text-white">
        Now integrate security, automation, and agility into every stage of your enterprise.  <br className="hidden sm:block" />
      
      </h2>

      {/* ✅ Added space between H1 and button */}
      <div className="mt-6">
        <button className="cssbuttonsIoButton">
          Get started today
          <div className="icon">
            <svg
              height="20"
              width="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>

  {/* ✅ Fancy Button Styles */}
  <style>
    {`
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
        transition: background-color 0.4s ease, color 0.4s ease, border 0.4s ease;
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
        transition: all 0.3s ease-out;
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
        transform: translateX(0.1em) rotate(-25deg);
      }

      .cssbuttonsIoButton:active .icon {
        transform: scale(0.95);
      }
    `}
  </style>
</section>

      
    </div>
  );
};

export default DevSecOps;
