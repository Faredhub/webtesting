import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from 'react';

const Membership = () => {
  const plans = [
    {
      name: "Basic",
      price: "₨ 00",
      period: "per month",
      features: [
        "Access to basic courses",
        "Community forum access",
        "Monthly webinars",
        "Email support"
      ],
    },
    {
      name: "Pro",
      price: "₨ 00",
      period: "per month",
      features: [
        "Access to all courses",
        "Priority community support",
        "Weekly live sessions",
        "1-on-1 mentoring",
        "Career guidance"
      ],
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">Membership Plans</h1>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Choose a plan that fits your needs and gain access to a wide range of resources and support to boost your learning and career development.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"> {/* Added bottom margin here */}
            {plans.map((plan, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border border-gray-200 rounded-lg">
                <h3 className="text-2xl font-bold mb-2 text-center">{plan.name}</h3>
                <div className="mb-4 text-center">
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
                <Button className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-primary-dark transition duration-300">Get Started</Button>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center mb-16"> {/* Added bottom margin here */}
            <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 mb-6">
              We offer a unique blend of practical learning experiences and support from industry experts. Here's why our membership plans stand out:
            </p>
            <ul className="list-disc list-inside text-left text-gray-600 mx-auto max-w-2xl space-y-3">
              <li><strong>Comprehensive Courses</strong>: Gain access to a variety of courses designed to build your skills and knowledge.</li>
              <li><strong>Expert Mentoring</strong>: Benefit from 1-on-1 mentoring sessions with industry professionals.</li>
              <li><strong>Community Support</strong>: Join a supportive community of learners and experts to collaborate and grow together.</li>
              <li><strong>Career Guidance</strong>: Receive personalized career advice to help you achieve your professional goals.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Membership;
