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










import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const ConnectForum = () => {
  const [userRole, setUserRole] = useState("guest");
  const [isVerified, setIsVerified] = useState(false);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  /* 🔐 Identify logged-in user */
  useEffect(() => {
    const init = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) return;
      setUser(session.user);

      const uid = session.user.id;

      const { data: student } = await supabase
        .from("student")
        .select("is_verified, name")
        .eq("id", uid)
        .maybeSingle();

      const { data: alumni } = await supabase
        .from("alumni")
        .select("is_verified, name")
        .eq("id", uid)
        .maybeSingle();

      const { data: faculty } = await supabase
        .from("faculty")
        .select("is_verified, name")
        .eq("id", uid)
        .maybeSingle();

      if (student?.is_verified) {
        setUserRole("student");
        setIsVerified(true);
        setUserName(student.name || session.user.email);
      } else if (alumni?.is_verified) {
        setUserRole("alumni");
        setIsVerified(true);
        setUserName(alumni.name || session.user.email);
      } else if (faculty?.is_verified) {
        setUserRole("faculty");
        setIsVerified(true);
        setUserName(faculty.name || session.user.email);
      }
    };

    init();
  }, []);

  /* 📥 Load messages */
  useEffect(() => {
    const loadMessages = async () => {
      const { data } = await supabase
        .from("discussion_messages")
        .select("*")
        .order("created_at", { ascending: true });

      setMessages(data || []);
    };

    loadMessages();

    /* ⚡ Real-time subscription */
    const channel = supabase
      .channel("discussion-chat")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "discussion_messages" },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ✉️ Send message */
  const sendMessage = async () => {
    if (!text.trim() || !isVerified) return;

    await supabase.from("discussion_messages").insert({
      id: user.id,
      name: userName,
      role: userRole,
      message: text,
    });

    setText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Function to get initials from name
  const getInitials = (name) => {
    if (!name) return "?";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  // Function to get avatar color based on user role or name
  const getAvatarColor = (role, name) => {
    const colors = {
      student: "bg-purple-500",
      alumni: "bg-blue-500",
      faculty: "bg-pink-500",
    };
    
    if (colors[role]) return colors[role];
    
    // Generate color based on name
    const colorOptions = ["bg-indigo-500", "bg-green-500", "bg-yellow-500", "bg-red-500"];
    const index = name ? name.charCodeAt(0) % colorOptions.length : 0;
    return colorOptions[index];
  };

  // Format time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      <Helmet>
        <title>Alumni Connect - Discussion Forum</title>
      </Helmet>

      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Alumni Connect
            </h1>
            <p className="text-gray-600">
              Stay connected, share experiences, and grow together
            </p>
          </div>

          {/* Three Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Mentorship Card */}
            <div
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-indigo-200"
              onClick={() => navigate("/mentorship")}
            >
              <div className="text-center">
                <div className="text-5xl mb-3">🎓</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Mentorship
                </h3>
                <p className="text-gray-600 text-sm">
                  Connect with mentors and guide others
                </p>
              </div>
            </div>

            {/* Success Stories Card */}
            <div
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-indigo-200"
              onClick={() => navigate("/success-stories")}
            >
              <div className="text-center">
                <div className="text-5xl mb-3">⭐</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Success Stories
                </h3>
                <p className="text-gray-600 text-sm">
                  Share and celebrate achievements
                </p>
              </div>
            </div>

            {/* Resource Exchange Card */}
            <div
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-indigo-200"
              onClick={() => navigate("/resource-exchange")}
            >
              <div className="text-center">
                <div className="text-5xl mb-3">🤝</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Resource Exchange
                </h3>
                <p className="text-gray-600 text-sm">
                  Collaborate on projects and share resources
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col">
        {/* General Chat Section */}
        <div className="bg-white rounded-3xl shadow-xl flex flex-col h-full overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-t-3xl">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💬</span>
              <div>
                <h2 className="text-xl font-bold">General Chat</h2>
                <p className="text-indigo-100 text-sm">
                  Connect with fellow alumni in real-time
                </p>
              </div>
            </div>
          </div>

          {/* Verification Warning */}
          {!isVerified && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mx-6 mt-4 rounded">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🔒</span>
                <p className="text-red-700 font-medium">
                  Please verify your account to participate in discussions.
                </p>
              </div>
            </div>
          )}

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center text-gray-400 py-12">
                <p className="text-lg">No messages yet. Start the conversation!</p>
              </div>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className="flex items-start gap-3">
                  {/* Avatar */}
                  <div
                    className={`${getAvatarColor(
                      msg.role,
                      msg.name
                    )} text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold text-sm flex-shrink-0`}
                  >
                    {getInitials(msg.name)}
                  </div>

                  {/* Message Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-semibold text-gray-900">
                        {msg.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatTime(msg.created_at)}
                      </span>
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100">
                      <p className="text-gray-800 break-words">{msg.message}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input Box */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={
                  isVerified
                    ? "Type your message here... (Authentication required for real-time chat)"
                    : "Verification required"
                }
                disabled={!isVerified}
                className="flex-1 border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button
                onClick={sendMessage}
                disabled={!isVerified || !text.trim()}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                Send
              </button>
            </div>
            
            {/* Footer Note */}
            <div className="text-center mt-3">
              <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                <span>⚡</span>
                Connect to Supabase to enable real-time chat and authentication
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectForum;