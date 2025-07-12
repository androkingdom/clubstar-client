import { CreateClubPage } from "@/pages";
import { Route } from "./+types/createClub";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Create Club | Clubstar" },
    { name: "description", content: "Create Club | Clubstar" },
  ];
}

export default function CreateClub() {
  return <CreateClubPage />;
}
