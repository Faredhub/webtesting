import React from 'react';

const Box: React.FC = () => {
  const studentBenefits = [
    {
      title: "Free Mentorship and Guidance",
      description: "Access to one-on-one mentorship from experienced professionals, researchers, and professors in AI, ML, robotics, and related fields."
    },
    {
      title: "Skill Development",
      description: "Participate in workshops, technical sessions, and research-based projects to improve your technical and problem-solving skills."
    },
    {
      title: "Portfolio Building",
      description: "Build a strong portfolio with projects, research papers, and conference presentations, improving your career prospects."
    },
    {
      title: "Recognition",
      description: "Gain opportunities to publish research papers in conferences and journals, providing visibility and credibility for your work."
    },
    {
      title: "Community and Networking",
      description: "Connect with a diverse community of students, mentors, and researchers, creating valuable professional connections."
    },
    {
      title: "Practical Experience",
      description: "Work on real-world projects, such as website development or AI solutions, to gain hands-on experience and recognition."
    },
    {
      title: "Opportunities for Leadership",
      description: "Take on roles like Chairman, Vice-Chairman, Program Organizer, etc., within your college’s Gudsky core team, enhancing your leadership and organizational skills."
    },
    {
      title: "Job and Internship Opportunities",
      description: "Build a network and gain experience that can lead to better job placements or internships in leading companies and research labs."
    },
    {
      title: "Free Access to Gudsky VRC",
      description: "Membership in the Virtual Research Center offers opportunities to collaborate, learn, and grow for one year without any charges."
    },
    {
      title: "Empowered Learning Environment",
      description: "Participate in an inclusive 'Learn and Teach' culture where knowledge sharing is encouraged."
    }
  ];

  const mentorBenefits = [
    {
      title: "Impactful Contribution",
      description: "Make a significant impact on the next generation by mentoring students and guiding them in their academic and research journeys."
    },
    {
      title: "Recognition and Networking",
      description: "Collaborate with like-minded professionals, connect with academia, and gain visibility in the research community."
    },
    {
      title: "Leadership Development",
      description: "Strengthen your leadership skills by guiding student teams and managing workshops or technical sessions."
    },
    {
      title: "Broaden Research Horizon",
      description: "Work with young and creative minds to explore new ideas and innovative projects in emerging fields like AI, ML, robotics, and more."
    },
    {
      title: "Platform for Sharing Expertise",
      description: "Share your expertise through workshops, keynote addresses, and project collaborations, increasing your professional standing."
    },
    {
      title: "Enhanced Professional Reputation",
      description: "Get acknowledged as a mentor for Gudsky Research Foundation, boosting your CV and professional profile."
    },
    {
      title: "Collaboration on Research",
      description: "Collaborate with students on impactful research projects and co-author research papers or patents."
    },
    {
      title: "Access to Resources",
      description: "Utilize Gudsky's platform, events, and research initiatives to stay updated and engaged in cutting-edge advancements."
    },
    {
      title: "Flexibility",
      description: "Mentor roles are flexible, allowing you to balance your professional and personal commitments while contributing to the community."
    },
    {
      title: "Fulfillment",
      description: "Experience the joy of empowering students, shaping their future, and contributing to Gudsky's vision of fostering free R&D for every student."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-12">
      {/* Header */}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">
        Benefits
      </h2>

      {/* Boxes */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Box 1 */}
        <div className="bg-blue-600 p-6 rounded-lg shadow-xl text-white">
          <h2 className="text-2xl font-bold mb-4">Benefits For Students</h2>
          <ul className="space-y-4">
            {studentBenefits.map((benefit, index) => (
              <li key={index}>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-lg leading-relaxed">{benefit.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Box 2 */}
        <div className="bg-blue-500 p-6 rounded-lg shadow-xl text-white">
          <h2 className="text-2xl font-bold mb-4">Benefits For Mentors</h2>
          <ul className="space-y-4">
            {mentorBenefits.map((benefit, index) => (
              <li key={index}>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-lg leading-relaxed">{benefit.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Box;
