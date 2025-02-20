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
    <div className="flex items-center justify-center max-w-7xl mx-auto p-6">
      {/* SVG C-formad text */}
      <div className="w-[55%] flex justify-end">
        <svg width="100%" height="700" viewBox="0 0 700 700">
          <path
            id="c-curve"
            d="M 600,50 
               C 50,50 50,650 600,650"
            fill="transparent"
            stroke="black"
            strokeWidth="1"
          />
          <text fontSize="60" fill="black">
            <textPath href="#c-curve" startOffset="100%" textAnchor="end">
              GET IN TOUCH
            </textPath>
          </text>
        </svg>
      </div>

      {/* Kontaktformulär */}
      <div className="w-[35%] -ml-50">
        <form onSubmit={handleSubmit} className="space-y-4 w-[300px]">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
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
              className="px-8 py-8 bg-pink-400 text-white rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
