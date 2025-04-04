export default function About() {
  return (
    <div className="px-10 py-10 max-w-6xl font-[Poppins] mx-auto">
      <div className="flex flex-col md:flex-row md:items-center">
        {/* Texten tar upp halva sidan på större skärmar */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-5xl py-5">About me</h2>
          <p className="text-lg md:text-xl">
            Hi! My name is Wilma and I am a frontend developer. With skills in
            modern web technologies like HTML, CSS, JavaScript, TypeScript, and
            React — as well as version control with Git/GitHub — I enjoy
            bringing ideas to life and crafting user-friendly and functional web
            experiences.
            <br />
            <br />I have a keen eye for detail and a problem-solving mindset,
            shaped by both my education in web development and previous
            experience in structured, team-oriented environments. Always eager
            to learn, grow, and refine my skills, I’m excited to take the next
            step in my journey as a frontend developer.
          </p>
        </div>

        {/* Bilden ligger bredvid texten i desktop-läge */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/assets/cv-image.png"
            alt="CV Image"
            className="rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px] about-image"
          />
        </div>
      </div>
    </div>
  );
}
