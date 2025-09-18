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
  Server,
  PhoneCall,
} from "lucide-react";

const AWSPage: React.FC = () => {
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

  // ================== WHAT WE DO ==================
  const services = [
    {
      title: "Cloud Migration",
      icon: Cloud,
      description: "Move applications, servers, and databases seamlessly with AWS.",
    },
    {
      title: "Application Modernization",
      icon: BookOpen,
      description: "Transform legacy systems into agile, cloud-native architectures.",
    },
    {
      title: "Managed Services",
      icon: Shield,
      description: "24/7 monitoring, optimization, and support for cloud environments.",
    },
    {
      title: "Amazon Connect Solutions",
      icon: PhoneCall,
      description:
        "Migrate, set up, and optimize AI-driven cloud contact centers.",
    },
  ];

  // ================== WHO WE SUPPORT ==================
  const supports = [
    { icon: Building, label: "FEDERAL" },
    { icon: Heart, label: "FED HEALTH" },
    { icon: BookOpen, label: "SLED" },
    { icon: Globe, label: "COMMERCIAL" },
  ];

  // ================== CASE STUDIES ==================
  const caseStudies = [
    {
      title: "Seamless Migration Success",
      description:
        "Enabled a global enterprise to migrate 200+ apps to AWS with zero downtime.",
      image:
        "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png",
    },
    {
      title: "Modernizing Legacy Systems",
      description:
        "Rebuilt a financial client’s legacy apps into modern cloud-native architecture.",
      image:
        "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png",
    },
    {
      title: "Amazon Connect Optimization",
      description:
        "Delivered AI-driven automation to enhance customer experience in contact centers.",
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
            AWS – Migrate
          </motion.h1>
        </div>
      </section>

     {/* ================== INTRO / ADVANTAGE ================== */}
<section className="relative min-h-screen w-full flex items-center justify-center px-8 pt-20 bg-white">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative z-10 w-full max-w-6xl mx-auto text-center"
  >
    {/* Heading & Description */}
    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-snug text-[#272654]">
      Migrate seamlessly for scalable cloud transformation with Technogen
    </h2>
    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
      Technogen simplifies your cloud transformation for enterprises of various domains and sizes.
      We are adept at handling cloud migrations, application modernization and DevSecOps. With our
      end-to-end AWS solutions, we aim to drive agility, optimize costs and enhance resilience.
    </p>

    {/* Technogen Advantage */}
    <h3 className="text-2xl md:text-3xl font-bold text-[#ce3266] mb-12">
      Technogen Advantage
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left md:text-center">
      {[
        {
          title: "Cloud Transformation",
          desc: "Experience seamless cloud adoption for enterprises of all sizes.",
        },
        {
          title: "Comprehensive Services",
          desc: "Cloud migrations, app modernization, DevSecOps, and managed services.",
        },
        {
          title: "Security & Compliance",
          desc: "HIPAA, GDPR, ISO, and industry-standard compliance across solutions.",
        },
        {
          title: "End-to-End AWS Solutions",
          desc: "From migrations and modernization to DevSecOps and managed services.",
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
<section className="relative py-24 overflow-hidden">
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

  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/60 z-0" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between space-y-12 md:space-y-0">
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="md:w-1/3 text-center md:text-left"
    >
      <h2 className="text-5xl font-bold mb-4 text-white">What We Do</h2>
      <p className="text-lg text-gray-200 max-w-md mx-auto md:mx-0">
        Your trusted AWS partner for migration, modernization, and cloud optimization.
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

    

      {/* ================== WHO WE SUPPORT ================== */}
      <section className="py-24 bg-white text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Who We Support
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Serving enterprises across domains with AWS-powered cloud solutions.
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
        className="relative h-64 flex items-center justify-center p-6 rounded-2xl 
                   shadow-xl bg-white/20 backdrop-blur-lg border border-white/30
                   hover:bg-white/30 hover:shadow-2xl transition duration-500"
      >
        <p className="text-xl font-semibold leading-snug text-gray-800 font-montserrat">
          {text}
        </p>
      </motion.div>
    ))}
  </div>
</section>

      {/* ================== CASE STUDIES ================== */}
      <section className="relative py-16 text-white" style={{ backgroundColor: "#23214A" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold">CASE STUDY</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => scrollCarousel("left")}
                className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
              >
                &#8592;
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
              >
                &#8594;
              </button>
            </div>
          </div>

          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12">
            Discover how we’ve helped businesses transform with AWS solutions
            tailored for success.
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
          Partner with Technogen for secure, scalable, and cost-efficient AWS solutions. 
              <br className="hidden sm:block" />
             
            </h2>

            <div className="mt-6">
              <button className="cssbuttonsIoButton">
               Start Your Cloud Journey 
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

export default AWSPage;