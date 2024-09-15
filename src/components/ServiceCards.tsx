import { FaBullhorn, FaBrush, FaPenNib, FaChartBar } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaBullhorn className="text-4xl text-blue-500" />,
    title: "Marketing & PR",
    subtitle:
      "Collaborate with PLAYCRAFT to develop a tailor-made marketing solution for your marketing campaign and PR efforts.",
  },
  {
    id: 2,
    icon: <FaBrush className="text-4xl text-green-500" />,
    title: "Product Design",
    subtitle:
      "PLAYCRAFT houses a plethora of extremely talented product designers and high-end developers.",
  },
  {
    id: 3,
    icon: <FaPenNib className="text-4xl text-red-500" />,
    title: "Content Creation",
    subtitle:
      "If you’re a creator, we can help you leverage your new and existing catalogs for use in Games, TV Shows, Movies or Video games…etc. ",
  },
  {
    id: 4,
    icon: <FaChartBar className="text-4xl text-purple-500" />,
    title: "Events & Tour",
    subtitle:
      "We can create and manage a personalized brand activation and experiential marketing event from idea to activation",
  },
];

export default function ServiceCards() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {services.map((service) => (
        <div
          key={service.id}
          className="relative py-16 px-8 flex flex-col items-center justify-center rounded-lg border shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-primary"
        >
          <div className="text-center mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-center">
            {service.title}
          </h3>
          <div className="absolute text-sm font-medium rounded-lg inset-0 bg-black opacity-0 hover:opacity-90 cursor-default transition-opacity duration-300 flex items-center justify-center p-4 text-white text-center">
            {service.subtitle}
          </div>
        </div>
      ))}
    </div>
  );
}
