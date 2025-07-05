import { Outlet, ScrollRestoration } from "react-router";
import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import { useUser } from "@/hooks/useUser";
import { toast } from "sonner";
import { AppLoader } from "@/components/shared/AppLoader";

export function RootLayout() {
  const { isLoading, error } = useUser();
  const [showApp, setShowApp] = useState(false);
  useEffect(() => {
    // if (error) toast.error(error);
  }, [error]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowApp(true);
    }, 1500); // 🔐 force minimum load time

    return () => clearTimeout(timeout);
  }, []);

  if (!showApp || isLoading) return <AppLoader />;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Toaster position="bottom-right" />

      <main className="flex-1 min-h-0 w-full px-4 py-4">
        <Outlet />
        <ScrollRestoration />
      </main>
    </div>
  );
}
