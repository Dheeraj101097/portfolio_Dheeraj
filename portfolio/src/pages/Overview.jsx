import LeftComponent from "../components/LeftComponent";
import { useTheme } from "../context/ThemeContext";

export default function Overview() {
  const theme = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <LeftComponent />
        <div className="flex-1">
          <div className={`border ${theme.border} rounded-md p-6`}>
            <h2 className={`text-xl font-bold ${theme.text} mb-4`}>About Me</h2>
            <p className={theme.text}>
              As a creative and passionate tech innovator, I specialize in
              transforming ideas into dynamic, user-focused digital solutions.
              With expertise in full-stack web development, IoT, and
              problem-solving, I seamlessly blend cutting-edge technologies with
              meticulous attention to detail. Renowned for delivering impactful
              results with precision and adaptability, I am committed to staying
              ahead of emerging trends to craft innovative, future-ready
              solutions.
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                className={`border ${theme.border} rounded-md p-4 text-center`}
              >
                <div className={`text-2xl font-bold ${theme.text}`}>50+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div
                className={`border ${theme.border} rounded-md p-4 text-center`}
              >
                <div className={`text-2xl font-bold ${theme.text}`}>1000+</div>
                <div className="text-gray-400">Contributions</div>
              </div>
              <div
                className={`border ${theme.border} rounded-md p-4 text-center`}
              >
                <div className={`text-2xl font-bold ${theme.text}`}>100+</div>
                <div className="text-gray-400">Stars</div>
              </div>
              <div
                className={`border ${theme.border} rounded-md p-4 text-center`}
              >
                <div className={`text-2xl font-bold ${theme.text}`}>50+</div>
                <div className="text-gray-400">Followers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
