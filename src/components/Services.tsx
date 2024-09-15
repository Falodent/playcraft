import Image from "next/image";
import Icon from "@/assets/about.svg";
import ServiceCards from "./ServiceCards";

export default function Services() {
  return (
    <section id="services" className="py-12 px-8 md:py-16 md:px-32 bg-gray-200 text-white">
      <div className="w-full flex flex-col gap-12 items-center">
        <div className="flex flex-col gap-3 items-center">
          <Image src={Icon} alt="alt" width={48} height={48} />
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Our Services</h2>
          <p className="md:text-lg text-center text-primary">
            Where Digital Meets The Art.
          </p>
        </div>

        <ServiceCards />

        <a
          href="#contact"
          className="mt-2 p-4 px-8 text-sm font-medium bg-primary text-white rounded-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
