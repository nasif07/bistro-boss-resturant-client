import axios from "axios";

export const asiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxios = () => {
    return asiosSecure;
};

export default useAxios;