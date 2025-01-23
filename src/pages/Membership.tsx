import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Membership = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "per month",
      features: [
        "Access to basic courses",
        "Community forum access",
        "Monthly webinars",
        "Email support"
      ]
    },
    {
      name: "Pro",
      price: "$49",
      period: "per month",
      features: [
        "Access to all courses",
        "Priority community support",
        "Weekly live sessions",
        "1-on-1 mentoring",
        "Career guidance"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Membership Plans</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Get Started</Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Membership;