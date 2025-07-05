import { LoginPage } from "@/pages/";
import { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login | Clubstar" },
    { name: "description", content: "Login | Clubstar" },
  ];
}

export default function Login() {
  return <LoginPage />;
}
