import { Link } from "react-router-dom";

interface CircleProps {
  link: string;
  text: string;
  className: string;
}

const Circle = ({ link, text, className = "" }: CircleProps) => {
  return (
    <div className="relative w-full h-full mt-16 p-24">
      <Link
        to={link}
        className={`circle ${className} w-90 h-90 bg-black rounded-full flex justify-center items-center shadow-lg transform transition-all hover:scale-105`}
      >
        <span className="text-white text-xl font-bold">{text}</span>
        {/* Små bubblor */}
        <div className="absolute w-15 h-15 bg-black rounded-full bottom-2 right-3 pulsing-bubble"></div>
        <div className="absolute w-10 h-10 bg-black rounded-full bottom-4 right-4 pulsing-bubble"></div>
      </Link>
    </div>
  );
};

export default Circle;
