// import React from 'react';
// import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet';

// const jobList = [
//   {
//     title: 'Frontend Developer',
//     company: 'TechSpark Solutions',
//     location: 'Remote',
//     type: 'Full-time',
//     applyLink: '#',
//   },
//   {
//     title: 'Cybersecurity Analyst Intern',
//     company: 'SecureWave',
//     location: 'Pune, Maharashtra',
//     type: 'Internship',
//     applyLink: '#',
//   },
//   {
//     title: 'Backend Developer Intern',
//     company: 'CodeHut',
//     location: 'Bangalore, India',
//     type: 'Internship',
//     applyLink: '#',
//   },
// ];

// const Internships = () => {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-green-100 to-white py-12 px-4">
//       <Helmet>
//         <title>Jobs & Internships | SITS Alumni</title>
//         <meta name="description" content="Explore job and internship opportunities shared by alumni for students of SITS." />
//       </Helmet>

//       {/* Hero Section */}
//       <div className="text-center mb-12">
//         <motion.h1
//           className="text-4xl font-extrabold text-green-900 mb-4"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Alumni Job & Internship Postings
//         </motion.h1>
//         <motion.p
//           className="text-lg text-gray-700"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Alumni can post internship and job opportunities here. Students can explore and apply directly.
//         </motion.p>
//       </div>

//       {/* Listings Section */}
//       <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {jobList.map((job, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-600 hover:shadow-xl transition"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//           >
//             <h3 className="text-xl font-bold text-green-800 mb-1">{job.title}</h3>
//             <p className="text-gray-700">{job.company}</p>
//             <p className="text-gray-600 text-sm">{job.location}</p>
//             <span className="inline-block mt-2 px-3 py-1 text-sm bg-green-200 text-green-800 rounded-full">{job.type}</span>
//             <div className="mt-4">
//               <a
//                 href={job.applyLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
//               >
//                 Apply Now
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Internships;





// ------------------------1st version online -------------------------------------------------------------






// // /pages/Internships.jsx
// import React, { useState, useMemo } from 'react';
// import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet';

// // Mock Data - In a real application, this would come from an API
// const allJobListings = [
//   {
//     id: 'j1',
//     title: 'Frontend Developer Intern',
//     company: 'InnovateX Solutions',
//     location: 'Remote',
//     type: 'Internship',
//     description: 'Join our dynamic team to build responsive and user-friendly web interfaces using React and Tailwind CSS. You will work closely with senior developers, gaining hands-on experience in a fast-paced environment.',
//     postedDate: '2024-07-20',
//     applyLink: 'https://github.com/mrunal-awate',
//     skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Git'],
//   },
//   {
//     id: 'j2',
//     title: 'Cybersecurity Analyst (Entry-Level)',
//     company: 'SecureNet Defense',
//     location: 'Pune, Maharashtra',
//     type: 'Full-time',
//     description: 'Protect our digital assets, monitor security systems, and respond to incidents. This role is ideal for recent graduates with a strong interest in cybersecurity and a willingness to learn.',
//     postedDate: '2024-07-18',
//     applyLink: '#',
//     skills: ['Cybersecurity', 'Network Security', 'Linux', 'Incident Response', 'Python'],
//   },
//   {
//     id: 'j3',
//     title: 'Backend Developer Intern (Node.js)',
//     company: 'DataFlow Systems',
//     location: 'Bangalore, India',
//     type: 'Internship',
//     description: 'Work on scalable backend services using Node.js, Express, and MongoDB. Opportunity to learn about cloud deployments and contribute to critical system architecture.',
//     postedDate: '2024-07-15',
//     applyLink: '#',
//     skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git', 'AWS'],
//   },
//   {
//     id: 'j4',
//     title: 'Data Scientist',
//     company: 'Analytics Hub',
//     location: 'Hyderabad, India',
//     type: 'Full-time',
//     description: 'Analyze large datasets, build predictive models, and provide data-driven insights to improve business strategies. You will be part of a team pushing the boundaries of data science.',
//     postedDate: '2024-07-10',
//     applyLink: '#',
//     skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Data Visualization', 'Pandas'],
//   },
//   {
//     id: 'j5',
//     title: 'UI/UX Designer Intern',
//     company: 'Creative Minds Studio',
//     location: 'Remote',
//     type: 'Internship',
//     description: 'Collaborate with product teams to design intuitive and engaging user experiences for web and mobile applications. A strong portfolio demonstrating design thinking is a plus.',
//     postedDate: '2024-07-05',
//     applyLink: '#',
//     skills: ['Figma', 'Sketch', 'User Research', 'Wireframing', 'Prototyping', 'Adobe XD'],
//   },
//   {
//     id: 'j6',
//     title: 'Cloud Engineer',
//     company: 'CloudBridge Technologies',
//     location: 'Mumbai, India',
//     type: 'Full-time',
//     description: 'Design, implement, and manage cloud infrastructure on AWS/Azure/GCP. Experience with DevOps practices preferred. This role offers significant growth potential in cloud technologies.',
//     postedDate: '2024-07-01',
//     applyLink: '#',
//     skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
//   },
//   {
//     id: 'j7',
//     title: 'Marketing Intern',
//     company: 'GrowthGenius',
//     location: 'Chennai, India',
//     type: 'Internship',
//     description: 'Assist in developing and executing digital marketing campaigns, content creation, and social media management. Gain practical experience in a dynamic marketing environment.',
//     postedDate: '2024-06-28',
//     applyLink: '#',
//     skills: ['Digital Marketing', 'Content Creation', 'Social Media', 'SEO', 'Analytics'],
//   },
//   {
//     id: 'j8',
//     title: 'DevOps Engineer',
//     company: 'Reliable Systems',
//     location: 'Remote',
//     type: 'Full-time',
//     description: 'Automate and optimize our software development processes, ensuring seamless deployment and operation. You will play a key role in improving our continuous integration and delivery pipelines.',
//     postedDate: '2024-06-25',
//     applyLink: '#',
//     skills: ['CI/CD', 'Ansible', 'Terraform', 'Kubernetes', 'Linux', 'Jenkins'],
//   },
//   {
//     id: 'j9',
//     title: 'Software Development Engineer',
//     company: 'InnovateX Solutions',
//     location: 'Hyderabad, India',
//     type: 'Full-time',
//     description: 'Develop, test, and deploy high-quality software solutions. Work across the full stack and contribute to innovative product features.',
//     postedDate: '2024-07-22',
//     applyLink: '#',
//     skills: ['Java', 'Spring Boot', 'Microservices', 'SQL', 'REST APIs'],
//   },
//   {
//     id: 'j10',
//     title: 'Product Management Intern',
//     company: 'NextGen Products',
//     location: 'Bangalore, India',
//     type: 'Internship',
//     description: 'Assist product managers in defining product roadmaps, gathering requirements, and analyzing market trends. A great opportunity to learn about the product lifecycle.',
//     postedDate: '2024-07-19',
//     applyLink: '#',
//     skills: ['Product Management', 'Market Research', 'Agile', 'Jira'],
//   },
// ];

// const Internships = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedType, setSelectedType] = useState('All');
//   const [selectedLocation, setSelectedLocation] = useState('All');

//   // Extract unique types and locations for filter dropdowns
//   const jobTypes = useMemo(() => ['All', ...new Set(allJobListings.map((job) => job.type))], []);
//   const jobLocations = useMemo(() => ['All', ...new Set(allJobListings.map((job) => job.location))], []);

//   // Filter jobs based on search term, type, and location
//   const filteredJobs = useMemo(() => {
//     return allJobListings.filter((job) => {
//       const matchesSearch =
//         job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         job.description.toLowerCase().includes(searchTerm.toLowerCase());

//       const matchesType = selectedType === 'All' || job.type === selectedType;
//       const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;

//       return matchesSearch && matchesType && matchesLocation;
//     });
//   }, [searchTerm, selectedType, selectedLocation]);

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'short', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 md:px-8">
//       <Helmet>
//         <title>Jobs & Internships | SITS Alumni</title>
//         <meta name="description" content="Explore job and internship opportunities shared by alumni for students of SITS." />
//       </Helmet>

//       {/* Hero Section */}
//       <div className="text-center mb-12">
//         <motion.h1
//           className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 drop-shadow-md"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <span role="img" aria-label="briefcase" className="mr-3">💼</span>
//           Alumni Job & Internship Postings
//         </motion.h1>
//         <motion.p
//           className="text-lg text-gray-700 max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
//           Discover exclusive career opportunities shared by our esteemed alumni network.
//           Students can explore and apply directly, while alumni can easily post new openings.
//         </motion.p>
//       </div>

//       {/* Post a Job Section */}
//       <motion.div
//         className="bg-green-700 text-white rounded-2xl p-6 md:p-8 text-center max-w-4xl mx-auto mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//       >
//         <h2 className="text-2xl md:text-3xl font-bold mb-3">
//           Have an Opportunity to Share?
//         </h2>
//         <p className="text-lg mb-6 opacity-90">
//           Help the next generation of SITS talent find their dream roles.
//         </p>
//         <a
//           href="#" // Placeholder for actual job posting form link
//           className="inline-flex items-center bg-white text-green-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
//         >
//           <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 100-2 1 1 0 00-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path></svg>
//           Post a Job / Internship
//         </a>
//       </motion.div>

//       {/* Filters and Search */}
//       <motion.div
//         className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.8 }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Search Bar */}
//           <div>
//             <label htmlFor="search" className="block text-gray-700 text-sm font-semibold mb-2">
//               Search Keywords
//             </label>
//             <div className="relative">
//               <input
//                 type="text"
//                 id="search"
//                 placeholder="Title, company, or skill..."
//                 className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition-all"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
//               </div>
//             </div>
//           </div>

//           {/* Job Type Filter */}
//           <div>
//             <label htmlFor="jobType" className="block text-gray-700 text-sm font-semibold mb-2">
//               Job Type
//             </label>
//             <div className="relative">
//               <select
//                 id="jobType"
//                 className="w-full p-3 pr-10 border border-gray-300 rounded-lg appearance-none focus:ring-green-500 focus:border-green-500 transition-all bg-white"
//                 value={selectedType}
//                 onChange={(e) => setSelectedType(e.target.value)}
//               >
//                 {jobTypes.map((type) => (
//                   <option key={type} value={type}>
//                     {type}
//                   </option>
//                 ))}
//               </select>
//               <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                 <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
//               </div>
//             </div>
//           </div>

//           {/* Location Filter */}
//           <div>
//             <label htmlFor="location" className="block text-gray-700 text-sm font-semibold mb-2">
//               Location
//             </label>
//             <div className="relative">
//               <select
//                 id="location"
//                 className="w-full p-3 pr-10 border border-gray-300 rounded-lg appearance-none focus:ring-green-500 focus:border-green-500 transition-all bg-white"
//                 value={selectedLocation}
//                 onChange={(e) => setSelectedLocation(e.target.value)}
//               >
//                 {jobLocations.map((location) => (
//                   <option key={location} value={location}>
//                     {location}
//                   </option>
//                 ))}
//               </select>
//               <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                 <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Listings Section */}
//       <div className="max-w-6xl mx-auto">
//         {filteredJobs.length === 0 ? (
//           <motion.div
//             className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <p className="text-xl text-gray-600 font-semibold">
//               <span role="img" aria-label="sad face" className="mr-2">😔</span>
//               No job or internship opportunities match your criteria.
//             </p>
//             <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
//           </motion.div>
//         ) : (
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {filteredJobs.map((job, index) => (
//               <motion.div
//                 key={job.id} // Use unique ID as key
//                 className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }} // Animate only once when in view
//                 transition={{ duration: 0.4, delay: index * 0.05 }} // Staggered animation
//               >
//                 <h3 className="text-xl font-bold text-green-800 mb-2 flex items-center">
//                   <svg className="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
//                   {job.title}
//                 </h3>
//                 <p className="text-gray-700 text-base mb-1 flex items-center">
//                   <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
//                   {job.company}
//                 </p>
//                 <p className="text-gray-600 text-sm mb-2 flex items-center">
//                   <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
//                   {job.location}
//                 </p>
//                 <span className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${
//                     job.type === 'Internship' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
//                   }`}>
//                   {job.type}
//                 </span>
//                 <p className="text-gray-500 text-xs mt-2 flex items-center">
//                   <svg className="w-3.5 h-3.5 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
//                   Posted: {formatDate(job.postedDate)}
//                 </p>

//                 {/* Skills Section */}
//                 {job.skills && job.skills.length > 0 && (
//                   <div className="mt-3">
//                     <h5 className="text-sm font-semibold text-gray-700 mb-1">Skills:</h5>
//                     <div className="flex flex-wrap gap-2">
//                       {job.skills.map((skill, skillIdx) => (
//                         <span key={skillIdx} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded-md border border-gray-200">
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 <div className="mt-4">
//                   <a
//                     href={job.applyLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-md"
//                   >
//                     <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.672 1.911a1.86 1.86 0 011.929.07l2.775 2.776a.75.75 0 001.06 0l3.183-3.182a.75.75 0 00-1.06-1.061L12.5 3.896l-2.775-2.776a.75.75 0 00-1.06 0L5.428 5.728a.75.75 0 001.06 1.06l1.911-1.911a.75.75 0 000-1.06z" clipRule="evenodd"></path><path fillRule="evenodd" d="M2.5 6.75a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H3.25a.75.75 0 01-.75-.75zM3.25 9a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H3.25zM2.5 11.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H3.25a.75.75 0 01-.75-.75zM3.25 13.5a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H3.25zM2.5 15.75a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H3.25a.75.75 0 01-.75-.75z" clipRule="evenodd"></path></svg>
//                     Apply Now
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Internships;




// -------------------------2nd version online -------------------------------------------------------------








// import React, { useState, useMemo, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet";
// import { supabase } from "../supabaseClient";

// /* ---- SAME MOCK DATA (unchanged) ---- */
// const allJobListings = [/* your full array unchanged */];

// const Internships = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedType, setSelectedType] = useState("All");
//   const [selectedLocation, setSelectedLocation] = useState("All");

//   const [session, setSession] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [isAlumni, setIsAlumni] = useState(false);

//   useEffect(() => {
//     const init = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();
//       setSession(session);

//       if (!session) return;

//       const userId = session.user.id;

//       // Check if verified in any role
//       const { data: student } = await supabase
//         .from("students")
//         .select("is_verified")
//         .eq("id", userId)
//         .single();

//       const { data: alumni } = await supabase
//         .from("alumni")
//         .select("is_verified")
//         .eq("id", userId)
//         .single();

//       const { data: faculty } = await supabase
//         .from("faculty")
//         .select("is_verified")
//         .eq("id", userId)
//         .single();

//       if (student?.is_verified || alumni?.is_verified || faculty?.is_verified) {
//         setIsVerified(true);
//       }

//       if (alumni?.is_verified) {
//         setIsAlumni(true);
//       }
//     };

//     init();
//   }, []);

//   /* 🔐 Restrict visibility */
//   const visibleJobs = isVerified ? allJobListings : allJobListings.slice(0, 3);

//   const jobTypes = useMemo(() => ["All", ...new Set(allJobListings.map((job) => job.type))], []);
//   const jobLocations = useMemo(() => ["All", ...new Set(allJobListings.map((job) => job.location))], []);

//   const filteredJobs = useMemo(() => {
//     return visibleJobs.filter((job) => {
//       const matchesSearch =
//         job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         job.description.toLowerCase().includes(searchTerm.toLowerCase());

//       const matchesType = selectedType === "All" || job.type === selectedType;
//       const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;

//       return matchesSearch && matchesType && matchesLocation;
//     });
//   }, [searchTerm, selectedType, selectedLocation, visibleJobs]);

//   const formatDate = (dateString) =>
//     new Date(dateString).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 md:px-8">
//       <Helmet>
//         <title>Jobs & Internships | SITS Alumni</title>
//       </Helmet>

//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-extrabold text-green-800 mb-4">💼 Alumni Job & Internship Postings</h1>
//         {!isVerified && (
//           <p className="text-red-600 font-semibold mt-2">
//             🔒 Verify your account to see full job board
//           </p>
//         )}
//       </div>

//       {isAlumni && (
//         <div className="text-center mb-10">
//           <a
//             href="#"
//             className="bg-green-700 text-white px-6 py-3 rounded-full shadow hover:bg-green-800"
//           >
//             ➕ Post a Job / Internship
//           </a>
//         </div>
//       )}

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//         {filteredJobs.map((job) => (
//           <motion.div key={job.id} className="bg-white p-6 rounded-xl shadow">
//             <h3 className="text-xl font-bold text-green-700">{job.title}</h3>
//             <p>{job.company} — {job.location}</p>
//             <span className="text-sm">{job.type}</span>
//             <p className="text-xs mt-2">Posted {formatDate(job.postedDate)}</p>
//             <a
//               href={job.applyLink}
//               className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded"
//             >
//               Apply
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Internships;









// ---------------------------- final version online -------------------------------------------------------------









// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet";
// import { supabase } from "../supabaseClient";

// /* ---- SAME MOCK DATA (unchanged) ---- */
// const allJobListings = [
//   /* your full array unchanged */
// ];

// const Internships = () => {
//   const [isVerified, setIsVerified] = useState(false);
//   const [isAlumni, setIsAlumni] = useState(false);

//   /* 🔐 Auth + verification */
//   useEffect(() => {
//     const init = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();

//       if (!session) return;

//       const userId = session.user.id;

//       const { data: student } = await supabase
//         .from("students")
//         .select("is_verified")
//         .eq("id", userId)
//         .maybeSingle();

//       const { data: alumni } = await supabase
//         .from("alumni")
//         .select("is_verified")
//         .eq("id", userId)
//         .maybeSingle();

//       const { data: faculty } = await supabase
//         .from("faculty")
//         .select("is_verified")
//         .eq("id", userId)
//         .maybeSingle();

//       if (student?.is_verified || alumni?.is_verified || faculty?.is_verified) {
//         setIsVerified(true);
//       }

//       if (alumni?.is_verified) {
//         setIsAlumni(true);
//       }
//     };

//     init();
//   }, []);

//   /* 🔐 Restrict visibility */
//   const visibleJobs = isVerified
//     ? allJobListings
//     : allJobListings.slice(0, 3);

//   const formatDate = (dateString) =>
//     new Date(dateString).toLocaleDateString("en-IN", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 md:px-8">
//       <Helmet>
//         <title>Jobs & Internships | SITS Alumni</title>
//       </Helmet>

//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-extrabold text-green-800 mb-4">
//           💼 Alumni Job & Internship Postings
//         </h1>
//         {!isVerified && (
//           <p className="text-red-600 font-semibold mt-2">
//             🔒 Verify your account to see full job board
//           </p>
//         )}
//       </div>

//       {isAlumni && (
//         <div className="text-center mb-10">
//           <button
//             type="button"
//             className="bg-green-700 text-white px-6 py-3 rounded-full shadow hover:bg-green-800 transition"
//           >
//             ➕ Post a Job / Internship
//           </button>
//         </div>
//       )}

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//         {visibleJobs.map((job) => (
//           <motion.div
//             key={job.id}
//             className="bg-white p-6 rounded-xl shadow"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <h3 className="text-xl font-bold text-green-700">
//               {job.title}
//             </h3>
//             <p className="text-gray-700">
//               {job.company} — {job.location}
//             </p>
//             <span className="text-sm text-gray-500">{job.type}</span>
//             <p className="text-xs mt-2 text-gray-400">
//               Posted {formatDate(job.postedDate)}
//             </p>
//             <a
//               href={job.applyLink}
//               className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//             >
//               Apply
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Internships;












// ------------------------------ final final version online -------------------------------------------------------------













// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet";
// import { supabase } from "../supabaseClient";
// import { 
//   Briefcase, 
//   MapPin, 
//   DollarSign, 
//   Users, 
//   Clock, 
//   Search,
//   Bookmark,
//   TrendingUp,
//   Building2
// } from "lucide-react";

// /* ---- MOCK DATA (replace with real Supabase data later) ---- */
// const allJobListings = [
//   {
//     id: 1,
//     title: "Software Engineering Intern",
//     company: "Google",
//     companyLogo: "GO",
//     logoColor: "#4285F4",
//     location: "Remote",
//     type: "Internship",
//     postedBy: "Alumni",
//     salary: "$8,000/month",
//     applicants: 145,
//     description: "Join our team for a 3-month summer internship program.",
//     skills: ["Python", "React", "SQL"],
//     applyLink: "#",
//     postedDate: "2026-01-25",
//     closingDate: "2026-02-10",
//     featured: true,
//     isNew: true,
//   },
//   {
//     id: 2,
//     title: "Full Stack Developer",
//     company: "Meta",
//     companyLogo: "ME",
//     logoColor: "#0668E1",
//     location: "Hybrid - San Francisco",
//     type: "Full-time",
//     postedBy: "Admin",
//     salary: "$120k - $150k/year",
//     applicants: 89,
//     description: "Build innovative products that connect billions of people.",
//     skills: ["JavaScript", "Node.js", "MongoDB", "React"],
//     applyLink: "#",
//     postedDate: "2026-01-20",
//     closingDate: "2026-02-05",
//     featured: true,
//     isNew: false,
//   },
//   {
//     id: 3,
//     title: "Data Analyst",
//     company: "Netflix",
//     companyLogo: "NF",
//     logoColor: "#E50914",
//     location: "Remote",
//     type: "Full-time",
//     postedBy: "Alumni",
//     salary: "$90k - $110k/year",
//     applicants: 54,
//     description: "Analyze viewer data to improve content recommendations.",
//     skills: ["Python", "SQL", "Tableau", "Statistics"],
//     applyLink: "#",
//     postedDate: "2026-01-18",
//     closingDate: "2026-02-15",
//     featured: true,
//     isNew: false,
//   },
//   {
//     id: 4,
//     title: "Marketing Intern",
//     company: "Amazon",
//     companyLogo: "AM",
//     logoColor: "#FF9900",
//     location: "On-site - Seattle",
//     type: "Internship",
//     postedBy: "Faculty",
//     salary: "$6,500/month",
//     applicants: 67,
//     description: "Support marketing campaigns for our e-commerce platform.",
//     skills: ["Marketing", "Analytics", "Communication"],
//     applyLink: "#",
//     postedDate: "2026-01-15",
//     closingDate: "2026-02-25",
//     featured: false,
//     isNew: false,
//   },
//   {
//     id: 5,
//     title: "UX Design Intern",
//     company: "Apple",
//     companyLogo: "AP",
//     logoColor: "#555555",
//     location: "On-site - Cupertino",
//     type: "Internship",
//     postedBy: "Alumni",
//     salary: "$7,000/month",
//     applicants: 120,
//     description: "Create beautiful user experiences for Apple products.",
//     skills: ["Figma", "UI/UX", "Design Systems"],
//     applyLink: "#",
//     postedDate: "2026-01-12",
//     closingDate: "2026-02-08",
//     featured: false,
//     isNew: false,
//   },
//   {
//     id: 6,
//     title: "Research Assistant",
//     company: "MIT Media Lab",
//     companyLogo: "ML",
//     logoColor: "#8B00FF",
//     location: "On-site - Boston",
//     type: "Part-time",
//     postedBy: "Faculty",
//     salary: "Unpaid (Academic Credit)",
//     applicants: 32,
//     description: "Contribute to cutting-edge AI research projects.",
//     skills: ["Research", "AI/ML", "Python"],
//     applyLink: "#",
//     postedDate: "2026-01-10",
//     closingDate: "2026-02-28",
//     featured: false,
//     isNew: false,
//   },
// ];

// const Internships = () => {
//   const [isVerified, setIsVerified] = useState(false);
//   const [isAlumni, setIsAlumni] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [typeFilter, setTypeFilter] = useState("All Types");
//   const [postedByFilter, setPostedByFilter] = useState("All");
//   const [locationFilter, setLocationFilter] = useState("All Locations");
//   const [experienceFilter, setExperienceFilter] = useState("All Experience");
//   const [sortBy, setSortBy] = useState("Latest");

//   /* 🔐 Auth + verification */
//   useEffect(() => {
//     const init = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();

//       if (!session) return;

//       const userId = session.user.id;

//       const { data: student } = await supabase
//         .from("students")
//         .select("is_verified")
//         .eq("id", userId)
//         .maybeSingle();

//       const { data: alumni } = await supabase
//         .from("alumni")
//         .select("is_verified")
//         .eq("id", userId)
//         .maybeSingle();

//       const { data: faculty } = await supabase
//         .from("faculty")
//         .select("is_verified")
//         .eq("id", userId)
//         .maybeSingle();

//       if (student?.is_verified || alumni?.is_verified || faculty?.is_verified) {
//         setIsVerified(true);
//       }

//       if (alumni?.is_verified) {
//         setIsAlumni(true);
//       }
//     };

//     init();
//   }, []);

//   /* 🔐 Restrict visibility */
//   const visibleJobs = isVerified
//     ? allJobListings
//     : allJobListings.slice(0, 3);

//   const formatDate = (dateString) =>
//     new Date(dateString).toLocaleDateString("en-IN", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });

//   // Calculate days until closing
//   const getDaysUntilClosing = (closingDate) => {
//     const today = new Date();
//     const closing = new Date(closingDate);
//     const diffTime = closing - today;
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays;
//   };

//   // Filter and sort jobs
//   const filteredJobs = visibleJobs
//     .filter((job) => {
//       const matchesSearch =
//         job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         job.skills.some((skill) =>
//           skill.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//       const matchesType = typeFilter === "All Types" || job.type === typeFilter;
//       const matchesPostedBy =
//         postedByFilter === "All" || job.postedBy === postedByFilter;
//       const matchesLocation =
//         locationFilter === "All Locations" ||
//         job.location.includes(locationFilter);

//       return matchesSearch && matchesType && matchesPostedBy && matchesLocation;
//     })
//     .sort((a, b) => {
//       if (sortBy === "Latest") {
//         return new Date(b.postedDate) - new Date(a.postedDate);
//       } else if (sortBy === "Urgent First") {
//         return getDaysUntilClosing(a.closingDate) - getDaysUntilClosing(b.closingDate);
//       } else if (sortBy === "Highest Pay") {
//         const getPayValue = (salary) => {
//           const match = salary.match(/\d+/);
//           return match ? parseInt(match[0]) : 0;
//         };
//         return getPayValue(b.salary) - getPayValue(a.salary);
//       }
//       return 0;
//     });

//   // Separate featured jobs
//   const featuredJobs = filteredJobs.filter((job) => job.featured);
//   const regularJobs = filteredJobs.filter((job) => !job.featured);

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 md:px-8">
//       <Helmet>
//         <title>Jobs & Internships | SITS Alumni</title>
//       </Helmet>

//       {/* Header */}
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-5xl font-bold text-gray-900 mb-3">
//             Jobs & Internships
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Discover exciting career opportunities posted by our community
//           </p>
//         </div>

//         {/* Post Job Button */}
//         {(isAlumni || isVerified) && (
//           <div className="text-center mb-8">
//             <button
//               type="button"
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 font-semibold inline-flex items-center gap-2"
//             >
//               <Briefcase size={20} />
//               Post Job/Internship
//             </button>
//           </div>
//         )}

//         {/* Verification Warning */}
//         {!isVerified && (
//           <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-lg max-w-2xl mx-auto">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <svg
//                   className="h-5 w-5 text-yellow-400"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-yellow-700 font-medium">
//                   🔒 Verify your account to see the full job board and apply to opportunities
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="bg-white rounded-xl shadow-md p-6 text-center"
//           >
//             <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-3">
//               <Briefcase className="text-blue-600" size={28} />
//             </div>
//             <h3 className="text-3xl font-bold text-gray-900 mb-1">
//               {allJobListings.length}
//             </h3>
//             <p className="text-gray-600 text-sm">Active Openings</p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="bg-white rounded-xl shadow-md p-6 text-center"
//           >
//             <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-3">
//               <Building2 className="text-green-600" size={28} />
//             </div>
//             <h3 className="text-3xl font-bold text-gray-900 mb-1">
//               {new Set(allJobListings.map((job) => job.company)).size}
//             </h3>
//             <p className="text-gray-600 text-sm">Companies Hiring</p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="bg-white rounded-xl shadow-md p-6 text-center"
//           >
//             <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-full mb-3">
//               <TrendingUp className="text-purple-600" size={28} />
//             </div>
//             <h3 className="text-3xl font-bold text-gray-900 mb-1">85%</h3>
//             <p className="text-gray-600 text-sm">Placement Rate</p>
//           </motion.div>
//         </div>

//         {/* Search and Filters */}
//         <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//           {/* Search Bar */}
//           <div className="mb-6">
//             <div className="relative">
//               <Search
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
//                 size={20}
//               />
//               <input
//                 type="text"
//                 placeholder="Search by job title, company, or skills..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
//               />
//             </div>
//           </div>

//           {/* Filter Dropdowns */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//             <select
//               value={typeFilter}
//               onChange={(e) => setTypeFilter(e.target.value)}
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
//             >
//               <option>All Types</option>
//               <option>Internship</option>
//               <option>Full-time</option>
//               <option>Part-time</option>
//             </select>

//             <select
//               value={postedByFilter}
//               onChange={(e) => setPostedByFilter(e.target.value)}
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
//             >
//               <option>Posted By: All</option>
//               <option>Admin</option>
//               <option>Alumni</option>
//               <option>Faculty</option>
//             </select>

//             <select
//               value={locationFilter}
//               onChange={(e) => setLocationFilter(e.target.value)}
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
//             >
//               <option>All Locations</option>
//               <option>Remote</option>
//               <option>Hybrid</option>
//               <option>On-site</option>
//             </select>

//             <select
//               value={experienceFilter}
//               onChange={(e) => setExperienceFilter(e.target.value)}
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
//             >
//               <option>All Experience</option>
//               <option>Beginner</option>
//               <option>Intermediate</option>
//               <option>Advanced</option>
//             </select>
//           </div>

//           {/* Sort Options */}
//           <div className="flex items-center gap-3">
//             <span className="text-gray-700 font-medium text-sm">Sort by:</span>
//             <div className="flex gap-2">
//               {["Latest", "Urgent First", "Highest Pay"].map((option) => (
//                 <button
//                   key={option}
//                   onClick={() => setSortBy(option)}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
//                     sortBy === option
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Featured Opportunities */}
//         {featuredJobs.length > 0 && (
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//               <span className="text-yellow-500">⚡</span> Featured Opportunities
//             </h2>
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {featuredJobs.map((job, index) => (
//                 <JobCard
//                   key={job.id}
//                   job={job}
//                   index={index}
//                   formatDate={formatDate}
//                   getDaysUntilClosing={getDaysUntilClosing}
//                   isVerified={isVerified}
//                 />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* All Opportunities */}
//         {regularJobs.length > 0 && (
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">
//               {filteredJobs.length} Position{filteredJobs.length !== 1 ? "s" : ""} Available
//             </h2>
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {regularJobs.map((job, index) => (
//                 <JobCard
//                   key={job.id}
//                   job={job}
//                   index={index + featuredJobs.length}
//                   formatDate={formatDate}
//                   getDaysUntilClosing={getDaysUntilClosing}
//                   isVerified={isVerified}
//                 />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* No Results */}
//         {filteredJobs.length === 0 && (
//           <div className="text-center py-12">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
//               <Search className="text-gray-400" size={32} />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               No opportunities found
//             </h3>
//             <p className="text-gray-600">
//               Try adjusting your search or filter criteria
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// /* Job Card Component */
// const JobCard = ({ job, index, formatDate, getDaysUntilClosing, isVerified }) => {
//   const daysLeft = getDaysUntilClosing(job.closingDate);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1 }}
//       className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
//     >
//       {/* Card Header */}
//       <div className="p-6">
//         <div className="flex items-start justify-between mb-4">
//           <div className="flex items-center gap-3">
//             {/* Company Logo */}
//             <div
//               className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
//               style={{ backgroundColor: job.logoColor }}
//             >
//               {job.companyLogo}
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-900">{job.company}</h3>
//               <div className="flex gap-2 mt-1">
//                 {job.isNew && (
//                   <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
//                     NEW
//                   </span>
//                 )}
//                 {job.featured && (
//                   <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">
//                     FEATURED
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//           <button className="text-gray-400 hover:text-blue-600 transition">
//             <Bookmark size={20} />
//           </button>
//         </div>

//         {/* Job Title */}
//         <h2 className="text-xl font-bold text-gray-900 mb-3">{job.title}</h2>

//         {/* Type & Posted By Badges */}
//         <div className="flex gap-2 mb-4">
//           <span
//             className={`px-3 py-1 rounded-full text-xs font-semibold ${
//               job.type === "Internship"
//                 ? "bg-blue-100 text-blue-700"
//                 : job.type === "Full-time"
//                 ? "bg-green-100 text-green-700"
//                 : "bg-purple-100 text-purple-700"
//             }`}
//           >
//             {job.type}
//           </span>
//           <span
//             className={`px-3 py-1 rounded-full text-xs font-semibold ${
//               job.postedBy === "Alumni"
//                 ? "bg-green-100 text-green-700"
//                 : job.postedBy === "Admin"
//                 ? "bg-blue-100 text-blue-700"
//                 : "bg-purple-100 text-purple-700"
//             }`}
//           >
//             {job.postedBy}
//           </span>
//         </div>

//         {/* Job Details */}
//         <div className="space-y-2 mb-4">
//           <div className="flex items-center gap-2 text-gray-600 text-sm">
//             <MapPin size={16} className="text-gray-400" />
//             <span>{job.location}</span>
//           </div>
//           <div className="flex items-center gap-2 text-gray-600 text-sm">
//             <DollarSign size={16} className="text-gray-400" />
//             <span>{job.salary}</span>
//           </div>
//           <div className="flex items-center gap-2 text-gray-600 text-sm">
//             <Users size={16} className="text-gray-400" />
//             <span>{job.applicants} applicants</span>
//           </div>
//         </div>

//         {/* Description */}
//         <p className="text-gray-600 text-sm mb-4">{job.description}</p>

//         {/* Skills */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {job.skills.map((skill, idx) => (
//             <span
//               key={idx}
//               className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//           <div className="flex items-center gap-2">
//             {daysLeft <= 10 && (
//               <span
//                 className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
//                   daysLeft <= 5
//                     ? "bg-red-50 text-red-600"
//                     : "bg-orange-50 text-orange-600"
//                 }`}
//               >
//                 <Clock size={14} />
//                 Closing in {daysLeft} days
//               </span>
//             )}
//           </div>
//           <button
//             disabled={!isVerified}
//             className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
//               isVerified
//                 ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
//                 : "bg-gray-300 text-gray-500 cursor-not-allowed"
//             }`}
//           >
//             Quick Apply
//           </button>
//         </div>

//         {/* Posted By Footer */}
//         <p className="text-xs text-gray-500 mt-3">
//           Posted by <span className="font-medium">{job.postedBy === "Alumni" ? "Sarah Johnson" : job.postedBy === "Admin" ? "Career Services" : "Prof. Michael Chen"}</span>
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// export default Internships;
















// -------------------------------- old version offline -------------------------------------------------------------





















import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { supabase } from "../supabaseClient";
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Users, 
  Clock, 
  Search,
  Bookmark,
  TrendingUp,
  Building2,
  X,
  Plus,
  Calendar,
  LinkIcon
} from "lucide-react";

const Internships = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isAlumni, setIsAlumni] = useState(false);
  const [isFaculty, setIsFaculty] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [userName, setUserName] = useState("");
  
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPostModal, setShowPostModal] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [postedByFilter, setPostedByFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [experienceFilter, setExperienceFilter] = useState("All Experience");
  const [sortBy, setSortBy] = useState("Latest");

  /* 🔐 Auth + verification */
  useEffect(() => {
    const init = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setLoading(false);
        return;
      }

      const userId = session.user.id;
      setCurrentUser(userId);

      const { data: student } = await supabase
        .from("student")
        .select("is_verified, name")
        .eq("id", userId)
        .maybeSingle();

      const { data: alumni } = await supabase
        .from("alumni")
        .select("is_verified, name")
        .eq("id", userId)
        .maybeSingle();

      const { data: faculty } = await supabase
        .from("faculty")
        .select("is_verified, name")
        .eq("id", userId)
        .maybeSingle();

      if (student?.is_verified) {
        setIsVerified(true);
        setUserName(student.name);
      }
      
      if (alumni?.is_verified) {
        setIsVerified(true);
        setIsAlumni(true);
        setUserType("Alumni");
        setUserName(alumni.name);
      }
      
      if (faculty?.is_verified) {
        setIsVerified(true);
        setIsFaculty(true);
        setUserType("Faculty");
        setUserName(faculty.name);
      }

      // Check if user is admin (you can add admin table or use a specific email check)
      // For now, checking if email contains 'admin'
      if (session.user.email.includes('admin')) {
        setIsAdmin(true);
        setUserType("Admin");
        setUserName("Admin");
      }
    };

    init();
  }, []);

  /* 📊 Fetch jobs from Supabase */
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("jobs_internships")
        .select("*")
        .eq("is_active", true)
        .order("posted_date", { ascending: false });

      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  /* 🔐 Restrict visibility */
  const visibleJobs = isVerified ? jobs : jobs.slice(0, 3);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  // Calculate days until closing
  const getDaysUntilClosing = (closingDate) => {
    const today = new Date();
    const closing = new Date(closingDate);
    const diffTime = closing - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Filter and sort jobs
  const filteredJobs = visibleJobs
    .filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (job.skills && job.skills.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        ));
      const matchesType = typeFilter === "All Types" || job.type === typeFilter;
      const matchesPostedBy =
        postedByFilter === "All" || job.posted_by_type === postedByFilter;
      const matchesLocation =
        locationFilter === "All Locations" ||
        job.location.includes(locationFilter) ||
        job.location_type === locationFilter;

      return matchesSearch && matchesType && matchesPostedBy && matchesLocation;
    })
    .sort((a, b) => {
      if (sortBy === "Latest") {
        return new Date(b.posted_date) - new Date(a.posted_date);
      } else if (sortBy === "Urgent First") {
        return getDaysUntilClosing(a.closing_date) - getDaysUntilClosing(b.closing_date);
      } else if (sortBy === "Highest Pay") {
        const getPayValue = (salary) => {
          if (!salary) return 0;
          const match = salary.match(/\d+/);
          return match ? parseInt(match[0]) : 0;
        };
        return getPayValue(b.salary) - getPayValue(a.salary);
      }
      return 0;
    });

  // Separate featured jobs
  const featuredJobs = filteredJobs.filter((job) => job.is_featured);
  const regularJobs = filteredJobs.filter((job) => !job.is_featured);

  // Calculate stats
  const activeOpenings = jobs.length;
  const companiesHiring = new Set(jobs.map((job) => job.company)).size;

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 md:px-8">
      <Helmet>
        <title>Jobs & Internships | SITS Alumni</title>
      </Helmet>

      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            Jobs & Internships
          </h1>
          <p className="text-gray-600 text-lg">
            Discover exciting career opportunities posted by our community
          </p>
        </div>

        {/* Post Job Button */}
        {(isAlumni || isFaculty || isAdmin) && (
          <div className="text-center mb-8">
            <button
              type="button"
              onClick={() => setShowPostModal(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 font-semibold inline-flex items-center gap-2"
            >
              <Briefcase size={20} />
              Post Job/Internship
            </button>
          </div>
        )}

        {/* Verification Warning */}
        {!isVerified && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700 font-medium">
                  🔒 Verify your account to see the full job board and apply to opportunities
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-md p-6 text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-3">
              <Briefcase className="text-blue-600" size={28} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">
              {activeOpenings}
            </h3>
            <p className="text-gray-600 text-sm">Active Openings</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-6 text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-3">
              <Building2 className="text-green-600" size={28} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">
              {companiesHiring}
            </h3>
            <p className="text-gray-600 text-sm">Companies Hiring</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-md p-6 text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-full mb-3">
              <TrendingUp className="text-purple-600" size={28} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">85%</h3>
            <p className="text-gray-600 text-sm">Placement Rate</p>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by job title, company, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            >
              <option>All Types</option>
              <option>Internship</option>
              <option>Full-time</option>
              <option>Part-time</option>
            </select>

            <select
              value={postedByFilter}
              onChange={(e) => setPostedByFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            >
              <option>Posted By: All</option>
              <option>Admin</option>
              <option>Alumni</option>
              <option>Faculty</option>
            </select>

            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            >
              <option>All Locations</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-site</option>
            </select>

            <select
              value={experienceFilter}
              onChange={(e) => setExperienceFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            >
              <option>All Experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium text-sm">Sort by:</span>
            <div className="flex gap-2">
              {["Latest", "Urgent First", "Highest Pay"].map((option) => (
                <button
                  key={option}
                  onClick={() => setSortBy(option)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    sortBy === option
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading opportunities...</p>
          </div>
        )}

        {/* Featured Opportunities */}
        {!loading && featuredJobs.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-yellow-500">⚡</span> Featured Opportunities
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredJobs.map((job, index) => (
                <JobCard
                  key={job.id}
                  job={job}
                  index={index}
                  formatDate={formatDate}
                  getDaysUntilClosing={getDaysUntilClosing}
                  isVerified={isVerified}
                />
              ))}
            </div>
          </div>
        )}

        {/* All Opportunities */}
        {!loading && regularJobs.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {filteredJobs.length} Position{filteredJobs.length !== 1 ? "s" : ""} Available
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regularJobs.map((job, index) => (
                <JobCard
                  key={job.id}
                  job={job}
                  index={index + featuredJobs.length}
                  formatDate={formatDate}
                  getDaysUntilClosing={getDaysUntilClosing}
                  isVerified={isVerified}
                />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {!loading && filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Search className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No opportunities found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      {/* Post Job Modal */}
      <PostJobModal
        isOpen={showPostModal}
        onClose={() => setShowPostModal(false)}
        currentUser={currentUser}
        userType={userType}
        userName={userName}
        onJobPosted={fetchJobs}
      />
    </section>
  );
};

/* Job Card Component */
const JobCard = ({ job, index, formatDate, getDaysUntilClosing, isVerified }) => {
  const daysLeft = getDaysUntilClosing(job.closing_date);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Card Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Company Logo */}
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: job.logo_color || '#4285F4' }}
            >
              {job.company_logo || job.company.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{job.company}</h3>
              <div className="flex gap-2 mt-1">
                {job.is_new && (
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                    NEW
                  </span>
                )}
                {job.is_featured && (
                  <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">
                    FEATURED
                  </span>
                )}
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-blue-600 transition">
            <Bookmark size={20} />
          </button>
        </div>

        {/* Job Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">{job.title}</h2>

        {/* Type & Posted By Badges */}
        <div className="flex gap-2 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              job.type === "Internship"
                ? "bg-blue-100 text-blue-700"
                : job.type === "Full-time"
                ? "bg-green-100 text-green-700"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {job.type}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              job.posted_by_type === "Alumni"
                ? "bg-green-100 text-green-700"
                : job.posted_by_type === "Admin"
                ? "bg-blue-100 text-blue-700"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {job.posted_by_type}
          </span>
        </div>

        {/* Job Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MapPin size={16} className="text-gray-400" />
            <span>{job.location}</span>
          </div>
          {job.salary && (
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <DollarSign size={16} className="text-gray-400" />
              <span>{job.salary}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Users size={16} className="text-gray-400" />
            <span>{job.applicants || 0} applicants</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

        {/* Skills */}
        {job.skills && job.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {job.skills.slice(0, 4).map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            {daysLeft <= 10 && daysLeft > 0 && (
              <span
                className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                  daysLeft <= 5
                    ? "bg-red-50 text-red-600"
                    : "bg-orange-50 text-orange-600"
                }`}
              >
                <Clock size={14} />
                Closing in {daysLeft} days
              </span>
            )}
          </div>
          <button
            disabled={!isVerified}
            onClick={() => {
              if (job.apply_link) {
                window.open(job.apply_link, '_blank');
              }
            }}
            className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
              isVerified
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Quick Apply
          </button>
        </div>

        {/* Posted By Footer */}
        <p className="text-xs text-gray-500 mt-3">
          Posted by <span className="font-medium">{job.posted_by_name || job.posted_by_type}</span>
        </p>
      </div>
    </motion.div>
  );
};

/* Post Job Modal Component */
const PostJobModal = ({ isOpen, onClose, currentUser, userType, userName, onJobPosted }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    company_logo: "",
    logo_color: "#4285F4",
    description: "",
    type: "Internship",
    location: "",
    location_type: "Remote",
    salary: "",
    skills: "",
    experience_level: "Beginner",
    apply_link: "",
    closing_date: "",
    is_featured: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      // Convert skills string to array
      const skillsArray = formData.skills
        .split(',')
        .map(skill => skill.trim())
        .filter(skill => skill.length > 0);

      const jobData = {
        ...formData,
        skills: skillsArray,
        posted_by_id: currentUser,
        posted_by_type: userType,
        posted_by_name: userName,
        is_active: true,
        is_new: true,
        applicants: 0,
      };

      const { error: insertError } = await supabase
        .from('jobs_internships')
        .insert([jobData]);

      if (insertError) throw insertError;

      // Reset form
      setFormData({
        title: "",
        company: "",
        company_logo: "",
        logo_color: "#4285F4",
        description: "",
        type: "Internship",
        location: "",
        location_type: "Remote",
        salary: "",
        skills: "",
        experience_level: "Beginner",
        apply_link: "",
        closing_date: "",
        is_featured: false,
      });

      // Refresh jobs list
      await onJobPosted();
      onClose();
    } catch (err) {
      console.error('Error posting job:', err);
      setError(err.message || 'Failed to post job. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-900">Post Job/Internship</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* Job Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Software Engineering Intern"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Company Name & Logo */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Google"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Logo (2 letters)
                  </label>
                  <input
                    type="text"
                    name="company_logo"
                    value={formData.company_logo}
                    onChange={handleChange}
                    maxLength={2}
                    placeholder="GO"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition uppercase"
                  />
                </div>
              </div>

              {/* Logo Color */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Logo Color
                </label>
                <input
                  type="color"
                  name="logo_color"
                  value={formData.logo_color}
                  onChange={handleChange}
                  className="h-12 w-24 border border-gray-300 rounded-lg cursor-pointer"
                />
              </div>

              {/* Type & Experience Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type *
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  >
                    <option value="Internship">Internship</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Experience Level *
                  </label>
                  <select
                    name="experience_level"
                    value={formData.experience_level}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              {/* Location & Location Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="e.g., San Francisco, CA"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Work Mode *
                  </label>
                  <select
                    name="location_type"
                    value={formData.location_type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  >
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-site">On-site</option>
                  </select>
                </div>
              </div>

              {/* Salary */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Salary/Compensation
                </label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="e.g., $8,000/month or $120k - $150k/year"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Describe the role, responsibilities, and what makes this opportunity great..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                />
              </div>

              {/* Skills */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Required Skills (comma-separated)
                </label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g., Python, React, SQL, Git"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
                <p className="text-xs text-gray-500 mt-1">Separate each skill with a comma</p>
              </div>

              {/* Apply Link & Closing Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Application Link
                  </label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="url"
                      name="apply_link"
                      value={formData.apply_link}
                      onChange={handleChange}
                      placeholder="https://..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Closing Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="date"
                      name="closing_date"
                      value={formData.closing_date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Featured Checkbox */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="is_featured"
                  id="is_featured"
                  checked={formData.is_featured}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="is_featured" className="text-sm font-medium text-gray-700">
                  Mark as Featured Opportunity
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Posting...
                    </>
                  ) : (
                    <>
                      <Plus size={20} />
                      Post Opportunity
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Internships;