import axios, { AxiosResponse } from "axios"

const apiClient = axios.create({
  baseURL: 'http://localhost:5002/api',
  timeout: 1000
});

interface loginData {
  email: string,
  password: string
};

interface registerData extends loginData {
  username: string;
}

export const login = async (data: loginData): Promise<AxiosResponse | any> => {
  try {
    return await apiClient.post('/auth/login', data);
  } catch (exception) {
    return {
      error: true,
      exception
    }
  }
}

export const register = async (data: registerData): Promise<AxiosResponse | any>=> {
  try {
    return await apiClient.post('/auth/register', data);
  } catch (exception) {
    return {
      error: true,
      exception
    }
  }
}