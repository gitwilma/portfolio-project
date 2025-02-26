export default function Footer() {
  return (
    <footer className="footer bg-black shadow">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center">
          <p className="font-[Kiona-Regular] text-[#F4E1C4] text-xl mb-4">
            Wilma Håkansson
          </p>

          <div className="flex space-x-8 mb-4">
            <a
              href="https://github.com/gitwilma"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[Kiona-Regular] text-[#F4E1C4] hover:text-gray-600"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/wilma-håkansson-7374a3234"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[Kiona-Regular] text-[#F4E1C4] hover:text-gray-600"
            >
              LinkedIn
            </a>
            <a
              href="/contact"
              className="font-[Kiona-Regular] text-[#F4E1C4] hover:text-gray-600"
            >
              Let's connect
            </a>
          </div>

          <p className="text-[#F4E1C4] text-sm text-center font-[Poppins]">
            © {new Date().getFullYear()} Wilma Håkansson. All rights reserved.
          </p>
          <p className="text-[#F4E1C4] text-sm font-[Poppins]">
            Designed & built by me!
          </p>
        </div>
      </div>
    </footer>
  );
}
