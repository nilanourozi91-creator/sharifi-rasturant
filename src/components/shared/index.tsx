import { FaPhone, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

export default function index() {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-100">

      {/* Phone Number */}
      <div className="flex items-center gap-2">
        <FaPhone />
        <a href="tel:+93792410628" className="hover:text-red-500">
          +93 792410628
        </a>
      </div>

      {/* Social Media */}
      <div className="flex gap-4 text-2xl">

        <a
          href="https://facebook.com/yourpage"
          target="_blank"
          className="hover:text-blue-600"
        >
          <FaFacebook />
        </a>

        <a
          href="https://instagram.com/yourpage"
          target="_blank"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>

        <a
          href="https://twitter.com/yourpage"
          target="_blank"
          className="hover:text-blue-400"
        >
          <FaTwitter />
        </a>

      </div>
    </div>
  )
}