import { MetaArgs, useNavigate } from "react-router";
import { logoutUser } from "@/api/auth/logout";
import type { Route } from "./+types/logoutConfirm";
import { useAppDispatch } from "@/hooks/useStore";
import { useEffect, useRef } from "react";
import { clearUser } from "@/context/features/user/userSlice";
import { toast } from "sonner";

export function meta({}: MetaArgs) {
  return [
    { title: "Logout Confirm | Clubstar" },
    { name: "description", content: "Logout Confirm | Clubstar" },
  ];
}

export async function clientLoader({}: Route.ClientLoaderArgs) {
  try {
    const res = await logoutUser();
    return { success: res.success, message: res.message };
  } catch (error: { message: string } | any) {
    return { error: error.message, success: false };
  }
}

export default function LogoutConfirm({ loaderData }: Route.ComponentProps) {
  const { success, message, error } = loaderData;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const hasHandled = useRef(false);

  useEffect(() => {
    if (hasHandled.current) return;
    hasHandled.current = true;

    if (success) {
      dispatch(clearUser());
      toast.success(message || "You have been logged out.");
    } else {
      toast.error(error || "Logout failed.");
    }

    navigate("/user/login");
  }, [success, message, error, dispatch, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <p className="text-sm text-muted-foreground">Logging you out...</p>
    </div>
  );
}
