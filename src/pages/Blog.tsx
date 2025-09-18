// // import React, { useState } from 'react';
// // import { Calendar, User, Tag, Search, ArrowRight } from 'lucide-react';

// // const Blog: React.FC = () => {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [categoryFilter, setCategoryFilter] = useState('');

// //   const blogPosts = [
// //     {
// //       title: "The Future of AI in Government Operations",
// //       excerpt: "Exploring how artificial intelligence is transforming public sector efficiency and citizen services through automation, predictive analytics, and intelligent decision-making systems.",
// //       author: "Dr. Sarah Johnson",
// //       date: "January 15, 2025",
// //       category: "AI & Machine Learning",
// //       readTime: "8 min read",
// //       image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
// //       tags: ["Artificial Intelligence", "Government", "Automation", "Digital Transformation"]
// //     },
// //     {
// //       title: "Cybersecurity Best Practices for 2025",
// //       excerpt: "Essential security strategies and frameworks to protect your organization's digital assets in an evolving threat landscape, including zero-trust architecture and advanced threat detection.",
// //       author: "Michael Chen",
// //       date: "January 12, 2025",
// //       category: "Cybersecurity",
// //       readTime: "6 min read",
// //       image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
// //       tags: ["Cybersecurity", "Zero Trust", "Threat Detection", "Risk Management"]
// //     },
// //     {
// //       title: "Cloud Migration: A Strategic Approach",
// //       excerpt: "Key considerations and methodologies for successful cloud adoption and migration initiatives, covering assessment, planning, execution, and optimization phases.",
// //       author: "Amanda Rodriguez",
// //       date: "January 10, 2025",
// //       category: "Cloud Computing",
// //       readTime: "10 min read",
// //       image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
// //       tags: ["Cloud Migration", "AWS", "Azure", "Digital Transformation"]
// //     },
// //     {
// //       title: "ServiceNow Implementation Success Factors",
// //       excerpt: "Critical elements that determine the success of ServiceNow deployments, from stakeholder engagement to change management and technical best practices.",
// //       author: "David Thompson",
// //       date: "January 8, 2025",
// //       category: "ServiceNow",
// //       readTime: "7 min read",
// //       image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
// //       tags: ["ServiceNow", "ITSM", "Implementation", "Change Management"]
// //     },
// //     {
// //       title: "Data Analytics in the Public Sector",
// //       excerpt: "How government agencies are leveraging data analytics to improve decision-making, enhance citizen services, and optimize operational efficiency through evidence-based approaches.",
// //       author: "Dr. Sarah Johnson",
// //       date: "January 5, 2025",
// //       category: "Data Analytics",
// //       readTime: "9 min read",
// //       image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
// //       tags: ["Data Analytics", "Government", "Business Intelligence", "Decision Making"]
// //     },
// //     {
// //       title: "Digital Transformation in Higher Education",
// //       excerpt: "How universities and colleges are modernizing their technology infrastructure to enhance student experiences, improve administrative efficiency, and enable remote learning.",
// //       author: "Michael Chen",
// //       date: "January 3, 2025",
// //       category: "Education Technology",
// //       readTime: "8 min read",
// //       image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
// //       tags: ["Education", "Digital Transformation", "Student Experience", "Remote Learning"]
// //     }
// //   ];

// //   const categories = [
// //     "All Categories",
// //     "AI & Machine Learning",
// //     "Cybersecurity",
// //     "Cloud Computing",
// //     "ServiceNow",
// //     "Data Analytics",
// //     "Education Technology"
// //   ];

// //   const filteredPosts = blogPosts.filter(post => {
// //     const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
// //     const matchesCategory = categoryFilter === '' || categoryFilter === 'All Categories' || post.category === categoryFilter;
    
// //     return matchesSearch && matchesCategory;
// //   });

// //   return (
// //     <div className="pt-16">
// //       {/* Hero Section */}
// //       <section className="bg-[#172059] text-white py-20">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center">
// //             <h1 className="text-4xl lg:text-5xl font-bold mb-6">Technology Insights</h1>
// //             <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
// //               Stay informed with the latest trends, best practices, and thought leadership in technology and digital transformation
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Search and Filters */}
// //       <section className="py-8 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex flex-col md:flex-row gap-4">
// //             <div className="flex-1 relative">
// //               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
// //               <input
// //                 type="text"
// //                 placeholder="Search articles..."
// //                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //               />
// //             </div>
// //             <select
// //               className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
// //               value={categoryFilter}
// //               onChange={(e) => setCategoryFilter(e.target.value)}
// //             >
// //               {categories.map(category => (
// //                 <option key={category} value={category === 'All Categories' ? '' : category}>
// //                   {category}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Blog Posts Grid */}
// //       <section className="py-16 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="mb-8">
// //             <h2 className="text-2xl font-bold text-gray-900 mb-2">
// //               Latest Articles ({filteredPosts.length})
// //             </h2>
// //             <p className="text-gray-600">
// //               Expert insights and analysis from our technology leaders
// //             </p>
// //           </div>
          
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {filteredPosts.map((post, index) => (
// //               <article key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
// //                 <img
// //                   src={post.image}
// //                   alt={post.title}
// //                   className="w-full h-48 object-cover"
// //                 />
// //                 <div className="p-6">
// //                   <div className="flex items-center justify-between mb-4">
// //                     <span className="px-3 py-1 bg-[#172059] text-white text-xs font-semibold rounded-full">
// //                       {post.category}
// //                     </span>
// //                     <span className="text-sm text-gray-500">{post.readTime}</span>
// //                   </div>
                  
// //                   <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#172059] transition-colors">
// //                     {post.title}
// //                   </h3>
                  
// //                   <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
// //                   <div className="flex items-center justify-between mb-4">
// //                     <div className="flex items-center text-sm text-gray-500">
// //                       <User className="h-4 w-4 mr-1" />
// //                       {post.author}
// //                     </div>
// //                     <div className="flex items-center text-sm text-gray-500">
// //                       <Calendar className="h-4 w-4 mr-1" />
// //                       {post.date}
// //                     </div>
// //                   </div>
                  
// //                   <div className="flex flex-wrap gap-2 mb-4">
// //                     {post.tags.slice(0, 2).map((tag, tagIndex) => (
// //                       <span key={tagIndex} className="inline-flex items-center px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded">
// //                         <Tag className="h-3 w-3 mr-1" />
// //                         {tag}
// //                       </span>
// //                     ))}
// //                   </div>
                  
// //                   <button className="inline-flex items-center text-[#172059] font-semibold hover:text-[#1a1f4f] transition-colors">
// //                     Read Full Article
// //                     <ArrowRight className="ml-1 h-4 w-4" />
// //                   </button>
// //                 </div>
// //               </article>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Newsletter Signup */}
// //       <section className="py-16 bg-[#172059] text-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <h2 className="text-3xl font-bold mb-6">Stay Informed</h2>
// //           <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
// //             Subscribe to our newsletter for the latest insights, industry trends, and technology updates delivered to your inbox.
// //           </p>
// //           <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
// //             <input
// //               type="email"
// //               placeholder="Enter your email address"
// //               className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
// //             />
// //             <button className="px-6 py-3 bg-white text-[#172059] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
// //               Subscribe
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Blog;
// import React from "react";
// import { Search } from "lucide-react";

// const blogs = [
//   {
//     id: 1,
//     title:
//       "Why Most Companies Underutilize ServiceNow and How Technogen can help you Fix it",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     image: "/images/blog1.jpg",
//   },
//   {
//     id: 2,
//     title:
//       "Unlocking Business Potential: The Importance of Data Modernization in the Digital Age",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     image: "/images/blog2.jpg",
//   },
//   {
//     id: 3,
//     title:
//       "The Role of Zero Trust Architecture in Fortifying Public Sector Cybersecurity",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     image: "/images/blog3.jpg",
//   },
//   {
//     id: 4,
//     title:
//       "Unlocking Business Potential: The Importance of Data Modernization in the Digital Age",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     image: "/images/blog4.jpg",
//   },
// ];

// const BlogPage: React.FC = () => {
//   return (
//     <div className="font-sans">
//       {/* Hero Section */}
//       <section className="bg-[#22224b] text-white py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
//             <span className="w-3 h-3 bg-green-400 inline-block rounded-sm"></span>{" "}
//             Blogs
//           </h1>
//           <div className="mt-6">
//             <img
//               src=".//Healthcare.png"
//               alt="Blog Hero"
//               className="w-full rounded-lg"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Section 2 */}
//       <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
//         <div className="text-center mb-12">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//             SHAPING WHAT’S NEXT
//           </h2>
//           <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
//             Discover the latest blogs, innovations, and milestones from the
//             world of Technogen.
//           </p>
//         </div>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Blog Cards */}
//           <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
//             {blogs.map((blog) => (
//               <div
//                 key={blog.id}
//                 className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition"
//               >
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg text-gray-800">
//                     {blog.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mt-2">
//                     {blog.description}
//                   </p>
//                   <button className="mt-3 text-pink-600 font-medium text-sm hover:underline">
//                     Read more →
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Search */}
//             <div className="bg-white shadow-md p-4 rounded-lg border">
//               <h4 className="font-semibold mb-3">Search</h4>
//               <div className="flex items-center border rounded-lg overflow-hidden">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="flex-1 px-3 py-2 outline-none text-sm"
//                 />
//                 <button className="px-3 text-gray-500 hover:text-pink-600">
//                   <Search className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Featured Blog */}
//             <div className="relative rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/images/featured.jpg"
//                 alt="Featured Blog"
//                 className="w-full h-56 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
//                 <p className="text-sm">
//                   It is a long established fact that a reader
//                 </p>
//                 <button className="mt-3 bg-pink-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-pink-700">
//                   Read more
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BlogPage;
import { ArrowUpRight, Search } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title:
      "Why Most Companies Underutilize ServiceNow and How Technogen can help you Fix It",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title:
      "Unlocking Business Potential: The Importance of Data Modernization in the Digital Age",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title:
      "The Role of Zero Trust Architecture in Fortifying Public Sector Cybersecurity",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title:
      "Driving Innovation with AI and Cloud Solutions in Modern Enterprises",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  },
];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter blogs by search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-sans">
      {/* Section 1: Hero Banner */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1757945332/5d3de5a3-8791-4adc-bc4a-e176f3b330d7.png"
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Section 2: Heading + Subheading */}
      <section className="py-16 px-6 md:px-16 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          SHAPING WHAT’S NEXT
        </h2>
        <p className="text-gray-600 text-lg">
          Discover the latest blogs, innovations, and milestones from the world
          of Technogen.
        </p>
      </section>

      {/* Section 3: Blog Grid */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Blog Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-pink-500 hover:scale-[1.02]"
              >
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover rounded-t-xl"
                  />
                  <Link
                    to={`/blog/${blog.id}`}
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-pink-50"
                  >
                    <ArrowUpRight className="h-5 w-5 text-gray-700 hover:text-pink-600" />
                  </Link>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{blog.description}</p>
                  <div className="mt-4 border-t pt-3">
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-pink-600 font-medium text-sm hover:underline inline-flex items-center"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search Box */}
            <div className="bg-white shadow-md p-4 rounded-lg border">
              <h4 className="font-semibold mb-3">Search</h4>
              <div className="flex items-center border rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-3 py-2 outline-none text-sm"
                />
                <button className="px-3 text-gray-500 hover:text-pink-600">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Featured Blog */}
            <div className="relative rounded-xl overflow-hidden shadow-md border">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=1000&fit=crop"
                alt="Featured Blog"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5 text-white">
                <p className="text-sm">
                  Featured: A closer look into Digital Transformation
                </p>
                <Link
                  to="/blog/featured"
                  className="mt-3 bg-pink-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-pink-700 w-fit"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
