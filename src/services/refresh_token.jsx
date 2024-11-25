import SecureLS from "secure-ls";
import { AUTHAPI } from "./axios";
import { logout } from "../store/actions/authActions";






const ls = new SecureLS({ encodingType: "aes" });

export const refreshToken = async () => {

  


   let token = ls.get("user-details");
  // console.log("access_[token", token);
  const newToken = await AUTHAPI.get('/refresh_token')
    .then((resp) => {
      token.accessToken = resp.data.accessToken;
      
      try {
        ls.set("user-details", token)
        // saveTokenInLocalStorage(token)
      
        // window.location.reload();
      } catch (error) {
        
      }
      // window.location.reload();
      const tok = ls.get('user-details')
      console.log('test',tok);
      
      // saveTokenInLocalStorage(resp.data)
      
      // console.log("updated access_token", resp.data.accessToken);
      // console.log('old token',token);
      

      return resp.data.accessToken;
    })
    .catch((err) => {
      console.log('error is ',err);
      logout();
      
      // ls.set("redirect", window.location.pathname.replace("/react/demo", ""));
      // ls.remove("user-details");
      // window.location.pathname = '/login';
    });
  return newToken;
};
