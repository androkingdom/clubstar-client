import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "./useStore";
import { toast } from "sonner";

export const useIsAuth = (redirectTo = "/user/login") => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  const hasRedirected = useRef(false);

  useEffect(() => {
    if (!isAuthenticated && !hasRedirected.current) {
      hasRedirected.current = true;
      navigate(redirectTo);
      toast.error("You must be logged in to access this page.");
    }
  }, [isAuthenticated, navigate, redirectTo]);

  return { isAuthenticated };
};
