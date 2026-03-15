// 

"use client"

import emailjs from "@emailjs/browser"
import { useRef } from "react"

export default function Contact() {
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

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <input name="user_name" placeholder="Your Name" required />
      <input name="user_email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  )
}