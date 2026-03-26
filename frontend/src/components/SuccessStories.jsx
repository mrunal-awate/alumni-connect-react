import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const SuccessStories = () => {
  const [userRole, setUserRole] = useState("guest");
  const [isVerified, setIsVerified] = useState(false);
  const [stories, setStories] = useState([]);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newStory, setNewStory] = useState({
    title: "",
    description: "",
    achievement: "",
  });
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
    loadStories();
  }, []);

  const loadStories = async () => {
    const { data } = await supabase
      .from("success_stories")
      .select("*")
      .order("created_at", { ascending: false });

    setStories(data || []);
  };

  const handleCreateStory = async () => {
    if (
      !newStory.title.trim() ||
      !newStory.description.trim() ||
      !isVerified
    )
      return;

    await supabase.from("success_stories").insert({
      id: user.id,
      author_name: userName,
      title: newStory.title,
      description: newStory.description,
      achievement: newStory.achievement,
      role: userRole,
    });

    alert("Success story shared! 🎉");
    setShowCreateForm(false);
    setNewStory({ title: "", description: "", achievement: "" });
    loadStories();
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getInitials = (name) => {
    if (!name) return "?";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Helmet>
        <title>Success Stories - Alumni Connect</title>
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
            <div className="text-6xl mb-3">⭐</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Success Stories
            </h1>
            <p className="text-gray-600">
              Share and celebrate achievements from our community
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isVerified && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
            <p className="text-yellow-700 font-medium">
              🔒 Please verify your account to share success stories.
            </p>
          </div>
        )}

        {/* Create Story Button */}
        {isVerified && (
          <div className="mb-6 text-center">
            <button
              onClick={() => setShowCreateForm(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
            >
              + Share Your Success Story
            </button>
          </div>
        )}

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stories.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No success stories yet. Be the first to share!
              </p>
            </div>
          ) : (
            stories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {getInitials(story.author_name)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {story.author_name}
                    </h4>
                    <p className="text-xs text-gray-500 capitalize">
                      {story.role} · {formatDate(story.created_at)}
                    </p>
                  </div>
                </div>

                {/* Story Content */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {story.title}
                  </h3>
                  {story.achievement && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-3 rounded">
                      <p className="text-sm font-semibold text-yellow-800">
                        🏆 {story.achievement}
                      </p>
                    </div>
                  )}
                  <p className="text-gray-700">{story.description}</p>
                </div>

                {/* Celebration */}
                <div className="flex items-center gap-2 text-yellow-500">
                  <span>🎉</span>
                  <span className="text-sm text-gray-600">
                    Celebrating this achievement!
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Create Story Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Share Your Success Story
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={newStory.title}
                  onChange={(e) =>
                    setNewStory({ ...newStory, title: e.target.value })
                  }
                  placeholder="e.g., Promoted to Senior Developer"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Achievement (Optional)
                </label>
                <input
                  type="text"
                  value={newStory.achievement}
                  onChange={(e) =>
                    setNewStory({ ...newStory, achievement: e.target.value })
                  }
                  placeholder="e.g., Got promoted at Google"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Story
                </label>
                <textarea
                  value={newStory.description}
                  onChange={(e) =>
                    setNewStory({ ...newStory, description: e.target.value })
                  }
                  placeholder="Share your journey, challenges you overcame, and what this achievement means to you..."
                  className="w-full border border-gray-300 rounded-lg p-3 h-40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  setShowCreateForm(false);
                  setNewStory({ title: "", description: "", achievement: "" });
                }}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateStory}
                disabled={!newStory.title.trim() || !newStory.description.trim()}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Share Story 🎉
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SuccessStories;