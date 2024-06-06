"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Wojciech",
          from_email: form.email,
          to_email: "wjechowski@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
        Swal.fire({
          title: "Sukces",
          text: "Twoja wiadomość została wysłana.",
          icon: "success",
          confirmButtonColor: "#0a0a0a",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        Swal.fire({
          title: "Error",
          text: "Twoja wiadomość nie została wysłana.",
          icon: "error",
          confirmButtonColor: "#0a0a0a",
        });
      });
  };

  return (
    <div className="text-white bg-neutral-950 polka">
      <div className="appearIn min-h-screen max-w-7xl gap-10 mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col text-center justify-center items-center font-bold ">
      <div className="justify-center items-center font-bold text-5xl md:text-6xl">
            Kontakt
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col text-xl md:text-3xl">
          <label className="flex flex-col">
          {(form.name === "") ? null : <p className="text-left animate-fade ml-2">Imię</p>}
            <input
              className="my-2 rounded text-white border-2 p-2 bg-neutral-950"
              type="text"
              name="name"
              placeholder="Imie"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col">
          {(form.email === "") ? null : <p className=" text-left animate-fade ml-2">Email</p>}
            <input
              className="my-2 rounded text-white border-2 p-2 bg-neutral-950"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col">
          {(form.message === "") ? null : <p className="text-left animate-fade ml-2">Wiadomość</p>}
            <textarea
              className="my-2 rounded text-white border-2 p-2 bg-neutral-950"
              name="message"
              rows="4"
              placeholder="Wiadomość ..."
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button type="submit" disabled={loading} className="bg-neutral-950 rounded text-white border-2 p-1 my-2 text-md md:text-xl hover:bg-white hover:text-black transition-all duration-300">
            {loading ? "Wysyłanie..." : "Wyślij"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
