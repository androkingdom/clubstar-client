import { useIsAuth } from "@/hooks/useIsAuth";
import type { Route } from "./+types/dashboard";
import { ClubDashboardPage } from "@/pages";
import { getMyClubs } from "@/api/club/getMyClubs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard | Clubstar" },
    { name: "description", content: "Dashboard | Clubstar" },
  ];
}

export default function Dashboard({ loaderData }: Route.ComponentProps) {
  const { isAuthenticated } = useIsAuth();

  if (!isAuthenticated) return null;

  return <ClubDashboardPage />;
}
