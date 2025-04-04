export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "My Portfolio",
      description:
        "Designed from scratch in Figma and built by myself, this portfolio is developed using React, Vite, Tailwind CSS, and TypeScript. It features smooth navigation with React Router and is fully version-controlled with Git and GitHub.",
      image: "/assets/portfolio-image.png",
      link: "https://github.com/gitwilma/portfolio-project.git",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-6 font-[Poppins]">
        Projects
      </h2>

      <p className="text-center text-lg text-gray-600 font-[Poppins] mb-10">
        Here you'll find my latest work. More projects are in progress!
      </p>

      {/* Flexbox för att centrera innehållet */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center group max-w-md">
          {/* Text över projekt-cirkel */}
          <div className="mb-4 text-center max-w-xs">
            <h3 className="text-xl font-semibold font-[Poppins] mb-2">
              {projects[0].title}
            </h3>
            <p className="text-sm text-gray-600 font-[Poppins] mb-4">
              {projects[0].description}
            </p>
          </div>

          {/* Projekt-cirkel */}
          {projects[0].link ? (
            <a
              href={projects[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-full shadow-md project-link transition-all duration-300"
            >
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-48 h-48 sm:w-56 sm:h-56 object-cover transform group-hover:scale-105 transition duration-300 rounded-full"
              />
            </a>
          ) : (
            <div className="block overflow-hidden rounded-full shadow-md project-link transition-all duration-300">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-48 h-48 sm:w-56 sm:h-56 object-cover transform group-hover:scale-105 transition duration-300 rounded-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
