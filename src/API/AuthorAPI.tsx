import axiosClient from "./AxiosClient";

class AuthorAPI {
  
    static async Register(data: any) {
        const url = '/auth/register';
        return axiosClient.post(url, data);
    }
}

export default AuthorAPI;