import { FaLightbulb } from "react-icons/fa"; // Example icon for educational resources

export default function Resources() {
  return (
    <section id="resources" className="py-12 px-8 md:py-16 md:px-32 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-3 text-center mb-3 md:mb-6">
          <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-lg">
            <FaLightbulb className="text-[28px] text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Resources</h2>
          <p className="md:text-lg text-start md:text-center text-primary md:w-[70%]">
            We’re collaborating with some of the finest in the field all over
            the world to curate premium and easily accessible courses in the
            creative industry that cuts across key areas of the creator’s
            journey.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-center gap-3 text-center">
          <p className="md:text-lg text-start md:text-center text-primary md:w-[70%]">
            Our mission is to provide guidance and clarity for new creators
            through their artistic journey and also to provide advanced
            education for industry professionals seeking to take their craft to
            the next level or those seeking to explore other areas within the
            Creative industry.
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-red-500 md:mb-4">
            COMING REAL SOON!!!
          </h3>
          <p className="md:text-lg text-gray-700">
            We’re really excited about this one.
          </p>
        </div>
      </div>
    </section>
  );
}
