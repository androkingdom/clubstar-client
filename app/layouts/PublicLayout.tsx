import { Outlet } from "react-router";
import { PublicHeader } from "@/components/shared/PublicHeader";
import { PublicFooter } from "@/components/shared/PublicFooter";
export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <PublicHeader />
      <main className="flex-1">
        <Outlet /> {/* This will be HomePage / AboutPage / RegisterPage */}
      </main>
      <PublicFooter />
    </div>
  );
}
