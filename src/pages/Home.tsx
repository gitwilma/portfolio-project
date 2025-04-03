import Circle from "../components/Circle";
import ConnectingLines from "../components/ConnectingLines";

export default function Home() {
  return (
    <div className="relative py-8">
      {/* S-formad text */}
      <svg
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

      {/* CV-bild – centrerad i mobil, vänster i desktop */}
      <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2 sm:left-[250px] sm:translate-x-0">
        <img
          src="/assets/cv-image.png"
          alt="CV Image"
          className="rounded-full w-[90vmin] aspect-square sm:w-[300px] sm:h-[300px] sm:aspect-auto object-cover"
        />
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
