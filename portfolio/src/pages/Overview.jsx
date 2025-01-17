// import AroundText from "../components/AroundText";
import LeftComponent from "../components/LeftComponent";
import { useTheme } from "../context/ThemeContext";
import TextSlide from "../components/TextSlide";

export default function Overview() {
  const theme = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <LeftComponent />
        <div className="flex-1">
          <div className={`border ${theme.border} rounded-md p-6`}>
            {/* <h2 className={`text-xl font-bold ${theme.text} mb-4`}>About Me</h2> */}
            <TextSlide />
            <p className={`${theme.text} ml-8`}>
              Creative and passionate tech innovator, I specialize in
              transforming ideas into dynamic, user-focused digital solutions.
              With expertise in full-stack web development, IoT, and
              problem-solving.
            </p>
            <p className={`${theme.text} ml-8`}>
              I seamlessly blend cutting-edge technologies with meticulous
              attention to detail. Renowned for delivering impactful results
              with precision and adaptability, I am committed to staying ahead
              of emerging trends to craft innovative, future-ready solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
