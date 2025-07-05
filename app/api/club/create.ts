import { api, IResponse } from "../axios";

interface IData {
  name: string;
  slug: string;
  description: string;
  owner: string;
  clubIconId: string;
  clubIconUrl: string;
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
