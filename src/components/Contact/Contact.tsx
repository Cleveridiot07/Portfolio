"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    
    emailjs
      .send(
        `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`, 
        `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`, 
        {   
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        },
        `${import.meta.env.VITE_EMAILJS_USER_ID}`
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatusMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatusMessage("There was an error sending your message.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div>
        <div className="my-6">
          <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
            <div>
              <h1 className="text-3xl font-extrabold">Let's Connect</h1>
              <p className="text-sm text-gray-400 mt-3">
                I’m always open to new opportunities, collaborations, and
                discussions. Whether you're interested in my work, have
                questions, or just want to chat about tech, feel free to reach out.
                Let’s create something amazing together!
              </p>
              <div className="mt-12">
                <h2 className="text-lg font-extrabold">Email</h2>
                <ul className="mt-3">
                  <li className="flex items-center">
                    <a
                      target="blank"
                      href="mailto:nikhilsaxena9987@gmail.com"
                      className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="#082f49"
                        viewBox="0 0 479.058 479.058"
                      >
                        <path
                          d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                          data-original="#000000"
                        />
                      </svg>
                    </a>
                    <a
                      target="blank"
                      href="mailto:nikhilsaxena9987@gmail.com"
                      className="text-[#082f49] text-sm ml-3"
                    >
                      <small className="block"></small>
                      <strong>nikhilsaxena9987@gmail.com</strong>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12">
                <h2 className="text-lg font-extrabold">Socials</h2>
                <ul className="flex mt-3 space-x-4">
                  <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="https://x.com/nikhilsaxena_07">
                      <img src="./Socials/X.png" className="w-5 h-5" alt="" />
                    </a>
                  </li>
                  <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="https://github.com/Cleveridiot07/">
                      <img
                        src="./Socials/Github.png"
                        className="w-5 h-5"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="https://www.linkedin.com/in/nikhilsaxena9987/">
                      <img
                        src="./Socials/LinkedIN.png"
                        className="w-5 h-5"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="https://www.instagram.com/nikhilsaxena__07/">
                      <img
                        src="./Socials/Instagram.png"
                        className="w-5 h-5"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <form className="ml-auto space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#082f49]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#082f49]"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#082f49]"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#082f49]"
              ></textarea>
              <button
                type="submit"
                className="text-white bg-sky-900 hover:bg-sky-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
              >
                Send
              </button>
            </form>

            {statusMessage && (
              <div className="mt-4 text-center text-sm text-gray-600">
                {statusMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
