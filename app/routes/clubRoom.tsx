import { Route } from "./+types/clubRoom";
import { ChatPage } from "@/pages";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Clubstar | ${params.slug.toUpperCase()}` },
    { name: "description", content: "ClubRoom | Clubstar" },
  ];
}

export default function ClubRoom() {
  return (
    <>
      <ChatPage />
    </>
  );
}
