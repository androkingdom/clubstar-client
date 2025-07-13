import { Outlet, ScrollRestoration } from "react-router";
import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import { useUser } from "@/hooks/useUser";
import { AppLoader } from "@/components/shared/AppLoader";
import { getSocket } from "@/socket";

export function RootLayout() {
  const { isLoading } = useUser(); // no error handling for now
  const [showApp, setShowApp] = useState(false);

  // Init socket connection once
  useEffect(() => {
    getSocket();
  }, []);

  // Minimum delay to show splash/loader (nice UX)
  useEffect(() => {
    const timeout = setTimeout(() => setShowApp(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Show loading spinner/splash if user still loading
  if (!showApp || isLoading) return <AppLoader />;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Toaster position="bottom-right" />
      <main className="flex-1 w-full px-4 sm:px-6 md:px-8 py-6">
        <Outlet /> {/* This will be PublicLayout or DashboardLayout */}
        <ScrollRestoration />
      </main>
    </div>
  );
}
