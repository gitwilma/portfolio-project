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
    <div className="relative flex flex-col h-[70vh]">
      {/* Kontaktformulär */}
      <div className="halfmoon absolute top-[-50px] right-[5%] w-[65%] h-[500px] rounded-b-full flex flex-col items-center justify-center shadow-md overflow-hidden bg-[#000000]">
        <form onSubmit={handleSubmit} className="space-y-2 w-1/2">
          <h3 className="text-xl font-semibold font-[Poppins] text-[#D8B17D] text-start">
            Contact Me
          </h3>

          <div>
            <label
              htmlFor="name"
              className="block text-md font-semibold mb-2 font-[Poppins] text-[#F4E1C4]"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-[#F4E1C4] rounded-md focus:outline-none focus:ring-4 focus:ring-[#D8B17D] font-[Poppins] text-black opacity-80"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-md font-semibold mb-2 font-[Poppins] text-[#F4E1C4]"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-[#F4E1C4] rounded-md focus:outline-none focus:ring-4 focus:ring-[#D8B17D] font-[Poppins] text-black opacity-80"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-md font-semibold mb-2 font-[Poppins] text-[#F4E1C4]"
            >
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 bg-[#F4E1C4] rounded-md focus:outline-none focus:ring-4 focus:ring-[#D8B17D] font-[Poppins] text-black opacity-80"
              placeholder="How can I help you?"
            />
          </div>

          {formStatus && (
            <div className="text-right text-lg font-semibold text-[#F4E1C4]">
              <p>{formStatus}</p>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-pink-400 text-white rounded-full hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-[#D8B17D]"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Contact Information */}
      <div className="halfmoon absolute bottom-[-54px] left-[1%] w-[45%] h-[300px] rounded-t-full flex flex-col items-center justify-center shadow-md overflow-hidden">
        <h3 className="text-2xl text-start font-bold font-[Poppins] text-[#D8B17D]">
          Contact Information
        </h3>
        <p className="text-lg text-start font-[Poppins] text-[#D8B17D] p-4">
          📧 wilma.haakansson@gmail.com <br />
          📞 +46 72 701 2121 <br />
          📍 Gothenburg, Sweden
        </p>
      </div>
    </div>
  );
}
