import axiosClient from "./AxiosClient";

class AuthorAPI {
  
    static async Register(data: any) {
        const url = '/auth/register';
        return axiosClient.post(url, data);
    }

    static async Login(data: any) {
        const url = '/auth/login';
        return axiosClient.post(url, data);
    }

    static async Verify(data: any) {
        const url = '/auth/verify';
        return axiosClient.post(url, data);
    }

    static async ForgotPassword(data: any) {
        const url = '/auth/forgot-password';
        return axiosClient.post(url, data);
    }

    static async ResetPassword(data: any) {
        const url = '/auth/reset-password';
        return axiosClient.post(url, data);
    }
}

export default AuthorAPI;