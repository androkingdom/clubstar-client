import type { Route } from "./+types/home";
import { HomePage } from "@/pages";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Clubstar | Home" },
    { name: "description", content: "Clubstar is a platform for clubs" },
  ];
}

export default function Home({ }: Route.ComponentProps) {
  return (
    <>
      <HomePage />
    </>
  );
}
