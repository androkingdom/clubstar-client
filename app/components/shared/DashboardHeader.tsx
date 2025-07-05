import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Club, Plus } from "lucide-react";
import { Link } from "react-router";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { CreateClubModal } from "../club/CreateClubModal";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo + Link */}
        <div className="flex items-center gap-2">
          <Club className="w-5 h-5 text-primary" />
          <Link
            to="/"
            className="text-xl font-semibold hover:opacity-80 transition"
          >
            Clubstar
          </Link>
        </div>

        {/* Right: Search + Create + Theme */}
        <div className="flex items-center gap-2">
          <Input
            type="search"
            placeholder="Search clubs..."
            className="hidden sm:block w-64"
          />
          <CreateClubModal />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
