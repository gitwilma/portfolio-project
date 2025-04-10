import Circle from "../components/Circle";
import ConnectingLines from "../components/ConnectingLines";

export default function Home() {
  return (
    <div className="relative py-16">
      <svg
        className="hidden lg:block"
        width="100%"
        height="500"
        viewBox="0 0 1000 500"
        style={{ transform: "translateY(-80px)" }}
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
          <textPath
            href="#s-curve"
            startOffset="1%"
            textAnchor="start"
            xmlns="http://www.w3.org/2000/svg"
          >
            Welcome to my portfolio!
          </textPath>
        </text>
      </svg>

      <div className="relative lg:absolute lg:top-[200px] lg:left-1/2 lg:-translate-x-[120%] left-1/2 -translate-x-1/2 flex flex-col items-center">
        <img
          src="/assets/cv-image.png"
          alt="CV Image"
          className="rounded-full w-full max-w-[260px] aspect-square md:max-w-[300px] md:w-[300px] md:h-[300px] object-cover"
        />

        <p className="block lg:hidden text-center text-2xl font-[NewYork] mt-1 dark-text">
          Welcome to my portfolio!
        </p>
      </div>

      <div className="hidden lg:block">
        <ConnectingLines />
      </div>

      <section>
        <div className="cursor-pointer flex flex-col font-[Kiona-Regular] items-center lg:items-end">
          <Circle
            link="/about"
            text="About"
            className="lg:ml-170 lg:mt-10 mt-10"
          />
          <Circle
            link="/projects"
            text="Projects"
            className="lg:ml-[-600px] mt-4 lg:mt-1"
          />
          <Circle
            link="/contact"
            text="Contact"
            className="lg:ml-180 mt-4 lg:mt-1"
          />
        </div>
      </section>
    </div>
  );
}
