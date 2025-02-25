export default function Projects() {
  const projects = [
    { id: 1, title: "Project One", image: "/images/project1.jpg" },
    { id: 2, title: "Project Two", image: "/images/project2.jpg" },
    { id: 3, title: "Project Three", image: "/images/project3.jpg" },
    { id: 4, title: "Project Four", image: "/images/project4.jpg" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-10 font-serif">
        Projects
      </h2>

      <div className="flex justify-center gap-6">
        {projects.map((project) => (
          <div key={project.id} className="w-1/4 group">
            <a
              href="#"
              className="block overflow-hidden rounded-full shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-300"
              />
            </a>
            <a
              href="#"
              className="block mt-2 text-lg font-semibold text-center text-blue-600 hover:underline"
            >
              {project.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
