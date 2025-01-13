import { useTheme } from "../context/ThemeContext";

export default function Skills() {
  const theme = useTheme();

  return (
    <div className="flex flex-row ">
      <div className="md:w-1/4">
        <div
          className={`w-48 h-48 rounded-full overflow-hidden border-4 ${theme.border}`}
        >
          <img
            src="src/assets/Display_pic.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className={`text-2xl font-bold ${theme.text} mt-4`}>Your Name</h1>
        <p className="text-gray-400">Full Stack Developer</p>
        <button className="mt-4 w-full px-4 py-2 bg-github-btn text-white rounded-md hover:bg-opacity-90">
          Follow
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className={`text-2xl font-bold ${theme.text} mb-8`}>Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Frontend", "Backend", "DevOps", "Mobile", "Database", "Tools"].map(
            (category) => (
              <div
                key={category}
                className={`border ${theme.border} rounded-md p-6`}
              >
                <h3 className={`text-xl font-semibold ${theme.text} mb-4`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 ${
                          theme.isDark ? "bg-github-border-dark" : "bg-gray-100"
                        } rounded-full text-sm ${theme.text}`}
                      >
                        Skill {i + 1}
                      </span>
                    ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
