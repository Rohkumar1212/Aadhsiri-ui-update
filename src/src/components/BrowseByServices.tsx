import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="bg-white py-8 md:py-12 px-4">
      {/* Heading */}
      <h2 className="text-lg text-[38px] md:text-[42px] font-semibold mb-8 text-center text-[#C2185B]">
        Browse by Services
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
        {/* Left stacked */}
        <div className="flex flex-col gap-4">
          <ServiceCard
            title="Pre-School"
            className="w-[146.47px] h-[141.34px]"
          />
          <ServiceCard title="Catalog" className="w-[146.47px] h-[141.34px]" />
        </div>

        {/* Middle three */}
        <ServiceCard title="School Books" tall />
        <ServiceCard title="Teacher Training" />
        <ServiceCard title="Customize" tall />

        {/* Right stacked */}
        <div className="flex flex-col gap-4">
          <ServiceCard title="School Printables" tall />
          <ServiceCard title="Explore More" />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  tall = false,
  className = "",
}: {
  title: string;
  tall?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`bg-[#FFB74D] relative rounded-2xl shadow-md text-sm md:text-base font-medium cursor-pointer hover:bg-[#FFA726] transition flex items-center justify-center text-center
        ${tall ? "h-48 md:h-56 w-32 md:w-40" : "h-32 md:h-40 w-32 md:w-40"} ${className}`}
    >
      {/* Text */}
      <span>{title}</span>

      {/* Arrow top-right */}
      <ArrowUpRight className="absolute top-3 right-3 w-5 h-5 text-black" />
    </div>
  );
}
