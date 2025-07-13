import { api, IResponse } from "../axios";

interface LoginPayload {
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

export const loginUser = async (data: LoginPayload) => {
  try {
    const response: IResponse<IData> = await api.post("/auth/login", data);
    return response;
  } catch (error) {
    throw error;
  }
};
