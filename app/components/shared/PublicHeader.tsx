import { Link } from "react-router";
import { Club, LogIn, LogOut, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ui/mode-toggle";
import { useAppSelector } from "@/hooks/useStore";

export function PublicHeader() {
  const isLoggedIn = useAppSelector((state) => state.user.isAuthenticated);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Club className="w-5 h-5 text-primary" />
          <Link
            to="/"
            className="text-xl font-semibold hover:opacity-80 transition"
          >
            Clubstar
          </Link>
        </div>

        {/* Right: Auth + Theme */}
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <Link to="/user/logout">
              <Button size="sm" variant="ghost" className="cursor-pointer">
                <LogOut className="w-4 h-4 mr-1" /> Logout
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/user/login">
                <Button size="sm" variant="ghost" className="cursor-pointer">
                  <LogIn className="w-4 h-4 mr-1" /> Login
                </Button>
              </Link>
              <Link to="/user/register">
                <Button size="sm" variant="ghost" className="cursor-pointer">
                  <UserPlus className="w-4 h-4 mr-1" /> Register
                </Button>
              </Link>
            </>
          )}

          {/* Theme Toggle */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
