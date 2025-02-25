export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/images/project3.jpg",
    },
    {
      id: 4,
      title: "Project Four",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/images/project4.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-10 font-serif">
        Projects
      </h2>

      <div className="flex justify-center gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-1/4 group flex flex-col items-center"
          >
            {/* Text över projekt-cirkel */}
            <div className="mb-4 text-center">
              <h3 className="text-xl font-semibold font-serif">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 font-serif">
                {project.description}
              </p>
            </div>

            {/* Projekt-cirkel */}
            <a
              href="#"
              className="block overflow-hidden rounded-full shadow-md project-link transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-56 h-56 object-cover transform group-hover:scale-105 transition duration-300 rounded-full"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
