import Card from "../components/Card";
import { useTheme } from "../context/ThemeContext";
import { FaStar } from "react-icons/fa";

export default function Projects() {
  const theme = useTheme();

  return (
    <>
      <div className="flex flex-row ">
        {/* left */}
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

        {/*  */}
        {/* right */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className={`text-2xl font-bold ${theme.text}`}>Projects</h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((project) => (
              <div
                key={project}
                className={`border ${theme.border} rounded-md p-6`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 hover:underline">
                      Project {project}
                    </h3>
                    <div className="mt-2">
                      <Card />
                    </div>
                  </div>
                  <button
                    className={`flex items-center space-x-1 px-3 py-1 border ${theme.border} rounded-md ${theme.text}`}
                  >
                    <FaStar className={theme.text} />
                    <span>Star</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
