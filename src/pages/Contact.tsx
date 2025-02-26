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
      <div className="absolute top-[-50px] right-[5%] w-[65%] h-[500px] bg-black rounded-b-full flex flex-col items-center justify-center shadow-md overflow-hidden">
        <form onSubmit={handleSubmit} className="space-y-2 w-1/2">
          <h3 className="text-lg font-semibold font-serif text-[#F4E1C4] text-start">
            Contact Me
          </h3>

          <div>
            <label
              htmlFor="name"
              className="block text-md font-semibold mb-2 font-serif text-[#F4E1C4]"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 font-serif text-[#F4E1C4]"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-md font-semibold mb-2 font-serif text-[#F4E1C4]"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 font-serif text-[#F4E1C4]"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-md font-semibold mb-2 font-serif text-[#F4E1C4]"
            >
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 font-serif text-[#F4E1C4]"
              rows={2}
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
              className="px-8 py-3 bg-pink-400 text-white rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Contact Information */}
      <div className="absolute bottom-[-54px] left-[5%] w-[45%] h-[300px] bg-black rounded-t-full flex flex-col items-center justify-center shadow-md overflow-hidden">
        <h3 className="text-xl font-semibold font-serif text-[#F4E1C4]">
          Contact Information
        </h3>
        <p className="text-sm text-center font-serif text-[#F4E1C4]">
          📧 wilma.haakansson@gmail.com <br />
          📞 +46 72 701 2121 <br />
          📍 Gothenburg, Sweden
        </p>
      </div>
    </div>
  );
}
