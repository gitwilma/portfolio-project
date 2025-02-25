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
    <div className="relative">
      <div className="absolute bottom-[-130px] left-1/3 transform -translate-x-2/3 w-[40%] h-[300px] bg-black rounded-t-full flex flex-col items-center justify-center shadow-md">
        <h3 className="text-xl font-bold font-serif text-[#F4E1C4]">
          Contact Information
        </h3>
        <p className="text-sm text-center font-serif text-[#F4E1C4]">
          📧 wilma.haakansson@gmail.com <br />
          📞 +46 72 701 2121 <br />
          📍 Gothenburg, Sweden
        </p>
      </div>

      {/* Kontaktformulär */}
      <div className="w-[35%] ml-auto mt-10">
        <form onSubmit={handleSubmit} className="space-y-4 w-[400px]">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold mb-2 font-serif"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 font-serif"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold mb-2 font-serif"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 font-serif"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2 font-serif"
            >
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 font-serif"
              rows={4}
              placeholder="How can I help you?"
            />
          </div>

          {formStatus && (
            <div className="text-right text-lg font-semibold">
              <p>{formStatus}</p>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-4 bg-pink-400 text-white rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
