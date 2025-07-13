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
  } catch (error: any) {
    return { error: error.message || "Unexpected error", success: false };
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

    // ⏳ Give the toast time to show before redirecting
    const timeout = setTimeout(() => {
      navigate("/user/login");
    }, 1000);

    return () => clearTimeout(timeout);
  }, [success, message, error, dispatch, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-background text-foreground">
      <p className="text-muted-foreground text-sm text-center animate-pulse">
        Logging you out...
      </p>
    </div>
  );
}
