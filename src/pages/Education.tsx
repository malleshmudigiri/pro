import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationLanding = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, offset: 100 });
  }, []);

  return (
    <div className="font-[Montserrat]">
      {/* ===== Hero Banner ===== */}
      <section
        className="relative h-screen flex items-center justify-center text-center text-white bg-coverw-full h-screen flex items-center justify-center text-center text-white bg-cover bg-center relative "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758108147/Education-Banner_iaalu1.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b " />
        <div className="relative z-10 px-4 max-w-4xl">
          {/* <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-6"
            data-aos="fade-up"
          >
            Reimagining Learning with{" "}
            <span className="text-[#ce3266]">AI-Powered Innovation</span>
          </h1> */}
          {/* <p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Personalized Education and Smarter Operations for Every Institution
          </p> */}
        </div>

        {/* Bottom Curve */}
        {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-28 md:h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,176C840,181,960,139,1080,133.3C1200,128,1320,160,1380,176L1440,192V320H0Z"
            />
          </svg>
        </div> */}
      </section>

      {/* ===== AI Introduction ===== */}
      <section className="bg-white py-16 px-6 md:px-20 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-extrabold leading-snug mb-6"
            data-aos="fade-up"
          >
            Reimagining Learning with{" "}
            <span className="text-[black]">AI-Powered Innovation</span>
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl text-black-200 font-medium"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Personalized Education and Smarter Operations for Every Institution
          </p>
          <p
            className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-6"
            data-aos="fade-up"
          >
            Artificial Intelligence is reshaping education by{" "}
            {/* <span className="text-[ font-semibold"> */}
            <span className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-6">

              personalizing learning
            </span>
            , enhancing student engagement, and streamlining administrative
            operations.{" "}
            <span className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-6">Technogen</span> partners
            analytics, empowering faculty, staff, and students to innovate
            responsibly.
          </p>
          <p
            className="text-base sm:text-lg md:text-xl text-black leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            From digital transformation and IT governance to{" "}
            <span className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-6">DevSecOps</span> and{" "}
            <span className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-6">
              managed services
            </span>
            , we help institutions prepare for a smarter, more connected
            educational future.
          </p>
        </div>
      </section>

      {/* ===== Education Solutions ===== */}
      <section className="relative py-20 px-6 md:px-20 overflow-hidden text-white">
        {/* Background Video (NO overlay) */}
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
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-down"
          >
            Education Solutions
          </h2>
          <p
            className="text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Tailored technology solutions for{" "}
            <span className="text-[white] font-regular">
           
              Higher Education & K-12
            </span>
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Higher Education */}
          <div
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold text-[#22224b] mb-4">
              Higher Education
            </h3>
            <p className="text-gray-800 mb-6 text-base md:text-lg">
              Cloud technology is transforming higher education by enhancing
              performance, expanding capabilities, and increasing accessibility.
              Its scalable infrastructure and advanced features support AI and
              machine learning initiatives, empowering institutions to deliver
              smarter learning experiences.
            </p>
          </div>

          {/* K-12 Education */}
          <div
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold text-[#ce3266] mb-4">
              K-12 Education
            </h3>
            <p className="text-gray-800 mb-6 text-base md:text-lg">
              Cloud technology is transforming K-12 education by enhancing
              performance, widening access to digital resources, and reducing
              costs. Its scalable infrastructure and advanced capabilities
              support innovative educational tools, enabling teachers and
              students to achieve more and engage more effectively.
            </p>
          </div>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg
            className="relative block w-full h-28 md:h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            {/* <path
              fill="#ffffff"
              d="M0,96L60,128C120,160,240,224,360,229.3C480,235,600,181,720,181.3C840,181,960,235,1080,250.7C1200,267,1320,245,1380,234.7L1440,224V320H0Z"
            /> */}
          </svg>
        </div>
      </section>
    </div>
  );
};

export default EducationLanding;
