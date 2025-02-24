import Circle from "../components/Circle";
import ConnectingLines from "../components/ConnectingLines";

export default function Home() {
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

      <div className="absolute top-[260px] left-[250px]">
        <img
          src="/assets/cv-image.png"
          alt="CV Image"
          className="rounded-full w-[300px] h-[300px]"
        />
      </div>

      {/* Connecting Lines */}
      <ConnectingLines />

      <section>
        <div className="cursor-pointer flex flex-col items-end">
          <Circle link="/about" text="About" className="ml-170 mt-20" />
          <Circle link="/projects" text="Projects" className="ml-10 mt-5" />
          <Circle link="/contact" text="Contact" className="ml-180 mt-5" />
        </div>
      </section>
    </div>
  );
}
