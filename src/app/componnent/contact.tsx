
//  "use client"
//  import{ useRef} from'react'
//  import emailJs from '@emailjs/browser'
// import Footer from "../componnent/footer"
// import { Button } from "@/components/ui/button"
// import emailjs from "@emailjs/browser"
// import { useRef } from "react"

// export default function contact() {
//   const form = useRef<HTMLFormElement>(null)

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault()

//     emailjs
//       .sendForm(
//         "service_id",
//         "template_id",
//         form.current!,
//         "public_key"
//       )
//       .then(
//         () => {
//           alert("Message sent successfully")
//         },
//         (error) => {
//           console.log(error)
//         }
//       )
//   }

//   return (
//     <div>
//     <div className="bg-black h-screen w-full flex justify-center items-center ">
//     <div className=" h-fit  w-[70vw] grid grid-cols-2">
//       <div className="text-5xl text-white font-medium ">
//         <h1 className="pl-10 pt-10">LETS CHAT!</h1>
//       </div>
//     <div className="flex w-full flex-col items-center gap-4 pb-20 bg-white  justify-center border-white ">
//     <form ref={form} onSubmit={sendEmail} className="flex flex-col h-full  gap-7 ">
//       <h1 className="text-2xl pt-20">Contact Form</h1>
//       <label htmlFor="" > <p>Name</p><input  className="pr-60 py-3 border-black border " name="user_name" placeholder="Your Name" required /></label>
//      <label htmlFor=""><p>Email</p>
//       <input  className="pr-60 py-3 border border-black"name="user_email" placeholder="Your Email" required />
//       </label>
//      <label htmlFor=""><p>messege </p>
//       <textarea  className="pr-60 py-3 border border-black"name="message" placeholder="Messege" required />
//       </label>
//       <Button type="submit" className="py-5 text-sm">send</Button>
//     </form>
//     </div>
//     </div>
//     </div>
//      <Footer/>
//     </div>
//   )
// }



"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { HtmlContext } from "next/dist/shared/lib/html-context.shared-runtime";

export default function contacts() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ybhl1jl",
        "template_2sjpfi7",
        form.current!,
        "m58cyUwtzGyujxAee"
      )
      .then(
        () => {
          alert("Reservation sent successfully!");
        },
        () => {
          alert("Failed to send reservation.");
        }
      );

    e.target.dispatchEvent(new Event('reset'));
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">
          Reserve a Table
        </h2>

        <form ref={form} onSubmit={sendEmail} className="grid gap-4">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-3 border rounded"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="p-3 border rounded"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="p-3 border rounded"
            required
          />

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            className="p-3 border rounded"
            required
          />

          <input
            type="date"
            name="date"
            className="p-3 border rounded"
            required
          />

          <textarea
            name="message"
            placeholder="Special Request"
            className="p-3 border rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-red-600 text-white p-3 rounded hover:bg-red-700 transition"
          >
            Book Table
          </button>

        </form>
      </div>
    </section>
  );
}