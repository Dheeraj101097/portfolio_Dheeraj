import Card from "../components/Card";
import LeftComponent from "../components/LeftComponent";
import { useTheme } from "../context/ThemeContext";

export default function Projects() {
  const theme = useTheme();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start ">
          <LeftComponent />
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-2">
              <h2 className={`text-2xl font-bold ${theme.text}`}>Projects</h2>
            </div>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

{
}
