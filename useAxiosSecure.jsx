import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:9000",
  baseURL: "https://last-dance-server.vercel.app/"

});

const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(function (config) {
    // console.log("interceptor")
    const token = localStorage.getItem("accessToken")
    config.headers.authorization = `Bearer ${token}`
  // console.log("hit the intercepto",token)
    
    return config;
  }, function (error) {
   
    console.log(error)
    return Promise.reject(error);
  });
  return axiosSecure;
};
export default useAxiosSecure;
