import type { Route } from "./+types/about";
import { AboutPage } from "@/pages";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Clubstar" },
    { name: "description", content: "About Clubstar" },
  ];
}

export default function About() {
  return <AboutPage />;
}
