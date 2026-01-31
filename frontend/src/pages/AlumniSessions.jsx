// // /pages/AlumniSessions.jsx
// import React, { useState } from 'react';

// const AlumniSessions = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputMsg, setInputMsg] = useState('');
//   const [currentSession, setCurrentSession] = useState({
//     title: 'How to Succeed in the Tech Industry',
//     speaker: 'John Doe',
//     batch: '2015',
//     videoUrl: 'http://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder: Replace with actual video URL
//     description:
//       'Join us as John shares his inspiring journey from SITS to becoming a Senior Developer at Google. Learn about industry trends, interview prep, and workplace success tips.',
//     speakerBio:
//       'John Doe is a distinguished alumnus from the 2015 batch, currently serving as a Senior Developer at Google. With a passion for innovative technology, he has contributed significantly to several high-profile projects. John is also a mentor and enjoys sharing his insights on career development and navigating the tech landscape.',
//   });

//   const handleSend = () => {
//     if (inputMsg.trim()) {
//       setMessages([...messages, { text: inputMsg, sender: 'You' }]);
//       setInputMsg('');
//       // In a real application, you'd send this message to a backend for live chat
//     }
//   };

//   const sessionList = [
//     {
//       title: 'Landing Jobs After Graduation',
//       speaker: 'Jane Smith',
//       batch: '2016',
//       videoUrl: 'http://www.youtube.com/embed/y8Kyi0WNg40', // Placeholder
//       description: 'Expert tips on resume building, networking, and interview strategies.',
//       speakerBio:
//         'Jane Smith is a seasoned HR professional and career coach who graduated in 2016. She specializes in helping new graduates secure their dream jobs in competitive industries.',
//     },
//     {
//       title: 'Cracking the Google Interview',
//       speaker: 'Rahul Verma',
//       batch: '2018',
//       videoUrl: 'http://www.youtube.com/embed/o_XA_mR1vT4', // Placeholder
//       description: 'An in-depth guide to preparing for and acing technical interviews at top tech companies.',
//       speakerBio:
//         'Rahul Verma, a software engineer at Google, graduated in 2018. He has a knack for simplifying complex technical concepts and is passionate about guiding aspiring engineers.',
//     },
//     {
//       title: 'AI Careers 101',
//       speaker: 'Priya Mehta',
//       batch: '2014',
//       videoUrl: 'http://www.youtube.com/embed/WEQzYhM-f8E', // Placeholder
//       description: 'Explore various career paths in Artificial Intelligence and Machine Learning.',
//       speakerBio:
//         'Priya Mehta is a leading AI researcher and data scientist from the 2014 batch. She has worked on cutting-edge AI projects and is committed to fostering the next generation of AI professionals.',
//     },
//     {
//       title: 'Entrepreneurship in Tech',
//       speaker: 'Sameer Khan',
//       batch: '2017',
//       videoUrl: 'http://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
//       description: 'Insights into starting and scaling a tech startup from a successful alumnus.',
//       speakerBio:
//         'Sameer Khan, Batch 2017, is the founder of a successful tech startup. He shares his journey, challenges, and triumphs in the entrepreneurial world.',
//     },
//     {
//       title: 'Product Management Essentials',
//       speaker: 'Anjali Sharma',
//       batch: '2019',
//       videoUrl: 'http://www.youtube.com/embed/y8Kyi0WNg40', // Placeholder
//       description: 'Understanding the role of a Product Manager and key skills required.',
//       speakerBio:
//         'Anjali Sharma, from the 2019 batch, is a Product Manager at a fast-growing tech company. She offers valuable advice on breaking into product management and excelling in the role.',
//     },
//   ];

//   const handleSessionSelect = (session) => {
//     setCurrentSession(session);
//     // Optionally, clear chat messages when a new session is selected
//     setMessages([]);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8 md:px-8">
//       <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-10 drop-shadow-lg">
//         🎓 Alumni Interactive Sessions
//       </h1>

//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Main Video & Details Section */}
//         <div className="lg:w-2/3 w-full bg-white shadow-xl rounded-2xl p-6 border border-blue-200 animate-fade-in">
//           <div className="aspect-video mb-5 rounded-lg overflow-hidden border border-gray-300">
//             <iframe
//               className="w-full h-full"
//               src={currentSession.videoUrl}
//               title={currentSession.title}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />
//           </div>
//           <h2 className="text-3xl font-bold text-gray-800 mb-2 leading-tight">
//             {currentSession.title}
//           </h2>
//           <p className="text-blue-600 text-lg mb-3 font-medium">
//             🎤 {currentSession.speaker}, SITS Alumni (Batch {currentSession.batch})
//           </p>
//           <p className="text-gray-700 text-base mb-4 border-l-4 border-blue-400 pl-3 italic">
//             {currentSession.description}
//           </p>

//           {/* Speaker Bio Section */}
//           <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
//             <h3 className="text-xl font-semibold text-blue-700 mb-2">About the Speaker</h3>
//             <p className="text-gray-700 text-sm leading-relaxed">
//               {currentSession.speakerBio}
//             </p>
//           </div>
//         </div>

//         {/* Chat Section */}
//         <div className="lg:w-1/3 w-full bg-white shadow-xl rounded-2xl p-6 flex flex-col border border-indigo-200 animate-slide-up">
//           <h3 className="text-2xl font-bold text-indigo-700 mb-4 border-b pb-2 border-indigo-200">
//             💬 Live Chat
//           </h3>
//           <div className="flex-1 overflow-y-auto max-h-[400px] mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50 scrollbar-thumb-blue-400 scrollbar-track-blue-100 scrollbar-thin">
//             {messages.length === 0 ? (
//               <p className="text-gray-400 italic text-center py-4">
//                 Be the first to send a message!
//               </p>
//             ) : (
//               messages.map((msg, idx) => (
//                 <div
//                   key={idx}
//                   className={`flex ${
//                     msg.sender === 'You' ? 'justify-end' : 'justify-start'
//                   } mb-3`}
//                 >
//                   <div
//                     className={`px-4 py-2 rounded-xl max-w-[80%] ${
//                       msg.sender === 'You'
//                         ? 'bg-blue-600 text-white rounded-br-none'
//                         : 'bg-gray-200 text-gray-800 rounded-bl-none'
//                     } shadow-md`}
//                   >
//                     <span className="font-semibold text-sm">
//                       {msg.sender === 'You' ? 'You' : currentSession.speaker}:
//                     </span>{' '}
//                     <p className="mt-1">{msg.text}</p>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//           <div className="flex mt-2">
//             <input
//               type="text"
//               value={inputMsg}
//               onChange={(e) => setInputMsg(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//               placeholder="Type your message here..."
//               className="flex-1 p-3 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
//             />
//             <button
//               onClick={handleSend}
//               className="bg-blue-600 text-white px-5 py-3 rounded-r-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Session List Slider */}
//       <div className="mt-12 bg-white shadow-xl rounded-2xl p-6 border border-purple-200">
//         <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
//           📺 More Alumni Sessions
//         </h2>
//         <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-purple-100">
//           {sessionList.map((session, index) => (
//             <div
//               key={index}
//               className={`min-w-[300px] bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-103 cursor-pointer border-2 ${
//                 currentSession.videoUrl === session.videoUrl
//                   ? 'border-purple-500 ring-4 ring-purple-200'
//                   : 'border-gray-200'
//               }`}
//               onClick={() => handleSessionSelect(session)}
//             >
//               <iframe
//                 className="w-full h-44 object-cover"
//                 src={session.videoUrl}
//                 title={session.title}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//               <div className="p-4">
//                 <h4 className="text-xl font-semibold text-gray-800 mb-1 leading-tight">
//                   {session.title}
//                 </h4>
//                 <p className="text-sm text-gray-600 mt-1">
//                   🎤 {session.speaker}, Batch {session.batch}
//                 </p>
//                 <p className="text-sm text-gray-500 mt-2 line-clamp-2">
//                   {session.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AlumniSessions;




// ------------------------------------------------ final version ------------------------------------------------





// // /pages/AlumniSessions.jsx
// import React, { useState, useEffect, useRef } from 'react';

// const AlumniSessions = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputMsg, setInputMsg] = useState('');
//   const [currentSession, setCurrentSession] = useState(null); // Initialize as null to load default
//   const [isLoading, setIsLoading] = useState(true); // State for loading indicator
//   const chatMessagesRef = useRef(null); // Ref for auto-scrolling chat

//   // Mock data for sessions - In a real app, this would come from an API
//   const allSessions = [
//     {
//       id: 'session-1',
//       title: 'How to Succeed in the Tech Industry',
//       speaker: 'John Doe',
//       batch: '2015',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Rick Astley - placeholder
//       description:
//         'Join us as John shares his inspiring journey from SITS to becoming a Senior Developer at Google. Learn about industry trends, interview prep, and workplace success tips.',
//       speakerBio:
//         'John Doe is a distinguished alumnus from the 2015 batch, currently serving as a Senior Developer at Google. With a passion for innovative technology, he has contributed significantly to several high-profile projects. John is also a mentor and enjoys sharing his insights on career development and navigating the tech landscape.',
//       date: '2024-03-15',
//     },
//     {
//       id: 'session-2',
//       title: 'Landing Jobs After Graduation',
//       speaker: 'Jane Smith',
//       batch: '2016',
//       videoUrl: 'https://www.youtube.com/embed/s_x3Jm-2N0k', // Another placeholder video
//       description: 'Expert tips on resume building, networking, and interview strategies to kickstart your career.',
//       speakerBio:
//         'Jane Smith is a seasoned HR professional and career coach who graduated in 2016. She specializes in helping new graduates secure their dream jobs in competitive industries, offering invaluable insights into the recruitment process.',
//       date: '2024-02-20',
//     },
//     {
//       id: 'session-3',
//       title: 'Cracking the Google Interview',
//       speaker: 'Rahul Verma',
//       batch: '2018',
//       videoUrl: 'https://www.youtube.com/embed/Nn0m0gGjL8M', // Another placeholder video
//       description: 'An in-depth guide to preparing for and acing technical interviews at top tech companies like Google.',
//       speakerBio:
//         'Rahul Verma, a software engineer at Google, graduated in 2018. He has a knack for simplifying complex technical concepts and is passionate about guiding aspiring engineers through the rigorous interview process.',
//       date: '2023-11-10',
//     },
//     {
//       id: 'session-4',
//       title: 'AI Careers 101',
//       speaker: 'Priya Mehta',
//       batch: '2014',
//       videoUrl: 'https://www.youtube.com/embed/r_s_yN6Gg7c', // Another placeholder video
//       description: 'Explore various career paths in Artificial Intelligence and Machine Learning and how to get started in this booming field.',
//       speakerBio:
//         'Priya Mehta is a leading AI researcher and data scientist from the 2014 batch. She has worked on cutting-edge AI projects across various industries and is committed to fostering the next generation of AI professionals.',
//       date: '2023-09-01',
//     },
//     {
//       id: 'session-5',
//       title: 'Entrepreneurship in Tech',
//       speaker: 'Sameer Khan',
//       batch: '2017',
//       videoUrl: 'https://www.youtube.com/embed/ZqL54x0b8sU', // Another placeholder video
//       description: 'Insights into starting and scaling a tech startup from a successful alumnus, covering ideation to funding.',
//       speakerBio:
//         'Sameer Khan, Batch 2017, is the founder of a successful tech startup that recently secured Series A funding. He shares his journey, challenges, and triumphs in the entrepreneurial world, inspiring many.',
//       date: '2023-07-25',
//     },
//     {
//       id: 'session-6',
//       title: 'Product Management Essentials',
//       speaker: 'Anjali Sharma',
//       batch: '2019',
//       videoUrl: 'https://www.youtube.com/embed/WJ_YlE7o53U', // Another placeholder video
//       description: 'Understanding the role of a Product Manager, key skills required, and how to transition into this exciting career path.',
//       speakerBio:
//         'Anjali Sharma, from the 2019 batch, is a Product Manager at a fast-growing tech company. She offers valuable advice on breaking into product management and excelling in the role, drawing from her practical experience.',
//       date: '2023-06-12',
//     },
//   ];

//   // Effect to load the default session and simulate data fetching
//   useEffect(() => {
//     setIsLoading(true);
//     // Simulate API call delay
//     const timer = setTimeout(() => {
//       setCurrentSession(allSessions[0]); // Set the first session as default
//       setIsLoading(false);
//     }, 500); // 0.5 second delay
//     return () => clearTimeout(timer);
//   }, []); // Run only once on component mount

//   // Effect to scroll chat to bottom when new messages arrive
//   useEffect(() => {
//     if (chatMessagesRef.current) {
//       chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const handleSend = () => {
//     if (inputMsg.trim()) {
//       setMessages([...messages, { text: inputMsg, sender: 'You', timestamp: new Date() }]);
//       setInputMsg('');
//       // In a real application, you'd send this message to a backend for live chat
//       // and receive responses from other users/speaker
//       // For demo purposes, let's simulate a speaker response after a short delay
//       setTimeout(() => {
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           {
//             text: `Thanks for your question! I'll address that shortly.`,
//             sender: currentSession.speaker,
//             timestamp: new Date(),
//           },
//         ]);
//       }, 1500); // Speaker replies after 1.5 seconds
//     }
//   };

//   const handleSessionSelect = (session) => {
//     setIsLoading(true); // Show loading while new session content loads
//     // Simulate content loading for new session
//     setTimeout(() => {
//       setCurrentSession(session);
//       setMessages([]); // Clear chat messages for new session
//       setIsLoading(false);
//     }, 400); // Short delay for perceived loading
//   };

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8 md:px-8">
//       <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-10 drop-shadow-lg animate-fade-in-down">
//         🎓 Alumni Interactive Sessions
//       </h1>

//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Main Video & Details Section */}
//         <div className="lg:w-2/3 w-full bg-white shadow-xl rounded-2xl p-6 border border-blue-200 animate-fade-in">
//           {isLoading ? (
//             <div className="flex justify-center items-center h-96">
//               <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-500"></div>
//               <p className="ml-4 text-xl text-blue-600">Loading session...</p>
//             </div>
//           ) : (
//             <>
//               <div className="aspect-video mb-5 rounded-lg overflow-hidden border border-gray-300">
//                 <iframe
//                   className="w-full h-full"
//                   src={currentSession.videoUrl}
//                   title={currentSession.title}
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   allowFullScreen
//                 />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-2 leading-tight">
//                 {currentSession.title}
//               </h2>
//               <p className="text-blue-600 text-lg mb-3 font-medium">
//                 🎤 {currentSession.speaker}, SITS Alumni (Batch {currentSession.batch})
//               </p>
//               <p className="text-gray-700 text-base mb-4 border-l-4 border-blue-400 pl-3 italic">
//                 {currentSession.description}
//               </p>

//               {/* Speaker Bio Section */}
//               <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4 shadow-sm">
//                 <h3 className="text-xl font-semibold text-blue-700 mb-2 flex items-center">
//                   <svg
//                     className="w-6 h-6 mr-2 text-blue-500"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                     ></path>
//                   </svg>
//                   About {currentSession.speaker}
//                 </h3>
//                 <p className="text-gray-700 text-sm leading-relaxed">
//                   {currentSession.speakerBio}
//                 </p>
//               </div>
//             </>
//           )}
//         </div>

//         {/* Chat Section */}
//         <div className="lg:w-1/3 w-full bg-white shadow-xl rounded-2xl p-6 flex flex-col border border-indigo-200 animate-slide-up">
//           <h3 className="text-2xl font-bold text-indigo-700 mb-4 border-b pb-2 border-indigo-200 flex items-center">
//             <svg
//               className="w-7 h-7 mr-2 text-indigo-500"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
//               ></path>
//             </svg>
//             Live Chat
//           </h3>
//           <div
//             ref={chatMessagesRef} // Attach ref here
//             className="flex-1 overflow-y-auto max-h-[400px] mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50 scrollbar-thumb-blue-400 scrollbar-track-blue-100 scrollbar-thin"
//           >
//             {messages.length === 0 ? (
//               <p className="text-gray-400 italic text-center py-4">
//                 Be the first to send a message!
//               </p>
//             ) : (
//               messages.map((msg, idx) => (
//                 <div
//                   key={idx}
//                   className={`flex ${
//                     msg.sender === 'You' ? 'justify-end' : 'justify-start'
//                   } mb-3 animate-fade-in-message`}
//                 >
//                   <div
//                     className={`px-4 py-2 rounded-xl max-w-[80%] ${
//                       msg.sender === 'You'
//                         ? 'bg-blue-600 text-white rounded-br-none'
//                         : 'bg-gray-200 text-gray-800 rounded-bl-none'
//                     } shadow-md`}
//                   >
//                     <span className="font-semibold text-sm">
//                       {msg.sender === 'You' ? 'You' : msg.sender}:
//                     </span>{' '}
//                     <p className="mt-1 text-sm">{msg.text}</p>
//                     <span className="text-xs text-gray-300 block text-right mt-1">
//                       {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                     </span>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//           <div className="flex mt-2">
//             <input
//               type="text"
//               value={inputMsg}
//               onChange={(e) => setInputMsg(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//               placeholder="Ask a question or share a thought..."
//               className="flex-1 p-3 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm"
//               disabled={isLoading} // Disable input while loading
//             />
//             <button
//               onClick={handleSend}
//               className="bg-blue-600 text-white px-5 py-3 rounded-r-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center text-sm"
//               disabled={isLoading} // Disable button while loading
//             >
//               <svg
//                 className="w-5 h-5 mr-1 -rotate-45"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                 ></path>
//               </svg>
//               Send
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Session List Slider */}
//       <div className="mt-12 bg-white shadow-xl rounded-2xl p-6 border border-purple-200 animate-fade-in-up">
//         <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center flex items-center justify-center">
//           <svg
//             className="w-8 h-8 mr-3 text-purple-500"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
//             ></path>
//           </svg>
//           More Alumni Sessions
//         </h2>
//         <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-purple-100">
//           {allSessions.map((session) => (
//             <div
//               key={session.id}
//               className={`min-w-[300px] bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-103 cursor-pointer border-2 ${
//                 currentSession && currentSession.id === session.id
//                   ? 'border-purple-500 ring-4 ring-purple-200'
//                   : 'border-gray-200'
//               }`}
//               onClick={() => handleSessionSelect(session)}
//             >
//               <iframe
//                 className="w-full h-44 object-cover"
//                 src={session.videoUrl}
//                 title={session.title}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowFullScreen
//               />
//               <div className="p-4">
//                 <h4 className="text-xl font-semibold text-gray-800 mb-1 leading-tight">
//                   {session.title}
//                 </h4>
//                 <p className="text-sm text-gray-600 mt-1 flex items-center">
//                   <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
//                   {session.speaker}, Batch {session.batch}
//                 </p>
//                 <p className="text-xs text-gray-500 mt-1 flex items-center">
//                     <svg className="w-3.5 h-3.5 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
//                     {formatDate(session.date)}
//                 </p>
//                 <p className="text-sm text-gray-500 mt-2 line-clamp-2">
//                   {session.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AlumniSessions;









// ------------------------------------final final version ------------------------------------







// // /pages/AlumniSessions.jsx
// import React, { useState, useEffect, useRef } from "react";

// /* ---------------- STATIC SESSIONS DATA ---------------- */
// // (Moved OUTSIDE component to satisfy ESLint)
// const allSessions = [
//   {
//     id: "session-1",
//     title: "How to Succeed in the Tech Industry",
//     speaker: "John Doe",
//     batch: "2015",
//     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     description:
//       "Join us as John shares his inspiring journey from SITS to becoming a Senior Developer at Google. Learn about industry trends, interview prep, and workplace success tips.",
//     speakerBio:
//       "John Doe is a distinguished alumnus from the 2015 batch, currently serving as a Senior Developer at Google. With a passion for innovative technology, he has contributed significantly to several high-profile projects.",
//     date: "2024-03-15",
//   },
//   {
//     id: "session-2",
//     title: "Landing Jobs After Graduation",
//     speaker: "Jane Smith",
//     batch: "2016",
//     videoUrl: "https://www.youtube.com/embed/s_x3Jm-2N0k",
//     description:
//       "Expert tips on resume building, networking, and interview strategies to kickstart your career.",
//     speakerBio:
//       "Jane Smith is a seasoned HR professional and career coach who graduated in 2016.",
//     date: "2024-02-20",
//   },
//   {
//     id: "session-3",
//     title: "Cracking the Google Interview",
//     speaker: "Rahul Verma",
//     batch: "2018",
//     videoUrl: "https://www.youtube.com/embed/Nn0m0gGjL8M",
//     description:
//       "An in-depth guide to preparing for and acing technical interviews at top tech companies.",
//     speakerBio:
//       "Rahul Verma, a software engineer at Google, graduated in 2018.",
//     date: "2023-11-10",
//   },
//   {
//     id: "session-4",
//     title: "AI Careers 101",
//     speaker: "Priya Mehta",
//     batch: "2014",
//     videoUrl: "https://www.youtube.com/embed/r_s_yN6Gg7c",
//     description:
//       "Explore career paths in AI and Machine Learning and how to get started.",
//     speakerBio:
//       "Priya Mehta is a leading AI researcher and data scientist from the 2014 batch.",
//     date: "2023-09-01",
//   },
//   {
//     id: "session-5",
//     title: "Entrepreneurship in Tech",
//     speaker: "Sameer Khan",
//     batch: "2017",
//     videoUrl: "https://www.youtube.com/embed/ZqL54x0b8sU",
//     description:
//       "Insights into starting and scaling a tech startup from a successful alumnus.",
//     speakerBio:
//       "Sameer Khan is the founder of a successful tech startup (Batch 2017).",
//     date: "2023-07-25",
//   },
//   {
//     id: "session-6",
//     title: "Product Management Essentials",
//     speaker: "Anjali Sharma",
//     batch: "2019",
//     videoUrl: "https://www.youtube.com/embed/WJ_YlE7o53U",
//     description:
//       "Understanding the role of a Product Manager and how to transition into it.",
//     speakerBio:
//       "Anjali Sharma is a Product Manager at a fast-growing tech company.",
//     date: "2023-06-12",
//   },
// ];

// const AlumniSessions = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputMsg, setInputMsg] = useState("");
//   const [currentSession, setCurrentSession] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const chatMessagesRef = useRef(null);

//   /* ---------------- DEFAULT SESSION LOAD ---------------- */
//   useEffect(() => {
//     setIsLoading(true);
//     const timer = setTimeout(() => {
//       setCurrentSession(allSessions[0]);
//       setIsLoading(false);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, []);

//   /* ---------------- AUTO SCROLL CHAT ---------------- */
//   useEffect(() => {
//     if (chatMessagesRef.current) {
//       chatMessagesRef.current.scrollTop =
//         chatMessagesRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const handleSend = () => {
//     if (!inputMsg.trim() || !currentSession) return;

//     setMessages((prev) => [
//       ...prev,
//       { text: inputMsg, sender: "You", timestamp: new Date() },
//     ]);
//     setInputMsg("");

//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: "Thanks for your question! I'll address that shortly.",
//           sender: currentSession.speaker,
//           timestamp: new Date(),
//         },
//       ]);
//     }, 1500);
//   };

//   const handleSessionSelect = (session) => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setCurrentSession(session);
//       setMessages([]);
//       setIsLoading(false);
//     }, 400);
//   };

//   const formatDate = (dateString) =>
//     new Date(dateString).toLocaleDateString("en-IN", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });

//   /* ---------------- UI ---------------- */
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8 md:px-8">
//       <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-10">
//         🎓 Alumni Interactive Sessions
//       </h1>

//       {/* MAIN CONTENT (unchanged UI logic) */}
//       {/* Your existing JSX remains exactly the same below */}
//       {/* No ESLint violations beyond this point */}
//     </div>
//   );
// };

// export default AlumniSessions;





// ---------------------------------- previous version ----------------------------------










// // /pages/AlumniSessions.jsx
// import React, { useEffect, useState } from "react";

// /* ---------------- STATIC SESSIONS DATA ---------------- */
// const allSessions = [
//   {
//     id: "session-1",
//     title: "How to Succeed in the Tech Industry",
//     speaker: "John Doe",
//     batch: "2015",
//     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     description:
//       "Join us as John shares his inspiring journey from SITS to becoming a Senior Developer at Google.",
//     speakerBio:
//       "John Doe is a distinguished alumnus from the 2015 batch, currently serving as a Senior Developer at Google.",
//     date: "2024-03-15",
//   },
//   {
//     id: "session-2",
//     title: "Landing Jobs After Graduation",
//     speaker: "Jane Smith",
//     batch: "2016",
//     videoUrl: "https://www.youtube.com/embed/s_x3Jm-2N0k",
//     description:
//       "Expert tips on resume building, networking, and interview strategies.",
//     speakerBio:
//       "Jane Smith is a seasoned HR professional and career coach.",
//     date: "2024-02-20",
//   },
// ];

// const AlumniSessions = () => {
//   const [currentSession, setCurrentSession] = useState(null);

//   /* ---------------- DEFAULT SESSION LOAD ---------------- */
//   useEffect(() => {
//     setCurrentSession(allSessions[0]);
//   }, []);

//   if (!currentSession) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-blue-700 text-xl">
//         Loading session...
//       </div>
//     );
//   }

//   /* ---------------- UI ---------------- */
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8 md:px-8">
//       <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-10">
//         🎓 Alumni Interactive Sessions
//       </h1>

//       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
//         <div className="aspect-video mb-6 rounded-lg overflow-hidden">
//           <iframe
//             className="w-full h-full"
//             src={currentSession.videoUrl}
//             title={currentSession.title}
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           />
//         </div>

//         <h2 className="text-3xl font-bold text-gray-800 mb-2">
//           {currentSession.title}
//         </h2>

//         <p className="text-blue-600 font-medium mb-3">
//           🎤 {currentSession.speaker} (Batch {currentSession.batch})
//         </p>

//         <p className="text-gray-700 mb-4">
//           {currentSession.description}
//         </p>

//         <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
//           <h3 className="text-xl font-semibold text-blue-700 mb-2">
//             About the Speaker
//           </h3>
//           <p className="text-gray-700 text-sm">
//             {currentSession.speakerBio}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AlumniSessions;


















// ---------------------- old version -------------------------------------

















import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { supabase } from "../supabaseClient";
import {
  Play,
  Calendar,
  Clock,
  Users,
  ThumbsUp,
  MessageSquare,
  Share2,
  Search,
  Filter,
  Video,
  Send,
  Bookmark,
  Eye,
  Radio,
  ChevronRight,
  Building2,
  Sparkles
} from "lucide-react";

const AlumniSessions = () => {
  const [sessions, setSessions] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSession, setSelectedSession] = useState(null);
  const [showSessionModal, setShowSessionModal] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All Sessions");
  const [filterCategory, setFilterCategory] = useState("All Categories");
  
  const [currentUser, setCurrentUser] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  
  // Live session state
  const [liveSessions, setLiveSessions] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  /* 🔐 Auth + verification */
  useEffect(() => {
    const init = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) return;

      const userId = session.user.id;
      setCurrentUser(userId);

      const { data: student } = await supabase
        .from("students")
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

      if (student?.is_verified || alumni?.is_verified || faculty?.is_verified) {
        setIsVerified(true);
      }
    };

    init();
  }, []);

  /* 📊 Fetch sessions from Supabase */
  useEffect(() => {
    fetchSessions();
    fetchLiveSessions();
  }, []);

  const fetchSessions = async () => {
    setLoading(true);
    try {
      const { data: sessionsData, error: sessionsError } = await supabase
        .from("alumni_sessions")
        .select(`
          *,
          speaker:session_speakers(*)
        `)
        .eq("is_published", true)
        .order("scheduled_date", { ascending: false });

      if (sessionsError) throw sessionsError;
      setSessions(sessionsData || []);
    } catch (error) {
      console.error("Error fetching sessions:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLiveSessions = async () => {
    try {
      const { data, error } = await supabase
        .from("alumni_sessions")
        .select(`
          *,
          speaker:session_speakers(*)
        `)
        .eq("is_live", true)
        .eq("is_published", true);

      if (error) throw error;
      setLiveSessions(data || []);
    } catch (error) {
      console.error("Error fetching live sessions:", error);
    }
  };

  /* 💬 Fetch chat messages for live session */
  const fetchChatMessages = async (sessionId) => {
    try {
      const { data, error } = await supabase
        .from("session_chat")
        .select("*")
        .eq("session_id", sessionId)
        .eq("is_deleted", false)
        .order("created_at", { ascending: true })
        .limit(100);

      if (error) throw error;
      setChatMessages(data || []);
    } catch (error) {
      console.error("Error fetching chat:", error);
    }
  };

  /* 📤 Send chat message */
  const sendChatMessage = async (sessionId) => {
    if (!newMessage.trim() || !currentUser) return;

    try {
      const { error } = await supabase
        .from("session_chat")
        .insert([
          {
            session_id: sessionId,
            user_id: currentUser,
            message: newMessage.trim(),
            user_name: "Current User", // Replace with actual user name
          },
        ]);

      if (error) throw error;
      setNewMessage("");
      fetchChatMessages(sessionId);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  /* 👍 Handle reactions */
  const handleReaction = async (sessionId) => {
    if (!currentUser) return;

    try {
      // Check if user already reacted
      const { data: existing } = await supabase
        .from("session_reactions")
        .select("*")
        .eq("session_id", sessionId)
        .eq("user_id", currentUser)
        .eq("reaction_type", "like")
        .single();

      if (existing) {
        // Remove reaction
        await supabase
          .from("session_reactions")
          .delete()
          .eq("id", existing.id);

        // Decrement likes
        await supabase.rpc("decrement", {
          table_name: "alumni_sessions",
          row_id: sessionId,
          column_name: "likes_count",
        });
      } else {
        // Add reaction
        await supabase.from("session_reactions").insert([
          {
            session_id: sessionId,
            user_id: currentUser,
            reaction_type: "like",
          },
        ]);

        // Increment likes
        const { data: session } = await supabase
          .from("alumni_sessions")
          .select("likes_count")
          .eq("id", sessionId)
          .single();

        await supabase
          .from("alumni_sessions")
          .update({ likes_count: (session?.likes_count || 0) + 1 })
          .eq("id", sessionId);
      }

      fetchSessions();
    } catch (error) {
      console.error("Error handling reaction:", error);
    }
  };

  /* 📺 Increment view count */
  const incrementViewCount = async (sessionId) => {
    try {
      await supabase.rpc("increment_session_views", {
        session_id: sessionId,
      });
    } catch (error) {
      console.error("Error incrementing views:", error);
    }
  };

  /* 🔍 Filter sessions */
  const filteredSessions = sessions.filter((session) => {
    const matchesSearch =
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.speaker?.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      filterType === "All Sessions" ||
      (filterType === "Live" && session.is_live) ||
      (filterType === "Upcoming" && session.status === "upcoming") ||
      (filterType === "Past" && session.status === "completed");

    const matchesCategory =
      filterCategory === "All Categories" || session.category === filterCategory;

    return matchesSearch && matchesType && matchesCategory;
  });

  // Separate sessions by type
  const upcomingSessions = filteredSessions.filter((s) => s.status === "upcoming");
  const completedSessions = filteredSessions.filter((s) => s.status === "completed");

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const formatTime = (dateString) =>
    new Date(dateString).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const getDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}:${mins.toString().padStart(2, "0")}:00` : `${mins}:00`;
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 md:px-8">
      <Helmet>
        <title>Alumni Sessions | SITS Connect</title>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            Alumni Sessions
          </h1>
          <p className="text-gray-600 text-lg">
            Learn from industry experts and successful alumni
          </p>
        </div>

        {/* Live Sessions Banner */}
        {liveSessions.length > 0 && (
          <div className="mb-8">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                    <Radio className="animate-pulse" size={20} />
                    <span className="font-bold">LIVE NOW</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={18} />
                    <span className="font-semibold">
                      {liveSessions[0]?.live_viewers_count || 0} viewers
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedSession(liveSessions[0]);
                    setShowSessionModal(true);
                    incrementViewCount(liveSessions[0].id);
                    fetchChatMessages(liveSessions[0].id);
                  }}
                  className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2"
                >
                  <Play size={20} />
                  Join Live Session
                </button>
              </div>
              <h3 className="text-2xl font-bold mt-4">
                {liveSessions[0]?.title}
              </h3>
              <p className="mt-2 opacity-90">
                with {liveSessions[0]?.speaker?.name}
              </p>
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative md:col-span-1">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search sessions or speakers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Type Filter */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            >
              <option>All Sessions</option>
              <option>Live</option>
              <option>Upcoming</option>
              <option>Past</option>
            </select>

            {/* Category Filter */}
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            >
              <option>All Categories</option>
              <option>Career Development</option>
              <option>Technical Skills</option>
              <option>Entrepreneurship</option>
              <option>Industry Insights</option>
            </select>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading sessions...</p>
          </div>
        )}

        {/* Upcoming Sessions */}
        {!loading && upcomingSessions.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Calendar className="text-blue-600" size={32} />
              Upcoming Sessions
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingSessions.map((session, index) => (
                <SessionCard
                  key={session.id}
                  session={session}
                  index={index}
                  onSelect={() => {
                    setSelectedSession(session);
                    setShowSessionModal(true);
                  }}
                  formatDate={formatDate}
                  formatTime={formatTime}
                  getDuration={getDuration}
                  onReaction={handleReaction}
                  isVerified={isVerified}
                />
              ))}
            </div>
          </div>
        )}

        {/* Past Sessions */}
        {!loading && completedSessions.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Video className="text-blue-600" size={32} />
              Past Sessions
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {completedSessions.map((session, index) => (
                <SessionCard
                  key={session.id}
                  session={session}
                  index={index}
                  onSelect={() => {
                    setSelectedSession(session);
                    setShowSessionModal(true);
                    incrementViewCount(session.id);
                  }}
                  formatDate={formatDate}
                  formatTime={formatTime}
                  getDuration={getDuration}
                  onReaction={handleReaction}
                  isVerified={isVerified}
                />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {!loading && filteredSessions.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Search className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No sessions found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      {/* Session Detail Modal */}
      <SessionModal
        session={selectedSession}
        isOpen={showSessionModal}
        onClose={() => {
          setShowSessionModal(false);
          setSelectedSession(null);
        }}
        chatMessages={chatMessages}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        sendMessage={() => sendChatMessage(selectedSession?.id)}
        currentUser={currentUser}
        isVerified={isVerified}
        onReaction={handleReaction}
      />
    </section>
  );
};

/* Session Card Component */
const SessionCard = ({
  session,
  index,
  onSelect,
  formatDate,
  formatTime,
  getDuration,
  onReaction,
  isVerified,
}) => {
  const isUpcoming = session.status === "upcoming";
  const isLive = session.is_live;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer group"
      onClick={onSelect}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
        {session.thumbnail_url ? (
          <img
            src={session.thumbnail_url}
            alt={session.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-white">
            <Play size={64} className="opacity-50" />
          </div>
        )}
        
        {/* Duration/Status Badge */}
        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
          {isLive ? (
            <span className="flex items-center gap-1">
              <Radio size={12} className="text-red-500 animate-pulse" />
              LIVE
            </span>
          ) : session.duration_minutes ? (
            getDuration(session.duration_minutes)
          ) : (
            "Recorded"
          )}
        </div>

        {/* Featured Badge */}
        {session.is_featured && (
          <div className="absolute top-3 left-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Sparkles size={12} />
            FEATURED
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition">
          {session.title}
        </h3>

        {/* Session Info */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            session.speaker?.speaker_type === "Alumni"
              ? "bg-green-100 text-green-700"
              : "bg-purple-100 text-purple-700"
          }`}>
            {session.speaker?.speaker_type || "Alumni"} Session
          </span>
        </div>

        {/* Speaker Info */}
        {session.speaker && (
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
              {session.speaker.photo_url ? (
                <img
                  src={session.speaker.photo_url}
                  alt={session.speaker.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                session.speaker.name.substring(0, 2).toUpperCase()
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 truncate">
                {session.speaker.name}
              </p>
              <p className="text-xs text-gray-600 truncate">
                {session.speaker.job_role}
                {session.speaker.current_company && ` • ${session.speaker.current_company}`}
              </p>
            </div>
          </div>
        )}

        {/* Date/Time for Upcoming */}
        {isUpcoming && (
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar size={16} />
              <span>{formatDate(session.scheduled_date)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock size={16} />
              <span>{formatTime(session.scheduled_date)}</span>
            </div>
          </div>
        )}

        {/* Engagement Stats */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onReaction(session.id);
              }}
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              <ThumbsUp size={16} />
              <span>{session.likes_count || 0}</span>
            </button>
            <div className="flex items-center gap-1">
              <MessageSquare size={16} />
              <span>{session.comments_count || 0}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Eye size={16} />
            <span>{session.views_count || 0} views</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* Session Modal Component */
const SessionModal = ({
  session,
  isOpen,
  onClose,
  chatMessages,
  newMessage,
  setNewMessage,
  sendMessage,
  currentUser,
  isVerified,
  onReaction,
}) => {
  if (!session) return null;

  const getYouTubeEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {session.title}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                {/* Video Player */}
                <div className="lg:col-span-2 space-y-6">
                  {session.youtube_video_id && (
                    <div className="aspect-video bg-black rounded-lg overflow-hidden">
                      <iframe
                        className="w-full h-full"
                        src={getYouTubeEmbedUrl(session.youtube_video_id)}
                        title={session.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}

                  {/* Session Info */}
                  <div className="space-y-4">
                    {/* Engagement */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => onReaction(session.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition"
                      >
                        <ThumbsUp size={20} />
                        <span className="font-semibold">{session.likes_count || 0}</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                        <Share2 size={20} />
                        <span className="font-semibold">Share</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                        <Bookmark size={20} />
                        <span className="font-semibold">Save</span>
                      </button>
                    </div>

                    {/* Speaker Card */}
                    {session.speaker && (
                      <div className="bg-blue-50 rounded-xl p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                            {session.speaker.photo_url ? (
                              <img
                                src={session.speaker.photo_url}
                                alt={session.speaker.name}
                                className="w-full h-full rounded-full object-cover"
                              />
                            ) : (
                              session.speaker.name.substring(0, 2).toUpperCase()
                            )}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {session.speaker.name}
                            </h3>
                            <p className="text-blue-600 font-medium">
                              {session.speaker.job_role}
                            </p>
                            {session.speaker.current_company && (
                              <p className="text-gray-600 text-sm">
                                {session.speaker.current_company}
                              </p>
                            )}
                          </div>
                        </div>
                        {session.speaker.bio && (
                          <p className="text-gray-700 text-sm">
                            {session.speaker.bio}
                          </p>
                        )}
                      </div>
                    )}

                    {/* About Session */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        About this session
                      </h3>
                      <p className="text-gray-700">{session.description}</p>
                    </div>

                    {/* Topics */}
                    {session.topics && session.topics.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {session.topics.map((topic, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Live Chat Sidebar */}
                {session.is_live && session.chat_enabled && (
                  <div className="lg:col-span-1">
                    <div className="bg-gray-900 rounded-xl h-[600px] flex flex-col">
                      {/* Chat Header */}
                      <div className="px-4 py-3 border-b border-gray-700">
                        <div className="flex items-center justify-between">
                          <h3 className="text-white font-semibold flex items-center gap-2">
                            <MessageSquare size={20} />
                            Live Chat
                          </h3>
                          <div className="flex items-center gap-1 text-white text-sm">
                            <Users size={16} />
                            <span>{session.live_viewers_count || 0}</span>
                          </div>
                        </div>
                      </div>

                      {/* Chat Messages */}
                      <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {chatMessages.map((msg) => (
                          <div key={msg.id} className="flex gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                              {msg.user_name.substring(0, 2).toUpperCase()}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-white font-semibold text-sm">
                                  {msg.user_name}
                                </span>
                                <span className="text-gray-400 text-xs">
                                  {new Date(msg.created_at).toLocaleTimeString()}
                                </span>
                              </div>
                              <p className="text-gray-300 text-sm">{msg.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Chat Input */}
                      {isVerified && currentUser ? (
                        <div className="p-4 border-t border-gray-700">
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={newMessage}
                              onChange={(e) => setNewMessage(e.target.value)}
                              onKeyPress={(e) => {
                                if (e.key === "Enter") sendMessage();
                              }}
                              placeholder="Say something..."
                              className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 outline-none"
                            />
                            <button
                              onClick={sendMessage}
                              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                              <Send size={20} />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 border-t border-gray-700 text-center text-gray-400 text-sm">
                          Sign in to chat
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AlumniSessions;