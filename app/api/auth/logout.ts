import { api, type IResponse } from "../axios";

export const logoutUser = async () => {
  try {
    const response: IResponse<{ data: {} }> = await api.post("/auth/logout");
    return response;
  } catch (error) {
    throw error;
  }
};
