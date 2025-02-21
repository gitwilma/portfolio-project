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
            <div className="w-40 h-40 bg-purple-600 rounded-full flex justify-center items-center shadow-lg transform transition-all hover:scale-105">
              <span className="text-white text-xl font-bold">Projects</span>
            </div>
            <h2 className="mt-4 text-lg text-gray-700">
              Click to see my projects
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
