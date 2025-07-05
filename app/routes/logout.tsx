import type { Route } from "./+types/logout";
import { LogoutPage } from "@/pages/";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Logout | Clubstar" },
    { name: "description", content: "Logout | Clubstar" },
  ];
}

export default function Logout() {
  return <LogoutPage />;
}
