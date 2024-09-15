import Image from "next/image";
import Icon from "@/assets/about.svg";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Example icons for contact

export default function ContactUs() {
  return (
    <section id="contact" className="py-12 px-8 md:py-16 md:px-32 bg-gray-200">
      <div className="w-full flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-3 items-center">
          <Image src={Icon} alt="alt" width={48} height={48} />
          <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
          <p className="md:text-lg text-center md:w-[70%]">
            Tell us about your project… and one of our superstar team members
            will contact you in one business day or less.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-3 border rounded-lg resize-none"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors"
              >
                Send Message
              </button>
            </form>
       
          <div className="space-y-4 py-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-lg text-gray-700">
              We believe a project is nothing without the team, just as the team
              is nothing without the Project.
            </p>
            <p className="text-lg text-gray-700">
              For further enquiries, you can reach us at:
            </p>
            <div className="flex items-center space-x-2 text-gray-700">
              <FaPhoneAlt className="text-xl text-blue-500" />
              <span>0903 444 4445</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <FaPhoneAlt className="text-xl text-blue-500" />
              <span>0903 444 4446</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <FaEnvelope className="text-xl text-blue-500" />
              <span>info@playcraftHQ.com</span>
            </div>
            <p className="text-lg text-gray-700 mt-4">
              “Take action towards your dreams and make today worth remembering”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
