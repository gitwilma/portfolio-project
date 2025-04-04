import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");

  // Hantera form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setFormStatus("Please fill in all fields.");
      return;
    }

    setFormStatus("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col items-center px-4 py-10">
      {/* Formulär och kontaktinfo som två cirklar */}
      <div className="flex flex-col sm:flex-row gap-8 w-full justify-center items-center">
        {/* Formulär cirkel */}
        <div className="flex flex-col items-center justify-center w-56 h-56 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full bg-[#000000] shadow-md p-4">
          <form
            onSubmit={handleSubmit}
            className="space-y-2 w-full text-center"
          >
            <h3 className="text-xs sm:text-sm md:text-lg font-semibold font-[Poppins] text-[#D8B17D]">
              Contact Me
            </h3>

            <div>
              <label
                htmlFor="name"
                className="block text-xxs sm:text-xs md:text-sm font-semibold mb-2 font-[Poppins] text-[#F4E1C4]"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-2 py-1 text-xxs sm:text-xs md:text-sm bg-[#F4E1C4] rounded-md focus:outline-none focus:ring-4 focus:ring-[#D8B17D] font-[Poppins] text-black opacity-80"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xxs sm:text-xs md:text-sm font-semibold mb-2 font-[Poppins] text-[#F4E1C4]"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-2 py-1 text-xxs sm:text-xs md:text-sm bg-[#F4E1C4] rounded-md focus:outline-none focus:ring-4 focus:ring-[#D8B17D] font-[Poppins] text-black opacity-80"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xxs sm:text-xs md:text-sm font-semibold mb-2 font-[Poppins] text-[#F4E1C4]"
              >
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-2 py-1 text-xxs sm:text-xs md:text-sm bg-[#F4E1C4] rounded-md focus:outline-none focus:ring-4 focus:ring-[#D8B17D] font-[Poppins] text-black opacity-80"
                placeholder="How can I help you?"
              />
            </div>

            {formStatus && (
              <div className="text-right text-xxs sm:text-xs md:text-lg font-semibold text-[#F4E1C4]">
                <p>{formStatus}</p>
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-[#D8B17D]"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Kontaktinformation cirkel */}
        <div className="flex flex-col items-center justify-center w-56 h-56 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full bg-[#000000] shadow-md p-4">
          <h3 className="text-xxs sm:text-xs md:text-2xl text-center font-bold font-[Poppins] text-[#D8B17D]">
            Contact Information
          </h3>
          <p className="text-xxs sm:text-xs md:text-lg text-center font-[Poppins] text-[#D8B17D] p-4">
            📧 wilma.haakansson@gmail.com <br />
            📞 +46 72 701 2121 <br />
            📍 Gothenburg, Sweden
          </p>
        </div>
      </div>
    </div>
  );
}
