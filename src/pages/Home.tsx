import WatercolorOverlay from "../components/WaterColorOverlay";
// import { useRouter } from "next/router"; // För att navigera mellan sidor

export default function Home() {
  const handleCircleClick = () => {
    // router.push("/projects"); // Byt till din projects-sida här
  };

  return (
    <div className="relative py-8">
      {/* S-formad text */}
      <svg width="100%" height="500" viewBox="0 0 1000 500">
        <path
          id="s-curve"
          d="M 100,250 
             C 350,100 550,400 750,250 
             S 1150,400 950,250"
          fill="transparent"
          strokeWidth="1"
        />

        <text fontSize="80" fill="black">
          <textPath href="#s-curve" startOffset="1%" textAnchor="start">
            Welcome to my portfolio!
          </textPath>
        </text>
      </svg>

      <div className="absolute top-[260px] left-[250px]">
        <WatercolorOverlay
          imageSrc="/assets/cv-image.png"
          className="rounded-full"
          size="300px"
        />
      </div>
      <section>
        <div
          className="cursor-pointer flex flex-col items-end"
          onClick={handleCircleClick}
        >
          <div className="bg-relative w-full h-full mt-16 p-24">
            <div className="w-90 h-90 bg-pink-300 rounded-full flex justify-center items-center shadow-lg transform transition-all hover:scale-105 ml-170 mt-20">
              <span className="text-white text-xl font-bold">Projects</span>
            </div>
          </div>
          <div className="bg-relative w-full h-full mt-16 p-24">
            <div className="w-90 h-90 bg-green-200 rounded-full flex justify-center items-center shadow-lg transform transition-all hover:scale-105 ml-10 mt-5">
              <span className="text-white text-xl font-bold">About</span>
            </div>
          </div>
          <div className="bg-relative w-full h-full mt-16 p-24">
            <div className="w-90 h-90 bg-purple-300 rounded-full flex justify-center items-center shadow-lg transform transition-all hover:scale-105 ml-180 mt-5">
              <span className="text-white text-xl font-bold">Contact</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
