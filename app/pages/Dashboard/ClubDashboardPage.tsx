import { motion } from "framer-motion";
import { ClubCard } from "@/components/club/ClubCard";
import { useAppSelector } from "@/hooks/useStore";

export function ClubDashboardPage() {
  const clubs = useAppSelector((state) => state.club.clubs);

  return (
    <div className="p-4 space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs &&
          clubs.map((club) => (
            <motion.div
              key={club._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              layout
            >
              <ClubCard
                id={club._id}
                name={club.name}
                description={club.description}
                slug={club.slug}
                clubIconUrl={club.clubIconUrl}
                visibility={club.visibility === "public"}
                // onDelete={handleDelete}
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
}
