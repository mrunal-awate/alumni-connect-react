import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const Mentorship = () => {
  const [userRole, setUserRole] = useState("guest");
  const [isVerified, setIsVerified] = useState(false);
  const [mentors, setMentors] = useState([]);
  const [user, setUser] = useState(null);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [requestMessage, setRequestMessage] = useState("");
  const navigate = useNavigate();

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
      } else if (alumni?.is_verified) {
        setUserRole("alumni");
        setIsVerified(true);
      } else if (faculty?.is_verified) {
        setUserRole("faculty");
        setIsVerified(true);
      }
    };

    init();
    loadMentors();
  }, []);

  const loadMentors = async () => {
    const { data } = await supabase
      .from("mentorship")
      .select("*")
      .eq("is_available", true)
      .order("created_at", { ascending: false });

    setMentors(data || []);
  };

  const handleRequestMentorship = (mentor) => {
    setSelectedMentor(mentor);
    setShowRequestForm(true);
  };

  const submitRequest = async () => {
    if (!requestMessage.trim() || !isVerified) return;

    await supabase.from("mentorship_requests").insert({
      mentor_id: selectedMentor.user_id,
      mentee_id: user.id,
      mentee_name: user.email,
      message: requestMessage,
      status: "pending",
    });

    alert("Mentorship request sent successfully!");
    setShowRequestForm(false);
    setRequestMessage("");
    setSelectedMentor(null);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Helmet>
        <title>Mentorship - Alumni Connect</title>
      </Helmet>

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate("/connect-forum")}
            className="text-indigo-600 hover:text-indigo-800 mb-4 flex items-center gap-2"
          >
            ← Back to Forum
          </button>
          <div className="text-center">
            <div className="text-6xl mb-3">🎓</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Mentorship Program
            </h1>
            <p className="text-gray-600">
              Connect with mentors and guide others on their journey
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isVerified && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
            <p className="text-yellow-700 font-medium">
              🔒 Please verify your account to access mentorship features.
            </p>
          </div>
        )}

        {/* Available Mentors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No mentors available at the moment. Check back soon!
              </p>
            </div>
          ) : (
            mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                    {mentor.name
                      ? mentor.name.substring(0, 2).toUpperCase()
                      : "?"}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {mentor.name}
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    {mentor.expertise}
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600 text-sm mb-2">
                    {mentor.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    Experience: {mentor.experience} years
                  </p>
                </div>
                <button
                  onClick={() => handleRequestMentorship(mentor)}
                  disabled={!isVerified}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Request Mentorship
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Request Form Modal */}
      {showRequestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Request Mentorship
            </h3>
            <p className="text-gray-600 mb-4">
              Sending request to{" "}
              <span className="font-semibold">{selectedMentor?.name}</span>
            </p>
            <textarea
              value={requestMessage}
              onChange={(e) => setRequestMessage(e.target.value)}
              placeholder="Introduce yourself and explain what you'd like help with..."
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowRequestForm(false);
                  setSelectedMentor(null);
                  setRequestMessage("");
                }}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={submitRequest}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all"
              >
                Send Request
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Mentorship;