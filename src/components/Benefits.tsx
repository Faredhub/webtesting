import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Expert Research Guidance",
    description: "Get mentored by experienced researchers and academics",
  },
  {
    title: "Project Support",
    description: "Comprehensive assistance throughout your research journey",
  },
  {
    title: "Resource Access",
    description: "Access to research papers, tools, and methodologies",
  },
  {
    title: "Career Development",
    description: "Build your academic and research portfolio",
  },
];

const Benefits = () => {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose GUDSKY?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We provide comprehensive research support with practical guidance
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#000080]/10 text-[#000080]">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-base text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;