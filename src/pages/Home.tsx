
import { ArrowRight, Brain, Cloud, Lock, Server, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Hero Slider Data
const heroSlides = [
  {
    title: "Technology. Innovation. Results",
    subtitle:
      " 500+ successful projects powering businesses <br> worldwide with integrity and expertise.",
    image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424542/1_dyitme.png",
  },
  {
    title: " Transforming Ideas into <br> Digital Reality ",
    subtitle:
      " Certified experts delivering tailored <br>IT solutions for public and private sectors.",
    image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757425395/19_jfjzn7.jpg",
  },
  {
    title: "Elevating Healthcare<br> Through Innovation",
    subtitle:
      "Modern IT solutions that enhance patient care <br> streamline operations, and ensure compliance.",
    image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424547/4_qfdxp3.png",
  },
  {
    title: "From Legacy to <br> Future-Ready",
    subtitle:
      "Seamless IT modernization that drives <br>  agility, efficiency, and long-term growth.",
    image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png",
  },
  {
    title: "AI-Powered Transformation <br> for Smarter Business",
    subtitle:
      "Harness artificial intelligence to unlock insights, <br>automate processes, and accelerate innovation.",
    image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424543/12_o5sl5x.png",
  },
];

// Services Data
const services = [
  {
    icon: <Brain className="h-10 w-10" />,
    title: "AI Transformation",
    description:
      "Harness AI to revolutionize business processes and decision-making.",
  },
  {
    icon: <Cloud className="h-10 w-10" />,
    title: "Modernization",
    description:
      "Migrate & optimize with cloud solutions for scalability & efficiency.",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Consulting",
    description: "Expert guidance to navigate complex technology challenges.",
  },
];

// ✅ Solutions Data
const solutions = [
  {
    icon: <Server className="h-10 w-10" />,
    title: "ServiceNow",
    description: "Streamline workflows and boost productivity with ServiceNow.",
  },
  {
    icon: <Cloud className="h-10 w-10" />,
    title: "AWS",
    description: "Scalable and secure cloud services powered by AWS.",
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "Salesforce",
    description: "Enhance customer engagement with Salesforce solutions.",
  },
  {
    icon: <Lock className="h-10 w-10" />,
    title: "DevSecOps",
    description:
      "Embed security at every stage with DevSecOps transformation.",
  },
];

// Blogs Data
const blogs = [
  {
    title: "Big DATA",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    image: ".//1.png",
  },
  {
    title: "Cloud",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    image: ".//2.png",
  },
  {
    title: "DevOps Transformation",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    image: ".//3.png",
  },
];

export default function LandingPage() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full">
      {/* ================== HERO SLIDER ================== */}
{/* ================== HERO SLIDER ================== */}
<section className="relative w-full min-h-screen overflow-hidden">
  {/* Slides Wrapper */}
  <div
    className="flex transition-transform duration-1000 ease-in-out"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {heroSlides.map((slide, idx) => (
      <div
        key={idx}
        className="w-full min-h-screen flex-shrink-0 relative bg-no-repeat"
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="relative z-20 flex flex-col justify-center items-start h-full px-6 sm:px-10 md:px-20 lg:px-28 text-left">
          
          {/* ✅ Title with line breaks */}
          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-5xl font-bold text-white leading-tight mb-5"
            dangerouslySetInnerHTML={{ __html: slide.title }}
          />

          {/* ✅ Subtitle with line breaks */}
          <p
            className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed"
            dangerouslySetInnerHTML={{ __html: slide.subtitle }}
          />

          <Link
            to="/contact"
            className="mt-6 md:mt-8 inline-flex items-center px-6 md:px-8 py-3 md:py-4 
              bg-[#ce3266]/90 backdrop-blur-md text-white font-semibold 
              rounded-lg border border-[#ce3266] shadow-lg hover:bg-[#ce3266] 
              transition duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* ================== WHAT WE DO ================== */}
      <section
        id="services"
        className="relative py-32 bg-gray-50 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:flex lg:items-start lg:gap-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0 flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-lg text-gray-700 mb-6">
             Technogen is a certified minority women-owned business enterprise that has been providing global IT services and consulting since 2003. From our headquarters in Chantilly, VA, and offices in Hyderabad and Khammam, India, our team of certified experts has powered over 500 successful end-to-end solutions for public and private sector clients. We specialize in delivering innovative, scalable, and value-driven technology solutions. 
            </p>
            <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
              Know more
            </span>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 flex items-start gap-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#172059] to-[#2a3491] rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#172059] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* ================== HOW WE DO DIFFERENTLY ================== */}
     <section
  id="how-we-differ"
  className="relative py-24 bg-cover bg-center"
  style={{
    backgroundImage: "url('https://wallpapercave.com/wp/YsmdCUB.jpg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/80"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-0 sm:px-6 text-center">
    <div className="bg-white/90 w-full p-10 sm:p-16 shadow-xl">
      <h2 className="text-5xl font-bold text-gray-900 mb-6">
        How We Do Differently
      </h2>
      <p className="text-xl text-gray-700 mb-12">
        At Technogen, sustainability is integral to business success.
      </p>
      <ul className="list-disc pl-6 space-y-3 text-left text-gray-700">
        <li>We act ethically, transparently, and responsibly.</li>
        <li>Making sustainability a part of all global business relationships.</li>
        <li>
          As an Accrediting Body for the global SCS-9001 standard, we advance ICT
          supply chain security.
        </li>
        <li>
          Ensuring trusted suppliers, resilient infrastructure, and long-lasting
          sustainable impact across the entire value chain.
        </li>
      </ul>
    </div>
  </div>
</section>
<section className="relative py-20 px-6 md:px-20 overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="https://framerusercontent.com/assets/eg4zyU6B3t9AHH140oL8N6295Ew.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Content */}
  <div className="relative max-w-6xl mx-auto text-center mb-12 z-10">
    <h2
      className="text-3xl md:text-4xl font-bold mb-4 text-white"
      // data-aos="fade-down"
    >
      Our Solutions
    </h2>
    <p
      className="text-lg text-white/90"
      // data-aos="fade-up"
      // data-aos-delay="200"
    >
      End-to-end IT services delivering{" "}
      <span className="font-semibold">innovation</span>,{" "}
      <span className="font-semibold">efficiency</span>, and{" "}
      <span className="font-semibold">business transformation</span>.
    </p>
  </div>

  {/* Solutions Grid */}
  <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
    {[
      {
        title: "ServiceNow",
        description:
          "Streamlining workflows for smarter, faster, enterprise-wide service delivery.",
        iconUrl:
          "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104045/servicenow_bqzolj.png",
        borderColor: "border-blue-900",
        color: "text-blue-800",
      },
      {
        title: "Salesforce",
        description:
          "Connecting customers through smarter, data-driven CRM solutions globally.",
        iconUrl:
          "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104056/Salesforce.com_logo.svg_ny6c0k.png",
        borderColor: "border-blue-700",
        color: "text-blue-600",
      },
      {
        title: "AWS",
        description:
          "Cloud-powered scalability driving agility, security, and business growth.",
        iconUrl:
          "https://res.cloudinary.com/deiqxagkd/image/upload/v1758089318/Group-504_ulbiqx.svg",
        borderColor: "border-orange-500",
        color: "text-orange-600",
      },
      {
        title: "DevSecOps",
        description:
          "Embedding security into agile development for continuous innovation.",
        iconUrl:
          "https://res.cloudinary.com/deiqxagkd/image/upload/v1758089318/Group-506_x7hxjs.svg",
        borderColor: "border-green-600",
        color: "text-green-600",
      },
    ].map((solution, idx) => (
      <div
        key={idx}
        className="bg-white rounded-2xl shadow-lg p-10 text-center flex flex-col items-center group animate-fade-up"
        data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-delay={idx * 250}
        style={{ animationDelay: `${idx * 0.2}s` }}
      >
        {/* Animated Logo Circle */}
        <div
          // className={`relative w-20 h-20 flex items-center justify-center rounded-full border-4 ${solution.borderColor} mb-4 
          //             group-hover:scale-110 transition-transform animate-border-spin`}
        >
          <img
            src={solution.iconUrl}
            alt={solution.title}
            className="h-10 w-10 object-contain"
          />
        </div>

        <h3 className={`text-xl font-bold mb-3 ${solution.color}`}>
          {solution.title}
        </h3>
        <p className="text-gray-700 text-base">{solution.description}</p>
      </div>
    ))}
  </div>

  {/* Decorative Curve Bottom */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
    <svg
      className="relative block w-full h-28 md:h-32"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    ></svg>
  </div>

  {/* Keyframe Animations */}
  <style>{`
    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-up {
      animation: fadeUp 0.6s ease forwards;
    }
    @keyframes borderSpin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .animate-border-spin {
      animation: borderSpin 6s linear infinite;
    }
  `}</style>
</section>


<section
  id="blogs"
  className="relative py-16 bg-[#22224b] text-white overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-4xl font-extrabold tracking-tight">
      Blogs
    </h2>
    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4 mb-10">
      Stay updated with the latest insights in technology, innovation, and
      business strategy.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog, idx) => (
        <div
          key={idx}
          className="group bg-gradient-to-tr from-[#2a2a5e] via-[#22224b] to-[#2a2a5e] 
                     rounded-2xl shadow-lg overflow-hidden transform transition 
                     duration-500 hover:-translate-y-2 hover:scale-105"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-5 space-y-3 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-white">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-300">{blog.description}</p>

            {/* ✅ Centered Button */}
            <div className="flex justify-center w-full mt-4">
              <button className="cssbuttonsIoButton">
                Read More
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
      ))}
    </div>
  </div>

  {/* ✅ Fancy Button Styles */}
  <style>
    {`
      .cssbuttonsIoButton {
        background: #ce3266;   /* 🔹 Pink Button */
        color: white;
        font-family: inherit;
        border: 1px solid #ce3266;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        border-radius: 2rem;
        letter-spacing: 0.05em;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        height: 2.6em;
        padding-right: 3em;
        padding-left: 1rem;
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
        height: 2em;
        width: 2em;
        border-radius: 2rem;
        right: 0.4em;
        transition: all 0.3s ease-out;
      }

      .cssbuttonsIoButton:hover {
        background-color: white;
        color: #ce3266;   /* 🔹 Text becomes pink */
        border: 1px solid #ce3266;
      }

      .cssbuttonsIoButton .icon svg {
        width: 1em;
        transition: transform 0.3s ease-out;
        color: #ce3266;   /* 🔹 Arrow pink */
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

    </main>
  );
}

