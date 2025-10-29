import { isAxiosError } from 'axios';
import { productsApi } from "../api/productsApi";
import { User } from "../interface/user";

export interface AuthResponse {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

const returnUserToken = (
  data: AuthResponse
): {
  user: User;
  token: string;
} => {
  // const { id, email, fullName, isActive, roles, token } = data;
  const { token, ...user } = data;

  // const user: User = {
  //   id,
  //   email,
  //   fullName,
  //   isActive,
  //   roles,
  // };

  return {
    user,
    token,
  };
};

const authLogin = async (email: string, password: string) => {
  email = email.toLowerCase();

  try {
    const { data } = await productsApi.post<AuthResponse>("/auth/login", {
      email,
      password,
    });

    return returnUserToken(data);
  } catch (error) {
    console.log(error);
    // throw new Error('User and/or password not valid');
    return null;
  }
};

const authCheckStatus = async () => {
  try {
    const { data } = await productsApi.get<AuthResponse>('/auth/check-status');

    return returnUserToken(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};


const authRegister = async (
  fullName: string,
  email: string,
  password: string
) => {
  email = email.toLowerCase();

  try {
    const { data } = await productsApi.post<AuthResponse>('/auth/register', {
      fullName,
      name: fullName,
      email,
      password,
    });

    return returnUserToken(data);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      const payload = error.response?.data as
        | { message?: unknown; error?: unknown; errors?: unknown }
        | string
        | undefined;

      const apiMessage =
        typeof payload === 'string'
          ? payload
          : payload?.message ?? payload?.error ?? payload?.errors;

      const message = Array.isArray(apiMessage)
        ? apiMessage.join('\n')
        : typeof apiMessage === 'string'
        ? apiMessage
        : 'No se pudo crear la cuenta, intenta nuevamente';

      throw new Error(message);
    }

    throw error instanceof Error
      ? error
      : new Error('No se pudo crear la cuenta, intenta nuevamente');
  }
};

export { authLogin, authCheckStatus, authRegister };