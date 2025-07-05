import type { Route } from "./+types/register";
import { RegisterPage } from "@/pages";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register | Clubstar" },
    { name: "description", content: "Register | Clubstar" },
  ];
}

export default function Register() {
  return <RegisterPage />;
}
