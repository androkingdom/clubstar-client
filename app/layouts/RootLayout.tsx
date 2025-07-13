import { Outlet, ScrollRestoration } from "react-router";
import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import { getSocket } from "@/socket";

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Toaster position="bottom-right" />
      <Outlet /> {/* This will be PublicLayout or DashboardLayout */}
      <ScrollRestoration />
    </div>
  );
}
