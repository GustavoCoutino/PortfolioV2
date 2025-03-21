"use client";

import { useState } from "react";

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const [contactForm, setContactForm] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactForm({ ...contactForm, [event.target.id]: event.target.value });
  };
  return (
    <section className="w-full flex items-center min-h-[300px] py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="text-white block text-sm font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white text-black ps-2"
                value={contactForm.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-white block text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white text-black ps-2"
                value={contactForm.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="bg-white mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ps-2 text-black"
              value={contactForm.message}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
