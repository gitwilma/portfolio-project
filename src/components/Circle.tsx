import { Link } from "react-router-dom";

interface CircleProps {
  link: string;
  text: string;
  className?: string;
}

const Circle = ({ link, text, className = "" }: CircleProps) => {
  return (
    <div className="w-full h-screen flex justify-center items-center snap-start">
      <Link
        to={link}
        className={`circle w-[90vmin] h-[90vmin] sm:w-96 sm:h-96 bg-black rounded-full flex justify-center items-center shadow-lg transition-all hover:scale-105 relative ${className}`}
      >
        <span className="text-white text-3xl sm:text-xl font-bold">{text}</span>

        {/* Bubblor */}
        <div className="absolute w-4 h-4 bg-black rounded-full bottom-6 right-6 pulsing-bubble"></div>
        <div className="absolute w-2.5 h-2.5 bg-black rounded-full bottom-10 right-10 pulsing-bubble"></div>
      </Link>
    </div>
  );
};

export default Circle;
