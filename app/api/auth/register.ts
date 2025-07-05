import { api, IResponse } from "@/api/axios";

interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

interface IData {
  user: {
    userId: string;
    username: string;
    email: string;
    role: string;
  };
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export const registerUser = async (data: RegisterPayload) => {
  try {
    const response: IResponse<IData> = await api.post("/auth/register", data);
    return response;
  } catch (error) {
    throw error;
  }
};
