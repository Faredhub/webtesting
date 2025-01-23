import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "PhD Student",
    content:
      "GUDSKY's research guidance transformed my academic journey. The mentorship and resources were invaluable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Graduate Researcher",
    content:
      "Excellent support system and research tools. I accomplished more in months than I did in years of self-guided research.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Undergraduate Student",
    content:
      "The community support and expert guidance made my research project much more manageable and successful.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What Our Students Say
        </h2>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
            >
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-4 text-lg font-medium leading-6 text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
                <p className="mt-4 text-gray-600">{review.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;