import { Outlet } from "react-router";
import { DashboardHeader } from "@/components/shared/DashboardHeader";
import { PublicFooter } from "@/components/shared/PublicFooter";
import { useClub } from "@/hooks/useClub";
import { useEffect, useState } from "react";
import { AppLoader } from "@/components/shared/AppLoader";
import { toast } from "sonner";

export default function DashboardLayout() {
  const { isLoading, error } = useClub();
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  useEffect(() => {
    const timeout = setTimeout(() => setShowApp(true), 1000); // UX-sweet spot
    return () => clearTimeout(timeout);
  }, []);

  if (!showApp || isLoading) return <AppLoader />;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <DashboardHeader />
      <main className="flex-1 px-4 py-6">
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  );
}
