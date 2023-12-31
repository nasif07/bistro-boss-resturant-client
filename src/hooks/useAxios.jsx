import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxios = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('req stopped by inter septor');
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        const status = error.response.status;
        if (status == 401 || status === 403) {
            await logOut();
            navigate('/login')
        }
        return Promise.all.reject(error);
    })
    return axiosSecure;
};

export default useAxios;