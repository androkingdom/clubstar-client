import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { getMe } from "@/api/auth/getMe";
import { setUser, clearUser } from "@/context/features/user/userSlice";

export function useUser() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.userData);
  const [isLoading, setIsLoading] = useState(!user);
  const [error, setError] = useState<string | null>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    // Guard: If user already in store OR already fetched, skip
    if (user || hasFetched.current) {
      setIsLoading(false);
      return;
    }

    hasFetched.current = true;
    setIsLoading(true);

    getMe()
      .then((res) => {
        if (res.success) {
          dispatch(setUser(res.data.user));
        } else {
          dispatch(clearUser());
          setError(res.message || "Unknown error");
        }
      })
      .catch((err) => {
        dispatch(clearUser());
        setError(err.message || "Fetch failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch, user]);

  return { user, isLoading, error };
}
