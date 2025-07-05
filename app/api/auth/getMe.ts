import { api, IResponse } from "../axios";

interface IData {
  user: {
    userId: string;
    username: string;
    email: string;
    role: string;
  };
}

export const getMe = async () => {
  try {
    const response: IResponse<IData> = await api.get("/auth/me");
    return response;
  } catch (error) {
    throw error;
  }
};
