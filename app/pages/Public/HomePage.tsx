import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router";

export function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to Clubstar ✨
        </motion.h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Create, join, and grow your own club — from college groups to creator
          collectives.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            asChild
            variant="outline"
            className="rounded-none border-border w-full sm:w-auto"
          >
            <Link to="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {[
          {
            title: "🧩 Create & Customize",
            desc: "Start a club and make it your own with avatars, banners, and bios.",
          },
          {
            title: "📣 Post & Discuss",
            desc: "Post updates, run polls, and keep your members in the loop.",
          },
          {
            title: "🎉 Host Events",
            desc: "Create events, track RSVPs, and run in-person or virtual meetups.",
          },
        ].map((feat, idx) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx }}
            className="border border-border bg-background p-6 rounded-none"
          >
            <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
            <p className="text-sm text-muted-foreground">{feat.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Final CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Ready to start your club?</h2>
        <p className="text-muted-foreground">It takes less than a minute.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            asChild
            variant="outline"
            className="rounded-none border-border w-full sm:w-auto"
          >
            <Link to="/user/register">Get Started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-none border-border w-full sm:w-auto"
          >
            <Link to="/about">Know More</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
