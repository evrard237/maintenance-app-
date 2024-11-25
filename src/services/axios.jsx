import axios from "axios";
import SecureLS from "secure-ls";
// import { URLS } from "./urls/urls";
import { refreshToken } from "./refresh_token";
import { URLS } from "./urls/url";
import { useSelector } from "react-redux";


// const auth = useSelector(
//   (state) => state.auth
// );

var ls = new SecureLS({ encodingType: "aes" });

const user = ls.get("user-details");



const globalF =()=>{

  const auth = useSelector(
    (state) => state.auth
  );
  console.log('test auth',auth?.auth.accessToken);
  
  return auth.auth.accessToken
}



const API = axios.create({
  baseURL: "http://localhost:5000",
  // timeout: 100000,
  headers: { Authorization: `Bearer ${ls.get('user-details').accessToken}` },
});

const AUTHAPI = axios.create({
  baseURL: "http://localhost:5000",
  headers: { Authorization: `Bearer ${ls.get('user-details').accessToken}`},
  withCredentials: true,
  

  
 
  
});

API.interceptors.request.use(
  // intercept the API request instance created above
  async (config) => {
    // const session = token;
    const token = ls.get('user-details').accessToken;
    

    if (token) {
      //checks if there is token
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${ls.get('user-details').accessToken}`, //if yes store the token in header
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);
// Response interceptor for API calls
API.interceptors.response.use(
  
  (response) => {
   
    return response;
  },
  async function (error) {
    const originalRequest = error.config; //store error.config in originalRequest
    if (
      error.response.status === 403 ||
      (error.response.status === 401 || error.response.status === 500 && !originalRequest._retry) // check reponse status if it has expired
    ) {
      originalRequest._retry = true; // update originalRequest._retry to true
      const token = ls.get("user-details");
      const accessToken = await refreshToken();
       axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
      
      originalRequest.headers = {
        ...originalRequest.headers,
        Authorization: `Bearer ${accessToken}`,
      };
     
      return axios(originalRequest);
    }
    console.log("reponse");
    return Promise.reject(error);
  }
);

export { API, AUTHAPI,globalF };
