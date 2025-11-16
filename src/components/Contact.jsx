// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle Form Submit (Optional - Working with EmailJS)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_4ojxwcl", 
        "template_n08c56o", 
        {
          from_name: form.name,
          to_name: "Mohammed Nawaz",
          from_email: form.email,
          to_email: "mohammednawaz.dev@gmail.com",
          message: form.message,
        },
        "3wY7aToaiRToeiFR8"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you soon!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong. Please try again!");
        }
      );
  };

  return (
    <section id="contact" className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SECTION - INFO */}
        <div className="bg-[#10131a] p-8 rounded-xl border border-white/10">
          <h2 className="text-white text-2xl font-bold mb-6">Contact Info</h2>

          <p className="text-white/90 mb-2">
            <strong>Name:</strong> Mohammed Nawaz
          </p>

          <p className="text-white/90 mb-2">
            <strong>Phone:</strong> +91 7259233639
          </p>

          <p className="text-white/90 mb-6">
            <strong>Email:</strong> mohammednawaz.dev@gmail.com
          </p>

          {/* ==== SOCIAL ICONS WITH TEXT ==== */}
          <div className="flex flex-wrap items-center gap-6 text-white text-sm font-medium">

            <a
              href="https://github.com/Mohammednawaz77"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#915EFF] transition"
            >
              <FaGithub size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mohammed-nawaz-7b1ab0314"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#915EFF] transition"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammednawaz.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#915EFF] transition"
            >
              <FaEnvelope size={18} />
              Email
            </a>
          </div>
        </div>

        {/* RIGHT SECTION - CONTACT FORM */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-[#10131a] p-8 rounded-xl border border-white/10"
        >
          <h2 className="text-white text-2xl font-bold mb-6">Send a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-transparent border border-white/20 text-white mb-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-transparent border border-white/20 text-white mb-4"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-transparent border border-white/20 text-white mb-4"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#915EFF] hover:bg-[#7b47ed] transition text-white py-3 rounded-md font-medium"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* FOOTER */}
      <p className="text-center text-white/50 mt-10 text-sm">
        © {new Date().getFullYear()} Mohammed Nawaz
      </p>
    </section>
  );
};

export default Contact;
