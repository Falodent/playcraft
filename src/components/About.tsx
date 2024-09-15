import Image from "next/image";
import Icon from "@/assets/about.svg";
import Logo from "@/assets/logo-img.png";

export default function About() {
  return (
    <section id="about" className="py-12 px-8 md:py-16 md:px-32 bg-primary text-white">
      <div className="w-full flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-3 items-center">
          <Image src={Icon} alt="alt" width={48} height={48} />
          <h2 className="text-2xl md:text-3xl font-bold">About Us</h2>
          <p className="md:text-lg text-start md:w-[70%]">
            For us, it’s great content and exceptional delivery over profit
            every single time… oh wait, they mean the same thing but with the
            right marketing of course
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="hidden md:flex md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <Image
              src={Logo}
              alt="About Us"
              width={600}
              height={400}
              quality={100}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-2">
            <p className="">
              <span className="font-medium">PLAYCRAFT</span> is Nigeria’s premium digital agency that’s focused on
              providing exclusive digital solutions in the areas of marketing,
              tech, and content creation for individuals and businesses seeking
              to achieve specific goal-driven results. Since inception, the
              company has experienced a steady growth with clients ranging from
              Financial institutions, Media outfits, Artists, Record
              producers... etc.{" "}
            </p>
            <p className="">
              We offer great value by providing exceptional marketing strategies
              & SEO, highly responsive tech solutions for our clients to help
              them build long standing relationships with their clients and also
              ensuring that their valued product enjoys rich visibility among
              their target audience.{" "}
            </p>
            <p className="">
              Our affiliation with the film and music industry presents us with
              a unique and rare opportunity to create content, products, and PR
              events with raw access to premium actors & artistes, exclusive
              locations, and a technical crew that make for a revolutionary
              marketing movement.{" "}
            </p>
            <p className="">
            <span className="font-medium">PLAYCRAFT</span> displays a perfect combination of technology and market
              sense and our results speak for themselves. The company was formed
              out of the necessity to develop and implement high-end yet
              affordable digital solutions for individuals and businesses across
              the region using our systematic procedure of <span className="font-medium">endless creativity
              and skill</span>.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
