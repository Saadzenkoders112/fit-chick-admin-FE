import { CustomAxiosErrorType } from '@/types/types/shared.types';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { POST } from '../axios-request-handler';
import { URL } from '../api-base-urls';

interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
  profileImageUrl: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  role: string;
  user: User;
}

export const UseAdminLogin = (): UseMutationResult<
  LoginResponse,
  CustomAxiosErrorType,
  LoginPayload
> => {
  const adminLogin = async (payload: LoginPayload): Promise<LoginResponse> => {
    const response = await POST(URL.ADMIN_LOGIN, payload);
    return response as LoginResponse;
  };
  return useMutation({
    mutationFn: adminLogin,
  });
};
