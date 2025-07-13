import { Outlet } from "react-router";
import { DashboardHeader } from "@/components/shared/DashboardHeader";
import { PublicFooter } from "@/components/shared/PublicFooter";
import { useClub } from "@/hooks/useClub";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function DashboardLayout() {

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
