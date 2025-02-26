export default function About() {
  return (
    <div className="px-10 py-10 max-w-2xl font-[Poppins]">
      <h2 className="text-5xl py-5">About me</h2>
      <p>
        Hi! My name is Wilma and I am a frontend developer. With skills in
        modern web technologies like HTML, CSS, JavaScript, TypeScript, and
        React — as well as version control with Git/GitHub — I enjoy bringing
        ideas to life and to craft user-friendly and functional web experiences.
        <br />
        <br />I have a keen eye for detail and a problem-solving mindset, shaped
        by both my education in web development and previous experience in
        structured, team-oriented environments. Always eager to learn, grow, and
        refine my skills, I’m excited to take the next step in my journey as a
        frontend developer.
      </p>
      <div className="absolute top-[200px] left-[900px]">
        <img
          src="/assets/cv-image.png"
          alt="CV Image"
          className="rounded-full w-[400px] h-[400px]"
        />
      </div>
    </div>
  );
}
