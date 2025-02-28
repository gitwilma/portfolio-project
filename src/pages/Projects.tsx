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
    // {
    //   id: 2,
    //   title: "Future Project",
    //   description: "More projects will be added here soon!",
    //   image: "",
    // },
    // {
    //   id: 3,
    //   title: "Future Project",
    //   description: "More projects will be added here soon!",
    //   image: "",
    // },
    // {
    //   id: 4,
    //   title: "Future Project",
    //   description: "More projects will be added here soon!",
    //   image: "",
    // },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-6 font-[Poppins]">
        Projects
      </h2>

      <p className="text-center text-lg text-gray-600 font-[Poppins] mb-10">
        Here you'll find my latest work. More projects are in progress!
      </p>

      <div className="flex justify-center gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-1/4 group flex flex-col items-center"
          >
            {/* Text över projekt-cirkel */}
            <div className="mb-4 text-start">
              <h3 className="text-xl font-semibold font-[Poppins]">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 font-[Poppins]">
                {project.description}
              </p>
            </div>

            {/* Projekt-cirkel */}
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-full shadow-md project-link transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-56 h-56 object-cover transform group-hover:scale-105 transition duration-300 rounded-full"
                />
              </a>
            ) : (
              <div className="block overflow-hidden rounded-full shadow-md project-link transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-56 h-56 object-cover transform group-hover:scale-105 transition duration-300 rounded-full"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
