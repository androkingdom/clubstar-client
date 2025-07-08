import { api, IResponse } from "../axios";
import { IClub } from "@/types/club";

interface IMyClub {
  club: IClub;
}

interface IData {
  myClubs: IMyClub[];
}

export const getMyClubs = async () => {
  try {
    const response: IResponse<IData> = await api.post("/club/me");
    return response;
  } catch (error) {
    throw error;
  }
};
