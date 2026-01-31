// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import { supabase } from "../supabaseClient";
// import { useNavigate } from "react-router-dom";

// const Mentorship = () => {
// //   const [userRole, setUserRole] = useState("guest");
//   const [ , setUserRole] = useState("guest");
//   const [isVerified, setIsVerified] = useState(false);
//   const [mentors, setMentors] = useState([]);
//   const [user, setUser] = useState(null);
//   const [showRequestForm, setShowRequestForm] = useState(false);
//   const [selectedMentor, setSelectedMentor] = useState(null);
//   const [requestMessage, setRequestMessage] = useState("");
//   const navigate = useNavigate();

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
//     loadMentors();
//   }, []);

//   const loadMentors = async () => {
//     const { data } = await supabase
//       .from("mentorship")
//       .select("*")
//       .eq("is_available", true)
//       .order("created_at", { ascending: false });

//     setMentors(data || []);
//   };

//   const handleRequestMentorship = (mentor) => {
//     setSelectedMentor(mentor);
//     setShowRequestForm(true);
//   };

//   const submitRequest = async () => {
//     if (!requestMessage.trim() || !isVerified) return;

//     await supabase.from("mentorship_requests").insert({
//       mentor_id: selectedMentor.user_id,
//       mentee_id: user.id,
//       mentee_name: user.email,
//       message: requestMessage,
//       status: "pending",
//     });

//     alert("Mentorship request sent successfully!");
//     setShowRequestForm(false);
//     setRequestMessage("");
//     setSelectedMentor(null);
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//       <Helmet>
//         <title>Mentorship - Alumni Connect</title>
//       </Helmet>

//       {/* Header */}
//       <div className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <button
//             onClick={() => navigate("/connect-forum")}
//             className="text-indigo-600 hover:text-indigo-800 mb-4 flex items-center gap-2"
//           >
//             ← Back to Forum
//           </button>
//           <div className="text-center">
//             <div className="text-6xl mb-3">🎓</div>
//             <h1 className="text-4xl font-bold text-gray-900 mb-2">
//               Mentorship Program
//             </h1>
//             <p className="text-gray-600">
//               Connect with mentors and guide others on their journey
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {!isVerified && (
//           <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
//             <p className="text-yellow-700 font-medium">
//               🔒 Please verify your account to access mentorship features.
//             </p>
//           </div>
//         )}

//         {/* Available Mentors */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {mentors.length === 0 ? (
//             <div className="col-span-full text-center py-12">
//               <p className="text-gray-500 text-lg">
//                 No mentors available at the moment. Check back soon!
//               </p>
//             </div>
//           ) : (
//             mentors.map((mentor) => (
//               <div
//                 key={mentor.id}
//                 className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
//               >
//                 <div className="text-center mb-4">
//                   <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
//                     {mentor.name
//                       ? mentor.name.substring(0, 2).toUpperCase()
//                       : "?"}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900">
//                     {mentor.name}
//                   </h3>
//                   <p className="text-indigo-600 font-medium">
//                     {mentor.expertise}
//                   </p>
//                 </div>
//                 <div className="mb-4">
//                   <p className="text-gray-600 text-sm mb-2">
//                     {mentor.description}
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     Experience: {mentor.experience} years
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleRequestMentorship(mentor)}
//                   disabled={!isVerified}
//                   className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   Request Mentorship
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Request Form Modal */}
//       {showRequestForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               Request Mentorship
//             </h3>
//             <p className="text-gray-600 mb-4">
//               Sending request to{" "}
//               <span className="font-semibold">{selectedMentor?.name}</span>
//             </p>
//             <textarea
//               value={requestMessage}
//               onChange={(e) => setRequestMessage(e.target.value)}
//               placeholder="Introduce yourself and explain what you'd like help with..."
//               className="w-full border border-gray-300 rounded-lg p-3 mb-4 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//             <div className="flex gap-3">
//               <button
//                 onClick={() => {
//                   setShowRequestForm(false);
//                   setSelectedMentor(null);
//                   setRequestMessage("");
//                 }}
//                 className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={submitRequest}
//                 className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all"
//               >
//                 Send Request
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Mentorship;














// ------------------ Final Code -----------------------------















import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const Mentorship = () => {
  const [userRole, setUserRole] = useState("guest");
  const [isVerified, setIsVerified] = useState(false);
  const [mentors, setMentors] = useState([]);
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");

  // Search & Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [expertiseFilter, setExpertiseFilter] = useState("All Expertise Areas");
  const [availabilityFilter, setAvailabilityFilter] = useState("All Availability");

  // Modal states
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [showBecomeModal, setShowBecomeModal] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [requestMessage, setRequestMessage] = useState("");

  // Become a Mentor form
  const [becomeForm, setBecomeForm] = useState({
    job_title: "",
    company: "",
    experience: "",
    expertise: "",
    bio: "",
    tags: "",
    batch_year: "",
    availability: "Available",
  });

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
        .from("students")
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
    loadMentors();
  }, []);

  /* 📥 Load mentors from alumni + faculty + mentorship (admin) tables */
  const loadMentors = async () => {
    try {
      // Fetch verified alumni
      const { data: alumniData } = await supabase
        .from("alumni")
        .select("*")
        .eq("is_verified", true);

      // Fetch verified faculty
      const { data: facultyData } = await supabase
        .from("faculty")
        .select("*")
        .eq("is_verified", true);

      // Fetch from mentorship table (admin or self-registered mentors)
      const { data: mentorshipData } = await supabase
        .from("mentorship")
        .select("*");

      // Normalize alumni into mentor format
      const alumniMentors = (alumniData || []).map((a) => ({
        id: "alumni_" + a.id,
        source: "alumni",
        name: a.name || "Unknown",
        batch_year: a.batch_year || a.graduation_year || null,
        job_title: a.job_title || a.designation || null,
        company: a.company || a.current_company || null,
        experience: a.experience || a.years_of_experience || null,
        expertise: a.expertise || a.area_of_expertise || null,
        bio: a.bio || a.about || a.description || null,
        tags: a.tags || a.skills || null,
        availability: a.availability || "Available",
        avatar_color: getAvatarColor("alumni", a.name),
      }));

      // Normalize faculty into mentor format
      const facultyMentors = (facultyData || []).map((f) => ({
        id: "faculty_" + f.id,
        source: "faculty",
        name: f.name || "Unknown",
        batch_year: f.joining_year || f.batch_year || null,
        job_title: f.designation || f.job_title || f.position || null,
        company: f.department || f.company || "Sinhgad Institute",
        experience: f.experience || f.years_of_experience || null,
        expertise: f.expertise || f.area_of_expertise || f.specialization || null,
        bio: f.bio || f.about || f.description || null,
        tags: f.tags || f.skills || null,
        availability: f.availability || "Available",
        avatar_color: getAvatarColor("faculty", f.name),
      }));

      // Mentorship table entries (admin / self-registered)
      const mentorshipMentors = (mentorshipData || []).map((m) => ({
        id: "mentor_" + m.id,
        source: "admin",
        name: m.name || "Unknown",
        batch_year: m.batch_year || null,
        job_title: m.job_title || m.expertise || null,
        company: m.company || null,
        experience: m.experience || null,
        expertise: m.expertise || null,
        bio: m.bio || m.description || null,
        tags: m.tags || null,
        availability: m.availability || (m.is_available ? "Available" : "Busy"),
        avatar_color: getAvatarColor("admin", m.name),
      }));

      const allMentors = [...alumniMentors, ...facultyMentors, ...mentorshipMentors];
      setMentors(allMentors);
      setFilteredMentors(allMentors);
    } catch (err) {
      console.error("Error loading mentors:", err);
    }
  };

  /* 🎨 Avatar color based on role */
  const getAvatarColor = (role, name) => {
    const palettes = {
      alumni: ["#7C3AED", "#6D28D9", "#8B5CF6", "#A78BFA"],
      faculty: ["#EC4899", "#DB2777", "#F472B6", "#A855F7"],
      admin: ["#F59E0B", "#D97706", "#FBBF24", "#EAB308"],
    };
    const palette = palettes[role] || palettes.alumni;
    const code = name ? name.charCodeAt(0) : 0;
    return palette[code % palette.length];
  };

  /* 🔍 Filter mentors on search / filter change */
  useEffect(() => {
    let result = [...mentors];

    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase();
      result = result.filter(
        (m) =>
          (m.name && m.name.toLowerCase().includes(lower)) ||
          (m.expertise && m.expertise.toLowerCase().includes(lower)) ||
          (m.company && m.company.toLowerCase().includes(lower)) ||
          (m.job_title && m.job_title.toLowerCase().includes(lower))
      );
    }

    if (expertiseFilter !== "All Expertise Areas") {
      result = result.filter(
        (m) => m.expertise && m.expertise.toLowerCase().includes(expertiseFilter.toLowerCase())
      );
    }

    if (availabilityFilter !== "All Availability") {
      result = result.filter(
        (m) => m.availability && m.availability.toLowerCase() === availabilityFilter.toLowerCase()
      );
    }

    setFilteredMentors(result);
  }, [searchTerm, expertiseFilter, availabilityFilter, mentors]);

  /* Unique expertise areas for dropdown */
  const expertiseOptions = [...new Set(mentors.map((m) => m.expertise).filter(Boolean))];

  /* ✉️ Send mentorship request */
  const submitRequest = async () => {
    if (!requestMessage.trim() || !isVerified) return;

    try {
      await supabase.from("mentorship_requests").insert({
        mentor_id: selectedMentor.id,
        mentee_id: user.id,
        mentee_name: userName || user.email,
        message: requestMessage,
        status: "pending",
      });

      alert("✅ Mentorship request sent successfully!");
      setShowRequestForm(false);
      setRequestMessage("");
      setSelectedMentor(null);
    } catch (err) {
      console.error("Error sending request:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  /* 📝 Alumni / Faculty register as mentor */
  const submitBecomeMentor = async () => {
    if (!becomeForm.job_title.trim() || !becomeForm.expertise.trim() || !isVerified) return;

    try {
      await supabase.from("mentorship").insert({
        user_id: user.id,
        name: userName || user.email,
        job_title: becomeForm.job_title,
        company: becomeForm.company,
        experience: parseInt(becomeForm.experience) || 0,
        expertise: becomeForm.expertise,
        bio: becomeForm.bio,
        tags: becomeForm.tags,
        batch_year: becomeForm.batch_year,
        availability: becomeForm.availability,
        is_available: becomeForm.availability !== "Busy",
      });

      alert("🎉 You are now registered as a Mentor!");
      setShowBecomeModal(false);
      setBecomeForm({
        job_title: "",
        company: "",
        experience: "",
        expertise: "",
        bio: "",
        tags: "",
        batch_year: "",
        availability: "Available",
      });
      loadMentors();
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  /* Helper: initials */
  const getInitials = (name) => {
    if (!name) return "?";
    const parts = name.split(" ");
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return name.substring(0, 2).toUpperCase();
  };

  /* Helper: status badge color */
  const getStatusStyle = (availability) => {
    switch ((availability || "").toLowerCase()) {
      case "available":
        return "bg-green-100 text-green-700";
      case "limited":
        return "bg-yellow-100 text-yellow-700";
      case "busy":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <section className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Mentorship - Alumni Connect</title>
      </Helmet>

      {/* ============ HERO ============ */}
      <div className="bg-white pt-6 pb-10 px-4">
        <div className="max-w-6xl mx-auto mb-6">
          <button
            onClick={() => navigate("/connect-forum")}
            className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1 text-sm font-medium border border-indigo-200 rounded-full px-4 py-1.5 hover:bg-indigo-50 transition-all"
          >
            ← Back to Connect
          </button>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">Find Your Mentor</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Connect with experienced alumni who can guide you through your career journey
          </p>

          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            {/* Find a Mentor — scrolls down */}
            <button
              onClick={() => document.getElementById("mentors-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-7 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
            >
              Find a Mentor
            </button>

            {/* Become a Mentor — only alumni / faculty */}
            {(userRole === "alumni" || userRole === "faculty") && isVerified ? (
              <button
                onClick={() => setShowBecomeModal(true)}
                className="border-2 border-indigo-600 text-indigo-600 px-7 py-2.5 rounded-full font-semibold hover:bg-indigo-50 transition-all"
              >
                Become a Mentor
              </button>
            ) : (
              <button
                disabled
                className="border-2 border-gray-300 text-gray-400 px-7 py-2.5 rounded-full font-semibold cursor-not-allowed"
                title={userRole === "student" ? "Only alumni and faculty can become mentors" : "Verify your account first"}
              >
                Become a Mentor
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ============ STATS ============ */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-gray-900">{mentors.length}</p>
            <p className="text-gray-500 text-sm mt-1">Active Mentors</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0l-4-4m4 4l-4 4m0-4H3m0 8h8m0 0l-4-4m4 4l-4 4m0-4H3" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-gray-900">500+</p>
            <p className="text-gray-500 text-sm mt-1">Connections Made</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-gray-900">95%</p>
            <p className="text-gray-500 text-sm mt-1">Satisfaction Rate</p>
          </div>
        </div>
      </div>

      {/* ============ SEARCH & FILTERS ============ */}
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, expertise, or company..."
                className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              />
            </div>

            <select
              value={expertiseFilter}
              onChange={(e) => setExpertiseFilter(e.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white cursor-pointer min-w-[200px]"
            >
              <option value="All Expertise Areas">All Expertise Areas</option>
              {expertiseOptions.map((exp, i) => (
                <option key={i} value={exp}>{exp}</option>
              ))}
            </select>

            <select
              value={availabilityFilter}
              onChange={(e) => setAvailabilityFilter(e.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white cursor-pointer min-w-[180px]"
            >
              <option value="All Availability">All Availability</option>
              <option value="Available">Available</option>
              <option value="Limited">Limited</option>
              <option value="Busy">Busy</option>
            </select>
          </div>
        </div>
      </div>

      {/* ============ MENTOR CARDS ============ */}
      <div id="mentors-section" className="max-w-6xl mx-auto px-4 py-5">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          {filteredMentors.length} Mentor{filteredMentors.length !== 1 ? "s" : ""} Available
        </h2>

        {!isVerified && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-5 rounded-lg">
            <p className="text-yellow-700 text-sm font-medium">
              🔒 Please verify your account to send mentorship requests.
            </p>
          </div>
        )}

        {filteredMentors.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
            <p className="text-gray-400 text-lg">No mentors found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setExpertiseFilter("All Expertise Areas");
                setAvailabilityFilter("All Availability");
              }}
              className="mt-3 text-indigo-600 hover:underline text-sm"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col"
              >
                {/* Avatar + Name + Batch + Status */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: mentor.avatar_color }}
                  >
                    {getInitials(mentor.name)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-900 text-base truncate">{mentor.name}</h3>
                    {mentor.batch_year && (
                      <p className="text-gray-400 text-xs">Class of {mentor.batch_year}</p>
                    )}
                    <span className={`inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full ${getStatusStyle(mentor.availability)}`}>
                      {mentor.availability || "Available"}
                    </span>
                  </div>
                </div>

                {/* Job + Company */}
                {mentor.job_title && (
                  <div className="flex items-start gap-1.5 mb-1">
                    <span className="text-gray-400 mt-0.5">💼</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{mentor.job_title}</p>
                      {mentor.company && <p className="text-xs text-gray-400">{mentor.company}</p>}
                    </div>
                  </div>
                )}

                {/* Experience */}
                {mentor.experience && (
                  <p className="text-xs text-gray-400 flex items-center gap-1 mb-2">
                    <span>🕐</span> {mentor.experience} years of experience
                  </p>
                )}

                {/* Bio */}
                {mentor.bio && (
                  <p className="text-gray-500 text-xs leading-relaxed mb-3 flex-grow">
                    {mentor.bio}
                  </p>
                )}

                {/* Tags */}
                {mentor.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {mentor.tags.split(",").map((tag, i) => (
                      <span
                        key={i}
                        className="border border-indigo-200 text-indigo-600 text-xs px-2 py-0.5 rounded-full"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}

                {/* Request Button — only students can request; alumni/faculty cannot request themselves */}
                <button
                  onClick={() => {
                    setSelectedMentor(mentor);
                    setShowRequestForm(true);
                  }}
                  disabled={!isVerified || userRole !== "student"}
                  className="w-full mt-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                >
                  Request Mentorship
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ============ HOW IT WORKS ============ */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: 1, color: "bg-indigo-500", title: "Browse Profiles", desc: "Explore our directory of experienced mentors" },
              { step: 2, color: "bg-green-500", title: "Send Request", desc: "Reach out to mentors that match your goals" },
              { step: 3, color: "bg-purple-500", title: "Schedule Meeting", desc: "Book your first mentorship session" },
              { step: 4, color: "bg-orange-500", title: "Start Learning", desc: "Begin your mentorship journey" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3 shadow-md`}>
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ REQUEST MENTORSHIP MODAL ============ */}
      {showRequestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Request Mentorship</h3>
            <p className="text-gray-500 text-sm mb-4">
              Sending request to <span className="font-semibold text-gray-800">{selectedMentor?.name}</span>
            </p>
            <textarea
              value={requestMessage}
              onChange={(e) => setRequestMessage(e.target.value)}
              placeholder="Introduce yourself and explain what you'd like help with..."
              className="w-full border border-gray-200 rounded-xl p-3 mb-4 h-32 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            />
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowRequestForm(false);
                  setSelectedMentor(null);
                  setRequestMessage("");
                }}
                className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={submitRequest}
                disabled={!requestMessage.trim()}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-xl text-sm font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Send Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============ BECOME A MENTOR MODAL (Alumni / Faculty only) ============ */}
      {showBecomeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Become a Mentor</h3>
            <p className="text-gray-500 text-sm mb-5">Fill in your details to register as a mentor</p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Job Title *</label>
                <input
                  type="text"
                  value={becomeForm.job_title}
                  onChange={(e) => setBecomeForm({ ...becomeForm, job_title: e.target.value })}
                  placeholder="e.g., Senior Software Engineer"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Company</label>
                <input
                  type="text"
                  value={becomeForm.company}
                  onChange={(e) => setBecomeForm({ ...becomeForm, company: e.target.value })}
                  placeholder="e.g., Google"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Experience (years)</label>
                  <input
                    type="number"
                    value={becomeForm.experience}
                    onChange={(e) => setBecomeForm({ ...becomeForm, experience: e.target.value })}
                    placeholder="5"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Batch Year</label>
                  <input
                    type="text"
                    value={becomeForm.batch_year}
                    onChange={(e) => setBecomeForm({ ...becomeForm, batch_year: e.target.value })}
                    placeholder="2015"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Expertise Area *</label>
                <input
                  type="text"
                  value={becomeForm.expertise}
                  onChange={(e) => setBecomeForm({ ...becomeForm, expertise: e.target.value })}
                  placeholder="e.g., Machine Learning"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Bio</label>
                <textarea
                  value={becomeForm.bio}
                  onChange={(e) => setBecomeForm({ ...becomeForm, bio: e.target.value })}
                  placeholder="Tell mentees a bit about yourself..."
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm h-20 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={becomeForm.tags}
                  onChange={(e) => setBecomeForm({ ...becomeForm, tags: e.target.value })}
                  placeholder="React, Node.js, Leadership"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Availability</label>
                <select
                  value={becomeForm.availability}
                  onChange={(e) => setBecomeForm({ ...becomeForm, availability: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
                >
                  <option value="Available">Available</option>
                  <option value="Limited">Limited</option>
                  <option value="Busy">Busy</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowBecomeModal(false)}
                className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={submitBecomeMentor}
                disabled={!becomeForm.job_title.trim() || !becomeForm.expertise.trim()}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-xl text-sm font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Register as Mentor 🎓
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Mentorship;