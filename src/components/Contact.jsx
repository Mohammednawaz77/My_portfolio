// src/components/Contact.jsx
import React from "react";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-[#0a0a1a] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Get in <span className="text-[#915EFF]">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT COLUMN - CONTACT INFO */}
          <div className="bg-[#1d1d2e] rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4 text-white/80">
              <li>
                <span className="font-semibold">Name:</span> Mohammed Nawaz
              </li>
              <li>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+917259233639" className="hover:text-[#915EFF]">
                  +91 7259233639
                </a>
              </li>
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:Mohammednawaz.dev@gmail.com"
                  className="hover:text-[#915EFF]"
                >
                  matter7259@gmail.com
                </a>
              </li>
              <li className="flex gap-4">
                <a
                  href="https://github.com/Mohammednawaz77"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#915EFF]"
                >
                  GitHub
                </a>
                |
                <a
                  href="https://in.linkedin.com/in/mohammed-nawaz-7b1ab0314"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#915EFF]"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN - CONTACT FORM */}
          <div className="bg-[#1d1d2e] rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-[#0f0f1f] text-white border border-white/10 focus:border-[#915EFF] outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-[#0f0f1f] text-white border border-white/10 focus:border-[#915EFF] outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-md bg-[#0f0f1f] text-white border border-white/10 focus:border-[#915EFF] outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-[#915EFF] text-white font-semibold rounded-md hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
