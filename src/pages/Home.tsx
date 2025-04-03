import Circle from "../components/Circle";
import ConnectingLines from "../components/ConnectingLines";

export default function Home() {
  return (
    <div className="relative py-8">
      {/* S-formad text – endast desktop */}
      <svg
        className="hidden sm:block"
        width="100%"
        height="500"
        viewBox="0 0 1000 500"
        style={{ transform: "translateY(-50px)" }}
      >
        <path
          id="s-curve"
          d="M 100,250 
             C 350,100 550,400 750,250 
             S 1150,400 950,250"
          fill="transparent"
          strokeWidth="1"
        />
        <text
          fontSize="80"
          fill="currentColor"
          fontFamily="NewYork"
          className="dark-text"
        >
          <textPath href="#s-curve" startOffset="1%" textAnchor="start">
            Welcome to my portfolio!
          </textPath>
        </text>
      </svg>

      {/* CV-bild och text under – mobilvänlig & desktopvänlig */}
      <div className="relative sm:absolute sm:top-[200px] sm:left-[250px] sm:translate-x-0 flex flex-col items-center">
        <img
          src="/assets/cv-image.png"
          alt="CV Image"
          className="rounded-full w-[90vmin] aspect-square sm:w-[300px] sm:h-[300px] sm:aspect-auto object-cover"
        />

        {/* Text under bilden – endast mobil */}
        <p className="block sm:hidden text-center text-2xl font-[NewYork] mt-6 dark-text">
          Welcome to my portfolio!
        </p>
      </div>

      {/* Connecting Lines – syns ej i mobil */}
      <div className="hidden sm:block">
        <ConnectingLines />
      </div>

      {/* Cirklar – vertikalt i mobil */}
      <section>
        <div className="cursor-pointer flex flex-col items-center sm:items-end">
          <Circle link="/about" text="About" className="mt-10 sm:ml-170" />
          <Circle link="/projects" text="Projects" className="mt-5 sm:ml-10" />
          <Circle link="/contact" text="Contact" className="mt-5 sm:ml-180" />
        </div>
      </section>
    </div>
  );
}
