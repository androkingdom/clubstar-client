import { useIsAuth } from "@/hooks/useIsAuth";
import type { Route } from "./+types/dashboard";
import { ClubDashboardPage } from "@/pages";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard | Clubstar" },
    { name: "description", content: "Dashboard | Clubstar" },
  ];
}
export default function Dashboard() {
  const { isAuthenticated } = useIsAuth();

  if (!isAuthenticated) return null;

  return <ClubDashboardPage />;
}
