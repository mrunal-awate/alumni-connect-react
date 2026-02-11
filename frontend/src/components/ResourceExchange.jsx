import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const ResourceExchange = () => {
  const [userRole, setUserRole] = useState("guest");
  const [isVerified, setIsVerified] = useState(false);
  const [resources, setResources] = useState([]);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filterType, setFilterType] = useState("all");
  const [newResource, setNewResource] = useState({
    title: "",
    description: "",
    type: "project",
    link: "",
    tags: "",
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
    loadResources();
  }, []);

  const loadResources = async () => {
    const { data } = await supabase
      .from("resource_exchange")
      .select("*")
      .order("created_at", { ascending: false });

    setResources(data || []);
  };

  const handleCreateResource = async () => {
    if (
      !newResource.title.trim() ||
      !newResource.description.trim() ||
      !isVerified
    )
      return;

    await supabase.from("resource_exchange").insert({
      user_id: user.id,
      author_name: userName,
      title: newResource.title,
      description: newResource.description,
      type: newResource.type,
      link: newResource.link,
      tags: newResource.tags,
      role: userRole,
    });

    alert("Resource shared successfully! 🎉");
    setShowCreateForm(false);
    setNewResource({
      title: "",
      description: "",
      type: "project",
      link: "",
      tags: "",
    });
    loadResources();
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
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

  const getTypeIcon = (type) => {
    const icons = {
      project: "💼",
      article: "📄",
      tool: "🛠️",
      course: "📚",
      other: "📌",
    };
    return icons[type] || "📌";
  };

  const getTypeColor = (type) => {
    const colors = {
      project: "bg-blue-100 text-blue-800",
      article: "bg-green-100 text-green-800",
      tool: "bg-purple-100 text-purple-800",
      course: "bg-yellow-100 text-yellow-800",
      other: "bg-gray-100 text-gray-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  const filteredResources =
    filterType === "all"
      ? resources
      : resources.filter((r) => r.type === filterType);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Helmet>
        <title>Resource Exchange - Alumni Connect</title>
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
            <div className="text-6xl mb-3">🤝</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Resource Exchange
            </h1>
            <p className="text-gray-600">
              Collaborate on projects and share valuable resources
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isVerified && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
            <p className="text-yellow-700 font-medium">
              🔒 Please verify your account to share resources.
            </p>
          </div>
        )}

        {/* Action Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {["all", "project", "article", "tool", "course", "other"].map(
              (type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    filterType === type
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              )
            )}
          </div>

          {/* Share Resource Button */}
          {isVerified && (
            <button
              onClick={() => setShowCreateForm(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
            >
              + Share Resource
            </button>
          )}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No resources found. Be the first to share!
              </p>
            </div>
          ) : (
            filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Type Badge */}
                <div className="flex justify-between items-start mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(
                      resource.type
                    )}`}
                  >
                    {getTypeIcon(resource.type)} {resource.type.toUpperCase()}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-4 flex-grow">
                  {resource.description}
                </p>

                {/* Tags */}
                {resource.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.split(",").map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs"
                      >
                        #{tag.trim()}
                      </span>
                    ))}
                  </div>
                )}

                {/* Link */}
                {resource.link && (
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium mb-4 flex items-center gap-1"
                  >
                    🔗 View Resource
                  </a>
                )}

                {/* Author Info */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {getInitials(resource.author_name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {resource.author_name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatDate(resource.created_at)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Create Resource Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Share a Resource
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={newResource.title}
                  onChange={(e) =>
                    setNewResource({ ...newResource, title: e.target.value })
                  }
                  placeholder="e.g., React Best Practices Guide"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Type *
                </label>
                <select
                  value={newResource.type}
                  onChange={(e) =>
                    setNewResource({ ...newResource, type: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="project">Project</option>
                  <option value="article">Article</option>
                  <option value="tool">Tool</option>
                  <option value="course">Course</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={newResource.description}
                  onChange={(e) =>
                    setNewResource({
                      ...newResource,
                      description: e.target.value,
                    })
                  }
                  placeholder="Describe the resource and how it can help others..."
                  className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Link (Optional)
                </label>
                <input
                  type="url"
                  value={newResource.link}
                  onChange={(e) =>
                    setNewResource({ ...newResource, link: e.target.value })
                  }
                  placeholder="https://example.com"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tags (Optional, comma-separated)
                </label>
                <input
                  type="text"
                  value={newResource.tags}
                  onChange={(e) =>
                    setNewResource({ ...newResource, tags: e.target.value })
                  }
                  placeholder="react, javascript, tutorial"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  setShowCreateForm(false);
                  setNewResource({
                    title: "",
                    description: "",
                    type: "project",
                    link: "",
                    tags: "",
                  });
                }}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateResource}
                disabled={
                  !newResource.title.trim() || !newResource.description.trim()
                }
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Share Resource 🚀
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResourceExchange;