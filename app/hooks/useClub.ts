import { getMyClubs } from "@/api/club/getMyClubs";
import { useAppDispatch, useAppSelector } from "./useStore";
import { setClubs } from "@/context/features/club/clubSlice";
import { useEffect, useRef, useState } from "react";
import { IClub } from "@/types/club";

export function useClub() {
  const clubs = useAppSelector((state) => state.club.clubs);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(!clubs);
  const [error, setError] = useState<string | null>(null);
  const clubFetched = useRef(false);

  useEffect(() => {
    if (clubs || clubFetched.current) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    getMyClubs()
      .then((res) => {
        console.log("res", res);
        if (res.success) {
          const clubs: IClub[] = res.data.myClubs.map((item) => item.club);
          dispatch(setClubs(clubs)); // cleaner state, safer types
        } else {
          dispatch(setClubs([]));
          setError(res.message || "Unknown error");
        }
      })
      .catch((err) => {
        dispatch(setClubs([]));
        setError(err.message || "Fetch failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [clubs, dispatch]);

  return { clubs, isLoading, error };
}
