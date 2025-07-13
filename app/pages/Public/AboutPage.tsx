import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-2">About Clubstar 🌟</h1>
        <p className="text-muted-foreground text-lg">
          Your digital clubhouse for passion, people, and purpose.
        </p>
      </motion.div>

      {/* Mission Section */}
      <section className="space-y-6 text-center">
        <motion.h2
          className="text-2xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Why We Exist
        </motion.h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Clubstar was born from the idea that communities deserve more than just chat apps or random groups. Whether you're into anime, dev meetups, chess, or building the next AI startup—this is your hub.
        </p>
      </section>

      {/* Unique Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {[
          {
            title: "🧩 Modular Clubs",
            desc: "Create unique clubs with discussions, roles, bios, and themes.",
          },
          {
            title: "🗣️ True Conversations",
            desc: "Threaded posts, events, and real discussion—beyond DMs.",
          },
          {
            title: "🛠 Built by a Solo Dev",
            desc: "Indie-built by a backend warrior who believes in meaningful communities (yes, that’s Andro 👨‍💻).",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.2 }}
            className="bg-background border border-border p-6 rounded-none"
          >
            <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Vision */}
      <section className="text-center space-y-4">
        <motion.h2
          className="text-2xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Where We're Going
        </motion.h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          We're building tools for real collaboration—AI-powered mods, project boards, event planning, and more. Clubstar isn’t just about groups. It’s about building your people.
        </p>
      </section>

      {/* CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="mb-4 text-muted-foreground">
          Want to be part of this journey?
        </p>
        <Button
          asChild
          variant="outline"
          className="rounded-none border-border"
        >
          <Link to="/clubs">Explore Clubs</Link>
        </Button>
      </motion.div>
    </div>
  );
}
