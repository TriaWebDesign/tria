import { FaCode, FaPalette, FaPaintBrush, FaBullhorn } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "Building and maintaining websites and web applications to meet your business needs.",
    icon: <FaCode size={60} color="white" />,
  },
  {
    title: "Web Design",
    description:
      "Creating visually appealing and user-friendly interfaces for websites and web applications.",
    icon: <FaPalette size={60} color="white" />,
  },
  {
    title: "Graphic Design",
    description:
      "Crafting eye-catching visual elements, such as logos and illustrations, for various purposes.",
    icon: <FaPaintBrush size={60} color="white" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Promoting products or services through online channels to reach and engage with a target audience.",
    icon: <FaBullhorn size={60} color="white" />,
  },
];

export default function Services() {
  return (
    <main
      className="bg-black py-[10rem] flex flex-col gap-10 items-center justify-center"
      style={{
        background:
          "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(9,56,121,0.9023984593837535) 24%, rgba(0,0,0,1) 48%)",
      }}
    >
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl">
          Services That Lead The Way To Better Business
        </h1>
        <p className="text-zinc-300 max-w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit
          consequuntur deserunt, velit eos recusandae voluptatem explicabo?
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {services.map((service, i) => (
          <div
            key={i}
            className="backdrop-blur-sm transition-colors hover:bg-white/10 bg-black/30 rounded-xl flex flex-col justify-center items-center text-center p-4 max-w-[30rem]"
          >
            {service.icon}
            <h3 className="text-sky-500">{service.title}</h3>
            <p className="text-slate-400">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
