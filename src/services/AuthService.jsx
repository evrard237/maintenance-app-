import axios from "axios";
import swal from "sweetalert";

import { API, AUTHAPI } from "./axios";
// import { URLS } from "./urls/urls";
import SecureLS from "secure-ls";

import {jwtDecode} from 'jwt-decode';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { loginConfirmedAction, loginFailedAction } from "../store/actions/authActions";
// Secure ls
var ls = new SecureLS({ encodingType: "aes" });

const dispatch = useDispatch()

export function signUp(postData) {
  //axios call
  
  return AUTHAPI.post(
    `/auth/signup`,
    {...postData,confirmPassword: undefined}
  );
}

export function login(postData) {
  
  return API.post(`/auth/login`, postData,{withCredentials: true});
}

export async function forgotPass(postData,navigate){
  await API.post('/auth/forgotpass', postData);
  
  
  navigate('/');
}

export async function forgotPassword(postData){

  const response = await API.post('/auth/forgotpassword', postData);
  console.log(response.data.message);
};

export   function resetPassword(postData,navigate){
  
  return(dispatch) =>{
     API.patch('/auth/resetpassword', postData).then(response =>{
    saveTokenInLocalStorage(response.data);
        
          let unix_timestamp = jwtDecode(response.data.accessToken).exp;
          let timer = unix_timestamp - jwtDecode(response.data.accessToken).iat ;
          console.log(timer)
        // runLogoutTimer(
        //     timer * 1000,
        //     navigate,
        // );
        
        dispatch(loginConfirmedAction(response.data));
        navigate("/");
        window.location.reload()
  }).catch((error) => {
    console.log(error);

    // toast.error(
    //   error.response.data.message ?? "Login error !! Please try later"
    // );
    const errorMessage = formatError(error.response.data);
    // dispatch(loadingToggleAction(false));
    dispatch(loginFailedAction(errorMessage));
  });
  }
};

export function updatePassword(payload,navigate) {

  return() =>{
    API.patch('/auth/updatepassword',payload).then(response =>{
      toast.success(response.data.message);
      console.log("mes",response.data.message)
    }).catch(error =>{
      console.log(error);
      
    })
  }
}

export function formatError(errorResponse) {
  switch (errorResponse.message) {
    case "EMAIL_EXISTS":
      //return "Email already exists";
      swal("Oops", "Email already exists", "error");
      break;
    case "EMAIL_NOT_FOUND":
      //return "Email not found";
      swal("Oops", "Email not found", "error", { button: "Try Again!" });
      break;
    case "Incorrect email or password":
      //return "Invalid Password";
      swal("Oops", "Invalid Password", "error", { button: "Try Again!" });
      break;
    case "USER_DISABLED":
      return "User Disabled";

    default:
      return "";
  }
}

export function saveTokenInLocalStorage(tokenDetails) {

  
  let unix_timestamp = jwtDecode(tokenDetails.accessToken).exp;
  let expireDate = new Date((unix_timestamp) * 1000);
  
  // const auth = useSelector(
  //   (state) => state.auth
  // );
  
  
  ls.set("user-details", tokenDetails);
  // window.location.reload()

  
  
  // const userDetails = ls.get("user-details")
  // console.log("tokenDetails ====>",userDetails);
}

export function runLogoutTimer(dispatch, timer, navigate) {
  console.log("timer",timer);
  setTimeout(() => {
    logout(navigate);
  }, timer);
}

export function checkAutoLogin(dispatch, history) {
  const tokenDetailsString = ls.get("user-details");
  console.log("check auto login", tokenDetailsString);
  let tokenDetails = "";
  if (!tokenDetailsString) {
    dispatch(logout(history));
    return;
  }

  tokenDetails = tokenDetailsString;
  dispatch(loginConfirmedAction(tokenDetails));
}
