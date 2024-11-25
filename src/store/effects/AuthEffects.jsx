import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";




import axios from "axios";
import SecureLS from "secure-ls";
import { loadingUsers } from "./UserEffects";
import { loginConfirmedAction, loginFailedAction } from "../actions/authActions";

var ls = new SecureLS({ encodingType: "aes" });

export function signUpEffect(postData){
    return (dispatch) => {
        console.log('hi');
        signUp(postData)
          .then((response) => {
            // saveTokenInLocalStorage(response.data);
            // runLogoutTimer(dispatch, response.data.expiresIn * 1000, history);
            console.log("reponse",response);
            dispatch(confirmedSignupAction(response.data));
            // history.push("/dashboard");
          })
          .catch((error) => {
            const errorMessage = formatError(error.response.data);
            dispatch(signupFailedAction(errorMessage));
          });
      };
}

export function loginEffect(postData,navigate) {
  
  return (dispatch) => {
    dispatch(loadingToggleAction(true));
    
    login(postData)
      .then((response) => {
        saveTokenInLocalStorage(response.data);
        
          let unix_timestamp = jwtDecode(response.data.accessToken).exp;
          let timer = unix_timestamp - jwtDecode(response.data.accessToken).iat ;
          console.log(timer)
          const stor = ls.get('user-details')
          console.log('ls',ls.get('user-details'))
        runLogoutTimer(
            dispatch,
             3 * 60 * 60 * 1000,
            navigate,
        );
        
        dispatch(loginConfirmedAction(response.data));
        // stor.user?.role === "admin"? navigate("/"): navigate("/")
        navigate("/");
        loadingUsers()
        //window.location.reload()
       
      })
      .catch((error) => {
        console.log(error.response.data.message);

        toast.error(
          error.response.data.message ?? "Login error !! Please try later"
        );
        // const errorMessage = formatError(error.response.data);
        // dispatch(loadingToggleAction(false));
        dispatch(loginFailedAction(error.response.data.message));
      });
  };
}

// export function forgotPassword(postData,navigate) {
//   return (dispatch) => {
    
//   }
// }