import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="w-full">
      {/* ================= Section 1 (Hero Background) ================= */}
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758182108/About-Us_1_ouio09.png')", // Replace with your hero image
        }}
      >
        <div className="w-full h-auto object-cover"></div>
       
      </section>

     {/* ================= Section 2 (We Are Technogen) ================= */}
<section className="relative bg-white py-16 px-6">
  <div className="max-w-6xl mx-auto bg-[#22224b] text-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-10">
    {/* Left Text */}
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
        We Are Technogen
      </h2>
      <p className="text-base md:text-lg leading-relaxed">
        Technogen, Inc. headquartered in Chantilly, Virginia, is a CMMI Level 3
        and ISO-certified global IT services and consulting company. Founded in
        2003 as a Minority & Women-Owned Small Business, we deliver end-to-end
        IT solutions to public and private sector clients worldwide.
      </p>
    </div>
    {/* Right Image */}
    <div className="flex justify-center">
      <img
        src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758191530/earth-tech.png"
        alt="We Are Technogen"
        className="rounded-xl w-full md:w-4/5"
      />
    </div>
  </div>
</section>

   {/* ================= Section 3 (Large Images Only - Bigger + Less Gap) ================= */}
<section className="py-20 bg-white-50">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center">
    {/* Image 1 */}
    <img
      src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758193049/Path-80_1_1_frpibn.png"
      alt="Vision"
      className="w-56 md:w-72 lg:w-80"
    />

    {/* Image 2 */}
    <img
      src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758194972/Path-80_3_1_jjl7a5.png"
      alt="Mission"
      className="w-56 md:w-72 lg:w-80"
    />

    {/* Image 3 */}
    <img
      src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758193049/Path-80_4_dawdzb.png"
      alt="Values"
      className="w-56 md:w-72 lg:w-80"
    />
  </div>
</section>

      {/* ================= Section 4 (Sustainability) ================= */}
      <section className="relative py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto bg-[#101858] text-white rounded-2xl shadow-xl p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
            Sustainability at Technogen
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            At Technogen, sustainability is at the core of our operations. We
            integrate eco-friendly practices into every stage of our services,
            ensuring that our growth aligns with the well-being of our planet
            and future generations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
