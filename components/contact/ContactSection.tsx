"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

interface StatusMessage {
  success: boolean;
  message: string;
}

export function ContactSection() {
  const [contactForm, setContactForm] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<StatusMessage | null>(
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactForm({ ...contactForm, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setStatusMessage({
        success: false,
        message: "Please fill out all fields.",
      });
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error("EmailJS configuration is missing");
    }

    await emailjs.sendForm(
      serviceId,
      templateId,
      formRef.current as HTMLFormElement,
      publicKey
    );

    setContactForm({ name: "", email: "", message: "" });

    setStatusMessage({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });

    try {
      setIsSubmitting(true);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="w-full flex items-center min-h-[300px] py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col md:flex-row gap-8"
        >
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
              disabled={isSubmitting}
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {statusMessage && (
              <div
                className={`mt-3 p-2 rounded ${
                  statusMessage.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {statusMessage.message}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
