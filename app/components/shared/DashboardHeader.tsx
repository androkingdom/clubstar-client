import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Club, Plus } from "lucide-react";
import { Link } from "react-router";
import { ModeToggle } from "../ui/mode-toggle";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="h-16 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8">
        
        {/* Left: Logo + Home link */}
        <div className="flex items-center gap-2">
          <Club className="w-5 h-5 text-primary" />
          <Link
            to="/dashboard"
            className="text-xl font-semibold hover:opacity-80 transition"
          >
            Dashboard
          </Link>
        </div>

        {/* Right: Search + CTA + Theme */}
        <div className="flex items-center gap-2">
          {/* Search: hidden on mobile, visible from sm+ */}
          <Input
            type="search"
            placeholder="Search clubs..."
            className="hidden sm:block w-48 md:w-64 rounded-none border-border"
          />

          {/* Create Club Button */}
          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-none border-border"
          >
            <Link to="/club/create" className="flex items-center">
              <Plus className="w-4 h-4 mr-1" />
              Create Club
            </Link>
          </Button>

          {/* Theme Toggle */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
