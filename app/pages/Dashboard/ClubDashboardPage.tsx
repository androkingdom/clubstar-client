import { useState } from "react";
import { motion } from "framer-motion";
import { ClubCard } from "@/components/club/ClubCard";

export function ClubDashboardPage() {
  const [search, setSearch] = useState("");

  const [clubs, setClubs] = useState([
    {
      id: "1",
      name: "Shinobi Alliance",
      description: "A secret society for elite coders who deploy like ninjas.",
      slug: "shinobi-alliance",
      imageUrl:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      isPublic: true,
    },
    {
      id: "2",
      name: "Digital Ronins",
      description: "Wanderers of the web—solo devs without masters.",
      slug: "digital-ronins",
      imageUrl:
        "https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&w=600",
      isPublic: false,
    },
    {
      id: "3",
      name: "Frontend Forgers",
      description: "Crafting pixels with precision and powerful UIs.",
      slug: "frontend-forgers",
      imageUrl:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
      isPublic: true,
    },
    {
      id: "4",
      name: "Mongo Monks",
      description: "Worshippers of flexible schemas and fast queries.",
      slug: "mongo-monks",
      imageUrl:
        "https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=600",
      isPublic: false,
    },
  ]);

  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setClubs((prev) => prev.filter((club) => club.id !== id));
  };

  return (
    <div className="p-4 space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.map((club) => (
          <motion.div
            key={club.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            layout
          >
            <ClubCard
              id={club.id}
              name={club.name}
              description={club.description}
              slug={club.slug}
              imageUrl={club.imageUrl}
              isPublic={club.isPublic}
              onDelete={handleDelete}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
