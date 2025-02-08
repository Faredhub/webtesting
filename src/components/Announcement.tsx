import { Megaphone } from "lucide-react";

const announcements = [
  "🎓 New AI Masterclass is on hike!",
  "💡 Special discount for early birds - 100% off",
  "🌟 Join our community of 350+ learners",
];

const Announcement = () => {
  return (
    <div className="bg-secondary py-2 ">
      <div className="flex items-center justify-center gap-2">
        <Megaphone className="h-5 w-5 text-primary" />
        <div className="overflow-hidden whitespace-nowrap">
          <div className="announcement-scroll inline-block">
            {announcements.map((announcement, index) => (
              <span key={index} className="mx-4 text-sm font-medium">
                {announcement}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;