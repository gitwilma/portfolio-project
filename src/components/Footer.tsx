export default function Footer() {
  return (
    <footer className="bg-pink-200 shadow mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center">
          <p className="mb-4">Wilmas portfolio</p>
          <div className="flex space-x-8">
            <a
              href="https://github.com/gitwilma"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/wilma-håkansson-7374a3234"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
