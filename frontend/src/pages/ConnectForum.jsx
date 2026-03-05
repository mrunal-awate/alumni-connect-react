// // /pages/ConnectForum.jsx
// import React from 'react';

// const ConnectForum = () => {
//   return (
//     <section className="min-h-screen p-10 bg-gradient-to-br from-purple-100 to-white">
//       <h1 className="text-3xl font-bold text-center text-purple-900 mb-6">Alumni-Student Connect Forum</h1>
//       <p className="text-center text-gray-700">Students can post queries and alumni can respond to help, guide or mentor them.</p>
//     </section>
//   );
// };

// export default ConnectForum;






// -------------------------------------------------1st version online-------------------------------------------------






// // /pages/ConnectForum.jsx
// import React, { useState, useMemo, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Helmet } from 'react-helmet';

// // --- Mock Data ---
// // Simulate different user types
// const mockUsers = {
//   student: { id: 's1', name: 'Alice Student', type: 'student', email: 'alice.s@example.com' },
//   alumni: { id: 'a1', name: 'Bob Alumni', type: 'alumni', email: 'bob.a@example.com' },
//   guest: { id: 'g1', name: 'Guest User', type: 'guest', email: '' }, // For demonstrating restricted access
// };

// // Simulate current logged-in user (change 'alumni' or 'student' or 'guest' to test different roles)
// const CURRENT_USER_ROLE = 'alumni'; // <--- CHANGE THIS TO 'student', 'alumni', or 'guest' TO TEST DIFFERENT USERS

// const currentUser = mockUsers[CURRENT_USER_ROLE];

// const initialForumPosts = [
//   {
//     id: 'p1',
//     title: 'Looking for advice on breaking into AI/ML!',
//     content: 'Hi everyone, I\'m a third-year student passionate about AI. I\'m trying to figure out the best path to get into the field. Any alumni or senior students who can share their experiences or suggest resources (courses, projects, internships)?',
//     author: mockUsers.student,
//     category: 'Career Guidance',
//     timestamp: new Date('2024-07-22T10:30:00Z'),
//     replies: [],
//   },
//   {
//     id: 'p2',
//     title: 'New Idea: Decentralized Learning Platform on Blockchain',
//     content: 'What do you all think about building a decentralized learning platform where course completion and certificates are recorded on a blockchain? This could solve issues of verification and data ownership. Open to collaboration!',
//     author: mockUsers.alumni,
//     category: 'Tech Ideas',
//     timestamp: new Date('2024-07-21T14:00:00Z'),
//     replies: [
//       {
//         id: 'r1',
//         postId: 'p2',
//         content: 'That\'s a fascinating concept! How would you handle scalability and transaction costs on the blockchain for a large number of users?',
//         author: mockUsers.student,
//         timestamp: new Date('2024-07-21T15:15:00Z'),
//       },
//       {
//         id: 'r2',
//         postId: 'p2',
//         content: 'Great point! We could explore layer-2 solutions or a custom sidechain for handling high transaction volumes.',
//         author: mockUsers.alumni,
//         timestamp: new Date('2024-07-21T16:00:00Z'),
//       },
//     ],
//   },
//   {
//     id: 'p3',
//     title: 'Tips for excelling in final year projects?',
//     content: 'As I enter my final year, I\'m starting to think about my major project. Any alumni have advice on choosing a topic, forming a team, or resources to make it stand out for job applications?',
//     author: mockUsers.student,
//     category: 'Academic Help',
//     timestamp: new Date('2024-07-20T09:00:00Z'),
//     replies: [],
//   },
//   {
//     id: 'p4',
//     title: 'Looking for co-founders for a FinTech startup idea',
//     content: 'I\'m an alumni with a solid FinTech concept focusing on personal wealth management. Seeking talented students or fellow alumni with strong tech (backend/blockchain) or marketing skills to join as co-founders. Let\'s connect!',
//     author: mockUsers.alumni,
//     category: 'Collaboration',
//     timestamp: new Date('2024-07-19T18:30:00Z'),
//     replies: [],
//   },
// ];

// // Mock Alumni for one-to-one connection (separate from forum authors for demonstration)
// const mockAlumniForConnect = [
//   { id: 'al1', name: 'Dr. Neha Sharma', expertise: 'Machine Learning, Data Science', batch: '2010', email: 'neha.s@example.com' },
//   { id: 'al2', name: 'Mr. Rohan Gupta', expertise: 'Software Architecture, Cloud Computing', batch: '2012', email: 'rohan.g@example.com' },
//   { id: 'al3', name: 'Ms. Sana Khan', expertise: 'Cybersecurity, Network Security', batch: '2015', email: 'sana.k@example.com' },
//   { id: 'al4', name: 'Mr. Vivek Singh', expertise: 'Product Management, UI/UX', batch: '2017', email: 'vivek.s@example.com' },
// ];

// const ConnectForum = () => {
//   const [posts, setPosts] = useState(initialForumPosts);
//   const [selectedPost, setSelectedPost] = useState(null); // Null means showing list, object means showing detail
//   const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);
//   const [newPostTitle, setNewPostTitle] = useState('');
//   const [newPostContent, setNewPostContent] = useState('');
//   const [newPostCategory, setNewPostCategory] = useState('General');
//   const [newReplyContent, setNewReplyContent] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterCategory, setFilterCategory] = useState('All');

//   const replyInputRef = useRef(null);
//   const forumContentRef = useRef(null); // Ref for scrolling to top of forum on post selection

//   const availableCategories = useMemo(
//     () => ['All', ...new Set(initialForumPosts.map((p) => p.category)), 'General'],
//     []
//   );

//   // Scroll to top of forum content when a post is selected
//   useEffect(() => {
//     if (selectedPost && forumContentRef.current) {
//       forumContentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   }, [selectedPost]);


//   const filteredPosts = useMemo(() => {
//     return posts
//       .filter((post) => {
//         const matchesSearch =
//           post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           post.author.name.toLowerCase().includes(searchTerm.toLowerCase());
//         const matchesCategory = filterCategory === 'All' || post.category === filterCategory;
//         return matchesSearch && matchesCategory;
//       })
//       .sort((a, b) => b.timestamp - a.timestamp); // Sort by most recent
//   }, [posts, searchTerm, filterCategory]);

//   const handleCreatePost = (e) => {
//     e.preventDefault();
//     if (newPostTitle.trim() && newPostContent.trim() && currentUser && currentUser.type !== 'guest') {
//       const newPost = {
//         id: `p${posts.length + 1}`,
//         title: newPostTitle.trim(),
//         content: newPostContent.trim(),
//         author: currentUser,
//         category: newPostCategory,
//         timestamp: new Date(),
//         replies: [],
//       };
//       setPosts((prev) => [newPost, ...prev]);
//       setNewPostTitle('');
//       setNewPostContent('');
//       setNewPostCategory('General');
//       setIsNewPostModalOpen(false);
//       setSelectedPost(newPost); // Optionally, open the new post directly
//     } else {
//       alert('Please fill all fields and ensure you are logged in as a student or alumni.');
//     }
//   };

//   const handleAddReply = (postId) => {
//     if (newReplyContent.trim() && currentUser && currentUser.type !== 'guest') {
//       const updatedPosts = posts.map((post) => {
//         if (post.id === postId) {
//           return {
//             ...post,
//             replies: [
//               ...post.replies,
//               {
//                 id: `r${post.replies.length + 1}`,
//                 postId: postId,
//                 content: newReplyContent.trim(),
//                 author: currentUser,
//                 timestamp: new Date(),
//               },
//             ],
//           };
//         }
//         return post;
//       });
//       setPosts(updatedPosts);
//       setNewReplyContent('');
//       // Scroll to the bottom of the replies section
//       if (replyInputRef.current) {
//         replyInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
//       }
//     } else {
//       alert('Please type a reply and ensure you are logged in.');
//     }
//   };

//   const formatTimestamp = (date) => {
//     return date.toLocaleString(); // Or use a more specific format like moment.js
//   };

//   const UserBadge = ({ userType }) => (
//     <span
//       className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold ${
//         userType === 'alumni'
//           ? 'bg-purple-200 text-purple-800'
//           : 'bg-blue-200 text-blue-800'
//       }`}
//     >
//       {userType === 'alumni' ? 'Alumni' : 'Student'}
//     </span>
//   );

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-12 px-4 md:px-8">
//       <Helmet>
//         <title>Connect Forum | SITS Alumni</title>
//         <meta name="description" content="Alumni-Student Connect Forum to share ideas, seek guidance, and connect." />
//       </Helmet>

//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-10"
//       >
//         <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-4 drop-shadow-md">
//           🤝 Alumni-Student Connect Forum
//         </h1>
//         <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//           A vibrant space for registered alumni and students to exchange ideas, discuss new technologies,
//           seek guidance, offer mentorship, and connect one-to-one.
//         </p>
//         {!currentUser || currentUser.type === 'guest' && (
//           <p className="mt-4 text-red-600 font-medium">
//             (You are viewing as a Guest. Please imagine a "Login" button here to participate fully.)
//           </p>
//         )}
//       </motion.div>

//       <div ref={forumContentRef} className="max-w-7xl mx-auto">
//         {selectedPost ? (
//           // --- Post Detail View ---
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-purple-200"
//           >
//             <button
//               onClick={() => setSelectedPost(null)}
//               className="mb-6 flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-200 font-medium"
//             >
//               <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
//               Back to Forum
//             </button>

//             <h2 className="text-3xl font-bold text-gray-800 mb-3 flex items-start">
//               {selectedPost.title}
//               <UserBadge userType={selectedPost.author.type} />
//             </h2>
//             <p className="text-gray-600 text-sm mb-4 flex items-center">
//               <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
//               {selectedPost.author.name}
//               <span className="mx-2 text-gray-400">|</span>
//               <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-7-4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
//               Category: {selectedPost.category}
//               <span className="mx-2 text-gray-400">|</span>
//               <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
//               {formatTimestamp(selectedPost.timestamp)}
//             </p>

//             <div className="prose max-w-none text-gray-700 leading-relaxed mb-6 border-l-4 border-purple-400 pl-4 py-2 bg-purple-50 rounded-md">
//               <p>{selectedPost.content}</p>
//             </div>

//             {/* Replies Section */}
//             <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
//               <svg className="w-6 h-6 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
//               Replies ({selectedPost.replies.length})
//             </h3>
//             <div className="bg-gray-50 rounded-lg p-4 max-h-80 overflow-y-auto border border-gray-200 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-purple-100">
//               {selectedPost.replies.length === 0 ? (
//                 <p className="text-gray-400 italic text-center py-4">No replies yet. Be the first!</p>
//               ) : (
//                 <AnimatePresence>
//                   {selectedPost.replies.map((reply) => (
//                     <motion.div
//                       key={reply.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, x: -20 }}
//                       transition={{ duration: 0.2 }}
//                       className="bg-white p-4 rounded-lg shadow-sm mb-3 last:mb-0 border border-gray-100"
//                     >
//                       <p className="font-semibold text-gray-800 text-base mb-1 flex items-center">
//                         {reply.author.name}
//                         <UserBadge userType={reply.author.type} />
//                       </p>
//                       <p className="text-gray-700 text-sm leading-relaxed">
//                         {reply.content}
//                       </p>
//                       <span className="block text-right text-xs text-gray-400 mt-2">
//                         {formatTimestamp(reply.timestamp)}
//                       </span>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               )}
//               <div ref={replyInputRef} /> {/* Dummy div to scroll to */}
//             </div>

//             {/* Reply Input */}
//             {currentUser && currentUser.type !== 'guest' ? (
//               <div className="mt-6">
//                 <h4 className="text-xl font-semibold text-gray-800 mb-3">Add a Reply</h4>
//                 <textarea
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition-all resize-y min-h-[80px]"
//                   placeholder="Type your reply here..."
//                   value={newReplyContent}
//                   onChange={(e) => setNewReplyContent(e.target.value)}
//                 ></textarea>
//                 <button
//                   onClick={() => handleAddReply(selectedPost.id)}
//                   className="mt-3 bg-purple-600 text-white px-6 py-2.5 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"
//                 >
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
//                   Post Reply
//                 </button>
//               </div>
//             ) : (
//               <p className="mt-6 text-gray-600 italic bg-gray-100 p-4 rounded-lg border border-gray-200">
//                 Please imagine a "Login" button here to participate in the discussion.
//               </p>
//             )}
//           </motion.div>
//         ) : (
//           // --- Main Forum List View ---
//           <>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.8 }}
//               className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200"
//             >
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {/* Search Bar */}
//                 <div>
//                   <label htmlFor="forum-search" className="block text-gray-700 text-sm font-semibold mb-2">
//                     Search Forum
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       id="forum-search"
//                       placeholder="Search posts, ideas, authors..."
//                       className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition-all"
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Category Filter */}
//                 <div>
//                   <label htmlFor="category-filter" className="block text-gray-700 text-sm font-semibold mb-2">
//                     Filter by Category
//                   </label>
//                   <div className="relative">
//                     <select
//                       id="category-filter"
//                       className="w-full p-3 pr-10 border border-gray-300 rounded-lg appearance-none focus:ring-purple-500 focus:border-purple-500 transition-all bg-white"
//                       value={filterCategory}
//                       onChange={(e) => setFilterCategory(e.target.value)}
//                     >
//                       {availableCategories.map((category) => (
//                         <option key={category} value={category}>
//                           {category}
//                         </option>
//                       ))}
//                     </select>
//                     <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                       <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Create New Post Button */}
//                 <div className="flex items-end">
//                   {currentUser && currentUser.type !== 'guest' ? (
//                     <button
//                       onClick={() => setIsNewPostModalOpen(true)}
//                       className="w-full bg-purple-600 text-white p-3 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-center font-medium"
//                     >
//                       <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path></svg>
//                       Create New Post
//                     </button>
//                   ) : (
//                     <p className="w-full text-center text-gray-500 p-3 bg-gray-100 rounded-lg italic">
//                       Login to create posts.
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Forum Post List */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredPosts.length === 0 ? (
//                 <motion.div
//                   className="md:col-span-3 text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <p className="text-xl text-gray-600 font-semibold">
//                     <span role="img" aria-label="thought bubble" className="mr-2">💭</span>
//                     No posts match your filters.
//                   </p>
//                   <p className="text-gray-500 mt-2">Try adjusting your search or category.</p>
//                 </motion.div>
//               ) : (
//                 <AnimatePresence>
//                   {filteredPosts.map((post, index) => (
//                     <motion.div
//                       key={post.id}
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, x: -50 }}
//                       transition={{ duration: 0.4, delay: index * 0.05 }}
//                       onClick={() => setSelectedPost(post)}
//                       className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-purple-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
//                     >
//                       <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 flex items-start">
//                         {post.title}
//                         <UserBadge userType={post.author.type} />
//                       </h3>
//                       <p className="text-gray-700 text-sm mb-3 line-clamp-3">
//                         {post.content}
//                       </p>
//                       <div className="flex items-center justify-between text-xs text-gray-500 mt-4 border-t pt-3 border-gray-100">
//                         <span className="flex items-center">
//                           <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
//                           {post.author.name}
//                         </span>
//                         <span className="flex items-center">
//                           <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-7-4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
//                           {post.category}
//                         </span>
//                         <span className="flex items-center">
//                           <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
//                           {formatTimestamp(post.timestamp)}
//                         </span>
//                       </div>
//                       <div className="mt-2 text-right text-purple-600 font-semibold text-sm hover:underline">
//                         {post.replies.length} {post.replies.length === 1 ? 'Reply' : 'Replies'}
//                       </div>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               )}
//             </div>

//             {/* --- Alumni Connect Section --- */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 1.2 }}
//               className="mt-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8 shadow-xl border border-indigo-200"
//             >
//               <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center flex items-center justify-center">
//                 <span role="img" aria-label="handshake" className="mr-3 text-4xl">🤝</span>
//                 Connect One-to-One with Alumni Mentors
//               </h2>
//               <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
//                 Students can find and connect directly with alumni for personalized guidance, career advice,
//                 project mentorship, or to discuss specific tech ideas.
//               </p>

//               {currentUser && currentUser.type === 'student' ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {mockAlumniForConnect.map((alumni) => (
//                     <motion.div
//                       key={alumni.id}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true, amount: 0.3 }}
//                       transition={{ duration: 0.4 }}
//                       className="bg-white rounded-xl shadow-md p-5 border border-indigo-200 flex flex-col items-center text-center"
//                     >
//                       <div className="w-20 h-20 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-3xl font-bold mb-3">
//                         {alumni.name.charAt(0)}
//                       </div>
//                       <h3 className="text-xl font-semibold text-gray-800">{alumni.name}</h3>
//                       <p className="text-indigo-600 text-sm font-medium">Batch {alumni.batch}</p>
//                       <p className="text-gray-600 text-sm mt-1 mb-4 italic">{alumni.expertise}</p>
//                       <button
//                         onClick={() => alert(`Simulating request to connect with ${alumni.name}. In a real app, this would open a chat or send a request.`)}
//                         className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center"
//                       >
//                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
//                         Request Guidance
//                       </button>
//                     </motion.div>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-center text-gray-600 bg-indigo-50 p-6 rounded-lg border border-indigo-200 italic">
//                   Only registered students can access the alumni mentorship directory.
//                   <br /> (Please imagine a "Login as Student" button here.)
//                 </p>
//               )}
//             </motion.div>
//           </>
//         )}
//       </div>

//       {/* New Post Modal */}
//       <AnimatePresence>
//         {isNewPostModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 50 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 50 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full border border-purple-300 relative"
//             >
//               <button
//                 onClick={() => setIsNewPostModalOpen(false)}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
//               </button>
//               <h2 className="text-2xl font-bold text-purple-800 mb-6">Create New Forum Post</h2>
//               <form onSubmit={handleCreatePost}>
//                 <div className="mb-4">
//                   <label htmlFor="postTitle" className="block text-gray-700 text-sm font-semibold mb-2">
//                     Title
//                   </label>
//                   <input
//                     type="text"
//                     id="postTitle"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
//                     value={newPostTitle}
//                     onChange={(e) => setNewPostTitle(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="postContent" className="block text-gray-700 text-sm font-semibold mb-2">
//                     Content
//                   </label>
//                   <textarea
//                     id="postContent"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 resize-y min-h-[120px]"
//                     value={newPostContent}
//                     onChange={(e) => setNewPostContent(e.target.value)}
//                     required
//                   ></textarea>
//                 </div>
//                 <div className="mb-6">
//                   <label htmlFor="postCategory" className="block text-gray-700 text-sm font-semibold mb-2">
//                     Category
//                   </label>
//                   <select
//                     id="postCategory"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 bg-white appearance-none"
//                     value={newPostCategory}
//                     onChange={(e) => setNewPostCategory(e.target.value)}
//                   >
//                     {availableCategories.filter(cat => cat !== 'All').map((cat) => (
//                       <option key={cat} value={cat}>
//                         {cat}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-purple-600 text-white p-3 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold"
//                 >
//                   Create Post
//                 </button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default ConnectForum;






// -------------------------------------2nd version online-------------------------------------------------







// import React, { useState, useMemo, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Helmet } from "react-helmet";
// import { supabase } from "../supabaseClient";

// const ConnectForum = () => {
//   const [session, setSession] = useState(null);
//   const [userRole, setUserRole] = useState("guest"); // student | alumni | faculty | guest
//   const [isVerified, setIsVerified] = useState(false);

//   const [posts, setPosts] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [newPostTitle, setNewPostTitle] = useState("");
//   const [newPostContent, setNewPostContent] = useState("");
//   const [newReplyContent, setNewReplyContent] = useState("");

//   const replyRef = useRef(null);

//   /* 🔐 Identify user from Supabase */
//   useEffect(() => {
//     const init = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();
//       setSession(session);

//       if (!session) return;

//       const uid = session.user.id;

//       const { data: student } = await supabase.from("students").select("is_verified").eq("id", uid).single();
//       const { data: alumni } = await supabase.from("alumni").select("is_verified").eq("id", uid).single();
//       const { data: faculty } = await supabase.from("faculty").select("is_verified").eq("id", uid).single();

//       if (student?.is_verified) {
//         setUserRole("student");
//         setIsVerified(true);
//       }
//       if (alumni?.is_verified) {
//         setUserRole("alumni");
//         setIsVerified(true);
//       }
//       if (faculty?.is_verified) {
//         setUserRole("faculty");
//         setIsVerified(true);
//       }
//     };

//     init();
//   }, []);

//   /* 🧠 Load forum posts */
//   useEffect(() => {
//     const load = async () => {
//       const { data } = await supabase
//         .from("forum_posts")
//         .select("*, forum_replies(*)")
//         .order("created_at", { ascending: false });

//       setPosts(data || []);
//     };

//     load();
//   }, []);

//   const canPost = isVerified;
//   const canReply = isVerified;
//   const isAlumni = userRole === "alumni";

//   const handleCreatePost = async () => {
//     if (!canPost) return alert("Verify your account to post");

//     const { data, error } = await supabase.from("forum_posts").insert([
//       {
//         title: newPostTitle,
//         content: newPostContent,
//         : session.user.id,
//         user_role: userRole,
//       },
//     ]);

//     if (!error) window.location.reload();
//   };

//   const handleReply = async () => {
//     if (!canReply) return alert("Verify your account to reply");

//     await supabase.from("forum_replies").insert([
//       {
//         post_id: selectedPost.id,
//         content: newReplyContent,
//         id: session.user.id,
//         user_role: userRole,
//       },
//     ]);

//     window.location.reload();
//   };

//   return (
//     <section className="min-h-screen bg-purple-50 p-10">
//       <Helmet>
//         <title>Connect Forum</title>
//       </Helmet>

//       <h1 className="text-4xl font-bold text-purple-800 mb-6">
//         🤝 Alumni–Student Connect Forum
//       </h1>

//       {!isVerified && (
//         <p className="text-red-600 mb-6">
//           🔒 Verify your account to post or reply.
//         </p>
//       )}

//       {posts.map((post) => (
//         <div key={post.id} className="bg-white p-6 rounded-xl mb-4 shadow">
//           <h2 className="font-bold text-xl">{post.title}</h2>
//           <p>{post.content}</p>

//           {post.forum_replies?.map((r) => (
//             <div key={r.id} className="ml-4 mt-2 text-sm text-gray-700">
//               💬 {r.content}
//             </div>
//           ))}

//           {canReply && (
//             <button
//               onClick={() => setSelectedPost(post)}
//               className="text-purple-600 mt-2"
//             >
//               Reply
//             </button>
//           )}
//         </div>
//       ))}

//       {isAlumni && (
//         <div className="mt-10 bg-white p-6 rounded-xl">
//           <h2 className="font-bold text-xl">Post Opportunity</h2>
//           <button className="bg-purple-600 text-white px-4 py-2 rounded">
//             Alumni Mentor Panel
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ConnectForum;













// ------------------------final version online----------------------------










// import React, { useState, useEffect } from "react";
// import { Helmet } from "react-helmet";
// import { supabase } from "../supabaseClient";

// const ConnectForum = () => {
//   const [session, setSession] = useState(null);
//   const [userRole, setUserRole] = useState("guest"); // student | alumni | faculty | guest
//   const [isVerified, setIsVerified] = useState(false);

//   const [posts, setPosts] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);

//   /* 🔐 Identify user from Supabase */
//   useEffect(() => {
//     const init = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();

//       setSession(session);
//       if (!session) return;

//       const uid = session.user.id;

//       const { data: student } = await supabase
//         .from("students")
//         .select("is_verified")
//         .eq("id", uid)
//         .maybeSingle();

//       const { data: alumni } = await supabase
//         .from("alumni")
//         .select("is_verified")
//         .eq("id", uid)
//         .maybeSingle();

//       const { data: faculty } = await supabase
//         .from("faculty")
//         .select("is_verified")
//         .eq("id", uid)
//         .maybeSingle();

//       if (student?.is_verified) {
//         setUserRole("student");
//         setIsVerified(true);
//       } else if (alumni?.is_verified) {
//         setUserRole("alumni");
//         setIsVerified(true);
//       } else if (faculty?.is_verified) {
//         setUserRole("faculty");
//         setIsVerified(true);
//       }
//     };

//     init();
//   }, []);

//   /* 🧠 Load forum posts */
//   useEffect(() => {
//     const load = async () => {
//       const { data } = await supabase
//         .from("forum_posts")
//         .select("*, forum_replies(*)")
//         .order("created_at", { ascending: false });

//       setPosts(data || []);
//     };

//     load();
//   }, []);

//   const canReply = isVerified;
//   const isAlumni = userRole === "alumni";

//   return (
//     <section className="min-h-screen bg-purple-50 p-10">
//       <Helmet>
//         <title>Connect Forum</title>
//       </Helmet>

//       <h1 className="text-4xl font-bold text-purple-800 mb-6">
//         🤝 Alumni–Student Connect Forum
//       </h1>

//       {!isVerified && (
//         <p className="text-red-600 mb-6">
//           🔒 Verify your account to post or reply.
//         </p>
//       )}

//       {posts.map((post) => (
//         <div key={post.id} className="bg-white p-6 rounded-xl mb-4 shadow">
//           <h2 className="font-bold text-xl">{post.title}</h2>
//           <p className="mt-2">{post.content}</p>

//           {post.forum_replies?.map((r) => (
//             <div key={r.id} className="ml-4 mt-2 text-sm text-gray-700">
//               💬 {r.content}
//             </div>
//           ))}

//           {canReply && (
//             <button
//               onClick={() => setSelectedPost(post)}
//               className="text-purple-600 mt-2"
//             >
//               Reply
//             </button>
//           )}
//         </div>
//       ))}

//       {isAlumni && (
//         <div className="mt-10 bg-white p-6 rounded-xl shadow">
//           <h2 className="font-bold text-xl mb-3">Post Opportunity</h2>
//           <button className="bg-purple-600 text-white px-4 py-2 rounded">
//             Alumni Mentor Panel
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ConnectForum;










// ----------------------------------- final version offline --------------------------------------------------












// import React, { useState, useEffect } from "react";
// import { Helmet } from "react-helmet";
// import { supabase } from "../supabaseClient";

// const ConnectForum = () => {
//   const [userRole, setUserRole] = useState("guest"); // student | alumni | faculty | guest
//   const [isVerified, setIsVerified] = useState(false);
//   const [posts, setPosts] = useState([]);

//   /* 🔐 Identify user from Supabase */
//   useEffect(() => {
//     const init = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();

//       if (!session) return;

//       const uid = session.user.id;

//       const { data: student } = await supabase
//         .from("students")
//         .select("is_verified")
//         .eq("id", uid)
//         .maybeSingle();

//       const { data: alumni } = await supabase
//         .from("alumni")
//         .select("is_verified")
//         .eq("id", uid)
//         .maybeSingle();

//       const { data: faculty } = await supabase
//         .from("faculty")
//         .select("is_verified")
//         .eq("id", uid)
//         .maybeSingle();

//       if (student?.is_verified) {
//         setUserRole("student");
//         setIsVerified(true);
//       } else if (alumni?.is_verified) {
//         setUserRole("alumni");
//         setIsVerified(true);
//       } else if (faculty?.is_verified) {
//         setUserRole("faculty");
//         setIsVerified(true);
//       }
//     };

//     init();
//   }, []);

//   /* 🧠 Load forum posts */
//   useEffect(() => {
//     const load = async () => {
//       const { data } = await supabase
//         .from("forum_posts")
//         .select("*, forum_replies(*)")
//         .order("created_at", { ascending: false });

//       setPosts(data || []);
//     };

//     load();
//   }, []);

//   const canReply = isVerified;
//   const isAlumni = userRole === "alumni";

//   return (
//     <section className="min-h-screen bg-purple-50 p-10">
//       <Helmet>
//         <title>Connect Forum</title>
//       </Helmet>

//       <h1 className="text-4xl font-bold text-purple-800 mb-6">
//         🤝 Alumni–Student Connect Forum
//       </h1>

//       {!isVerified && (
//         <p className="text-red-600 mb-6">
//           🔒 Verify your account to post or reply.
//         </p>
//       )}

//       {posts.map((post) => (
//         <div key={post.id} className="bg-white p-6 rounded-xl mb-4 shadow">
//           <h2 className="font-bold text-xl">{post.title}</h2>
//           <p className="mt-2">{post.content}</p>

//           {post.forum_replies?.map((r) => (
//             <div key={r.id} className="ml-4 mt-2 text-sm text-gray-700">
//               💬 {r.content}
//             </div>
//           ))}

//           {canReply && (
//             <button className="text-purple-600 mt-2">
//               Reply
//             </button>
//           )}
//         </div>
//       ))}

//       {isAlumni && (
//         <div className="mt-10 bg-white p-6 rounded-xl shadow">
//           <h2 className="font-bold text-xl mb-3">Post Opportunity</h2>
//           <button className="bg-purple-600 text-white px-4 py-2 rounded">
//             Alumni Mentor Panel
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ConnectForum;










// --------------------- first version offline ----------------------------











// import React, { useEffect, useState, useRef } from "react";
// import { Helmet } from "react-helmet";
// import { supabase } from "../supabaseClient";

// const ConnectForum = () => {
//   const [userRole, setUserRole] = useState("guest");
//   const [isVerified, setIsVerified] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");
//   const [user, setUser] = useState(null);
//   const bottomRef = useRef(null);

//   /* 🔐 Identify logged-in user */
//   useEffect(() => {
//     const init = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();

//       if (!session) return;
//       setUser(session.user);

//       const uid = session.user.id;

//       const { data: student } = await supabase
//         .from("students")
//         .select("is_verified, name")
//         .eq("id", uid)
//         .maybeSingle();

//       const { data: alumni } = await supabase
//         .from("alumni")
//         .select("is_verified, name")
//         .eq("id", uid)
//         .maybeSingle();

//       const { data: faculty } = await supabase
//         .from("faculty")
//         .select("is_verified, name")
//         .eq("id", uid)
//         .maybeSingle();

//       if (student?.is_verified) {
//         setUserRole("student");
//         setIsVerified(true);
//       } else if (alumni?.is_verified) {
//         setUserRole("alumni");
//         setIsVerified(true);
//       } else if (faculty?.is_verified) {
//         setUserRole("faculty");
//         setIsVerified(true);
//       }
//     };

//     init();
//   }, []);

//   /* 📥 Load messages */
//   useEffect(() => {
//     const loadMessages = async () => {
//       const { data } = await supabase
//         .from("discussion_messages")
//         .select("*")
//         .order("created_at", { ascending: true });

//       setMessages(data || []);
//     };

//     loadMessages();

//     /* ⚡ Real-time subscription */
//     const channel = supabase
//       .channel("discussion-chat")
//       .on(
//         "postgres_changes",
//         { event: "INSERT", schema: "public", table: "discussion_messages" },
//         (payload) => {
//           setMessages((prev) => [...prev, payload.new]);
//         }
//       )
//       .subscribe();

//     return () => {
//       supabase.removeChannel(channel);
//     };
//   }, []);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   /* ✉️ Send message */
//   const sendMessage = async () => {
//     if (!text.trim() || !isVerified) return;

//     await supabase.from("discussion_messages").insert({
//       id: user.id,
//       name: user.email,
//       role: userRole,
//       message: text,
//     });

//     setText("");
//   };

//   return (
//     <section className="min-h-screen bg-purple-50 flex flex-col">
//       <Helmet>
//         <title>Discussion Forum</title>
//       </Helmet>

//       {/* Header */}
//       <div className="bg-purple-700 text-white p-4 text-xl font-bold">
//         💬 Alumni Connect – Discussion Forum
//       </div>

//       {!isVerified && (
//         <p className="text-red-600 text-center mt-4">
//           🔒 Verify your account to participate in discussion.
//         </p>
//       )}

//       {/* Chat Messages */}
//       <div className="flex-1 overflow-y-auto p-6 space-y-4">
//         {messages.map((msg) => (
//           <div
//             key={msg.id}
//             className={`max-w-xl ${
//               msg.id === user?.id ? "ml-auto text-right" : ""
//             }`}
//           >
//             <div className="text-xs text-gray-500 mb-1">
//               {msg.name} ·{" "}
//               <span className="capitalize font-semibold text-purple-600">
//                 {msg.role}
//               </span>
//             </div>
//             <div className="bg-white p-3 rounded-xl shadow inline-block">
//               {msg.message}
//             </div>
//           </div>
//         ))}
//         <div ref={bottomRef} />
//       </div>

//       {/* Input Box */}
//       <div className="bg-white p-4 flex gap-3 border-t">
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder={
//             isVerified
//               ? "Ask a question or reply..."
//               : "Verification required"
//           }
//           disabled={!isVerified}
//           className="flex-1 border rounded px-4 py-2"
//         />
//         <button
//           onClick={sendMessage}
//           disabled={!isVerified}
//           className="bg-purple-600 text-white px-6 py-2 rounded disabled:opacity-50"
//         >
//           Send
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ConnectForum;














// ----------------- first version online ----------------------------








import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Clock,
  Building,
  Search,
  ExternalLink,
  X
} from "lucide-react";

const Internship = () => {
  const navigate = useNavigate();
  
  // Auth state
 // Auth state
const [user, setUser] = useState(null);
const [userName, setUserName] = useState("");
const [userRole, setUserRole] = useState("guest");
const [isVerified, setIsVerified] = useState(false);
const [authLoading, setAuthLoading] = useState(true);
  
  // Internship state
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All Types");
  const [filterLocation, setFilterLocation] = useState("All Locations");
  const [filterDuration, setFilterDuration] = useState("All Durations");
  
  // Modal state
  const [showPostModal, setShowPostModal] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  
  // Form state
  const [postForm, setPostForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "On-site",
    duration: "3 months",
    stipend: "",
    description: "",
    requirements: "",
    apply_url: "",
    deadline: "",
  });

  /* 🔐 Auth + verification - FULLY CORRECTED */
  useEffect(() => {
    const init = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
          setAuthLoading(false);
          return;
        }

        setUser(session.user);
        const uid = session.user.id;

        // ✅ Check student (singular)
        const { data: student } = await supabase
          .from("student")
          .select("is_verified, name")
          .eq("id", uid)
          .maybeSingle();

        // ✅ Check alumni
        const { data: alumni } = await supabase
          .from("alumni")
          .select("is_verified, name")
          .eq("id", uid)
          .maybeSingle();

        // ✅ Check faculty
        const { data: faculty } = await supabase
          .from("faculty")
          .select("is_verified, name")
          .eq("id", uid)
          .maybeSingle();

        // ✅ Check admin
        const { data: admin } = await supabase
          .from("admin")
          .select("*")
          .eq("id", uid)
          .maybeSingle();

        // Set role in priority order
        if (admin) {
          setUserRole("admin");
          setIsVerified(true);
          setUserName(admin.name || session.user.email);
        } else if (faculty?.is_verified) {
          setUserRole("faculty");
          setIsVerified(true);
          setUserName(faculty.name || session.user.email);
        } else if (alumni?.is_verified) {
          setUserRole("alumni");
          setIsVerified(true);
          setUserName(alumni.name || session.user.email);
        } else if (student?.is_verified) {
          setUserRole("student");
          setIsVerified(true);
          setUserName(student.name || session.user.email);
        }
      } catch (error) {
        console.error("Auth error:", error);
      }
    };

    init();
  }, []);

  /* 📥 Load internships */
  useEffect(() => {
    loadInternships();
  }, []);

  const loadInternships = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("jobs_internships")
        .select("*")
        .eq("type", "internship")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setInternships(data || []);
      setFilteredInternships(data || []);
    } catch (error) {
      console.error("Error loading internships:", error);
    } finally {
      setLoading(false);
    }
  };

  /* 🔍 Filter internships */
  useEffect(() => {
    let filtered = [...internships];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (job) =>
          job.title?.toLowerCase().includes(query) ||
          job.company?.toLowerCase().includes(query) ||
          job.description?.toLowerCase().includes(query)
      );
    }

    // Type filter
    if (filterType !== "All Types") {
      filtered = filtered.filter((job) => job.job_type === filterType);
    }

    // Location filter
    if (filterLocation !== "All Locations") {
      filtered = filtered.filter((job) => job.location === filterLocation);
    }

    // Duration filter
    if (filterDuration !== "All Durations") {
      filtered = filtered.filter((job) => job.duration === filterDuration);
    }

    setFilteredInternships(filtered);
  }, [searchQuery, filterType, filterLocation, filterDuration, internships]);

  /* ✉️ Post internship - FIXED */
  const handlePostInternship = async () => {
    if (!postForm.title.trim() || !postForm.company.trim() || !isVerified) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      // ✅ FIXED: Use 'posted_by' instead of 'id'
      const { error } = await supabase.from("jobs_internships").insert({
        type: "internship",
        title: postForm.title,
        company: postForm.company,
        location: postForm.location,
        job_type: postForm.type,
        duration: postForm.duration,
        stipend: postForm.stipend,
        description: postForm.description,
        requirements: postForm.requirements,
        apply_url: postForm.apply_url,
        deadline: postForm.deadline || null,
        posted_by: user.id,  // ✅ Changed from 'id' to 'posted_by'
        poster_name: userName,
        poster_role: userRole,
      });

      if (error) throw error;

      alert("✅ Internship posted successfully!");
      setShowPostModal(false);
      setPostForm({
        title: "",
        company: "",
        location: "",
        type: "On-site",
        duration: "3 months",
        stipend: "",
        description: "",
        requirements: "",
        apply_url: "",
        deadline: "",
      });
      loadInternships();
    } catch (error) {
      console.error("Error posting internship:", error);
      alert("Failed to post internship. Please try again.");
    }
  };

  /* 🎨 Helper functions */
  const formatDate = (dateString) => {
    if (!dateString) return "No deadline";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getTypeColor = (type) => {
    const colors = {
      "On-site": "bg-blue-100 text-blue-700",
      "Remote": "bg-green-100 text-green-700",
      "Hybrid": "bg-purple-100 text-purple-700",
    };
    return colors[type] || "bg-gray-100 text-gray-700";
  };

  const getInitials = (name) => {
    if (!name) return "?";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  // Extract unique values for filters
  const uniqueLocations = [...new Set(internships.map((i) => i.location).filter(Boolean))];
  const uniqueDurations = [...new Set(internships.map((i) => i.duration).filter(Boolean))];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <Helmet>
        <title>Internships | Alumni Connect</title>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-indigo-600 hover:text-indigo-800 flex items-center gap-2 mx-auto"
          >
            ← Back
          </button>
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            🎯 Internship Opportunities
          </h1>
          <p className="text-gray-600 text-lg">
            Find and share internship opportunities
          </p>
        </div>

        {/* Post Internship Button */}
        {isVerified && (userRole === "alumni" || userRole === "faculty" || userRole === "admin") && (
          <div className="mb-6 flex justify-end">
            <button
              onClick={() => setShowPostModal(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Briefcase size={20} />
              Post Internship
            </button>
          </div>
        )}

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative md:col-span-1">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search internships..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Type Filter */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option>All Types</option>
              <option>On-site</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>

            {/* Location Filter */}
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option>All Locations</option>
              {uniqueLocations.map((loc, i) => (
                <option key={i} value={loc}>
                  {loc}
                </option>
              ))}
            </select>

            {/* Duration Filter */}
            <select
              value={filterDuration}
              onChange={(e) => setFilterDuration(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option>All Durations</option>
              {uniqueDurations.map((dur, i) => (
                <option key={i} value={dur}>
                  {dur}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Not Verified Warning */}
        {!isVerified && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
            <p className="text-yellow-700 font-medium">
              🔒 Please verify your account to apply for internships.
            </p>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-gray-600">Loading internships...</p>
          </div>
        )}

        {/* No Results */}
        {!loading && filteredInternships.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No internships found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters or check back later
            </p>
          </div>
        )}

        {/* Internships Grid */}
        {!loading && filteredInternships.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInternships.map((internship) => (
              <div
                key={internship.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Card Header */}
                <div className="p-6 flex-grow">
                  {/* Type Badge */}
                  <div className="flex justify-between items-start mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(
                        internship.job_type
                      )}`}
                    >
                      {internship.job_type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {internship.title}
                  </h3>

                  {/* Company */}
                  <div className="flex items-center gap-2 mb-4">
                    <Building size={16} className="text-gray-400" />
                    <span className="text-gray-700 font-medium">
                      {internship.company}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    {internship.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={16} />
                        <span>{internship.location}</span>
                      </div>
                    )}
                    {internship.duration && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock size={16} />
                        <span>{internship.duration}</span>
                      </div>
                    )}
                    {internship.stipend && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <DollarSign size={16} />
                        <span>{internship.stipend}</span>
                      </div>
                    )}
                    {internship.deadline && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar size={16} />
                        <span>Deadline: {formatDate(internship.deadline)}</span>
                      </div>
                    )}
                  </div>

                  {/* Description Preview */}
                  {internship.description && (
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {internship.description}
                    </p>
                  )}
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 mt-auto">
                  <button
                    onClick={() => {
                      setSelectedInternship(internship);
                      setShowDetailsModal(true);
                    }}
                    className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
                  >
                    View Details
                  </button>
                </div>

                {/* Posted By */}
                {internship.poster_name && (
                  <div className="px-6 pb-4 border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xs">
                        {getInitials(internship.poster_name)}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Posted by</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {internship.poster_name}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Post Internship Modal */}
      {showPostModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-2xl font-bold text-gray-900">
                Post Internship
              </h3>
              <button
                onClick={() => setShowPostModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  value={postForm.title}
                  onChange={(e) =>
                    setPostForm({ ...postForm, title: e.target.value })
                  }
                  placeholder="e.g., Software Engineering Intern"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Company *
                </label>
                <input
                  type="text"
                  value={postForm.company}
                  onChange={(e) =>
                    setPostForm({ ...postForm, company: e.target.value })
                  }
                  placeholder="e.g., Google"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={postForm.location}
                    onChange={(e) =>
                      setPostForm({ ...postForm, location: e.target.value })
                    }
                    placeholder="e.g., Mumbai"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Type
                  </label>
                  <select
                    value={postForm.type}
                    onChange={(e) =>
                      setPostForm({ ...postForm, type: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
                  >
                    <option>On-site</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={postForm.duration}
                    onChange={(e) =>
                      setPostForm({ ...postForm, duration: e.target.value })
                    }
                    placeholder="e.g., 3 months"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Stipend
                  </label>
                  <input
                    type="text"
                    value={postForm.stipend}
                    onChange={(e) =>
                      setPostForm({ ...postForm, stipend: e.target.value })
                    }
                    placeholder="e.g., ₹15,000/month"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={postForm.description}
                  onChange={(e) =>
                    setPostForm({ ...postForm, description: e.target.value })
                  }
                  placeholder="Describe the internship role..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 h-24 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Requirements
                </label>
                <textarea
                  value={postForm.requirements}
                  onChange={(e) =>
                    setPostForm({ ...postForm, requirements: e.target.value })
                  }
                  placeholder="List the requirements..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 h-24 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Application URL
                </label>
                <input
                  type="url"
                  value={postForm.apply_url}
                  onChange={(e) =>
                    setPostForm({ ...postForm, apply_url: e.target.value })
                  }
                  placeholder="https://company.com/apply"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Application Deadline
                </label>
                <input
                  type="date"
                  value={postForm.deadline}
                  onChange={(e) =>
                    setPostForm({ ...postForm, deadline: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex gap-3 rounded-b-2xl">
              <button
                onClick={() => setShowPostModal(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handlePostInternship}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all"
              >
                Post Internship
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {showDetailsModal && selectedInternship && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-2xl font-bold text-gray-900">
                Internship Details
              </h3>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(
                    selectedInternship.job_type
                  )}`}
                >
                  {selectedInternship.job_type}
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedInternship.title}
              </h2>

              <div className="flex items-center gap-2 mb-6">
                <Building size={20} className="text-gray-400" />
                <span className="text-xl text-gray-700 font-medium">
                  {selectedInternship.company}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {selectedInternship.location && (
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-gray-400" />
                    <span className="text-gray-700">
                      {selectedInternship.location}
                    </span>
                  </div>
                )}
                {selectedInternship.duration && (
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-gray-400" />
                    <span className="text-gray-700">
                      {selectedInternship.duration}
                    </span>
                  </div>
                )}
                {selectedInternship.stipend && (
                  <div className="flex items-center gap-2">
                    <DollarSign size={18} className="text-gray-400" />
                    <span className="text-gray-700">
                      {selectedInternship.stipend}
                    </span>
                  </div>
                )}
                {selectedInternship.deadline && (
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-gray-400" />
                    <span className="text-gray-700">
                      Deadline: {formatDate(selectedInternship.deadline)}
                    </span>
                  </div>
                )}
              </div>

              {selectedInternship.description && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Description
                  </h4>
                  <p className="text-gray-700 whitespace-pre-line">
                    {selectedInternship.description}
                  </p>
                </div>
              )}

              {selectedInternship.requirements && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Requirements
                  </h4>
                  <p className="text-gray-700 whitespace-pre-line">
                    {selectedInternship.requirements}
                  </p>
                </div>
              )}

              {selectedInternship.apply_url && (
                <div className="mt-6">
                  <a
                    href={selectedInternship.apply_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={20} />
                    Apply Now
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Internship;














// ---------------------------------------------------------------------------------


// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import { supabase } from "../supabaseClient";
// import { useNavigate } from "react-router-dom";
// import { 
//   Briefcase, 
//   MapPin, 
//   Calendar, 
//   DollarSign, 
//   Clock,
//   Building,
//   Search,
//   ExternalLink,
//   X
// } from "lucide-react";

// const Internship = () => {
//   const navigate = useNavigate();
  
//   // Auth state
//   const [user, setUser] = useState(null);
//   const [userName, setUserName] = useState("");
//   const [userRole, setUserRole] = useState("guest");
//   const [isVerified, setIsVerified] = useState(false);
//   const [authLoading, setAuthLoading] = useState(true);
  
//   // Internship state
//   const [internships, setInternships] = useState([]);
//   const [filteredInternships, setFilteredInternships] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Filter state
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterType, setFilterType] = useState("All Types");
//   const [filterLocation, setFilterLocation] = useState("All Locations");
//   const [filterDuration, setFilterDuration] = useState("All Durations");
  
//   // Modal state
//   const [showPostModal, setShowPostModal] = useState(false);
//   const [selectedInternship, setSelectedInternship] = useState(null);
//   const [showDetailsModal, setShowDetailsModal] = useState(false);
  
//   // Form state
//   const [postForm, setPostForm] = useState({
//     title: "",
//     company: "",
//     location: "",
//     type: "On-site",
//     duration: "3 months",
//     stipend: "",
//     description: "",
//     requirements: "",
//     apply_url: "",
//     deadline: "",
//   });

//   /* 🔐 Auth + verification */
//   useEffect(() => {
//     const init = async () => {
//       try {
//         const { data: { session } } = await supabase.auth.getSession();

//         if (!session) {
//           setAuthLoading(false);
//           return;
//         }

//         setUser(session.user);
//         const uid = session.user.id;

//         const { data: student } = await supabase
//           .from("student")
//           .select("is_verified, name")
//           .eq("id", uid)
//           .maybeSingle();

//         const { data: alumni } = await supabase
//           .from("alumni")
//           .select("is_verified, name")
//           .eq("id", uid)
//           .maybeSingle();

//         const { data: faculty } = await supabase
//           .from("faculty")
//           .select("is_verified, name")
//           .eq("id", uid)
//           .maybeSingle();

//         const { data: admin } = await supabase
//           .from("admin")
//           .select("*")
//           .eq("id", uid)
//           .maybeSingle();

//         if (admin) {
//           setUserRole("admin");
//           setIsVerified(true);
//           setUserName(admin.name || session.user.email);
//         } else if (faculty?.is_verified) {
//           setUserRole("faculty");
//           setIsVerified(true);
//           setUserName(faculty.name || session.user.email);
//         } else if (alumni?.is_verified) {
//           setUserRole("alumni");
//           setIsVerified(true);
//           setUserName(alumni.name || session.user.email);
//         } else if (student?.is_verified) {
//           setUserRole("student");
//           setIsVerified(true);
//           setUserName(student.name || session.user.email);
//         }
//       } catch (error) {
//         console.error("Auth error:", error);
//       } finally {
//         setAuthLoading(false);
//       }
//     };

//     init();
//   }, []);

//   /* 📥 Load internships */
//   useEffect(() => {
//     loadInternships();
//   }, []);

//   const loadInternships = async () => {
//     setLoading(true);
//     try {
//       const { data, error } = await supabase
//         .from("jobs_internships")
//         .select("*")
//         .eq("type", "internship")
//         .order("created_at", { ascending: false });

//       if (error) throw error;
//       setInternships(data || []);
//       setFilteredInternships(data || []);
//     } catch (error) {
//       console.error("Error loading internships:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* 🔍 Filter internships */
//   useEffect(() => {
//     let filtered = [...internships];

//     if (searchQuery.trim()) {
//       const query = searchQuery.toLowerCase();
//       filtered = filtered.filter(
//         (job) =>
//           job.title?.toLowerCase().includes(query) ||
//           job.company?.toLowerCase().includes(query) ||
//           job.description?.toLowerCase().includes(query)
//       );
//     }

//     if (filterType !== "All Types") {
//       filtered = filtered.filter((job) => job.job_type === filterType);
//     }

//     if (filterLocation !== "All Locations") {
//       filtered = filtered.filter((job) => job.location === filterLocation);
//     }

//     if (filterDuration !== "All Durations") {
//       filtered = filtered.filter((job) => job.duration === filterDuration);
//     }

//     setFilteredInternships(filtered);
//   }, [searchQuery, filterType, filterLocation, filterDuration, internships]);

//   /* ✉️ Post internship */
//   const handlePostInternship = async () => {
//     if (!postForm.title.trim() || !postForm.company.trim() || !isVerified) {
//       alert("Please fill in all required fields");
//       return;
//     }

//     try {
//       const { error } = await supabase.from("jobs_internships").insert({
//         type: "internship",
//         title: postForm.title,
//         company: postForm.company,
//         location: postForm.location,
//         job_type: postForm.type,
//         duration: postForm.duration,
//         stipend: postForm.stipend,
//         description: postForm.description,
//         requirements: postForm.requirements,
//         apply_url: postForm.apply_url,
//         deadline: postForm.deadline || null,
//         posted_by: user.id,
//         poster_name: userName,
//         poster_role: userRole,
//       });

//       if (error) throw error;

//       alert("✅ Internship posted successfully!");
//       setShowPostModal(false);
//       setPostForm({
//         title: "",
//         company: "",
//         location: "",
//         type: "On-site",
//         duration: "3 months",
//         stipend: "",
//         description: "",
//         requirements: "",
//         apply_url: "",
//         deadline: "",
//       });
//       loadInternships();
//     } catch (error) {
//       console.error("Error posting internship:", error);
//       alert("Failed to post internship. Please try again.");
//     }
//   };

//   /* 🎨 Helper functions */
//   const formatDate = (dateString) => {
//     if (!dateString) return "No deadline";
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   const getTypeColor = (type) => {
//     const colors = {
//       "On-site": "bg-blue-100 text-blue-700",
//       "Remote": "bg-green-100 text-green-700",
//       "Hybrid": "bg-purple-100 text-purple-700",
//     };
//     return colors[type] || "bg-gray-100 text-gray-700";
//   };

//   const getInitials = (name) => {
//     if (!name) return "?";
//     const parts = name.split(" ");
//     if (parts.length >= 2) {
//       return (parts[0][0] + parts[1][0]).toUpperCase();
//     }
//     return name.substring(0, 2).toUpperCase();
//   };

//   const uniqueLocations = [...new Set(internships.map((i) => i.location).filter(Boolean))];
//   const uniqueDurations = [...new Set(internships.map((i) => i.duration).filter(Boolean))];

//   if (authLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//         <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
//       </div>
//     );
//   }

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
//       <Helmet>
//         <title>Internships | Alumni Connect</title>
//       </Helmet>

//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <button
//             onClick={() => navigate(-1)}
//             className="mb-4 text-indigo-600 hover:text-indigo-800 flex items-center gap-2 mx-auto"
//           >
//             ← Back
//           </button>
//           <h1 className="text-5xl font-bold text-gray-900 mb-3">
//             🎯 Internship Opportunities
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Find and share internship opportunities
//           </p>
//         </div>

//         {/* Post Internship Button */}
//         {isVerified && (userRole === "alumni" || userRole === "faculty" || userRole === "admin") && (
//           <div className="mb-6 flex justify-end">
//             <button
//               onClick={() => setShowPostModal(true)}
//               className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
//             >
//               <Briefcase size={20} />
//               Post Internship
//             </button>
//           </div>
//         )}

//         {/* Search and Filters */}
//         <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             <div className="relative md:col-span-1">
//               <Search
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                 size={20}
//               />
//               <input
//                 type="text"
//                 placeholder="Search internships..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
//               />
//             </div>

//             <select
//               value={filterType}
//               onChange={(e) => setFilterType(e.target.value)}
//               className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//             >
//               <option>All Types</option>
//               <option>On-site</option>
//               <option>Remote</option>
//               <option>Hybrid</option>
//             </select>

//             <select
//               value={filterLocation}
//               onChange={(e) => setFilterLocation(e.target.value)}
//               className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//             >
//               <option>All Locations</option>
//               {uniqueLocations.map((loc, i) => (
//                 <option key={i} value={loc}>{loc}</option>
//               ))}
//             </select>

//             <select
//               value={filterDuration}
//               onChange={(e) => setFilterDuration(e.target.value)}
//               className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//             >
//               <option>All Durations</option>
//               {uniqueDurations.map((dur, i) => (
//                 <option key={i} value={dur}>{dur}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Not Verified Warning */}
//         {!isVerified && (
//           <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
//             <p className="text-yellow-700 font-medium">
//               🔒 Please verify your account to apply for internships.
//             </p>
//           </div>
//         )}

//         {/* Loading */}
//         {loading && (
//           <div className="text-center py-12">
//             <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
//             <p className="mt-4 text-gray-600">Loading internships...</p>
//           </div>
//         )}

//         {/* No Results */}
//         {!loading && filteredInternships.length === 0 && (
//           <div className="text-center py-12 bg-white rounded-xl shadow-md">
//             <div className="text-6xl mb-4">🔍</div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               No internships found
//             </h3>
//             <p className="text-gray-600">
//               Try adjusting your filters or check back later
//             </p>
//           </div>
//         )}

//         {/* Internships Grid */}
//         {!loading && filteredInternships.length > 0 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredInternships.map((internship) => (
//               <div
//                 key={internship.id}
//                 className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
//               >
//                 <div className="p-6 flex-grow">
//                   <div className="flex justify-between items-start mb-3">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(internship.job_type)}`}
//                     >
//                       {internship.job_type}
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
//                     {internship.title}
//                   </h3>

//                   <div className="flex items-center gap-2 mb-4">
//                     <Building size={16} className="text-gray-400" />
//                     <span className="text-gray-700 font-medium">{internship.company}</span>
//                   </div>

//                   <div className="space-y-2 mb-4">
//                     {internship.location && (
//                       <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <MapPin size={16} />
//                         <span>{internship.location}</span>
//                       </div>
//                     )}
//                     {internship.duration && (
//                       <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <Clock size={16} />
//                         <span>{internship.duration}</span>
//                       </div>
//                     )}
//                     {internship.stipend && (
//                       <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <DollarSign size={16} />
//                         <span>{internship.stipend}</span>
//                       </div>
//                     )}
//                     {internship.deadline && (
//                       <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <Calendar size={16} />
//                         <span>Deadline: {formatDate(internship.deadline)}</span>
//                       </div>
//                     )}
//                   </div>

//                   {internship.description && (
//                     <p className="text-gray-600 text-sm line-clamp-3 mb-4">
//                       {internship.description}
//                     </p>
//                   )}
//                 </div>

//                 <div className="px-6 pb-6 mt-auto">
//                   <button
//                     onClick={() => {
//                       setSelectedInternship(internship);
//                       setShowDetailsModal(true);
//                     }}
//                     className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
//                   >
//                     View Details
//                   </button>
//                 </div>

//                 {internship.poster_name && (
//                   <div className="px-6 pb-4 border-t border-gray-100 pt-3">
//                     <div className="flex items-center gap-2">
//                       <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xs">
//                         {getInitials(internship.poster_name)}
//                       </div>
//                       <div>
//                         <p className="text-xs text-gray-500">Posted by</p>
//                         <p className="text-sm font-semibold text-gray-900">{internship.poster_name}</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Post Internship Modal */}
//       {showPostModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
//               <h3 className="text-2xl font-bold text-gray-900">Post Internship</h3>
//               <button onClick={() => setShowPostModal(false)} className="text-gray-400 hover:text-gray-600">
//                 <X size={24} />
//               </button>
//             </div>

//             <div className="p-6 space-y-4">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-1">Title *</label>
//                 <input
//                   type="text"
//                   value={postForm.title}
//                   onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
//                   placeholder="e.g., Software Engineering Intern"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-1">Company *</label>
//                 <input
//                   type="text"
//                   value={postForm.company}
//                   onChange={(e) => setPostForm({ ...postForm, company: e.target.value })}
//                   placeholder="e.g., Google"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
//                   <input
//                     type="text"
//                     value={postForm.location}
//                     onChange={(e) => setPostForm({ ...postForm, location: e.target.value })}
//                     placeholder="e.g., Mumbai"
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-1">Type</label>
//                   <select
//                     value={postForm.type}
//                     onChange={(e) => setPostForm({ ...postForm, type: e.target.value })}
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
//                   >
//                     <option>On-site</option>
//                     <option>Remote</option>
//                     <option>Hybrid</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-1">Duration</label>
//                   <input
//                     type="text"
//                     value={postForm.duration}
//                     onChange={(e) => setPostForm({ ...postForm, duration: e.target.value })}
//                     placeholder="e.g., 3 months"
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-1">Stipend</label>
//                   <input
//                     type="text"
//                     value={postForm.stipend}
//                     onChange={(e) => setPostForm({ ...postForm, stipend: e.target.value })}
//                     placeholder="e.g., ₹15,000/month"
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
//                 <textarea
//                   value={postForm.description}
//                   onChange={(e) => setPostForm({ ...postForm, description: e.target.value })}
//                   placeholder="Describe the internship role..."
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2.5 h-24 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-1">Requirements</label>
//                 <textarea
//                   value={postForm.requirements}
//                   onChange={(e) => setPostForm({ ...postForm, requirements: e.target.value })}
//                   placeholder="List the requirements..."
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2.5 h-24 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-1">Application URL</label>
//                 <input
//                   type="url"
//                   value={postForm.apply_url}
//                   onChange={(e) => setPostForm({ ...postForm, apply_url: e.target.value })}
//                   placeholder="https://company.com/apply"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-1">Application Deadline</label>
//                 <input
//                   type="date"
//                   value={postForm.deadline}
//                   onChange={(e) => setPostForm({ ...postForm, deadline: e.target.value })}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
//                 />
//               </div>
//             </div>

//             <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex gap-3 rounded-b-2xl">
//               <button
//                 onClick={() => setShowPostModal(false)}
//                 className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-all"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handlePostInternship}
//                 className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all"
//               >
//                 Post Internship
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Details Modal */}
//       {showDetailsModal && selectedInternship && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
//               <h3 className="text-2xl font-bold text-gray-900">Internship Details</h3>
//               <button onClick={() => setShowDetailsModal(false)} className="text-gray-400 hover:text-gray-600">
//                 <X size={24} />
//               </button>
//             </div>

//             <div className="p-6">
//               <div className="mb-4">
//                 <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(selectedInternship.job_type)}`}>
//                   {selectedInternship.job_type}
//                 </span>
//               </div>

//               <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedInternship.title}</h2>

//               <div className="flex items-center gap-2 mb-6">
//                 <Building size={20} className="text-gray-400" />
//                 <span className="text-xl text-gray-700 font-medium">{selectedInternship.company}</span>
//               </div>

//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 {selectedInternship.location && (
//                   <div className="flex items-center gap-2">
//                     <MapPin size={18} className="text-gray-400" />
//                     <span className="text-gray-700">{selectedInternship.location}</span>
//                   </div>
//                 )}
//                 {selectedInternship.duration && (
//                   <div className="flex items-center gap-2">
//                     <Clock size={18} className="text-gray-400" />
//                     <span className="text-gray-700">{selectedInternship.duration}</span>
//                   </div>
//                 )}
//                 {selectedInternship.stipend && (
//                   <div className="flex items-center gap-2">
//                     <DollarSign size={18} className="text-gray-400" />
//                     <span className="text-gray-700">{selectedInternship.stipend}</span>
//                   </div>
//                 )}
//                 {selectedInternship.deadline && (
//                   <div className="flex items-center gap-2">
//                     <Calendar size={18} className="text-gray-400" />
//                     <span className="text-gray-700">Deadline: {formatDate(selectedInternship.deadline)}</span>
//                   </div>
//                 )}
//               </div>

//               {selectedInternship.description && (
//                 <div className="mb-6">
//                   <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
//                   <p className="text-gray-700 whitespace-pre-line">{selectedInternship.description}</p>
//                 </div>
//               )}

//               {selectedInternship.requirements && (
//                 <div className="mb-6">
//                   <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
//                   <p className="text-gray-700 whitespace-pre-line">{selectedInternship.requirements}</p>
//                 </div>
//               )}

//               {selectedInternship.apply_url && (
//                 <div className="mt-6">
//                   <a
//                     href={selectedInternship.apply_url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
//                   >
//                     <ExternalLink size={20} />
//                     Apply Now
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Internship;