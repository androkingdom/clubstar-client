import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Club, Plus } from "lucide-react";
import { Link } from "react-router";
import { ModeToggle } from "../ui/mode-toggle";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo + Link */}
        <div className="flex items-center gap-2">
          <Club className="w-5 h-5 text-primary" />
          <Link
            to="/dashboard"
            className="text-xl font-semibold hover:opacity-80 transition"
          >
            Dashboard
          </Link>
        </div>

        {/* Right: Search + Create + Theme */}
        <div className="flex items-center gap-2">
          <Input
            type="search"
            placeholder="Search clubs..."
            className="hidden sm:block w-64"
          />
          <Button asChild size="sm" variant="secondary">
            <Link to="/club/create" className="flex items-center">
              <Plus className="w-4 h-4 mr-1" />
              Create Club
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
