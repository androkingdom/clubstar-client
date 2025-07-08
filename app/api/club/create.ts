import { api, IResponse } from "../axios";
import { IClub } from "@/types/club";

interface IData {
  club: IClub;
}

export const createClub = async (data: FormData) => {
  try {
    const response: IResponse<IData> = await api.post("/club/create", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
